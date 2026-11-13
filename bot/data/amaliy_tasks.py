"""
Oliy algebra 1-15 Amaliy mashg'ulotlar fayllari topshiriqlari va yechimlari to'liq ma'lumotlar bazasi.
Darslikdagi rasmiy 'Mustaqil ishlash uchun misol va masalalar' hamda talabalarning 5-variantlari to'liq kiritilgan.
"""

AMALIY_DATA = {
    1: {
        "title": '1-Amaliy: Matritsalar va ular ustida amallar',
        "file": 'Amaliy 1 Matritsalar va ular ustida amallar.pdf',
        "tasks": [
            {
                "id": 'af1_t1_a',
                "name": "1-topshiriq (a): A + B qo'shish",
                "shart": '[[1, 2], [3, 4]] + [[-1, 3], [0, 2]]',
                "solution": "📝 <b>1-Amaliy, 1-topshiriq (a) yechimi:</b>\n\nA = [[1, 2], [3, 4]], B = [[-1, 3], [0, 2]]\n\nMos elementlarni qo'shamiz:\n• c_11 = 1 + (-1) = 0\n• c_12 = 2 + 3 = 5\n• c_21 = 3 + 0 = 3\n• c_22 = 4 + 2 = 6\n\n✅ <b>Javob:</b> A + B = <code>[[0, 5], [3, 6]]</code>"
            },
            {
                "id": 'af1_t1',
                "name": '1-topshiriq (b): 3A - B chiziqli amali',
                "shart": '3 · [[4, -3], [2, 3]] - [[1, 1], [1, 1]]',
                "solution": '📝 <b>1-Amaliy, 1-topshiriq (b) yechimi:</b>\n\nA = [[4, -3], [2, 3]], B = [[1, 1], [1, 1]]\n\n<b>1-qadam:</b> 3 · A = [[12, -9], [6, 9]]\n<b>2-qadam:</b> 3A - B = [[12-1, -9-1], [6-1, 9-1]] = [[11, -10], [5, 8]]\n\n✅ <b>Javob:</b> <code>[[11, -10], [5, 8]]</code>'
            },
            {
                "id": 'af1_t1_c',
                "name": '1-topshiriq (c): 4A + 5B chiziqli amali',
                "shart": '4 · [[1, 2], [2, 1]] + 5 · [[-1, -1], [3, 0]]',
                "solution": '📝 <b>1-Amaliy, 1-topshiriq (c) yechimi:</b>\n\n• 4 · [[1, 2], [2, 1]] = [[4, 8], [8, 4]]\n• 5 · [[-1, -1], [3, 0]] = [[-5, -5], [15, 0]]\n• 4A + 5B = [[4-5, 8-5], [8+15, 4+0]] = [[-1, 3], [23, 4]]\n\n✅ <b>Javob:</b> <code>[[-1, 3], [23, 4]]</code>'
            },
            {
                "id": 'af1_t2_a',
                "name": "2-topshiriq (a): 2x2 Ko'paytirish",
                "shart": '[[2, 1], [3, 2]] · [[1, -1], [1, 1]]',
                "solution": '📝 <b>1-Amaliy, 2-topshiriq (a) yechimi:</b>\n\n• c_11 = 2·1 + 1·1 = 2 + 1 = 3\n• c_12 = 2·(-1) + 1·1 = -2 + 1 = -1\n• c_21 = 3·1 + 2·1 = 3 + 2 = 5\n• c_22 = 3·(-1) + 2·1 = -3 + 2 = -1\n\n✅ <b>Javob:</b> A · B = <code>[[3, -1], [5, -1]]</code>'
            },
            {
                "id": 'af1_t2_b',
                "name": "2-topshiriq (b): 2x2 Ko'paytirish",
                "shart": '[[3, -2], [5, -4]] · [[3, 4], [2, 5]]',
                "solution": '📝 <b>1-Amaliy, 2-topshiriq (b) yechimi:</b>\n\n• c_11 = 3·3 + (-2)·2 = 9 - 4 = 5\n• c_12 = 3·4 + (-2)·5 = 12 - 10 = 2\n• c_21 = 5·3 + (-4)·2 = 15 - 8 = 7\n• c_22 = 5·4 + (-4)·5 = 20 - 20 = 0\n\n✅ <b>Javob:</b> A · B = <code>[[5, 2], [7, 0]]</code>'
            },
            {
                "id": 'af1_t2_c',
                "name": "2-topshiriq (c): 2x3 va 3x2 Ko'paytirish",
                "shart": '[[1, -2, 3], [4, 5, -6]] · [[1, 2], [3, 4], [5, 6]]',
                "solution": '📝 <b>1-Amaliy, 2-topshiriq (c) yechimi:</b>\n\n• c_11 = 1·1 + (-2)·3 + 3·5 = 1 - 6 + 15 = 10\n• c_12 = 1·2 + (-2)·4 + 3·6 = 2 - 8 + 18 = 12\n• c_21 = 4·1 + 5·3 + (-6)·5 = 4 + 15 - 30 = -11\n• c_22 = 4·2 + 5·4 + (-6)·6 = 8 + 20 - 36 = -8\n\n✅ <b>Javob:</b> <code>[[10, 12], [-11, -8]]</code>'
            },
            {
                "id": 'af1_t3',
                "name": "3-topshiriq (b): 3x3 Ko'paytirish",
                "shart": '[[1, 2, 1], [0, 1, 2], [3, 1, 1]] · [[1, 0, 1], [2, 1, 0], [1, 1, 2]]',
                "solution": "📝 <b>1-Amaliy, 3-topshiriq (b) yechimi:</b>\n\nSatrlarni ustunlarga ko'paytiramiz:\n• 1-satr: [6, 3, 3]\n• 2-satr: [4, 3, 4]\n• 3-satr: [6, 2, 5]\n\n✅ <b>Javob:</b> <code>[[6, 3, 3], [4, 3, 4], [6, 2, 5]]</code>"
            },
            {
                "id": 'af1_t4',
                "name": '4-topshiriq: A · A^T transponirlash',
                "shart": 'A = [[3, 2, 1, 2], [4, 1, 1, 3]] uchun A · A^T ni hisoblang.',
                "solution": '📝 <b>1-Amaliy, 4-topshiriq yechimi:</b>\n\nA = [[3, 2, 1, 2], [4, 1, 1, 3]]\nA^T = [[3, 4], [2, 1], [1, 1], [2, 3]]\n\nA · A^T (2x2 matritsa):\n• c_11 = 3² + 2² + 1² + 2² = 18\n• c_12 = 3·4 + 2·1 + 1·1 + 2·3 = 21\n• c_21 = 21\n• c_22 = 4² + 1² + 1² + 3² = 27\n\n✅ <b>Javob:</b> A · A^T = <code>[[18, 21], [21, 27]]</code>'
            },
            {
                "id": 'af1_t5',
                "name": '5-topshiriq: A³ Matritsa darajasi',
                "shart": 'A = [[1, 1], [0, 1]] uchun A³ ni hisoblang.',
                "solution": '📝 <b>1-Amaliy, 5-topshiriq yechimi:</b>\n\nA = [[1, 1], [0, 1]]\n• A² = [[1, 2], [0, 1]]\n• A³ = [[1, 3], [0, 1]]\nUmumiy qoida: A^n = [[1, n], [0, 1]]\n\n✅ <b>Javob:</b> A³ = <code>[[1, 3], [0, 1]]</code>'
            },
            {
                "id": 'af1_var5',
                "name": '⭐ 5-Variant: Individual topshiriq',
                "shart": 'A = [[2, 4], [1, 3]], B = [[3, -1], [2, 5]]. 2A - 3B va A · B ni hisoblang.',
                "solution": "📝 <b>1-Amaliy, 5-Variant yechimi:</b>\n\nA = [[2, 4], [1, 3]], B = [[3, -1], [2, 5]]\n\n<b>1) 2A - 3B chiziqli amali:</b>\n• 2A = [[4, 8], [2, 6]]\n• 3B = [[9, -3], [6, 15]]\n• 2A - 3B = [[-5, 11], [-4, -9]]\n\n<b>2) A · B ko'paytmasi:</b>\n• c_11 = 2·3 + 4·2 = 14\n• c_12 = 2·(-1) + 4·5 = 18\n• c_21 = 1·3 + 3·2 = 9\n• c_22 = 1·(-1) + 3·5 = 14\n\n✅ <b>Javob:</b>\n2A - 3B = <code>[[-5, 11], [-4, -9]]</code>\nA · B = <code>[[14, 18], [9, 14]]</code>"
            },
        ]
    },
    2: {
        "title": '2-Amaliy: O‘rinlashtirish va o‘rin almashtirish',
        "file": 'Amaliy 2  O‘rinlashtirish va o‘rin almashtirish.pdf',
        "tasks": [
            {
                "id": 'af2_t1',
                "name": '1-topshiriq: p = (3, 5, 1, 4, 2) inversiyalari',
                "shart": "p = (3, 5, 1, 4, 2) o'rin almashtirish inversiyalar soni va juft/toqligini aniqlang.",
                "solution": "📝 <b>2-Amaliy, 1-topshiriq yechimi:</b>\n\np = (3, 5, 1, 4, 2)\nInversiyalar (katta son kichigidan oldin kelgan holatlar):\n• 3 soni uchun: (3, 1), (3, 2) -> 2 ta\n• 5 soni uchun: (5, 1), (5, 4), (5, 2) -> 3 ta\n• 1 soni uchun: 0 ta\n• 4 soni uchun: (4, 2) -> 1 ta\n• 2 soni uchun: 0 ta\n\nJami inversiyalar soni: <b>I(p) = 2 + 3 + 0 + 1 + 0 = 6</b>\n6 juft son bo'lgani uchun o'rin almashtirish <b>JUFT</b>.\n\n✅ <b>Javob:</b> Inversiyalar soni = 6, <b>Juft</b> o'rin almashtirish."
            },
            {
                "id": 'af2_t2',
                "name": '2-topshiriq: p = (2, 4, 1, 5, 3) inversiyalari',
                "shart": 'p = (2, 4, 1, 5, 3) inversiyalar soni va juft-toqligi',
                "solution": "📝 <b>2-Amaliy, 2-topshiriq yechimi:</b>\n\np = (2, 4, 1, 5, 3)\n• 2 soni uchun: (2, 1) -> 1 ta\n• 4 soni uchun: (4, 1), (4, 3) -> 2 ta\n• 1 soni uchun: 0 ta\n• 5 soni uchun: (5, 3) -> 1 ta\n• 3 soni uchun: 0 ta\n\nJami inversiyalar: <b>I(p) = 1 + 2 + 0 + 1 + 0 = 4</b>\n4 juft son bo'lgani uchun o'rin almashtirish <b>JUFT</b>.\n\n✅ <b>Javob:</b> Inversiyalar = 4, <b>Juft</b>."
            },
            {
                "id": 'af2_t3',
                "name": "3-topshiriq: O'rniga qo'yishlar ko'paytmasi",
                "shart": 'sigma1 = ((1, 2, 3, 4), (4, 1, 3, 2)) · sigma2 = ((1, 2, 3, 4), (3, 2, 4, 1))',
                "solution": "📝 <b>2-Amaliy, 3-topshiriq yechimi:</b>\n\nKo'paytirish qoidasi: (σ₁ · σ₂)(i) = σ₁(σ₂(i))\n\n• i = 1: σ₂(1) = 3 -> σ₁(3) = 3 => (σ₁ · σ₂)(1) = 3\n• i = 2: σ₂(2) = 2 -> σ₁(2) = 1 => (σ₁ · σ₂)(2) = 1\n• i = 3: σ₂(3) = 4 -> σ₁(4) = 2 => (σ₁ · σ₂)(3) = 2\n• i = 4: σ₂(4) = 1 -> σ₁(1) = 4 => (σ₁ · σ₂)(4) = 4\n\n✅ <b>Javob:</b> ((1, 2, 3, 4), (3, 1, 2, 4))"
            },
            {
                "id": 'af2_t4',
                "name": "4-topshiriq: Teskari o'rniga qo'yish (σ⁻¹)",
                "shart": 'sigma = ((1, 2, 3, 4, 5), (3, 5, 1, 4, 2)) ning teskarisini toping.',
                "solution": "📝 <b>2-Amaliy, 4-topshiriq yechimi:</b>\n\nσ = ((1, 2, 3, 4, 5), (3, 5, 1, 4, 2))\nTeskari o'rniga qo'yish uchun satrlarni almashtirib, yuqori satrni tartiblaymiz:\n• 3 -> 1\n• 5 -> 2\n• 1 -> 3\n• 4 -> 4\n• 2 -> 5\n\nTartiblangan holda:\n1 -> 3, 2 -> 5, 3 -> 1, 4 -> 4, 5 -> 2\n\n✅ <b>Javob:</b> σ⁻¹ = <code>((1, 2, 3, 4, 5), (3, 5, 1, 4, 2))</code>"
            },
            {
                "id": 'af2_var5',
                "name": '⭐ 5-Variant: p = (4, 3, 1, 5, 2)',
                "shart": 'p = (4, 3, 1, 5, 2) inversiyalari va disyukt tsikllarga ajrating.',
                "solution": "📝 <b>2-Amaliy, 5-Variant yechimi:</b>\n\np = (4, 3, 1, 5, 2)\n<b>1) Inversiyalar:</b>\n• 4 soni: (4, 3), (4, 1), (4, 2) -> 3 ta\n• 3 soni: (3, 1), (3, 2) -> 2 ta\n• 1 soni: 0 ta\n• 5 soni: (5, 2) -> 1 ta\n• 2 soni: 0 ta\nJami: <b>I(p) = 3 + 2 + 0 + 1 + 0 = 6 (Juft)</b>\n\n<b>2) Disyukt tsikllarga ajratish:</b>\n1 -> 4 -> 5 -> 2 -> 3 -> 1\nBitta 5-uzunlikdagi tsikl hosil bo'ladi: <b>(1 4 5 2 3)</b>\n\n✅ <b>Javob:</b> I(p) = 6 (Juft), Disyukt tsikl: <code>(1 4 5 2 3)</code>"
            },
        ]
    },
    3: {
        "title": '3-Amaliy: n-tartibli determinantlar va ularning xossalari',
        "file": 'Amaliy 3  n-tartibli determinantlar va ularning xossalari.pdf',
        "tasks": [
            {
                "id": 'af3_t1_a',
                "name": '1-topshiriq (a): 2-tartibli determinant',
                "shart": 'det [[5, 2], [7, 3]]',
                "solution": '📝 <b>3-Amaliy, 1-topshiriq (a) yechimi:</b>\n\n| 5  2 |\n| 7  3 | = 5·3 - 2·7 = 15 - 14 = 1\n\n✅ <b>Javob:</b> <code>1</code>'
            },
            {
                "id": 'af3_t1_b',
                "name": '1-topshiriq (b): 2-tartibli determinant',
                "shart": 'det [[1, 2], [3, 4]]',
                "solution": '📝 <b>3-Amaliy, 1-topshiriq (b) yechimi:</b>\n\n| 1  2 |\n| 3  4 | = 1·4 - 2·3 = 4 - 6 = -2\n\n✅ <b>Javob:</b> <code>-2</code>'
            },
            {
                "id": 'af3_t1_c',
                "name": '1-topshiriq (c): 2-tartibli determinant',
                "shart": 'det [[3, 2], [8, 5]]',
                "solution": '📝 <b>3-Amaliy, 1-topshiriq (c) yechimi:</b>\n\n| 3  2 |\n| 8  5 | = 3·5 - 2·8 = 15 - 16 = -1\n\n✅ <b>Javob:</b> <code>-1</code>'
            },
            {
                "id": 'af3_t2',
                "name": '2-topshiriq: 3x3 Sarryus qoidasi',
                "shart": 'det [[2, 1, 3], [5, 3, 2], [1, 4, 3]]',
                "solution": "📝 <b>3-Amaliy, 2-topshiriq yechimi:</b>\n\nA = [[2, 1, 3], [5, 3, 2], [1, 4, 3]]\nSarryus qoidasi bo'yicha:\nMusbat hadlar:\n• 2·3·3 = 18\n• 1·2·1 = 2\n• 3·5·4 = 60\nYig'indi = 18 + 2 + 60 = 80\n\nManfiy hadlar:\n• 3·3·1 = 9\n• 2·2·4 = 16\n• 1·5·3 = 15\nYig'indi = 9 + 16 + 15 = 40\n\nDeterminant: 80 - 40 = 40\n\n✅ <b>Javob:</b> |A| = <b>40</b>"
            },
            {
                "id": 'af3_t3',
                "name": '3-topshiriq: 4-tartibli determinant (Gauss usuli)',
                "shart": 'det [[1, 1, 1, 1], [1, 2, 3, 4], [1, 3, 6, 10], [1, 4, 10, 20]]',
                "solution": "📝 <b>3-Amaliy, 3-topshiriq yechimi:</b>\n\nElementar almashtirishlar orqali uchburchak ko'rinishga keltiramiz:\n1-qadam: 1-satrni 2, 3, 4-satrlardan ayiramiz:\n[[1, 1, 1, 1], [0, 1, 2, 3], [0, 2, 5, 9], [0, 3, 9, 19]]\n\n2-qadam: 2-satr yordamida pastdagilarni nollaymiz:\n[[1, 1, 1, 1], [0, 1, 2, 3], [0, 0, 1, 3], [0, 0, 3, 10]]\n\n3-qadam: 3-satrni 3 ga ko'paytirib 4-satrdan ayiramiz:\n[[1, 1, 1, 1], [0, 1, 2, 3], [0, 0, 1, 3], [0, 0, 0, 1]]\n\nBosh diagonallar ko'paytmasi: 1 · 1 · 1 · 1 = 1\n\n✅ <b>Javob:</b> |A| = <b>1</b>"
            },
            {
                "id": 'af3_var5',
                "name": '⭐ 5-Variant: 3x3 Determinant',
                "shart": 'det [[3, 2, 1], [2, 5, 3], [3, 4, 2]]',
                "solution": '📝 <b>3-Amaliy, 5-Variant yechimi:</b>\n\nA = [[3, 2, 1], [2, 5, 3], [3, 4, 2]]\n|A| = 3·(5·2 - 3·4) - 2·(2·2 - 3·3) + 1·(2·4 - 5·3)\n• 3 · (10 - 12) = 3 · (-2) = -6\n• -2 · (4 - 9) = -2 · (-5) = +10\n• 1 · (8 - 15) = 1 · (-7) = -7\n\n|A| = -6 + 10 - 7 = -3\n\n✅ <b>Javob:</b> |A| = <b>-3</b>'
            },
        ]
    },
    4: {
        "title": '4-Amaliy: Minor va algebraik to‘ldiruvchi',
        "file": 'Amaliy 4  Minor va algebraik to‘ldiruvchi.pdf',
        "tasks": [
            {
                "id": 'af4_t1',
                "name": "1-topshiriq: Satr bo'yicha Laplas yoyilmasi",
                "shart": "A = [[1, 2, 3], [0, 4, 5], [1, 0, 6]] determinantini 1-satr bo'yicha hisoblang.",
                "solution": "📝 <b>4-Amaliy, 1-topshiriq yechimi:</b>\n\nLaplas teoremasi 1-satr bo'yicha: |A| = a_11 A_11 + a_12 A_12 + a_13 A_13\n• a_11 = 1, M_11 = |[4, 5], [0, 6]| = 24 - 0 = 24 => A_11 = +24\n• a_12 = 2, M_12 = |[0, 5], [1, 6]| = 0 - 5 = -5 => A_12 = -(-5) = 5\n• a_13 = 3, M_13 = |[0, 4], [1, 0]| = 0 - 4 = -4 => A_13 = +(-4) = -4\n\n|A| = 1·24 + 2·(-(-5)) + 3·(-4) = 24 - 10 + 8 = 22\n\n✅ <b>Javob:</b> |A| = <b>22</b>"
            },
            {
                "id": 'af4_t2',
                "name": "2-topshiriq: Ustun bo'yicha Laplas yoyilmasi",
                "shart": "A = [[2, 3, 1], [4, -2, 3], [3, 1, 4]] ni 1-ustun bo'yicha hisoblang.",
                "solution": "📝 <b>4-Amaliy, 2-topshiriq yechimi:</b>\n\n1-ustun bo'yicha yoyamiz: a_11=2, a_21=4, a_31=3\n• A_11 = +|[-2, 3], [1, 4]| = -8 - 3 = -11\n• A_21 = -|[3, 1], [1, 4]| = -(12 - 1) = -11\n• A_31 = +|[3, 1], [-2, 3]| = 9 - (-2) = 11\n\n|A| = 2·(-11) + 4·(-11) + 3·11 = -22 - 44 + 33 = -33\n\n✅ <b>Javob:</b> |A| = <b>-33</b>"
            },
            {
                "id": 'af4_t3',
                "name": '3-topshiriq: Blokli uchburchak determinant',
                "shart": 'det [[1, 2, 0, 0], [3, 4, 0, 0], [7, 6, 5, 4], [2, 3, 4, 5]]',
                "solution": "📝 <b>4-Amaliy, 3-topshiriq yechimi:</b>\n\nLaplas teoremasi bo'yicha blokli uchburchak matritsa:\n| A_11   0   |\n| A_21  A_22 | = det(A_11) · det(A_22)\n\n• det(A_11) = |[1, 2], [3, 4]| = 4 - 6 = -2\n• det(A_22) = |[5, 4], [4, 5]| = 25 - 16 = 9\n\nJami determinant: -2 · 9 = -18\n\n✅ <b>Javob:</b> |A| = <b>-18</b>"
            },
            {
                "id": 'af4_var5',
                "name": '⭐ 5-Variant: Minorlar va Laplas yoyilmasi',
                "shart": "A = [[2, -1, 3], [1, 4, 2], [3, 1, 5]] matritsaning determinantini 1-satr bo'yicha hisoblang.",
                "solution": "📝 <b>4-Amaliy, 5-Variant yechimi:</b>\n\nA = [[2, -1, 3], [1, 4, 2], [3, 1, 5]]\n1-satr elementlarining algebraik to'ldiruvchilari:\n• A_11 = +|[4, 2], [1, 5]| = 20 - 2 = 18\n• A_12 = -|[1, 2], [3, 5]| = -(5 - 6) = 1\n• A_13 = +|[1, 4], [3, 1]| = 1 - 12 = -11\n\n|A| = 2 · 18 + (-1) · 1 + 3 · (-11) = 36 - 1 - 33 = 2\n\n✅ <b>Javob:</b> |A| = <b>2</b>"
            },
        ]
    },
    5: {
        "title": '5-Amaliy: Teskari matritsa',
        "file": 'Amaliy 5  Teskari matritsa.pdf',
        "tasks": [
            {
                "id": 'af5_t1_a',
                "name": '1-topshiriq (a): 2x2 Teskari matritsa',
                "shart": 'A = [[1, 2], [3, 4]] ning teskarisini toping.',
                "solution": '📝 <b>5-Amaliy, 1-topshiriq (a) yechimi:</b>\n\nA = [[1, 2], [3, 4]]\n• det(A) = 1·4 - 2·3 = -2 ≠ 0\n2x2 matritsa teskarisi formulasi:\nA⁻¹ = (1/det) · [[d, -b], [-c, a]] = (-1/2) · [[4, -2], [-3, 1]]\nA⁻¹ = [[-2, 1], [3/2, -1/2]]\n\n✅ <b>Javob:</b> A⁻¹ = <code>[[-2, 1], [3/2, -1/2]]</code>'
            },
            {
                "id": 'af5_t1_b',
                "name": '1-topshiriq (b): 2x2 Teskari matritsa',
                "shart": 'A = [[3, 4], [5, 7]] ning teskarisini toping.',
                "solution": '📝 <b>5-Amaliy, 1-topshiriq (b) yechimi:</b>\n\nA = [[3, 4], [5, 7]]\n• det(A) = 3·7 - 4·5 = 21 - 20 = 1\nA⁻¹ = (1/1) · [[7, -4], [-5, 3]] = [[7, -4], [-5, 3]]\n\n✅ <b>Javob:</b> A⁻¹ = <code>[[7, -4], [-5, 3]]</code>'
            },
            {
                "id": 'af5_t2',
                "name": '2-topshiriq: 3x3 Teskari matritsa (A⁻¹)',
                "shart": 'A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]] ning teskarisini toping.',
                "solution": "📝 <b>5-Amaliy, 2-topshiriq yechimi:</b>\n\nA = [[1, 2, 3], [0, 1, 4], [5, 6, 0]]\n1. det(A) = 1·(0 - 24) - 2·(0 - 20) + 3·(0 - 5) = -24 + 40 - 15 = 1 ≠ 0\n2. Algebraik to'ldiruvchilar matritsasi C:\n   A_11 = -24, A_12 = 20, A_13 = -5\n   A_21 = 18,  A_22 = -15, A_23 = 4\n   A_31 = 5,   A_32 = -4,  A_33 = 1\n\n3. Transponirlaymiz: C^T = [[-24, 18, 5], [20, -15, -4], [-5, 4, 1]]\ndet(A) = 1 bo'lgani uchun A⁻¹ = C^T\n\n✅ <b>Javob:</b> A⁻¹ = <code>[[-24, 18, 5], [20, -15, -4], [-5, 4, 1]]</code>"
            },
            {
                "id": 'af5_t3',
                "name": '3-topshiriq: Matritsaviy tenglama (AX = B)',
                "shart": '[[1, 2], [3, 4]] · X = [[3, 5], [5, 9]]',
                "solution": "📝 <b>5-Amaliy, 3-topshiriq yechimi:</b>\n\nA · X = B => X = A⁻¹ · B\n• A⁻¹ = [[-2, 1], [3/2, -1/2]]\n• B = [[3, 5], [5, 9]]\n\nX ko'paytmani topamiz:\n• x_11 = -2·3 + 1·5 = -6 + 5 = -1\n• x_12 = -2·5 + 1·9 = -10 + 9 = -1\n• x_21 = (3/2)·3 + (-1/2)·5 = 9/2 - 5/2 = 2\n• x_22 = (3/2)·5 + (-1/2)·9 = 15/2 - 9/2 = 3\n\n✅ <b>Javob:</b> X = <code>[[-1, -1], [2, 3]]</code>"
            },
            {
                "id": 'af5_var5',
                "name": '⭐ 5-Variant: Teskari matritsa',
                "shart": 'A = [[2, 1, 1], [1, 2, 1], [1, 1, 2]] ning teskari matritsasini toping.',
                "solution": "📝 <b>5-Amaliy, 5-Variant yechimi:</b>\n\nA = [[2, 1, 1], [1, 2, 1], [1, 1, 2]]\n1. det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4 ≠ 0\n2. Algebraik to'ldiruvchilar:\n   A_11 = 3, A_12 = -1, A_13 = -1\n   A_21 = -1, A_22 = 3, A_23 = -1\n   A_31 = -1, A_32 = -1, A_33 = 3\n\n3. A⁻¹ = (1/4) · [[3, -1, -1], [-1, 3, -1], [-1, -1, 3]]\n\n✅ <b>Javob:</b> A⁻¹ = <code>[[3/4, -1/4, -1/4], [-1/4, 3/4, -1/4], [-1/4, -1/4, 3/4]]</code>"
            },
        ]
    },
    6: {
        "title": '6-Amaliy: Chiziqli tenglamalar sistemalarini yechish',
        "file": 'Amaliy_6_Chiziqli_tenglamalar_sistemalarini_yechish_usullari.pdf',
        "tasks": [
            {
                "id": 'af6_t1_a',
                "name": "1-topshiriq (a): Kramer usuli (2 noma'lumli)",
                "shart": '2x + 3y = 8\n3x - y = 1',
                "solution": '📝 <b>6-Amaliy, 1-topshiriq (a) yechimi:</b>\n\nKramer usuli:\n• Δ = |[2, 3], [3, -1]| = -2 - 9 = -11\n• Δx = |[8, 3], [1, -1]| = -8 - 3 = -11\n• Δy = |[2, 8], [3, 1]| = 2 - 24 = -22\n\nIldizlar:\nx = Δx / Δ = -11 / -11 = 1\ny = Δy / Δ = -22 / -11 = 2\n\n✅ <b>Javob:</b> x = 1, y = 2'
            },
            {
                "id": 'af6_t1_c',
                "name": "1-topshiriq (c): Kramer usuli (3 noma'lumli)",
                "shart": 'x + y - z = 2\n2x - y + z = 1\nx + 2y - z = 3',
                "solution": '📝 <b>6-Amaliy, 1-topshiriq (c) yechimi:</b>\n\n• Δ = det [[1, 1, -1], [2, -1, 1], [1, 2, -1]] = 3\n• Δx = det [[2, 1, -1], [1, -1, 1], [3, 2, -1]] = 3 => x = 3/3 = 1\n• Δy = det [[1, 2, -1], [2, 1, 1], [1, 3, -1]] = 6 => y = 6/3 = 2\n• Δz = det [[1, 1, 2], [2, -1, 1], [1, 2, 3]] = 3 => z = 3/3 = 1\n\n✅ <b>Javob:</b> x = 1, y = 2, z = 1'
            },
            {
                "id": 'af6_t2',
                "name": '2-topshiriq: Gauss usulida yechish',
                "shart": '2x1 + x2 - x3 = 1\n3x1 - 2x2 + 2x3 = 5\nx1 + x2 + x3 = 6',
                "solution": "📝 <b>6-Amaliy, 2-topshiriq yechimi:</b>\n\nKengaytirilgan matritsani pog'onasimon shaklga keltiramiz:\n[A|B] = [[1, 1, 1 | 6], [2, 1, -1 | 1], [3, -2, 2 | 5]]\n\n1-qadamdan so'ng:\n[[1, 1, 1 | 6], [0, -1, -3 | -11], [0, -5, -1 | -13]]\n\n2-qadamdan so'ng:\n[[1, 1, 1 | 6], [0, 1, 3 | 11], [0, 0, 14 | 42]] => x3 = 42/14 = 3\n\nTeskari yurish:\n• x2 + 3·3 = 11 => x2 = 2\n• x1 + 2 + 3 = 6 => x1 = 1\n\n✅ <b>Javob:</b> x1 = 1, x2 = 2, x3 = 3"
            },
            {
                "id": 'af6_t3',
                "name": '3-topshiriq: Matritsaviy usulda ChTS',
                "shart": 'x + 2y = 5\n3x + 4y = 11',
                "solution": '📝 <b>6-Amaliy, 3-topshiriq yechimi:</b>\n\nA · X = B => X = A⁻¹ · B\n• A = [[1, 2], [3, 4]], B = [[5], [11]]\n• det(A) = -2\n• A⁻¹ = [[-2, 1], [3/2, -1/2]]\n\nX = [[-2, 1], [3/2, -1/2]] · [[5], [11]]:\n• x = -2·5 + 1·11 = 1\n• y = (3/2)·5 + (-1/2)·11 = 15/2 - 11/2 = 2\n\n✅ <b>Javob:</b> x = 1, y = 2'
            },
            {
                "id": 'af6_var5',
                "name": '⭐ 5-Variant: Gauss usulida ChTS',
                "shart": '2x + y + z = 4\nx + 2y + z = 5\nx + y + 2z = 7',
                "solution": '📝 <b>6-Amaliy, 5-Variant yechimi:</b>\n\n[[1, 2, 1 | 5], [2, 1, 1 | 4], [1, 1, 2 | 7]]\n\n1-qadam:\n[[1, 2, 1 | 5], [0, -3, -1 | -6], [0, -1, 1 | 2]]\n\n2-qadam:\n[[1, 2, 1 | 5], [0, 1, -1 | -2], [0, 0, -4 | -12]]\n\nYechimlar:\n• z = -12 / -4 = 3\n• y - 3 = -2 => y = 1\n• x + 2(1) + 3 = 5 => x = 0\n\n✅ <b>Javob:</b> x = 0, y = 1, z = 3'
            },
        ]
    },
    7: {
        "title": '7-Amaliy: Matritsa rangi',
        "file": 'Amaliy 7  Matritsa rangi.pdf',
        "tasks": [
            {
                "id": 'af7_t1',
                "name": '1-topshiriq: Matritsa rangini topish',
                "shart": 'A = [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]',
                "solution": "📝 <b>7-Amaliy, 1-topshiriq yechimi:</b>\n\nA = [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]\nElementar almashtirishlar:\n• 2-satrdan 2 · (1-satr)ni ayiramiz -> [0, 0, 0, 0]\n• 3-satrdan 3 · (1-satr)ni ayiramiz -> [0, 0, 0, 0]\n\nPog'onasimon shakli:\n[[1, 2, 3, 4], [0, 0, 0, 0], [0, 0, 0, 0]]\nNolmas satrlar soni 1 ta bo'lgani uchun:\n<b>rank(A) = 1</b>\n\n✅ <b>Javob:</b> rank(A) = <b>1</b>"
            },
            {
                "id": 'af7_6a',
                "name": '6-topshiriq (a): 4x4 Matritsa rangi',
                "shart": 'A = [[0, 4, 10, 1], [4, 8, 18, 7], [10, 18, 40, 17], [1, 7, 17, 3]]',
                "solution": "📝 <b>7-Amaliy, 6-topshiriq (a) yechimi:</b>\n\nA = [[0, 4, 10, 1], [4, 8, 18, 7], [10, 18, 40, 17], [1, 7, 17, 3]]\nElementar satr almashtirishlari (Gauss usuli):\n1) 1- va 4-satrlar o'rnini almashtiramiz: S1 <-> S4\n2) 2-satrdan 4·S1, 3-satrdan 10·S1 ayiramiz.\n3) Pog'onasimon ko'rinishga keltirilganda 2 ta nolmas satr qoladi.\n\n✅ <b>Javob:</b> rank(A) = <b>2</b>"
            },
            {
                "id": 'af7_6b',
                "name": '6-topshiriq (b): 4x4 Matritsa rangi',
                "shart": 'A = [[2, 1, 11, 2], [1, 0, 4, -1], [11, 4, 56, 5], [2, -1, 5, -6]]',
                "solution": "📝 <b>7-Amaliy, 6-topshiriq (b) yechimi:</b>\n\nA = [[2, 1, 11, 2], [1, 0, 4, -1], [11, 4, 56, 5], [2, -1, 5, -6]]\n1) 1- va 2-satrlar o'rnini almashtiramiz: S1 <-> S2\n2) Elementar almashtirishlar natijasida:\n• 3- va 4-satrlar dastlabki satrlarning chiziqli kombinatsiyasidan iborat bo'lib, nolga aylanadi.\n• Faqat 2 ta chiziqli erkli satr qoladi.\n\n✅ <b>Javob:</b> rank(A) = <b>2</b>"
            },
            {
                "id": 'af7_7a',
                "name": "7-topshiriq (a): O'ralgan minorlar usuli (3x5)",
                "shart": 'A = [[2, -1, 3, -2, 4], [4, -2, 5, 1, 7], [2, -1, 1, 8, 2]]',
                "solution": "📝 <b>7-Amaliy, 7-topshiriq (a) yechimi:</b>\n\nA = [[2, -1, 3, -2, 4], [4, -2, 5, 1, 7], [2, -1, 1, 8, 2]]\nO'ralgan minorlar usuli:\n1) M_2 = |[-1, 3], [-2, 5]| = -5 - (-6) = 1 ≠ 0 (2-tartibli noldan farqli minor).\n2) Ushbu minorni o'rovchi barcha 3-tartibli minorlarni hisoblaymiz:\n• M_3^(1) = 0\n• M_3^(2) = 0\n• M_3^(3) = 0\nBarcha o'rovchi 3-tartibli minorlar 0 ga teng.\n\n✅ <b>Javob:</b> rank(A) = <b>2</b>"
            },
            {
                "id": 'af7_var5',
                "name": '⭐ 5-Variant: 6-topshiriq (e) 5x5 Matritsa rangi',
                "shart": 'A = [[1, 0, 1, 0, 0], [1, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 1, 0], [0, 1, 0, 1, 1]]',
                "solution": "📝 <b>7-Amaliy, 5-Variant yechimi:</b>\n\n5x5 matritsa rangi elementar almashtirishlar yordamida hisoblanadi.\nPog'onasimon ko'rinishga keltirilganda 4 ta chiziqli erkli satr mavjud bo'ladi.\n\n✅ <b>Javob:</b> rank(A) = <b>4</b>"
            },
        ]
    },
    8: {
        "title": '8-Amaliy: Bir jinsli sistema va FYET',
        "file": 'Amaliy_8_Bir_jinsli_chiziqli_tenglamalar_sistemasi_Kroneker_Kopelli.pdf',
        "tasks": [
            {
                "id": 'af8_1c',
                "name": '1-topshiriq (c): 4x3 Bir jinsli sistema (Nolmas yechim)',
                "shart": 'x1 + 3x2 + 2x3 = 0\n2x1 - x2 + 3x3 = 0\n3x1 - 5x2 + 4x3 = 0\nx1 + 17x2 + 4x3 = 0',
                "solution": "📝 <b>8-Amaliy, 1-topshiriq (c) yechimi:</b>\n\nKoeffitsientlar matritsasi:\nA = [[1, 3, 2], [2, -1, 3], [3, -5, 4], [1, 17, 4]]\nElementar satr almashtirishlari orqali:\n• S2 - 2·S1 => [0, -7, -1]\n• S3 - 3·S1 => [0, -14, -2] (2-satrga proporsional)\n• S4 - S1 => [0, 14, 2] (2-satrga proporsional)\n\nNatijada oxirgi ikki satr to'liq nolga aylanadi.\n• rank(A) = 2, noma'lumlar n = 3\n• rank(A) < n bo'lgani sababli sistema <b>nolmas (cheksiz ko'p) yechimlarga ega!</b>\n\nFundamental yechimlar tizimi (k = 3 - 2 = 1 ta vektor):\nx3 = 7 deb olsak, x2 = -1, x1 = -11.\nBazis vektor: <b>e1 = (-11, -1, 7)^T</b>\n\n✅ <b>Umumiy yechim:</b> X = c · (-11, -1, 7)^T, c ∈ ℝ"
            },
            {
                "id": 'af8_1d',
                "name": '1-topshiriq (d): 4x3 Bir jinsli sistema (Trivial yechim)',
                "shart": '3x1 + 5x2 + 2x3 = 0\n4x1 + 7x2 + 5x3 = 0\nx1 + x2 - 4x3 = 0\n2x1 + 9x2 + 6x3 = 0',
                "solution": "📝 <b>8-Amaliy, 1-topshiriq (d) yechimi:</b>\n\nKoeffitsientlar matritsasi:\nA = [[3, 5, 2], [4, 7, 5], [1, 1, -4], [2, 9, 6]]\nGauss almashtirishlari orqali tekshiramiz:\n• rank(A) = 3\n• Noma'lumlar soni n = 3\n\nrank(A) = n bo'lganligi sababli, bir jinsli sistema faqat <b>yagona nol (trivial) yechimga ega:</b>\n\n✅ <b>Javob:</b> x1 = 0, x2 = 0, x3 = 0"
            },
            {
                "id": 'af8_2a',
                "name": '2-topshiriq (a): 3x4 FYET va umumiy yechim',
                "shart": '2x1 - 4x2 + 5x3 + 3x4 = 0\n3x1 - 6x2 + 4x3 + 2x4 = 0\n4x1 - 8x2 + 17x3 + 11x4 = 0',
                "solution": "📝 <b>8-Amaliy, 2-topshiriq (a) yechimi:</b>\n\nA = [[2, -4, 5, 3], [3, -6, 4, 2], [4, -8, 17, 11]]\nPog'onasimon shaklga keltirish:\n• 1-satrni 3 ga, 2-satrni 2 ga ko'paytirib ayirsak: [0, 0, -7, -5]\n• 3-satr 2-satr bilan chiziqli bog'liq bo'lib nolga aylanadi.\n• rank(A) = 2, n = 4 => FYET o'lchami: k = 4 - 2 = 2 ta bazis vektor.\n\nErkin noma'lumlar: x2 va x4:\n1) x2 = 1, x4 = 0 => x3 = 0, x1 = 2 => <b>e1 = (2, 1, 0, 0)^T</b>\n2) x2 = 0, x4 = 7 => x3 = -5, x1 = 2 => <b>e2 = (2, 0, -5, 7)^T</b>\n\n✅ <b>Umumiy yechim:</b> X = c1 · (2, 1, 0, 0)^T + c2 · (2, 0, -5, 7)^T, c1, c2 ∈ ℝ"
            },
            {
                "id": 'af8_2b',
                "name": '2-topshiriq (b): 4x4 FYET va umumiy yechim',
                "shart": 'x1 + 2x2 + 4x3 - 3x4 = 0\n3x1 + 5x2 + 6x3 - 4x4 = 0\n4x1 + 5x2 - 2x3 + 3x4 = 0\n3x1 + 8x2 + 24x3 - 19x4 = 0',
                "solution": "📝 <b>8-Amaliy, 2-topshiriq (b) yechimi:</b>\n\nA = [[1, 2, 4, -3], [3, 5, 6, -4], [4, 5, -2, 3], [3, 8, 24, -19]]\nElementar satr almashtirishlari:\n• S2 - 3S1 => [0, -1, -6, 5]\n• S3 - 4S1 => [0, -3, -18, 15] = 3·S2 (nol satr)\n• S4 - 3S1 => [0, 2, 12, -10] = -2·S2 (nol satr)\n\n• rank(A) = 2, noma'lumlar n = 4 => k = 4 - 2 = 2 ta vektor.\nErkin noma'lumlar: x3 va x4 deb olamiz:\n1) x3 = 1, x4 = 0 => x2 = -6, x1 = 8 => <b>e1 = (8, -6, 1, 0)^T</b>\n2) x3 = 0, x4 = 1 => x2 = 5, x1 = -7 => <b>e2 = (-7, 5, 0, 1)^T</b>\n\n✅ <b>Umumiy yechim:</b> X = c1 · (8, -6, 1, 0)^T + c2 · (-7, 5, 0, 1)^T"
            },
            {
                "id": 'af8_2c',
                "name": '2-topshiriq (c): 4x5 FYET va umumiy yechim',
                "shart": '6x1 - 2x2 + 2x3 + 5x4 + 7x5 = 0\n9x1 - 3x2 + 4x3 + 8x4 + 9x5 = 0\n6x1 - 2x2 + 6x3 + 7x4 + x5 = 0\n3x1 - x2 + 4x3 + 4x4 - x5 = 0',
                "solution": "📝 <b>8-Amaliy, 2-topshiriq (c) yechimi:</b>\n\n• rank(A) = 2, n = 5 ta noma'lum.\n• FYET o'lchami: k = 5 - 2 = 3 ta bazis vektor.\nErkin noma'lumlar: x2, x4, x5.\n\nBazis vektorlar:\n1) x2 = 3 => <b>e1 = (1, 3, 0, 0, 0)^T</b>\n2) x4 = 6 => <b>e2 = (-4, 0, -3, 6, 0)^T</b>\n3) x5 = 6 => <b>e3 = (-10, 0, 9, 0, 6)^T</b>\n\n✅ <b>Umumiy yechim:</b> X = c1·e1 + c2·e2 + c3·e3, c1, c2, c3 ∈ ℝ"
            },
            {
                "id": 'af8_2d',
                "name": '2-topshiriq (d): 6x6 Bir jinsli sistema FYET',
                "shart": 'x1 - x3 = 0\nx2 - x4 = 0\n-x1 + x3 - x5 = 0\n-x2 + x4 - x6 = 0\n-x3 + x5 = 0\n-x4 + x6 = 0',
                "solution": "📝 <b>8-Amaliy, 2-topshiriq (d) yechimi:</b>\n\nTenglamalarni tahlil qilamiz:\n• (x1 - x3) + (-x1 + x3 - x5) = -x5 = 0 => x5 = 0\n• -x3 + x5 = 0 => x3 = 0\n• x1 - x3 = 0 => x1 = 0\n• Xuddi shuningdek juft indekslar uchun: x6 = 0, x4 = 0, x2 = 0.\n\nAsosiy matritsaning rangi: rank(A) = 6 = n.\n\n✅ <b>Javob:</b> Sistema faqat trivial (nol) yechimga ega: x1=x2=x3=x4=x5=x6 = 0"
            },
            {
                "id": 'af8_2e',
                "name": '2-topshiriq (e): 5x6 FYET va umumiy yechim',
                "shart": 'x1 - x3 + x5 = 0\nx2 - x4 + x6 = 0\nx1 - x2 + x5 - x6 = 0\nx2 - x3 + x6 = 0\nx1 - x4 + x5 = 0',
                "solution": "📝 <b>8-Amaliy, 2-topshiriq (e) yechimi:</b>\n\nMatritsa rangi: rank(A) = 3, noma'lumlar n = 6.\nFYET o'lchami: k = n - r = 6 - 3 = 3 ta fundamental vektor.\n\nBazis vektorlar:\n• <b>e1 = (1, 1, 1, 1, 0, 0)^T</b>\n• <b>e2 = (-1, 0, 0, 0, 1, 0)^T</b>\n• <b>e3 = (0, -1, 0, 0, 0, 1)^T</b>\n\n✅ <b>Umumiy yechim:</b> X = c1·e1 + c2·e2 + c3·e3, c1, c2, c3 ∈ ℝ"
            },
            {
                "id": 'af8_var5',
                "name": '⭐ 5-Variant: 2.b topshiriq bo\'yicha FYET',
                "shart": 'x1 + 2x2 + 4x3 - 3x4 = 0\n3x1 + 5x2 + 6x3 - 4x4 = 0\n4x1 + 5x2 - 2x3 + 3x4 = 0\n3x1 + 8x2 + 24x3 - 19x4 = 0',
                "solution": "📝 <b>8-Amaliy, 5-Variant yechimi (2-topshiriq b-bandi):</b>\n\nA = [[1, 2, 4, -3], [3, 5, 6, -4], [4, 5, -2, 3], [3, 8, 24, -19]]\n• rank(A) = 2, n = 4 => k = 2 ta bazis vektor.\n• e1 = (8, -6, 1, 0)^T\n• e2 = (-7, 5, 0, 1)^T\n\n✅ <b>Umumiy yechim:</b> X = c1 · (8, -6, 1, 0)^T + c2 · (-7, 5, 0, 1)^T"
            },
        ]
    },
    9: {
        "title": '9-Amaliy: Kompleks sonlar va amallar',
        "file": 'Amaliy_9_Kompleks_sonlar_va_ular_ustida_amallar_Darajaga_ko‘tarish.pdf',
        "tasks": [
            {
                "id": 'af9_t1',
                "name": '1-topshiriq (a): Arifmetik amallar',
                "shart": 'z1 = 2 + 3i, z2 = 1 - 2i ustida arifmetik amallar',
                "solution": "📝 <b>9-Amaliy, 1-topshiriq (a) yechimi:</b>\n\nz1 = 2 + 3i, z2 = 1 - 2i\n• Qo'shish: z1 + z2 = (2+1) + (3-2)i = 3 + i\n• Ayirish: z1 - z2 = (2-1) + (3-(-2))i = 1 + 5i\n• Ko'paytirish: z1 · z2 = (2·1 - 3·(-2)) + (2·(-2) + 3·1)i = (2+6) + (-4+3)i = 8 - i\n• Bo'lish: z1 / z2 = (2+3i)(1+2i) / (1² + (-2)²) = (2-6 + 4i+3i) / 5 = (-4 + 7i)/5 = -4/5 + (7/5)i\n\n✅ <b>Javob:</b> 8 - i va -4/5 + 7/5 i"
            },
            {
                "id": 'af9_t2',
                "name": '2-topshiriq: Modul va argument',
                "shart": 'z = 1 + i√3 ning moduli, argumenti va trigonometrik shaklini toping.',
                "solution": "📝 <b>9-Amaliy, 2-topshiriq yechimi:</b>\n\nz = 1 + i√3 (a = 1, b = √3)\n1. Modul: r = |z| = √(1² + (√3)²) = √(1 + 3) = √4 = 2\n2. Argument: tg φ = b/a = √3/1 = √3\n   a > 0, b > 0 bo'lgani uchun 1-chorak: φ = π/3 (60°)\n3. Trigonometrik shakl: z = 2 · (cos(π/3) + i·sin(π/3))\n\n✅ <b>Javob:</b> r = 2, φ = π/3, z = 2·(cos π/3 + i·sin π/3)"
            },
            {
                "id": 'af9_t3',
                "name": "3-topshiriq: Ko'rsatkichli shakl (Eyler formulasi)",
                "shart": "z = -1 - i kompleks sonni ko'rsatkichli shaklga keltiring.",
                "solution": '📝 <b>9-Amaliy, 3-topshiriq yechimi:</b>\n\nz = -1 - i (a = -1, b = -1)\n• Modul: r = √((-1)² + (-1)²) = √2\n• Argument: 3-chorakda joylashgan:\n  φ = -π + arctg((-1)/(-1)) = -π + π/4 = -3π/4\n• Eyler formulasi: z = r · e^(iφ)\n  z = √2 · e^(-i 3π/4)\n\n✅ <b>Javob:</b> z = <code>√2 · e^(-i 3π/4)</code>'
            },
            {
                "id": 'af9_var5',
                "name": '⭐ 5-Variant: z1 = 4+3i, z2 = 2-i',
                "shart": 'z1 = 4 + 3i, z2 = 2 - i ustida arifmetik amallar va modul/argument.',
                "solution": "📝 <b>9-Amaliy, 5-Variant yechimi:</b>\n\nz1 = 4 + 3i, z2 = 2 - i\n• Yig'indi: z1 + z2 = 6 + 2i\n• Ko'paytma: z1 · z2 = (4·2 - 3·(-1)) + (4·(-1) + 3·2)i = (8+3) + (-4+6)i = 11 + 2i\n• Bo'linma: z1 / z2 = (4+3i)(2+i) / (4+1) = (8-3 + 4i+6i) / 5 = (5 + 10i)/5 = 1 + 2i\n• Modul |z1| = √(4² + 3²) = √25 = 5\n\n✅ <b>Javob:</b> Yig'indi: 6 + 2i; Ko'paytma: 11 + 2i; Bo'linma: 1 + 2i"
            },
        ]
    },
    10: {
        "title": '10-Amaliy: Muavr formulasi va ildiz chiqarish',
        "file": 'Amaliy_10_Kompleks_sonni_darajaga_ko‘tarish_va_ildiz_chiqarish.pdf',
        "tasks": [
            {
                "id": 'af10_t1',
                "name": '1-topshiriq: (1 + i)^25 Muavr formulasi',
                "shart": '(1 + i)^25 ifodaning qiymatini Muavr formulasi bilan toping.',
                "solution": "📝 <b>10-Amaliy, 1-topshiriq yechimi:</b>\n\nz = 1 + i sonining trigonometrik shakli:\n• r = √(1² + 1²) = √2 = 2^(1/2)\n• φ = π/4\n\nMuavr formulasi bo'yicha: z^n = r^n · (cos(nφ) + i·sin(nφ))\n• r^25 = (√2)^25 = 2^12 · √2 = 4096√2\n• 25 · (π/4) = 6π + π/4\n• cos(6π + π/4) = cos(π/4) = √2 / 2\n• sin(6π + π/4) = sin(π/4) = √2 / 2\n\nz^25 = 4096√2 · (√2/2 + i·√2/2) = 4096 · (1 + i) = 4096 + 4096i\n\n✅ <b>Javob:</b> <code>4096 + 4096i</code>"
            },
            {
                "id": 'af10_t2',
                "name": '2-topshiriq: (1 + i√3)^20 darajasi',
                "shart": '(1 + i√3)^20 ifodani hisoblang.',
                "solution": '📝 <b>10-Amaliy, 2-topshiriq yechimi:</b>\n\nz = 1 + i√3\n• r = 2, φ = π/3\n• z^20 = 2^20 · (cos(20π/3) + i·sin(20π/3))\n• 20π/3 = 6π + 2π/3\n• cos(2π/3) = -1/2\n• sin(2π/3) = √3/2\n\nz^20 = 2^20 · (-1/2 + i·√3/2) = 2^19 · (-1 + i√3)\n2^19 = 524288 => -524288 + 524288√3 i\n\n✅ <b>Javob:</b> <code>2^19 · (-1 + i√3)</code>'
            },
            {
                "id": 'af10_t3',
                "name": '3-topshiriq: 1 ning 3-darajali ildizlari',
                "shart": 'w = ∛1 barcha 3 ta kompleks ildizini toping.',
                "solution": '📝 <b>10-Amaliy, 3-topshiriq yechimi:</b>\n\n1 soni trigonometrik shaklda: 1 = 1 · (cos 0 + i·sin 0)\nIldiz formulasi: w_k = ∛1 · [cos((0 + 2πk)/3) + i·sin((0 + 2πk)/3)], k = 0, 1, 2\n\n• k = 0: w_0 = cos 0 + i·sin 0 = 1\n• k = 1: w_1 = cos(2π/3) + i·sin(2π/3) = -1/2 + (√3/2)i\n• k = 2: w_2 = cos(4π/3) + i·sin(4π/3) = -1/2 - (√3/2)i\n\n✅ <b>Javob:</b> 1, -1/2 + (√3/2)i, -1/2 - (√3/2)i'
            },
            {
                "id": 'af10_t4',
                "name": '4-topshiriq: (√3 - i)^10 darajasi',
                "shart": '(√3 - i)^10 ifodaning qiymatini toping.',
                "solution": '📝 <b>10-Amaliy, 4-topshiriq yechimi:</b>\n\nz = √3 - i\n• r = √(3 + 1) = 2\n• φ = -π/6\n• z^10 = 2^10 · [cos(-10π/6) + i·sin(-10π/6)]\n  -5π/3 = 2π - 5π/3 = π/3\n• cos(π/3) = 1/2, sin(π/3) = √3/2\n• z^10 = 1024 · (1/2 + i·√3/2) = 512 + 512√3 i\n\n✅ <b>Javob:</b> <code>512 + 512√3 i</code>'
            },
            {
                "id": 'af10_var5',
                "name": '⭐ 5-Variant: ⁴√(-16) ildizlari',
                "shart": 'w = ⁴√(-16) barcha 4 ta kompleks ildizini toping.',
                "solution": "📝 <b>10-Amaliy, 5-Variant yechimi:</b>\n\n-16 soni trigonometrik shaklda: -16 = 16 · (cos π + i·sin π)\n⁴√16 = 2 bo'lgani uchun:\nw_k = 2 · [cos((π + 2πk)/4) + i·sin((π + 2πk)/4)], k = 0, 1, 2, 3\n\n• k = 0: 2·(cos π/4 + i·sin π/4) = 2·(√2/2 + i·√2/2) = √2 + i√2\n• k = 1: 2·(cos 3π/4 + i·sin 3π/4) = -√2 + i√2\n• k = 2: 2·(cos 5π/4 + i·sin 5π/4) = -√2 - i√2\n• k = 3: 2·(cos 7π/4 + i·sin 7π/4) = √2 - i√2\n\n✅ <b>Javob:</b> ±√2 ± i√2 (4 ta ildiz)"
            },
        ]
    },
    11: {
        "title": "11-Amaliy: Ko‘phadlar va qoldiqli bo'linish",
        "file": "Amaliy_11_Ko'phadlar_va_ular_ustida_amallar_Ko‘phadlarning_bo'linish.pdf",
        "tasks": [
            {
                "id": 'af11_t1',
                "name": "1-topshiriq: Burchakli qoldiqli bo'lish",
                "shart": "f(x) = 2x^4 - 3x^3 + 4x^2 - 5x + 6 ko'phadni g(x) = x^2 - 3x + 1 ga bo'ling.",
                "solution": "📝 <b>11-Amaliy, 1-topshiriq yechimi:</b>\n\nBurchakli bo'lish algoritmi:\n1) 2x⁴ / x² = 2x² => qoldiq: 3x³ + 2x² - 5x + 6\n2) 3x³ / x² = 3x => qoldiq: 11x² - 8x + 6\n3) 11x² / x² = 11 => qoldiq: 25x - 5\n\nBo'linma: Q(x) = 2x² + 3x + 11\nQoldiq: R(x) = 25x - 5\n\n✅ <b>Javob:</b> Q(x) = 2x² + 3x + 11, R(x) = 25x - 5"
            },
            {
                "id": 'af11_t2',
                "name": "2-topshiriq: Qoldiqsiz bo'linish shartlari",
                "shart": "f(x) = x^3 + px + q ko'phad g(x) = x^2 + mx - 1 ga qoldiqsiz bo'linishi shartlarini toping.",
                "solution": "📝 <b>11-Amaliy, 2-topshiriq yechimi:</b>\n\nx³ + px + q ni x² + mx - 1 ga burchakli bo'lamiz:\nx³ / x² = x\n(x³ + px + q) - (x³ + mx² - x) = -mx² + (p + 1)x + q\n\nKeyingi qadam: -mx² / x² = -m\nQoldiq: R(x) = [(p + 1) + m²]x + (q - m)\n\nBo'linish sharti: R(x) ≡ 0:\n1) q - m = 0 => <b>m = q</b>\n2) p + 1 + m² = 0 => <b>p = -q² - 1</b>\n\n✅ <b>Javob:</b> Shart: <code>p = -q² - 1</code>, <code>m = q</code>"
            },
            {
                "id": 'af11_t3',
                "name": "3-topshiriq: Ko'phadlar chiziqli amali",
                "shart": '3 · (x^3 - 2x + 1) - 2 · (2x^3 + x^2 - 4)',
                "solution": '📝 <b>11-Amaliy, 3-topshiriq yechimi:</b>\n\n• 3 · (x³ - 2x + 1) = 3x³ - 6x + 3\n• 2 · (2x³ + x² - 4) = 4x³ + 2x² - 8\nAyiramiz:\n(3x³ - 6x + 3) - (4x³ + 2x² - 8) = -x³ - 2x² - 6x + 11\n\n✅ <b>Javob:</b> <code>-x³ - 2x² - 6x + 11</code>'
            },
            {
                "id": 'af11_var5',
                "name": "⭐ 5-Variant: Qoldiqli bo'lish",
                "shart": "f(x) = 3x^4 + 2x^3 - 5x^2 + 2x - 7 ni g(x) = x^2 + 2x - 3 ga bo'ling.",
                "solution": "📝 <b>11-Amaliy, 5-Variant yechimi:</b>\n\nf(x) = 3x⁴ + 2x³ - 5x² + 2x - 7\ng(x) = x² + 2x - 3\n\n1) 3x⁴ / x² = 3x² => ayirganda: -4x³ + 4x² + 2x - 7\n2) -4x³ / x² = -4x => ayirganda: 12x² - 10x - 7\n3) 12x² / x² = 12 => ayirganda: -34x + 29\n\nBo'linma: Q(x) = 3x² - 4x + 12\nQoldiq: R(x) = -34x + 29\n\n✅ <b>Javob:</b> Q(x) = 3x² - 4x + 12, R(x) = -34x + 29"
            },
        ]
    },
    12: {
        "title": '12-Amaliy: Ko‘phadlarning EKUBi (Yevklid)',
        "file": 'Amaliy 12   Ko‘phadlarning EKUB.pdf',
        "tasks": [
            {
                "id": 'af12_t1',
                "name": '1-topshiriq: Yevklid algoritmi',
                "shart": 'f(x) = x^4 + x^3 - 3x^2 - 4x - 1 va g(x) = x^3 + x^2 - x - 1 larning EKUBini toping.',
                "solution": "📝 <b>12-Amaliy, 1-topshiriq yechimi:</b>\n\nf(x) = x⁴ + x³ - 3x² - 4x - 1, g(x) = x³ + x² - x - 1\n\n1-qadam: f(x) ni g(x) ga bo'lamiz:\nf(x) = g(x) · x + r1(x), bu yerda r1(x) = -2x² - 3x - 1\n\n2-qadam: g(x) ni r1(x) ga bo'lamiz:\ng(x) ni -(2x² + 3x + 1) ga bo'lsak, qoldiq r2(x) = -(x + 1) chiqadi.\n\n3-qadam: r1(x) ni (x + 1) ga bo'lsak, qoldiq 0 chiqadi.\nOxirgi noldan farqli qoldiq x + 1 ko'phaddir.\n\n✅ <b>Javob:</b> EKUB = <b>x + 1</b>"
            },
            {
                "id": 'af12_t2',
                "name": '2-topshiriq: EKUB chiziqli ifodasi',
                "shart": 'd(x) = EKUB(f, g) ni u(x)f(x) + v(x)g(x) chiziqli kombinatsiya shaklida ifodalang.',
                "solution": "📝 <b>12-Amaliy, 2-topshiriq yechimi:</b>\n\nYevklid algoritmining teskari yurishi (Bezout ayniyati):\n1) r1(x) = f(x) - x · g(x)\n2) r2(x) = g(x) - q1(x) · r1(x)\nr1(x) ni o'rniga qo'ysak:\nr2(x) = g(x) - q1(x) · [f(x) - x · g(x)] = -q1(x) · f(x) + [1 + x · q1(x)] · g(x)\n\nBunda u(x) va v(x) ko'phadlar bir qiymatli topiladi.\n\n✅ <b>Javob:</b> EKUB(f, g) = <b>x + 1</b>, chiziqli ifodalanishi mavjud."
            },
            {
                "id": 'af12_t3',
                "name": '3-topshiriq: Yevklid algoritmi',
                "shart": 'f(x) = x^5 + 3x^4 + x^3 + x^2 + 3x + 1 va g(x) = x^4 + 2x^3 + x + 2 EKUBini toping.',
                "solution": "📝 <b>12-Amaliy, 3-topshiriq yechimi:</b>\n\nf(x) = x⁵ + 3x⁴ + x³ + x² + 3x + 1, g(x) = x⁴ + 2x³ + x + 2\n\n1) f(x) ni g(x) ga bo'lsak: bo'linma x + 1, qoldiq r1(x) = -x³ - x = -x(x² + 1)\n2) g(x) ni x² + 1 ga bo'lsak: qoldiq 0 chiqadi!\nOxirgi noldan farqli umumiy bo'luvchi x² + 1 bo'ladi.\n\n✅ <b>Javob:</b> EKUB = <b>x² + 1</b>"
            },
            {
                "id": 'af12_var5',
                "name": '⭐ 5-Variant: EKUB(f, g)',
                "shart": 'f(x) = x^4 - 2x^3 + x^2 - x - 2, g(x) = x^3 - x^2 - x - 2 ning EKUBini toping.',
                "solution": "📝 <b>12-Amaliy, 5-Variant yechimi:</b>\n\nf(x) = x⁴ - 2x³ + x² - x - 2\ng(x) = x³ - x² - x - 2\n\n1-qadam: f(x) ni g(x) ga bo'lamiz:\nf(x) = g(x) · (x - 1) + (x² - 2x)\n\n2-qadam: g(x) ni (x² - 2x) ga bo'lamiz:\ng(x) = (x² - 2x) · (x + 1) + (x - 2)\n\n3-qadam: (x² - 2x) ni (x - 2) ga bo'lamiz: qoldiq 0!\nOxirgi noldan farqli qoldiq x - 2.\n\n✅ <b>Javob:</b> EKUB(f, g) = <b>x - 2</b>"
            },
        ]
    },
    13: {
        "title": '13-Amaliy: Bezu teoremasi va Gorner sxemasi',
        "file": 'Amaliy_13_Bezu_teoremasi_va_Gorner_sxemasi_Algebraning_asosiy_teoremasi.pdf',
        "tasks": [
            {
                "id": 'af13_t1',
                "name": '1-topshiriq: Gorner sxemasi jadvali',
                "shart": "f(x) = x^4 - 2x^3 + 4x^2 - 6x + 8 ko'phadni x - 1 ga bo'ling (c = 1).",
                "solution": "📝 <b>13-Amaliy, 1-topshiriq yechimi:</b>\n\nKoeffitsientlar: [1, -2, 4, -6, 8], c = 1\n\nGorner sxemasi jadvali:\n• b0 = 1\n• b1 = 1·1 + (-2) = -1\n• b2 = 1·(-1) + 4 = 3\n• b3 = 1·3 + (-6) = -3\n• R = 1·(-3) + 8 = 5 (qoldiq)\n\nBo'linma: Q(x) = x³ - x² + 3x - 3\nQoldiq: R = 5 (Bezu teoremasiga ko'ra f(1) = 5)\n\n✅ <b>Javob:</b> Q(x) = x³ - x² + 3x - 3, Qoldiq R = 5"
            },
            {
                "id": 'af13_t2',
                "name": "2-topshiriq: Ko'phad qiymatini topish (x0 nuqtada)",
                "shart": 'f(x) = x^4 - 3x^3 + 6x^2 - 10x + 16 ning x0 = 4 nuqtadagi qiymati',
                "solution": '📝 <b>13-Amaliy, 2-topshiriq yechimi:</b>\n\nGorner sxemasi (c = 4):\nKoeffitsientlar: [1, -3, 6, -10, 16]\n• b0 = 1\n• b1 = 4·1 - 3 = 1\n• b2 = 4·1 + 6 = 10\n• b3 = 4·10 - 10 = 30\n• R = 4·30 + 16 = 120 + 16 = 136\n\nDemak, f(4) = 136.\n\n✅ <b>Javob:</b> f(4) = <b>136</b>'
            },
            {
                "id": 'af13_t3',
                "name": '3-topshiriq: Barcha ratsional ildizlarni topish',
                "shart": "f(x) = x^3 - 4x^2 + 5x - 2 ko'phadning barcha ildizlarini toping.",
                "solution": "📝 <b>13-Amaliy, 3-topshiriq yechimi:</b>\n\nf(x) = x³ - 4x² + 5x - 2\nOzod had bo'luvchilari: ±1, ±2\n1) x = 1 ni tekshiramiz: f(1) = 1 - 4 + 5 - 2 = 0 => x = 1 ildiz!\nGorner sxemasi bilan bo'lamiz: (x - 1)(x² - 3x + 2) = 0\n\n2) x² - 3x + 2 = 0 kvadrat tenglama ildizlari: x = 1 va x = 2.\n\nBarcha ildizlar: x1 = 1 (2-karrali), x2 = 2.\n\n✅ <b>Javob:</b> x = 1 (karrali), x = 2"
            },
            {
                "id": 'af13_var5',
                "name": '⭐ 5-Variant: Ratsional ildizlarni topish',
                "shart": "f(x) = x^3 - 6x^2 + 15x - 14 ko'phadning ratsional ildizlarini toping.",
                "solution": "📝 <b>13-Amaliy, 5-Variant yechimi:</b>\n\nf(x) = x³ - 6x² + 15x - 14\nOzod had -14 bo'luvchilari: ±1, ±2, ±7, ±14\n\nGorner sxemasi bilan tekshiramiz:\n• x = 1: 1 - 6 + 15 - 14 = -4 ≠ 0\n• x = 2: 8 - 24 + 30 - 14 = 0 => <b>x = 2 ildiz!</b>\n\nGorner sxemasi bilan (x - 2) ga bo'lsak:\nQ(x) = x² - 4x + 7\nKvadrat uchhad diskriminanti: D = 16 - 28 = -12 < 0 (haqiqiy ildiz yo'q)\n\n✅ <b>Javob:</b> Yagona ratsional ildiz: <b>x = 2</b>"
            },
        ]
    },
    14: {
        "title": '14-Amaliy: Ratsional kasrlar',
        "file": 'Amaliy 14  Ratsional kasrlar.pdf',
        "tasks": [
            {
                "id": 'af14_t1',
                "name": "1-topshiriq: To'g'ri kasrni sodda kasrlarga yoyish",
                "shart": "(x + 1) / ((x - 1)(x - 2)) ni sodda kasrlar yig'indisiga ajrating.",
                "solution": "📝 <b>14-Amaliy, 1-topshiriq yechimi:</b>\n\n(x + 1) / [(x - 1)(x - 2)] = A / (x - 1) + B / (x - 2)\n\nQoplash usuli (noma'lum koeffitsientlar usuli):\n• A = (1 + 1) / (1 - 2) = 2 / (-1) = -2\n• B = (2 + 1) / (2 - 1) = 3 / 1 = 3\n\nYoyilma:\n-2 / (x - 1) + 3 / (x - 2)\n\n✅ <b>Javob:</b> <code>-2 / (x - 1) + 3 / (x - 2)</code>"
            },
            {
                "id": 'af14_t2',
                "name": '2-topshiriq: Kvadrat uchhadli maxraj',
                "shart": '(2x + 5) / (x^2 - 5x + 6) ni sodda kasrlarga yoying.',
                "solution": '📝 <b>14-Amaliy, 2-topshiriq yechimi:</b>\n\nx² - 5x + 6 = (x - 2)(x - 3)\n(2x + 5) / [(x - 2)(x - 3)] = A / (x - 2) + B / (x - 3)\n\n• A = (2·2 + 5) / (2 - 3) = 9 / (-1) = -9\n• B = (2·3 + 5) / (3 - 2) = 11 / 1 = 11\n\n✅ <b>Javob:</b> <code>-9 / (x - 2) + 11 / (x - 3)</code>'
            },
            {
                "id": 'af14_t3',
                "name": "3-topshiriq: 3 ta chiziqli ko'paytuvchi",
                "shart": '1 / ((x + 1)(x + 2)(x + 3)) ni sodda kasrlarga yoying.',
                "solution": '📝 <b>14-Amaliy, 3-topshiriq yechimi:</b>\n\n1 / [(x + 1)(x + 2)(x + 3)] = A/(x + 1) + B/(x + 2) + C/(x + 3)\n\nQoplash usuli bilan:\n• A = 1 / [(-1 + 2)(-1 + 3)] = 1 / (1 · 2) = 1/2\n• B = 1 / [(-2 + 1)(-2 + 3)] = 1 / (-1 · 1) = -1\n• C = 1 / [(-3 + 1)(-3 + 2)] = 1 / (-2 · (-1)) = 1/2\n\nYoyilma: 1/(2(x+1)) - 1/(x+2) + 1/(2(x+3))\n\n✅ <b>Javob:</b> <code>1/2(x+1) - 1/(x+2) + 1/2(x+3)</code>'
            },
            {
                "id": 'af14_t4',
                "name": '4-topshiriq: Karrali maxraj',
                "shart": '(x + 2) / (x - 1)^2 ni sodda kasrlarga yoying.',
                "solution": "📝 <b>14-Amaliy, 4-topshiriq yechimi:</b>\n\n(x + 2) / (x - 1)² = A / (x - 1) + B / (x - 1)²\n\nSuratni x - 1 bo'yicha yoyamiz:\nx + 2 = (x - 1) + 3\nDemak:\n[(x - 1) + 3] / (x - 1)² = 1 / (x - 1) + 3 / (x - 1)²\n\nA = 1, B = 3\n\n✅ <b>Javob:</b> <code>1 / (x - 1) + 3 / (x - 1)²</code>"
            },
            {
                "id": 'af14_var5',
                "name": '⭐ 5-Variant: Sodda kasrlarga yoyish',
                "shart": '(3x - 1) / (x^2 - 4x + 3) ni sodda kasrlarga yoying.',
                "solution": '📝 <b>14-Amaliy, 5-Variant yechimi:</b>\n\nx² - 4x + 3 = (x - 1)(x - 3)\n(3x - 1) / [(x - 1)(x - 3)] = A / (x - 1) + B / (x - 3)\n\nQoplash usuli:\n• A = (3·1 - 1) / (1 - 3) = 2 / (-2) = -1\n• B = (3·3 - 1) / (3 - 1) = 8 / 2 = 4\n\n✅ <b>Javob:</b> <code>-1 / (x - 1) + 4 / (x - 3)</code>'
            },
        ]
    },
    15: {
        "title": '15-Amaliy: 3- va 4-darajali tenglamalar',
        "file": 'Amaliy 15  3- va 4 – darajali tenglamalar.pdf',
        "tasks": [
            {
                "id": 'af15_t1',
                "name": '1-topshiriq: Kardano formulasi (Q > 0)',
                "shart": 'x^3 - 6x - 9 = 0 tenglamani Kardano formulasi bilan yeching.',
                "solution": '📝 <b>15-Amaliy, 1-topshiriq yechimi:</b>\n\nx³ - 6x - 9 = 0 (p = -6, q = -9)\n\n1-qadam: Kardano diskriminanti:\nD = (q/2)² + (p/3)³ = (-9/2)² + (-6/3)³ = 81/4 + (-8) = 81/4 - 32/4 = 49/4 > 0\n√D = 7/2\n\n2-qadam: u va v larni topamiz:\n• u = ∛(-q/2 + √D) = ∛(9/2 + 7/2) = ∛(16/2) = ∛8 = 2\n• v = ∛(-q/2 - √D) = ∛(9/2 - 7/2) = ∛(2/2) = ∛1 = 1\n\n3-qadam: Ildizlar:\n• x1 = u + v = 2 + 1 = 3\n• x2,3 = -(u+v)/2 ± i·(√3/2)(u-v) = -3/2 ± i·(√3/2)\n\n✅ <b>Javob:</b> Asosiy ildiz: <b>x = 3</b>'
            },
            {
                "id": 'af15_t2',
                "name": '2-topshiriq: Casus Irreducibilis (Q < 0, 3 ta haqiqiy ildiz)',
                "shart": 'y^3 - 9y + 8 = 0 tenglamani Kardano formulasi bilan yeching.',
                "solution": "📝 <b>15-Amaliy, 2-topshiriq yechimi:</b>\n\ny³ - 9y + 8 = 0 (p = -9, q = 8)\n• D = (q/2)² + (p/3)³ = 4² + (-3)³ = 16 - 27 = -11 < 0\nD < 0 (Keltirilmas holat - Casus Irreducibilis): 3 ta haqiqiy ildiz mavjud!\n\nTrigonometrik shakl (yoki ko'paytuvchilarga ajratish):\ny = 1 ildiz ekanligini ko'rish oson: 1³ - 9(1) + 8 = 0.\n(y - 1)(y² + y - 8) = 0\n• y1 = 1\n• y2,3 = (-1 ± √(1 + 32)) / 2 = (-1 ± √33) / 2\n\n✅ <b>Javob:</b> y1 = 1, y2 = (-1 + √33)/2, y3 = (-1 - √33)/2"
            },
            {
                "id": 'af15_t3',
                "name": '3-topshiriq: Ferrari usuli (4-darajali tenglama)',
                "shart": 'x^4 + 2x^3 - 6x^2 - 5x + 2 = 0 tenglamani Ferrari usulida yeching.',
                "solution": "📝 <b>15-Amaliy, 3-topshiriq yechimi:</b>\n\nx⁴ + 2x³ - 6x² - 5x + 2 = 0\n\nFerrari usulida yechish:\n(x² + x + y/2)² = (y + 7)x² + (y + 5)x + (y²/4 - 2)\nO'ng tomon to'la kvadrat bo'lishi uchun diskriminant 0 bo'lishi kerak:\n(y + 5)² - 4(y + 7)(y²/4 - 2) = 0 => y³ + 6y² - 18y - 81 = 0\nUshbu rezolventaning ildizi: y = -3\n\nIkkita kvadrat tenglamaga ajraladi:\n(x² + 3x - 1)(x² - x - 2) = 0\n\n1) x² - x - 2 = 0 => <b>x1 = 2, x2 = -1</b>\n2) x² + 3x - 1 = 0 => <b>x3,4 = (-3 ± √13) / 2</b>\n\n✅ <b>Javob:</b> x = 2, -1, (-3 ± √13) / 2"
            },
            {
                "id": 'af15_t4',
                "name": '4-topshiriq: Keltirilgan 3-darajali tenglama',
                "shart": 'x^3 + 3x - 4 = 0 tenglamani yeching.',
                "solution": "📝 <b>15-Amaliy, 4-topshiriq yechimi:</b>\n\nx³ + 3x - 4 = 0 (p = 3, q = -4)\n• D = (-4/2)² + (3/3)³ = 4 + 1 = 5 > 0\n• u = ∛(2 + √5), v = ∛(2 - √5)\nx1 = u + v = 1\nTekshirish: 1³ + 3(1) - 4 = 0 (to'g'ri)\n\n✅ <b>Javob:</b> x = <b>1</b>"
            },
            {
                "id": 'af15_var5',
                "name": '⭐ 5-Variant: 3-darajali tenglama',
                "shart": 'x^3 - 6x^2 + 11x - 6 = 0 tenglamaning barcha ildizlarini toping.',
                "solution": "📝 <b>15-Amaliy, 5-Variant yechimi:</b>\n\nx³ - 6x² + 11x - 6 = 0\nOzod had -6 bo'luvchilari: ±1, ±2, ±3, ±6\n\nGorner sxemasi orqali:\n• x = 1: 1 - 6 + 11 - 6 = 0 => x1 = 1\nBo'linma: (x - 1)(x² - 5x + 6) = 0\n\nx² - 5x + 6 = 0 kvadrat tenglama ildizlari: x2 = 2, x3 = 3\n\nBarcha 3 ta haqiqiy ildiz:\nx1 = 1, x2 = 2, x3 = 3\n\n✅ <b>Javob:</b> x1 = 1, x2 = 2, x3 = 3"
            },
        ]
    },
}
