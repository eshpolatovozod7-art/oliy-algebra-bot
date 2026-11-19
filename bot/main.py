import os
import sys
import asyncio
import logging
from pathlib import Path

# Loyiha asosiy katalogini PYTHONPATH ga qo'shish
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

import aiohttp
from aiohttp import web
from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.types import BotCommand

from bot.config import BOT_TOKEN, WEBAPP_URL
from bot.handlers import start, webapp_data

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    stream=sys.stdout
)
logger = logging.getLogger(__name__)

async def start_health_server(port: int) -> web.AppRunner:
    """Lokal va bulut platformalari uchun veb-server va health check."""
    app = web.Application()
    webapp_dir = BASE_DIR / "webapp"

    async def handle_ping(request: web.Request) -> web.Response:
        return web.json_response({
            "status": "Healthy",
            "app": "Oliy Algebra Solver",
            "bot": "Misol_ishladim_bot",
            "offline_ready": True
        })

    async def handle_webapp_index(request: web.Request) -> web.StreamResponse:
        index_file = webapp_dir / "index.html"
        if index_file.exists():
            return web.FileResponse(index_file)
        return web.Response(text="Oliy Algebra WebApp fayli topilmadi.", status=404)

    app.router.add_get("/", handle_webapp_index)
    app.router.add_get("/webapp", handle_webapp_index)
    app.router.add_get("/webapp/", handle_webapp_index)
    app.router.add_get("/health", handle_ping)

    # WebApp statik fayllari: /css, /js, /vendor, /amaliy_previews va /webapp/
    if (webapp_dir / "css").exists():
        app.router.add_static("/css", webapp_dir / "css")
    if (webapp_dir / "js").exists():
        app.router.add_static("/js", webapp_dir / "js")
    if (webapp_dir / "vendor").exists():
        app.router.add_static("/vendor", webapp_dir / "vendor")
    if (webapp_dir / "amaliy_previews").exists():
        app.router.add_static("/amaliy_previews", webapp_dir / "amaliy_previews")
    if (webapp_dir / "amaliy_docs").exists():
        app.router.add_static("/amaliy_docs", webapp_dir / "amaliy_docs")
    if webapp_dir.exists():
        app.router.add_static("/webapp", webapp_dir)

    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, "0.0.0.0", port)
    await site.start()
    logger.info("Veb-server ishga tushdi: http://localhost:%d va http://0.0.0.0:%d", port, port)
    return runner

async def start_keep_alive(app_url: str) -> None:
    """Render bepul tarifida botni avtomatik uyg'oq tutish (Self Keep-Alive)."""
    url = app_url.rstrip("/") + "/health"
    logger.info("Self keep-alive ishga tushirildi: %s", url)
    await asyncio.sleep(60)
    while True:
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(url, timeout=aiohttp.ClientTimeout(total=10)) as resp:
                    logger.debug("Keep-alive ping yuborildi, status: %s", resp.status)
        except Exception as e:
            logger.debug("Keep-alive ping xatosi (muhim emas): %s", e)
        await asyncio.sleep(720)  # Har 12 daqiqada ping qilish

async def set_bot_commands(bot: Bot):
    commands = [
        BotCommand(command="start", description="Botni ishga tushirish"),
        BotCommand(command="topics", description="16 ta mavzu ro'yxati"),
        BotCommand(command="help", description="Foydalanish qo'llanmasi"),
        BotCommand(command="about", description="Bot haqida ma'lumot"),
    ]
    await bot.set_my_commands(commands)

async def main():
    logger.info("Bot ishga tushirilmoqda...")

    bot = Bot(
        token=BOT_TOKEN,
        default=DefaultBotProperties(parse_mode=ParseMode.HTML)
    )
    dp = Dispatcher()

    # Routerlarni ulash
    dp.include_router(start.router)
    dp.include_router(webapp_data.router)

    # Buyruqlar menyusini o'rnatish
    try:
        await set_bot_commands(bot)
    except Exception as e:
        logger.warning("Bot buyruqlarini o'rnatishda tarmoq xatosi (muhim emas): %s", e)

    # Render Web Service yoki lokal port uchun veb-server
    web_runner = None
    keep_alive_task = None
    port_env = os.getenv("PORT", "8765")
    if port_env and port_env.isdigit():
        try:
            web_runner = await start_health_server(int(port_env))
        except Exception as e:
            logger.warning("Veb-serverni ishga tushirishda xatolik: %s", e)

    render_url = os.getenv("RENDER_EXTERNAL_URL")
    if render_url:
        keep_alive_task = asyncio.create_task(start_keep_alive(render_url))

    # Eski kutilayotgan xabarlarni tozalash (xatolik bo'lsa ham davom etish)
    try:
        await bot.delete_webhook(drop_pending_updates=True)
    except Exception as e:
        logger.warning("Webhookni o'chirishda tarmoq xatosi: %s", e)

    logger.info("Bot muvaffaqiyatli ishga tushdi va xabarlarni qabul qilmoqda!")
    try:
        await dp.start_polling(bot)
    finally:
        if keep_alive_task and not keep_alive_task.done():
            keep_alive_task.cancel()
        if web_runner:
            await web_runner.cleanup()
        await bot.session.close()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        logger.info("Bot to'xtatildi.")
