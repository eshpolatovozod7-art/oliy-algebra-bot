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
    "Bu bot <b>Oliy algebra</b> fanidan misol va masalalarni "
    "<b>qadamma-qadam</b>, batafsil tushuntirishlar va aniq kasrlar bilan yechish uchun yaratilgan.\n\n"
    "⚡ <b>Imkoniyatlar:</b>\n"
    "• <b>Matritsalar:</b> A+B, A-B, k·A, A·B, Aᵀ, rang(A)\n"
    "• <b>Determinant:</b> 2x2, 3x3 (Sarryus), nxn (Gauss usuli)\n"
    "• <b>Teskari matritsa:</b> A⁻¹ (Algebraik to'ldiruvchilar usuli)\n"
    "• <b>ChTS (Tenglamalar sistemasi):</b> Kramer va Gauss usullari\n"
    "• <b>Kompleks sonlar:</b> Arifmetika, Modul, Argument, Muavr formulasi, Ildizlar\n"
    "• <b>Ko'phadlar:</b> Gorner sxemasi, Qoldiqli bo'lish, EKUB (Yevklid)\n\n"
    "Pastdagi <b>«🚀 Mini Appni ochish»</b> tugmasini bosing va to'g'ridan-to'g'ri Telegram ichida ishlang!"
)

@router.message(CommandStart())
async def cmd_start(message: Message):
    # Chat menyu tugmasini WebApp ga sozlash
    try:
        await message.bot.set_chat_menu_button(
            chat_id=message.chat.id,
            menu_button=MenuButtonWebApp(
                text="🧮 Kalkulyator",
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
        "Interfeysni ochish uchun tugmani bosing:",
        reply_markup=get_inline_webapp_keyboard(WEBAPP_URL)
    )

@router.message(F.text == "📚 Qo'llanma")
@router.message(Command("help"))
async def cmd_help(message: Message):
    text = (
        "📖 <b>Botdan qanday foydalaniladi?</b>\n\n"
        "1. <b>«🚀 Mini Appni ochish»</b> tugmasini bosing.\n"
        "2. Kerakli bo'limni (Matritsalar, ChTS, Kompleks sonlar, Ko'phadlar) tanlang.\n"
        "3. Berilgan sonlarni kiriting (kasr sonlarni <code>3/4</code> yoki <code>1.5</code> ko'rinishida yozishingiz mumkin).\n"
        "4. <b>«Hisoblash»</b> tugmasini bosing. Sizga barcha qadamlar to'liq ko'rsatiladi.\n"
        "5. Agar yechimni chatda saqlab qo'ymoqchi bo'lsangiz, <b>«Yechimni Telegramga yuborish»</b> tugmasini bosing!"
    )
    await message.answer(text, parse_mode="HTML", reply_markup=get_inline_webapp_keyboard(WEBAPP_URL))

@router.message(F.text == "ℹ️ Bot haqida")
@router.message(Command("about"))
async def cmd_about(message: Message):
    text = (
        "ℹ️ <b>Oliy Algebra Solver Bot (Mini App)</b>\n\n"
        "Talabalar va o'qituvchilar uchun chiziqli algebra va oliy algebra amallarini qulay, tezkor va aniq bajarish vositasi.\n\n"
        "• Hech qanday yaxlitlash xatolarisiz (Aniq kasrlar arifmetikasi)\n"
        "• Telegram Dark va Light dizaynlariga to'liq moslashgan\n"
        "• Versiya: <b>1.0.0</b>\n"
        "• Ishlab chiquvchi: @Misol_ishladim_bot"
    )
    await message.answer(text, parse_mode="HTML")

@router.callback_query(F.data == "topics_info")
async def cb_topics_info(callback: CallbackQuery):
    await callback.message.edit_text(
        "📚 <b>Mavzular ro'yxati:</b>\nQaysi mavzu haqida ma'lumot olmoqchisiz?",
        parse_mode="HTML",
        reply_markup=get_topics_keyboard()
    )
    await callback.answer()

@router.callback_query(F.data == "topic_matrix")
async def cb_topic_matrix(callback: CallbackQuery):
    text = (
        "📊 <b>Matritsalar va Determinant</b>\n\n"
        "• Matritsalar ustida chiziqli amallar: A + B, A - B, k · A\n"
        "• Ko'paytirish qoidasi: A (m×n) va B (n×k) -> C (m×k)\n"
        "• Determinant: 2x2 uchun ad - bc, 3x3 uchun Sarryus usuli, nxn uchun Gauss uchburchak almashtirishlari\n"
        "• Teskari matritsa: A⁻¹ = (1 / |A|) · A* (Algebraik to'ldiruvchilar yordamida)"
    )
    await callback.message.edit_text(text, parse_mode="HTML", reply_markup=get_topics_keyboard())
    await callback.answer()

@router.callback_query(F.data == "topic_sle")
async def cb_topic_sle(callback: CallbackQuery):
    text = (
        "⚖️ <b>Chiziqli Tenglamalar Sistemasi (ChTS)</b>\n\n"
        "• <b>Kramer usuli:</b> Asosiy determinant Δ ≠ 0 bo'lganda, xᵢ = Δᵢ / Δ formulasi bilan topiladi.\n"
        "• <b>Gauss usuli:</b> Kengaytirilgan [A | B] matritsa elementar satr almashtirishlari orqali pog'onasimon ko'rinishga keltiriladi va teskari yurish bilan noma'lumlar topiladi."
    )
    await callback.message.edit_text(text, parse_mode="HTML", reply_markup=get_topics_keyboard())
    await callback.answer()

@router.callback_query(F.data == "topic_complex")
async def cb_topic_complex(callback: CallbackQuery):
    text = (
        "🔮 <b>Kompleks Sonlar</b>\n\n"
        "• Algebraik shakl: z = a + bi\n"
        "• Modul va Argument: r = √(a² + b²), φ = arg(z)\n"
        "• Trigonometrik shakl: z = r(cos φ + i sin φ)\n"
        "• <b>Muavr formulasi:</b> zⁿ = rⁿ(cos(nφ) + i sin(nφ))\n"
        "• n-darajali ildizlar: wₖ = ⁿ√r (cos((φ+2πk)/n) + i sin((φ+2πk)/n))"
    )
    await callback.message.edit_text(text, parse_mode="HTML", reply_markup=get_topics_keyboard())
    await callback.answer()

@router.callback_query(F.data == "topic_poly")
async def cb_topic_poly(callback: CallbackQuery):
    text = (
        "📈 <b>Ko'phadlar</b>\n\n"
        "• <b>Gorner sxemasi:</b> P(x) ni (x - c) ga bo'lish va P(c) qiymatini jadval orqali hisoblash\n"
        "• <b>Qoldiqli bo'lish:</b> P(x) = Q(x) · M(x) + R(x)\n"
        "• <b>EKUB (Yevklid algoritmi):</b> Ketma-ket qoldiqli bo'lish orqali umumiy eng katta bo'luvchini topish"
    )
    await callback.message.edit_text(text, parse_mode="HTML", reply_markup=get_topics_keyboard())
    await callback.answer()

@router.callback_query(F.data == "back_to_main")
async def cb_back_to_main(callback: CallbackQuery):
    await callback.message.edit_text(
        START_TEXT,
        parse_mode="HTML",
        reply_markup=get_inline_webapp_keyboard(WEBAPP_URL)
    )
    await callback.answer()
