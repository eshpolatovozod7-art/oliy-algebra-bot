from aiogram import Router, F
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, CallbackQuery, MenuButtonWebApp, WebAppInfo
from bot.config import WEBAPP_URL
from bot.keyboards.menu import (
    get_main_reply_keyboard,
    get_inline_webapp_keyboard,
    get_topics_keyboard
)

router = Router()

START_TEXT = (
    "👋 <b>Assalomu alaykum!</b>\n\n"
    "Bu bot <b>Oliy algebra va matritsalar nazariyasi</b> bo'yicha barcha "
    "<b>16 ta amaliy va ma'ruza mavzulari</b> misollarini qadamma-qadam, aniq kasrlar bilan yechish uchun yaratilgan.\n\n"
    "📌 <b>Barcha 16 ta mavzu to'liq qamrab olingan:</b>\n"
    "1. Matritsalar ustida amallar (A±B, k·A, A·B, Aᵀ)\n"
    "2. O‘rin almashtirishlar (inversiyalar, tsikllar)\n"
    "3. n-tartibli determinantlar (Sarryus va Gauss)\n"
    "4. Minor va Laplas yoyilmasi\n"
    "5. Teskari matritsa (A⁻¹)\n"
    "6. ChTS (Kramer va Gauss usullari)\n"
    "7. Matritsa rangi\n"
    "8. Bir jinsli sistema va FYET\n"
    "9. Kompleks sonlar amallari\n"
    "10. Muavr formulasi (zⁿ) va ildizlar\n"
    "11. Ko'phadlarni qoldiqli bo'lish\n"
    "12. Ko'phadlar EKUBi (Yevklid)\n"
    "13. Gorner sxemasi va ratsional ildizlar\n"
    "14. Ratsional kasrlarni sodda kasrlarga yoyish\n"
    "15. 3- va 4-darajali tenglamalar (Kardano)\n"
    "16. Darslikdagi namunalar to'plami\n\n"
    "Pastdagi <b>«🚀 Mini Appni ochish»</b> tugmasini bosing va to'g'ridan-to'g'ri Telegram ichida mavzuni tanlab, misolingizni yeching!"
)

TOPIC_DESCRIPTIONS = {
    "t_1": "📊 <b>1-Mavzu: Matritsalar ustida amallar</b>\n• Qo'shish va ayirish ($A \\pm B$)\n• Songa ko'paytirish ($k \\cdot A$)\n• Matritsalar ko'paytmasi ($A \\times B$)\n• Transponirlash ($A^T$)",
    "t_2": "🔄 <b>2-Mavzu: O‘rin almashtirishlar</b>\n• Inversiyalar soni va juft/toqligi\n• Disyukt tsikllarga ajratish\n• Teskari o'rin almashtirish ($\\sigma^{-1}$)",
    "t_3": "🔢 <b>3-Mavzu: n-tartibli determinantlar</b>\n• 2x2 va 3x3 Sarryus qoidasi\n• nxn Gauss uchburchak almashtirishlari",
    "t_4": "📐 <b>4-Mavzu: Minor va Laplas yoyilmasi</b>\n• Har bir element minori va algebraik to'ldiruvchisi ($A_{ij} = (-1)^{i+j} M_{ij}$)\n• Satr yoki ustun bo'yicha yoyish",
    "t_5": "🔄 <b>5-Mavzu: Teskari matritsa</b>\n• Algebraik to'ldiruvchilar yordamida: $A^{-1} = \\frac{1}{|A|} A^*$\n• Gauss-Jordan usuli",
    "t_6": "⚖️ <b>6-Mavzu: Chiziqli tenglamalar sistemasi</b>\n• Kramer usuli ($\\Delta, \\Delta_{x_i}$)\n• Gauss usuli (pog'onasimon ko'rinish va teskari yurish)",
    "t_7": "📶 <b>7-Mavzu: Matritsa rangi</b>\n• Elementar satr almashtirishlari orqali pog'onasimon ko'rinishga keltirish va rang(A) ni topish",
    "t_8": "🎯 <b>8-Mavzu: Bir jinsli sistema va FYET</b>\n• $AX = 0$ sistemasi uchun Fundamental Yechimlar Tizimi (FYET / FSR)\n• Umumiy parametrik yechim",
    "t_9": "🔮 <b>9-Mavzu: Kompleks sonlar amallari</b>\n• Arifmetika ($+, -, \\cdot, /$)\n• Modul ($|z|$), argument ($\\varphi$)\n• Trigonometrik va ko'rsatkichli shakllar",
    "t_10": "⚡ <b>10-Mavzu: Muavr formulasi va ildizlar</b>\n• $z^n = r^n(\\cos n\\varphi + i\\sin n\\varphi)$\n• $n$-darajali barcha kompleks ildizlarni hisoblash",
    "t_11": "📈 <b>11-Mavzu: Ko'phadlarni qoldiqli bo'lish</b>\n• Burchakli bo'lish algoritmi: $P(x) = Q(x) \\cdot M(x) + R(x)$",
    "t_12": "🔗 <b>12-Mavzu: Ko'phadlarning EKUBi</b>\n• Yevklid algoritmi ketma-ket qoldiqlar zanjiri",
    "t_13": "📋 <b>13-Mavzu: Gorner sxemasi va ildizlar</b>\n• Gorner sxemasi jadvali va $P(c)$ qoldig'i\n• Barcha ratsional ildizlarni nomzodlar orqali topish",
    "t_14": "🧮 <b>14-Mavzu: Sodda kasrlarga yoyish</b>\n• To'g'ri ratsional kasrni sodda kasrlar yig'indisiga ajratish",
    "t_15": "📐 <b>15-Mavzu: 3- va 4-darajali tenglamalar</b>\n• 3-darajali tenglama: Kardano formulasi ($y^3 + py + q = 0$)\n• Ferrari usuli",
    "t_16": "💡 <b>16-Mavzu: Darslikdagi namunalar to'plami</b>\n• Barcha 15 ta mavzuning har biridan tayyor darslik misollari"
}

@router.message(CommandStart())
async def cmd_start(message: Message):
    try:
        await message.bot.set_chat_menu_button(
            chat_id=message.chat.id,
            menu_button=MenuButtonWebApp(
                text="🧮 Kalkulyator (16 Mavzu)",
                web_app=WebAppInfo(url=WEBAPP_URL)
            )
        )
    except Exception:
        pass

    await message.answer(
        START_TEXT,
        parse_mode="HTML",
        reply_markup=get_main_reply_keyboard(WEBAPP_URL)
    )
    await message.answer(
        "Mavzuni tanlab ishlash uchun Mini Appni oching:",
        reply_markup=get_inline_webapp_keyboard(WEBAPP_URL)
    )

@router.message(F.text == "📚 16 ta Mavzu ro'yxati")
@router.message(Command("topics"))
async def cmd_topics(message: Message):
    await message.answer(
        "📚 <b>16 ta Mavzu bo'yicha ma'lumotlar:</b>\nKerakli mavzuni tanlang:",
        parse_mode="HTML",
        reply_markup=get_topics_keyboard()
    )

@router.callback_query(F.data == "topics_menu")
async def cb_topics_menu(callback: CallbackQuery):
    await callback.message.edit_text(
        "📚 <b>16 ta Mavzu ro'yxati:</b>\nKerakli mavzuni tanlang:",
        parse_mode="HTML",
        reply_markup=get_topics_keyboard()
    )
    await callback.answer()

@router.callback_query(F.data.startswith("t_"))
async def cb_topic_item(callback: CallbackQuery):
    desc = TOPIC_DESCRIPTIONS.get(callback.data, "Mavzu ma'lumoti topilmadi.")
    text = f"{desc}\n\n<i>Misolni yechish uchun Mini Appni oching.</i>"
    await callback.message.edit_text(
        text,
        parse_mode="HTML",
        reply_markup=get_topics_keyboard()
    )
    await callback.answer()

@router.callback_query(F.data == "back_to_main")
async def cb_back_to_main(callback: CallbackQuery):
    await callback.message.edit_text(
        START_TEXT,
        parse_mode="HTML",
        reply_markup=get_inline_webapp_keyboard(WEBAPP_URL)
    )
    await callback.answer()

@router.message(F.text == "ℹ️ Bot haqida")
@router.message(Command("about"))
async def cmd_about(message: Message):
    text = (
        "ℹ️ <b>Oliy Algebra Solver Bot (Mini App)</b>\n\n"
        "Oliy o'quv yurtlari darsliklaridagi 16 ta amaliy va ma'ruza mavzulari bo'yicha to'liq ishlovchi platforma.\n\n"
        "• Barcha 16 ta mavzu to'liq integratsiya qilingan\n"
        "• Har bir mavzu bo'yicha tayyor namuna misollar\n"
        "• Yaxlitlashlarsiz aniq kasrlar arifmetikasi\n"
        "• Ishlab chiquvchi: @Misol_ishladim_bot"
    )
    await message.answer(text, parse_mode="HTML")
