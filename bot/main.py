import asyncio
import logging
import sys
from pathlib import Path

# Loyiha asosiy katalogini PYTHONPATH ga qo'shish
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.types import BotCommand

from bot.config import BOT_TOKEN
from bot.handlers import start, webapp_data

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    stream=sys.stdout
)
logger = logging.getLogger(__name__)

async def set_bot_commands(bot: Bot):
    commands = [
        BotCommand(command="start", description="Botni ishga tushirish"),
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
    await set_bot_commands(bot)

    # Eski kutilayotgan xabarlarni tozalash
    await bot.delete_webhook(drop_pending_updates=True)

    logger.info("Bot muvaffaqiyatli ishga tushdi va xabarlarni qabul qilmoqda!")
    try:
        await dp.start_polling(bot)
    finally:
        await bot.session.close()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        logger.info("Bot to'xtatildi.")
