# Oliy Algebra Telegram Bot + Web App (Mini App) Loyiha Rejasi

## 📌 Loyiha maqsadi
Talabalar va foydalanuvchilar oliy algebra misollarini (matritsalar, determinantlar, chiziqli tenglamalar sistemasi, kompleks sonlar, ko'phadlar) qadamma-qadam, aniq kasrlar va tushunarli formulalar bilan yechishlari uchun Telegram Web App (Mini App) va Telegram Bot yaratish.

---

## 🏛 Loyiha tuzilmasi
Joylashuvi: `/home/ozodbek/Projects/oliy-algebra-bot/`

```
oliy-algebra-bot/
├── webapp/                  # Telegram ichida ochiladigan Mini App
│   ├── index.html           # Mobil interfeys (Dark/Light Telegram mavzusi, KaTeX)
│   ├── js/
│   │   ├── fraction.js      # Aniq kasrlar arifmetikasi (yaxlitlashlarsiz BigInt)
│   │   ├── matrix.js        # Matritsa amallari, Det, Kramer, Gauss, Rang
│   │   ├── complex.js       # Kompleks sonlar, Muavr formulasi, ildizlar
│   │   ├── polynomial.js    # Ko'phadlar bo'linishi, EKUB, Gorner sxemasi
│   │   └── app.js           # Telegram WebApp SDK va hodisalar
│   └── css/style.css        # Responsive zamonaviy dizayn
│
├── bot/                     # Telegram Bot (Aiogram 3.x)
│   ├── main.py              # Bot asosiy fayli
│   ├── config.py            # Token va sozlamalar (.env)
│   ├── keyboards/           # Menu va WebApp tugmalari
│   └── handlers/            # Buyruqlar va WebApp dan kelgan natijalar
│       ├── start.py         # /start, /help va mavzular
│       └── webapp_data.py   # WebApp yechimlarini chatga chiqarish
│
├── requirements.txt         # aiogram, aiohttp, python-dotenv
├── PROJECT_PLAN.md          # Loyiha rejasi va holati
└── README.md                # Deploy yo'riqnomasi
```

---

## 🎯 Qamrab olingan mavzular (Barchasi tayyor):
1. ✅ **Matritsalar**: Qo'shish, ayirish, songa ko'paytirish, ko'paytirish ($A \times B$), daraja, transponirlash ($A^T$).
2. ✅ **Determinant**: 2x2, 3x3 (Sarryus), nxn (Gauss usuli bilan uchburchak ko'rinishga keltirish).
3. ✅ **Teskari matritsa**: Algebraik to'ldiruvchilar usuli ($A^{-1} = \frac{1}{|A|} A^*$).
4. ✅ **Chiziqli tenglamalar sistemasi**: Kramer usuli, Gauss usuli.
5. ✅ **Matritsa rangi**: Elementar satr almashtirishlar orqali pog'onasimon ko'rinish.
6. ✅ **Kompleks sonlar**: Arifmetika, modul, argument, trigonometrik shakl, Muavr formulasi, $n$-darajali ildizlar.
7. ✅ **Ko'phadlar**: Qoldiqli bo'lish, EKUB (Yevklid algoritmi), Gorner sxemasi jadvali.

---

## 🚀 Loyiha holati:
- [x] 1. BotFather'dan token olindi: `@Misol_ishladim_bot`
- [x] 2. WebApp interfeysi va matematik hisoblash dvigateli to'liq yozildi va test qilindi.
- [x] 3. Aiogram 3 bot arxitekturasi va WebApp hodisalari (`tg.sendData`) ulandi.
- [x] 4. Barcha kodlar Git repozitoriyga commit qilindi.
- [ ] 5. GitHub Pages ga WebApp ni yuklash va BotFather'ga WebApp havolasini ulash.
