from aiogram import Router, F
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, CallbackQuery, MenuButtonWebApp, WebAppInfo
from bot.config import WEBAPP_URL
from bot.keyboards.menu import (
    get_main_reply_keyboard,
    get_inline_webapp_keyboard,
    get_topics_keyboard,
    get_amaliy_files_keyboard
)

router = Router()

START_TEXT = (
    "👋 <b>Assalomu alaykum!</b>\n\n"
    "Bu bot <b>Oliy algebra</b> fanidan barcha <b>1-15 Amaliy mashg'ulotlar fayllari</b> "
    "va 16 ta nazariy mavzular bo'yicha misollarni qadamma-qadam, aniq kasrlar bilan yechish uchun yaratilgan.\n\n"
    "📁 <b>Amaliy fayllar kategoriyasi mavjud:</b>\n"
    "• Har bir Amaliy fayl bo'yicha (Amaliy 1 ... Amaliy 15) mustaqil topshiriqlar\n"
    "• Talabaning 5-varianti va umumiy variantlar to'liq kiritilgan\n"
    "• Bir marta bosish bilan yechish va Telegramga yuborish!\n\n"
    "Pastdagi <b>«🚀 Mini Appni ochish (1-15 Amaliylar)»</b> tugmasini bosing va to'g'ridan-to'g'ri faylni tanlab, misolingizni yeching!"
)

AMALIY_INFO = {
    "af_1": "📄 <b>1-Amaliy: Matritsalar va ular ustida amallar</b>\n• Fayl: <code>Amaliy 1 Matritsalar va ular ustida amallar.pdf</code>\n• Qamrab olingan: 3A - B, A · B ko'paytmasi, 5-variant topshiriqlari.",
    "af_2": "📄 <b>2-Amaliy: O‘rinlashtirish va o‘rin almashtirish</b>\n• Fayl: <code>Amaliy 2  O‘rinlashtirish va o‘rin almashtirish.pdf</code>\n• Inversiyalar soni, juft/toqligi, mustaqil tsikllarga ajratish, 5-variant.",
    "af_3": "📄 <b>3-Amaliy: n-tartibli determinantlar va ularning xossalari</b>\n• Fayl: <code>Amaliy 3  n-tartibli determinantlar va ularning xossalari.pdf</code>\n• 2x2, 3x3 (Sarryus) va nxn (Gauss usuli).",
    "af_4": "📄 <b>4-Amaliy: Minor va algebraik to‘ldiruvchi</b>\n• Fayl: <code>Amaliy 4  Minor va algebraik to‘ldiruvchi.pdf</code>\n• Satr yoki ustun bo'yicha Laplas yoyilmasi.",
    "af_5": "📄 <b>5-Amaliy: Teskari matritsa</b>\n• Fayl: <code>Amaliy 5  Teskari matritsa.pdf</code>\n• 3x3 va 2x2 teskari matritsani (A⁻¹) algebraik to'ldiruvchilar bilan topish.",
    "af_6": "📄 <b>6-Amaliy: Chiziqli tenglamalar sistemalarini yechish</b>\n• Fayl: <code>Amaliy_6_Chiziqli_tenglamalar_sistemalarini_yechish_usullari.pdf</code>\n• Kramer va Gauss usullarida yechish, 5-variant.",
    "af_7": "📄 <b>7-Amaliy: Matritsa rangi</b>\n• Fayl: <code>Amaliy 7  Matritsa rangi.pdf</code>\n• Gauss elementar almashtirishlari orqali rang(A) ni topish.",
    "af_8": "📄 <b>8-Amaliy: Bir jinsli sistema va FYET</b>\n• Fayl: <code>Amaliy_8_Bir_jinsli_chiziqli_tenglamalar_sistemasi_Kroneker_Kopelli.pdf</code>\n• AX = 0 uchun fundamental yechimlar tizimi (FYET).",
    "af_9": "📄 <b>9-Amaliy: Kompleks sonlar va amallar</b>\n• Fayl: <code>Amaliy_9_Kompleks_sonlar_va_ular_ustida_amallar_Darajaga_ko‘tarish.pdf</code>\n• Qo'shish, ayirish, ko'paytirish, bo'lish, modul va argument.",
    "af_10": "📄 <b>10-Amaliy: Muavr formulasi va ildiz chiqarish</b>\n• Fayl: <code>Amaliy_10_Kompleks_sonni_darajaga_ko‘tarish_va_ildiz_chiqarish.pdf</code>\n• zⁿ darajaga ko'tarish va barcha n-darajali ildizlar.",
    "af_11": "📄 <b>11-Amaliy: Ko‘phadlar va qoldiqli bo'linish</b>\n• Fayl: <code>Amaliy_11_Ko'phadlar_va_ular_ustida_amallar_Ko‘phadlarning_bo'linish.pdf</code>\n• Ko'phadni ko'phadga burchakli qoldiqli bo'lish.",
    "af_12": "📄 <b>12-Amaliy: Ko‘phadlarning EKUBi</b>\n• Fayl: <code>Amaliy 12   Ko‘phadlarning EKUB.pdf</code>\n• Yevklid algoritmi ketma-ket qoldiqlar zanjiri.",
    "af_13": "📄 <b>13-Amaliy: Bezu teoremasi va Gorner sxemasi</b>\n• Fayl: <code>Amaliy_13_Bezu_teoremasi_va_Gorner_sxemasi_Algebraning_asosiy_teoremasi.pdf</code>\n• Gorner jadvali va ratsional ildizlar nomzodlari.",
    "af_14": "📄 <b>14-Amaliy: Ratsional kasrlar</b>\n• Fayl: <code>Amaliy 14  Ratsional kasrlar.pdf</code>\n• To'g'ri ratsional kasrni sodda kasrlar yig'indisiga yoyish.",
    "af_15": "📄 <b>15-Amaliy: 3- va 4-darajali tenglamalar</b>\n• Fayl: <code>Amaliy 15  3- va 4 – darajali tenglamalar.pdf</code>\n• Kardano formulasi (Casus Irreducibilis) va Ferrari usuli."
}

@router.message(CommandStart())
async def cmd_start(message: Message):
    try:
        await message.bot.set_chat_menu_button(
            chat_id=message.chat.id,
            menu_button=MenuButtonWebApp(
                text="🧮 Kalkulyator & Amaliylar",
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
        "Fayllardan misol tanlab yechish uchun Mini Appni oching:",
        reply_markup=get_inline_webapp_keyboard(WEBAPP_URL)
    )

@router.message(F.text == "📁 Amaliy Fayllar Topshiriqlari")
@router.message(Command("amaliy"))
async def cmd_amaliy_files(message: Message):
    await message.answer(
        "📁 <b>1-15 Amaliy Mashg'ulot Fayllari:</b>\nQaysi amaliy fayl misollarini ko'rmoqchisiz?",
        parse_mode="HTML",
        reply_markup=get_amaliy_files_keyboard()
    )

@router.message(F.text == "📚 16 ta Mavzu ro'yxati")
@router.message(Command("topics"))
async def cmd_topics(message: Message):
    await message.answer(
        "📚 <b>16 ta Mavzu bo'yicha ma'lumotlar:</b>\nKerakli mavzuni tanlang:",
        parse_mode="HTML",
        reply_markup=get_topics_keyboard()
    )

@router.callback_query(F.data == "amaliy_files_menu")
async def cb_amaliy_files_menu(callback: CallbackQuery):
    await callback.message.edit_text(
        "📁 <b>1-15 Amaliy Mashg'ulot Fayllari:</b>\nQaysi amaliy fayl misollarini ko'rmoqchisiz?",
        parse_mode="HTML",
        reply_markup=get_amaliy_files_keyboard()
    )
    await callback.answer()

@router.callback_query(F.data.startswith("af_"))
async def cb_amaliy_file_item(callback: CallbackQuery):
    info = AMALIY_INFO.get(callback.data, "Amaliy fayl ma'lumoti topilmadi.")
    text = f"{info}\n\n<i>Ushbu fayldagi misollarni qadamma-qadam yechish uchun pastdagi Mini Appni oching.</i>"
    await callback.message.edit_text(
        text,
        parse_mode="HTML",
        reply_markup=get_amaliy_files_keyboard()
    )
    await callback.answer()

@router.callback_query(F.data == "topics_menu")
async def cb_topics_menu(callback: CallbackQuery):
    await callback.message.edit_text(
        "📚 <b>16 ta Mavzu ro'yxati:</b>\nKerakli mavzuni tanlang:",
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
        "Oliy o'quv yurtlari darsliklaridagi 1-15 Amaliy mashg'ulot fayllari va 16 ta nazariy mavzular bo'yicha to'liq ishlovchi platforma.\n\n"
        "• 1-15 Amaliy fayllaridagi mustaqil ish topshiriqlari va 5-variant kiritilgan\n"
        "• Yaxlitlashlarsiz aniq kasrlar arifmetikasi\n"
        "• Server: Render Cloud (24/7 faol)\n"
        "• Ishlab chiquvchi: @Misol_ishladim_bot"
    )
    await message.answer(text, parse_mode="HTML")
