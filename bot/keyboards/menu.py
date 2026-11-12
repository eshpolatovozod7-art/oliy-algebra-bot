from aiogram.types import (
    InlineKeyboardMarkup,
    InlineKeyboardButton,
    ReplyKeyboardMarkup,
    KeyboardButton,
    WebAppInfo
)

def get_main_reply_keyboard(webapp_url: str) -> ReplyKeyboardMarkup:
    """Asosiy pastki klaviatura"""
    kb = [
        [
            KeyboardButton(
                text="🚀 Mini Appni ochish (1-15 Amaliylar)",
                web_app=WebAppInfo(url=webapp_url)
            )
        ],
        [
            KeyboardButton(text="📁 Amaliy Fayllar Topshiriqlari"),
            KeyboardButton(text="📚 16 ta Mavzu ro'yxati")
        ],
        [
            KeyboardButton(text="ℹ️ Bot haqida")
        ]
    ]
    return ReplyKeyboardMarkup(keyboard=kb, resize_keyboard=True)

def get_inline_webapp_keyboard(webapp_url: str) -> InlineKeyboardMarkup:
    """Xabar ostidagi inline klaviatura"""
    buttons = [
        [
            InlineKeyboardButton(
                text="🧮 Amaliy Fayllar & Kalkulyator (Mini App)",
                web_app=WebAppInfo(url=webapp_url)
            )
        ],
        [
            InlineKeyboardButton(text="📁 Fayllardagi Amaliylar", callback_data="amaliy_files_menu"),
            InlineKeyboardButton(text="📖 Mavzular ro'yxati", callback_data="topics_menu")
        ]
    ]
    return InlineKeyboardMarkup(inline_keyboard=buttons)

def get_amaliy_files_keyboard() -> InlineKeyboardMarkup:
    """1-15 Amaliy mashg'ulotlar fayllari ro'yxati"""
    buttons = [
        [InlineKeyboardButton(text="1-Amaliy: Matritsalar", callback_data="af_1"), InlineKeyboardButton(text="2-Amaliy: O'rin almashtirish", callback_data="af_2")],
        [InlineKeyboardButton(text="3-Amaliy: Determinantlar", callback_data="af_3"), InlineKeyboardButton(text="4-Amaliy: Minor & Laplas", callback_data="af_4")],
        [InlineKeyboardButton(text="5-Amaliy: Teskari matritsa", callback_data="af_5"), InlineKeyboardButton(text="6-Amaliy: ChTS (Kramer)", callback_data="af_6")],
        [InlineKeyboardButton(text="7-Amaliy: Matritsa rangi", callback_data="af_7"), InlineKeyboardButton(text="8-Amaliy: FYET (AX = 0)", callback_data="af_8")],
        [InlineKeyboardButton(text="9-Amaliy: Kompleks sonlar", callback_data="af_9"), InlineKeyboardButton(text="10-Amaliy: Muavr formulasi", callback_data="af_10")],
        [InlineKeyboardButton(text="11-Amaliy: Qoldiqli bo'lish", callback_data="af_11"), InlineKeyboardButton(text="12-Amaliy: Ko'phadlar EKUBi", callback_data="af_12")],
        [InlineKeyboardButton(text="13-Amaliy: Gorner sxemasi", callback_data="af_13"), InlineKeyboardButton(text="14-Amaliy: Ratsional kasrlar", callback_data="af_14")],
        [InlineKeyboardButton(text="15-Amaliy: 3- va 4-darajali tenglamalar", callback_data="af_15")],
        [InlineKeyboardButton(text="◀️ Asosiy menyuga qaytish", callback_data="back_to_main")]
    ]
    return InlineKeyboardMarkup(inline_keyboard=buttons)

def get_topics_keyboard() -> InlineKeyboardMarkup:
    """16 ta Mavzu bo'yicha navigatsiya tugmalari"""
    buttons = [
        [
            InlineKeyboardButton(text="1. Matritsalar", callback_data="t_1"),
            InlineKeyboardButton(text="2. O'rin almashtirish", callback_data="t_2")
        ],
        [
            InlineKeyboardButton(text="3. Determinant", callback_data="t_3"),
            InlineKeyboardButton(text="4. Minor & Laplas", callback_data="t_4")
        ],
        [
            InlineKeyboardButton(text="5. Teskari matritsa", callback_data="t_5"),
            InlineKeyboardButton(text="6. ChTS (Kramer/Gauss)", callback_data="t_6")
        ],
        [
            InlineKeyboardButton(text="7. Matritsa rangi", callback_data="t_7"),
            InlineKeyboardButton(text="8. FYET (AX = 0)", callback_data="t_8")
        ],
        [
            InlineKeyboardButton(text="9. Kompleks sonlar", callback_data="t_9"),
            InlineKeyboardButton(text="10. Muavr formulasi", callback_data="t_10")
        ],
        [
            InlineKeyboardButton(text="11. Qoldiqli bo'lish", callback_data="t_11"),
            InlineKeyboardButton(text="12. EKUB (Yevklid)", callback_data="t_12")
        ],
        [
            InlineKeyboardButton(text="13. Gorner va ildizlar", callback_data="t_13"),
            InlineKeyboardButton(text="14. Sodda kasrlar", callback_data="t_14")
        ],
        [
            InlineKeyboardButton(text="15. Kardano formulasi", callback_data="t_15"),
            InlineKeyboardButton(text="16. Namuna misollar", callback_data="t_16")
        ],
        [
            InlineKeyboardButton(text="◀️ Asosiy menyuga qaytish", callback_data="back_to_main")
        ]
    ]
    return InlineKeyboardMarkup(inline_keyboard=buttons)
