from aiogram import Router, F
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, CallbackQuery, MenuButtonWebApp, WebAppInfo
from bot.config import WEBAPP_URL
from bot.data.amaliy_tasks import AMALIY_DATA
from bot.keyboards.menu import (
    get_main_reply_keyboard,
    get_inline_webapp_keyboard,
    get_topics_keyboard,
    get_topic_detail_keyboard,
    get_amaliy_files_keyboard,
    get_amaliy_tasks_keyboard,
    get_task_solution_keyboard
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
    "Pastdagi <b>«🚀 Mini Appni ochish (1-15 Amaliylar)»</b> tugmasini bosing yoki "
    "<b>«📁 Amaliy Fayllar Topshiriqlari»</b> menyusidan to'g'ridan-to'g'ri misollarni yeching!"
)

TOPIC_DESCRIPTIONS = {
    "t_1": "📊 <b>1-Mavzu: Matritsalar ustida amallar</b>\n• Qo'shish va ayirish ($A \\pm B$)\n• Songa ko'paytirish ($k \\cdot A$)\n• Matritsalar ko'paytmasi ($A \\times B$)\n• Transponirlash ($A^T$)",
    "t_2": "🔄 <b>2-Mavzu: O‘rin almashtirishlar</b>\n• Inversiyalar soni va juft/toqligi\n• Disyukt tsikllarga ajratish\n• Teskari o'rin almashtirish ($\\sigma^{-1}$)",
    "t_3": "🔢 <b>3-Mavzu: n-tartibli determinantlar</b>\n• 2x2 va 3x3 Sarryus qoidasi\n• nxn Gauss uchburchak almashtirishlari",
    "t_4": "📐 <b>4-Mavzu: Minor va Laplas yoyilmasi</b>\n• Element minori va algebraik to'ldiruvchisi ($A_{ij} = (-1)^{i+j} M_{ij}$)\n• Satr yoki ustun bo'yicha Laplas yoyilmasi",
    "t_5": "🔄 <b>5-Mavzu: Teskari matritsa</b>\n• Algebraik to'ldiruvchilar yordamida: $A^{-1} = \\frac{1}{|A|} A^*$\n• Biriktirilgan matritsa transponirlangan shakli",
    "t_6": "⚖️ <b>6-Mavzu: Chiziqli tenglamalar sistemasi</b>\n• Kramer usuli ($\\Delta, \\Delta_{x_i}$)\n• Gauss usuli (pog'onasimon ko'rinish va teskari yurish)",
    "t_7": "📶 <b>7-Mavzu: Matritsa rangi</b>\n• Elementar satr almashtirishlari orqali pog'onasimon ko'rinish va rang(A) ni topish",
    "t_8": "🎯 <b>8-Mavzu: Bir jinsli sistema va FYET</b>\n• $AX = 0$ sistemasi uchun Fundamental Yechimlar Tizimi (FYET)\n• Umumiy parametrik yechim",
    "t_9": "🔮 <b>9-Mavzu: Kompleks sonlar amallari</b>\n• Arifmetika ($+, -, \\cdot, /$)\n• Modul ($|z|$), argument ($\\varphi$)\n• Trigonometrik va ko'rsatkichli shakllar",
    "t_10": "⚡ <b>10-Mavzu: Muavr formulasi va ildizlar</b>\n• $z^n = r^n(\\cos n\\varphi + i\\sin n\\varphi)$\n• $n$-darajali barcha kompleks ildizlarni hisoblash",
    "t_11": "📈 <b>11-Mavzu: Ko'phadlarni qoldiqli bo'lish</b>\n• Burchakli bo'lish algoritmi: $P(x) = Q(x) \\cdot M(x) + R(x)$",
    "t_12": "🔗 <b>12-Mavzu: Ko'phadlarning EKUBi</b>\n• Yevklid algoritmi ketma-ket qoldiqlar zanjiri",
    "t_13": "📋 <b>13-Mavzu: Gorner sxemasi va ildizlar</b>\n• Gorner sxemasi jadvali va $P(c)$ qoldig'i\n• Barcha ratsional ildizlarni nomzodlar orqali topish",
    "t_14": "🧮 <b>14-Mavzu: Sodda kasrlarga yoyish</b>\n• To'g'ri ratsional kasrni sodda kasrlar yig'indisiga ajratish",
    "t_15": "📐 <b>15-Mavzu: 3- va 4-darajali tenglamalar</b>\n• 3-darajali tenglama: Kardano formulasi ($y^3 + py + q = 0$)\n• Ferrari usuli",
    "t_16": "💡 <b>16-Mavzu: Darslikdagi namunalar to'plami</b>\n• 1-15 mavzulardan barcha namuna misollar to'plami"
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
        "Fayllardan misol tanlab yechish uchun Mini Appni oching yoki menyudan tanlang:",
        reply_markup=get_inline_webapp_keyboard(WEBAPP_URL)
    )

@router.message(F.text == "📁 Amaliy Fayllar Topshiriqlari")
@router.message(Command("amaliy"))
async def cmd_amaliy_files(message: Message):
    await message.answer(
        "📁 <b>1-15 Amaliy Mashg'ulot Fayllari:</b>\n"
        "Qaysi amaliy fayldagi misollar va topshiriqlarni ko'rmoqchisiz? Tanlang:",
        parse_mode="HTML",
        reply_markup=get_amaliy_files_keyboard()
    )

@router.message(F.text == "📚 16 ta Mavzu ro'yxati")
@router.message(Command("topics"))
async def cmd_topics(message: Message):
    await message.answer(
        "📚 <b>16 ta Mavzu bo'yicha kalkulyator va ma'lumotlar:</b>\nKerakli mavzuni tanlang yoki kalkulyatorni oching:",
        parse_mode="HTML",
        reply_markup=get_topics_keyboard(WEBAPP_URL)
    )

@router.callback_query(F.data == "amaliy_files_menu")
async def cb_amaliy_files_menu(callback: CallbackQuery):
    await callback.message.edit_text(
        "📁 <b>1-15 Amaliy Mashg'ulot Fayllari:</b>\n"
        "Qaysi amaliy fayl misollarini ko'rmoqchisiz? Tanlang:",
        parse_mode="HTML",
        reply_markup=get_amaliy_files_keyboard()
    )
    await callback.answer()

@router.callback_query(F.data.startswith("af_"))
async def cb_amaliy_file_item(callback: CallbackQuery):
    try:
        file_id = int(callback.data.replace("af_", ""))
    except ValueError:
        await callback.answer("Fayl topilmadi.")
        return

    data = AMALIY_DATA.get(file_id)
    if not data:
        await callback.answer("Amaliy fayl ma'lumoti topilmadi.")
        return

    # Hujjatdagi barcha misollar ro'yxatini shakllantiramiz
    task_lines = []
    for idx, t in enumerate(data["tasks"], 1):
        task_lines.append(f"<b>{idx}. {t['name']}</b>\n   Shart: <code>{t['shart']}</code>")

    tasks_text = "\n\n".join(task_lines)

    text = (
        f"📄 <b>{data['title']}</b>\n"
        f"📁 Fayl: <code>{data['file']}</code>\n\n"
        f"📋 <b>Ushbu hujjatdagi topshiriqlar va misollar:</b>\n\n"
        f"{tasks_text}\n\n"
        f"👇 <i>Quyidagi tugmalardan birini bosib, misolning to'liq qadamma-qadam yechimini ko'ring:</i>"
    )

    await callback.message.edit_text(
        text,
        parse_mode="HTML",
        reply_markup=get_amaliy_tasks_keyboard(file_id, data["tasks"], WEBAPP_URL)
    )
    await callback.answer()

@router.callback_query(F.data.startswith("solvetask_"))
async def cb_solve_task(callback: CallbackQuery):
    task_id = callback.data.replace("solvetask_", "")
    
    # AMALIY_DATA dan task_id ni qidiramiz
    target_task = None
    target_file_id = 1
    for fid, f_data in AMALIY_DATA.items():
        for t in f_data["tasks"]:
            if t["id"] == task_id:
                target_task = t
                target_file_id = fid
                break
        if target_task:
            break

    if not target_task:
        await callback.answer("Misol yechimi topilmadi.", show_alert=True)
        return

    # Yechimni yuboramiz
    await callback.message.edit_text(
        target_task["solution"],
        parse_mode="HTML",
        reply_markup=get_task_solution_keyboard(target_file_id, WEBAPP_URL)
    )
    await callback.answer("Misol yechildi!")

@router.callback_query(F.data == "topics_menu")
async def cb_topics_menu(callback: CallbackQuery):
    await callback.message.edit_text(
        "📚 <b>16 ta Mavzu bo'yicha kalkulyator va ma'lumotlar:</b>\nKerakli mavzuni tanlang yoki kalkulyatorni oching:",
        parse_mode="HTML",
        reply_markup=get_topics_keyboard(WEBAPP_URL)
    )
    await callback.answer()

@router.callback_query(F.data.startswith("t_"))
async def cb_topic_item(callback: CallbackQuery):
    topic_num = callback.data.replace("t_", "")
    desc = TOPIC_DESCRIPTIONS.get(callback.data, "Mavzu ma'lumoti topilmadi.")
    text = (
        f"{desc}\n\n"
        f"<i>Ushbu mavzu bo'yicha istalgan misolni qadamma-qadam yechish uchun "
        f"pastdagi kalkulyator tugmasini bosing:</i>"
    )
    await callback.message.edit_text(
        text,
        parse_mode="HTML",
        reply_markup=get_topic_detail_keyboard(topic_num, WEBAPP_URL)
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

@router.message(F.document)
async def handle_document(message: Message):
    doc_name = (message.document.file_name or "").lower()
    
    # Qaysi amaliy ekanligini fayl nomidan aniqlash
    matched_id = None
    for fid, data in AMALIY_DATA.items():
        if f"amaliy {fid}" in doc_name or f"amaliy_{fid}" in doc_name or f"amaliy-{fid}" in doc_name:
            matched_id = fid
            break
        # Mavzu so'zlari bo'yicha
        if "matritsa" in doc_name and fid == 1:
            matched_id = 1
        elif "determinant" in doc_name and fid == 3:
            matched_id = 3
        elif "teskari" in doc_name and fid == 5:
            matched_id = 5
        elif "kompleks" in doc_name and fid == 9:
            matched_id = 9
        elif "gorner" in doc_name and fid == 13:
            matched_id = 13

    if matched_id:
        data = AMALIY_DATA[matched_id]
        task_lines = []
        for idx, t in enumerate(data["tasks"], 1):
            task_lines.append(f"<b>{idx}. {t['name']}</b>\n   Shart: <code>{t['shart']}</code>")
        tasks_text = "\n\n".join(task_lines)

        text = (
            f"📄 <b>Yuborilgan hujjat aniqlandi:</b> <code>{message.document.file_name}</code>\n"
            f"📌 <b>Tegishli bo'lim:</b> {data['title']}\n\n"
            f"📋 <b>Hujjatdagi tayyor topshiriqlar va misollar:</b>\n\n"
            f"{tasks_text}\n\n"
            f"👇 Misolning to'liq yechimini olish uchun quyidagi tugmalardan birini bosing:"
        )
        await message.answer(
            text,
            parse_mode="HTML",
            reply_markup=get_amaliy_tasks_keyboard(matched_id, data["tasks"], WEBAPP_URL)
        )
    else:
        await message.answer(
            f"📄 <b>Hujjat qabul qilindi:</b> <code>{message.document.file_name}</code>\n\n"
            f"Oliy algebra bo'yicha 1-15 Amaliy fayllaridagi misollarni yechish uchun "
            f"pastdagi amaliy fayllar ro'yxatidan keraklisini tanlang yoki Mini Appni oching:",
            parse_mode="HTML",
            reply_markup=get_amaliy_files_keyboard()
        )

@router.message(F.text == "ℹ️ Bot haqida")
@router.message(Command("about"))
async def cmd_about(message: Message):
    text = (
        "ℹ️ <b>Oliy Algebra Solver Bot (Mini App)</b>\n\n"
        "Oliy o'quv yurtlari darsliklaridagi 1-15 Amaliy mashg'ulot fayllari va 16 ta nazariy mavzular bo'yicha to'liq ishlovchi platforma.\n\n"
        "• 1-15 Amaliy fayllaridagi barcha mustaqil ish topshiriqlari va 5-variantlar kiritilgan\n"
        "• Yaxlitlashlarsiz aniq kasrlar arifmetikasi\n"
        "• Server: Render Cloud (24/7 faol)\n"
        "• Ishlab chiquvchi: @Misol_ishladim_bot"
    )
    await message.answer(text, parse_mode="HTML")
