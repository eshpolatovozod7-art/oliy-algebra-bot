import json
from aiogram import Router, F
from aiogram.types import Message

router = Router()

@router.message(F.web_app_data)
async def handle_webapp_data(message: Message):
    try:
        raw_data = message.web_app_data.data
        data = json.loads(raw_data)

        title = data.get("title", "Yechim")
        steps = data.get("steps", [])

        response_lines = [
            f"✅ <b>Mini App orqali yechilgan misol:</b>",
            f"📌 <b>Mavzu:</b> {title}\n",
            "<b>Qadamma-qadam yechim:</b>"
        ]

        for i, step in enumerate(steps, 1):
            # Qadamlarni toza ko'rinishda qo'shish
            clean_step = step.replace('$', '').strip()
            response_lines.append(f"{i}) {clean_step}")

        text = "\n".join(response_lines)

        # Telegram bitta xabarda 4096 belgidan oshmasligi kerak
        if len(text) > 4000:
            chunks = [text[i:i+3800] for i in range(0, len(text), 3800)]
            for chunk in chunks:
                await message.answer(chunk, parse_mode="HTML")
        else:
            await message.answer(text, parse_mode="HTML")

    except Exception as e:
        await message.answer(
            f"⚠️ Yechimni qabul qilishda xatolik yuz berdi: {str(e)}"
        )
