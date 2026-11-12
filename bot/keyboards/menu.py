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
                text="🚀 Mini Appni ochish",
                web_app=WebAppInfo(url=webapp_url)
            )
        ],
        [
            KeyboardButton(text="📚 Qo'llanma"),
            KeyboardButton(text="ℹ️ Bot haqida")
        ]
    ]
    return ReplyKeyboardMarkup(keyboard=kb, resize_keyboard=True)

def get_inline_webapp_keyboard(webapp_url: str) -> InlineKeyboardMarkup:
    """Xabar ostidagi inline klaviatura"""
    buttons = [
        [
            InlineKeyboardButton(
                text="🧮 Oliy Algebra Kalkulyatori",
                web_app=WebAppInfo(url=webapp_url)
            )
        ],
        [
            InlineKeyboardButton(text="📖 Misollar va Mavzular", callback_data="topics_info"),
            InlineKeyboardButton(text="💬 Yordam", callback_data="help_info")
        ]
    ]
    return InlineKeyboardMarkup(inline_keyboard=buttons)

def get_topics_keyboard() -> InlineKeyboardMarkup:
    """Mavzular bo'yicha ma'lumot tugmalari"""
    buttons = [
        [InlineKeyboardButton(text="📊 Matritsalar & Determinant", callback_data="topic_matrix")],
        [InlineKeyboardButton(text="⚖️ Chiziqli Tenglamalar (Gauss, Kramer)", callback_data="topic_sle")],
        [InlineKeyboardButton(text="🔮 Kompleks Sonlar (Muavr)", callback_data="topic_complex")],
        [InlineKeyboardButton(text="📈 Ko'phadlar & Gorner sxemasi", callback_data="topic_poly")],
        [InlineKeyboardButton(text="◀️ Orqaga", callback_data="back_to_main")]
    ]
    return InlineKeyboardMarkup(inline_keyboard=buttons)
