# 📐 Oliy Algebra Telegram Bot & Web App (Mini App)

Telegram ichida ochiladigan qulay **Mini App** va **Aiogram 3** asosidagi kuchli Telegram bot. Talabalar va o'qituvchilar uchun oliy algebra misollarini qadamma-qadam, aniq kasrlar bilan yechish imkoniyatini taqdim etadi.

---

## 🌟 Asosiy Imkoniyatlar

1. **Matritsalar algebrasi:**
   - Qo'shish ($A + B$), ayirish ($A - B$)
   - Haqiqiy yoki kasr songa ko'paytirish ($k \cdot A$)
   - Matritsalar ko'paytmasi ($A \cdot B$)
   - Transponirlash ($A^T$)
   - Matritsa rangi ($\text{rang}(A)$) Gauss elementar almashtirishlari orqali

2. **Determinant va Teskari matritsa:**
   - $2 \times 2$, $3 \times 3$ (Sarryus usuli) va $n \times n$ (Gauss uchburchak almashtirishlari)
   - Teskari matritsa ($A^{-1}$): Algebraik to'ldiruvchilar ($A_{ij} = (-1)^{i+j} M_{ij}$) usuli bilan har bir qadam ko'rsatiladi

3. **Chiziqli tenglamalar sistemasi (ChTS):**
   - **Kramer usuli:** Asosiy determinant $\Delta$ va $\Delta_{x_i}$ hisob-kitoblari
   - **Gauss usuli:** Kengaytirilgan $[A | B]$ matritsani pog'onasimon ko'rinishga keltirish va teskari yurish (Back-substitution)

4. **Kompleks sonlar:**
   - Arifmetika ($+, -, \cdot, /$)
   - Modul ($|z| = r$), argument ($\varphi = \arg(z)$ rad va graduslarda)
   - Trigonometrik va ko'rsatkichli shakllar
   - **Muavr formulasi:** $z^n = r^n(\cos(n\varphi) + i\sin(n\varphi))$
   - Kompleks sondan $n$-darajali barcha ildizlar ($w_0, w_1, \dots, w_{n-1}$)

5. **Ko'phadlar:**
   - **Gorner sxemasi:** $P(x)$ ni $(x - c)$ ga bo'lish jadvali va $P(c)$ qiymati
   - **Qoldiqli bo'lish:** $P(x) = Q(x) \cdot M(x) + R(x)$ burchakli bo'lish qadamma-qadam
   - **EKUB (Yevklid algoritmi):** Ko'phadlarning eng katta umumiy bo'luvchisi

6. **Telegram bilan chuqur integratsiya:**
   - Dark/Light Telegram dizayniga to'liq moslashish
   - Bir tugma bilan yechimni to'g'ridan-to'g'ri Telegram chatiga yuborish (`tg.sendData`)

---

## 📂 Loyiha Tuzilmasi

```
oliy-algebra-bot/
├── webapp/                  # Telegram ichida ochiladigan Mini App
│   ├── index.html           # Asosiy mobil UI
│   ├── css/
│   │   └── style.css        # Zamonaviy Telegram mavzusi bilan CSS
│   └── js/
│       ├── fraction.js      # Aniq kasrlar arifmetikasi (BigInt)
│       ├── matrix.js        # Matritsalar, Det, Inverse, Rang, Kramer, Gauss
│       ├── complex.js       # Kompleks sonlar, Muavr, ildizlar
│       ├── polynomial.js    # Ko'phadlar, Gorner, bo'lish, EKUB
│       └── app.js           # Telegram WebApp SDK va UI mantiqi
│
├── bot/                     # Telegram Bot (Aiogram 3.x)
│   ├── config.py            # Konfiguratsiya (.env dan o'qish)
│   ├── keyboards/
│   │   └── menu.py          # Reply va Inline WebApp tugmalari
│   ├── handlers/
│   │   ├── start.py         # /start, /help, qo'llanma, menyu
│   │   └── webapp_data.py   # WebApp yechimlarini chatga chiqarish
│   └── main.py              # Botni ishga tushirish
│
├── .env                     # Bot tokeni va WebApp URL manzili
├── .env.example
├── requirements.txt         # Kerakli Python kutubxonalari
└── README.md
```

---

## 🚀 O'rnatish va Lokal Ishga Tushirish

### 1. Virtual muhit va kutubxonalar:
```bash
cd /home/ozodbek/Projects/oliy-algebra-bot
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 2. `.env` faylini sozlash:
`.env` fayliga o'zingizning bot tokeningizni yozing:
```env
BOT_TOKEN=your_bot_token_here
WEBAPP_URL=https://eshpolatovozod7-art.github.io/oliy-algebra-bot
```

### 3. Botni ishga tushirish:
```bash
python3 bot/main.py
```

---

## 🌐 WebApp ni GitHub Pages ga bepul yuklash (1 daqiqada):

Telegram Mini App faqat **HTTPS** protokoli orqali ishlaydi. Uni bepul yuklashning eng oson yo'li — GitHub Pages:

1. GitHub'da yangi repozitoriy oching: `oliy-algebra-bot`
2. Loyihani yuklang:
```bash
git init
git add .
git commit -m "feat: Oliy Algebra bot va webapp boshlang'ich versiyasi"
git branch -M main
git remote add origin https://github.com/eshpolatovozod7-art/oliy-algebra-bot.git
git push -u origin main
```
3. GitHub repozitoriy sozlamalariga kiring: **Settings -> Pages**.
4. **Build and deployment -> Source** qismida **Deploy from a branch** ni tanlang, branch sifatida `main` va papka sifatida `/webapp` (yoki root) ni tanlab **Save** qiling.
5. GitHub sizga quyidagi kabi bepul HTTPS havola beradi:
   `https://eshpolatovozod7-art.github.io/oliy-algebra-bot/webapp/`
6. Shu havolani `.env` dagi `WEBAPP_URL` ga yozing va BotFather'ga biriktiring.

---

## 🤖 BotFather orqali Menyu tugmasini ulash:

1. Telegramda `@BotFather` ga kiring.
2. `/mybots` -> Botingizni tanlang (`@Misol_ishladim_bot`).
3. **Bot Settings** -> **Menu Button** -> **Configure menu button**.
4. GitHub Pages bergan havolani yuboring.
5. Tugma nomiga: `🧮 Kalkulyator` deb yozing.
6. Endi har qanday foydalanuvchi botga kirganda chap burchakda avtomatik ochiladigan Mini App paydo bo'ladi!
