import os
from pathlib import Path
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv(BASE_DIR / ".env", override=True)

BOT_TOKEN = os.getenv("BOT_TOKEN", "").strip()
WEBAPP_URL = os.getenv("WEBAPP_URL", "https://eshpolatovozod7-art.github.io/oliy-algebra-bot").strip()

if not BOT_TOKEN:
    raise ValueError("BOT_TOKEN ko'rsatilmagan! .env faylini tekshiring.")
