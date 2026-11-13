"""
Oliy algebra 1-15 Amaliy mashg'ulotlar fayllari topshiriqlari va yechimlari ma'lumotlar bazasi.
Darslikdagi rasmiy 'Mustaqil ishlash uchun misol va masalalar' hamda talabalarning 5-variantlari kiritilgan.
"""

AMALIY_DATA = {
    1: {
        "title": "1-Amaliy: Matritsalar va ular ustida amallar",
        "file": "Amaliy 1 Matritsalar va ular ustida amallar.pdf",
        "tasks": [
            {
                "id": "af1_t1",
                "name": "1-topshiriq (b): 3A - B chiziqli amali",
                "shart": "3 · [[4, -3], [2, 3]] - [[1, 1], [1, 1]]",
                "solution": (
                    "📝 <b>1-Amaliy, 1-topshiriq (b) yechimi:</b>\n\n"
                    "Berilgan matritsalar:\n"
                    "A = [[4, -3], [2, 3]], B = [[1, 1], [1, 1]]\n\n"
                    "<b>1-qadam:</b> 3 · A matritsani topamiz:\n"
                    "3 · A = [[3·4, 3·(-3)], [3·2, 3·3]] = [[12, -9], [6, 9]]\n\n"
                    "<b>2-qadam:</b> 3A - B ayirmani hisoblaymiz:\n"
                    "3A - B = [[12-1, -9-1], [6-1, 9-1]] = [[11, -10], [5, 8]]\n\n"
                    "✅ <b>Javob:</b> <code>[[11, -10], [5, 8]]</code>"
                )
            },
            {
                "id": "af1_t2",
                "name": "2-topshiriq (a): 2x2 Ko'paytirish",
                "shart": "[[2, 1], [3, 2]] · [[1, -1], [1, 1]]",
                "solution": (
                    "📝 <b>1-Amaliy, 2-topshiriq (a) yechimi:</b>\n\n"
                    "A = [[2, 1], [3, 2]], B = [[1, -1], [1, 1]]\n\n"
                    "Ko'paytirish qoidasi: c_ij = sum(a_ik · b_kj)\n"
                    "• c_11 = 2·1 + 1·1 = 2 + 1 = 3\n"
                    "• c_12 = 2·(-1) + 1·1 = -2 + 1 = -1\n"
                    "• c_21 = 3·1 + 2·1 = 3 + 2 = 5\n"
                    "• c_22 = 3·(-1) + 2·1 = -3 + 2 = -1\n\n"
                    "✅ <b>Javob:</b> A · B = <code>[[3, -1], [5, -1]]</code>"
                )
            },
            {
                "id": "af1_t3",
                "name": "3-topshiriq (b): 3x3 Ko'paytirish",
                "shart": "[[1, 2, 1], [0, 1, 2], [3, 1, 1]] · [[1, 0, 1], [2, 1, 0], [1, 1, 2]]",
                "solution": (
                    "📝 <b>1-Amaliy, 3-topshiriq (b) yechimi:</b>\n\n"
                    "A = [[1, 2, 1], [0, 1, 2], [3, 1, 1]]\n"
                    "B = [[1, 0, 1], [2, 1, 0], [1, 1, 2]]\n\n"
                    "1-satr:\n"
                    "• c_11 = 1·1 + 2·2 + 1·1 = 1 + 4 + 1 = 6\n"
                    "• c_12 = 1·0 + 2·1 + 1·1 = 0 + 2 + 1 = 3\n"
                    "• c_13 = 1·1 + 2·0 + 1·2 = 1 + 0 + 2 = 3\n\n"
                    "2-satr:\n"
                    "• c_21 = 0·1 + 1·2 + 2·1 = 0 + 2 + 2 = 4\n"
                    "• c_22 = 0·0 + 1·1 + 2·1 = 0 + 1 + 2 = 3\n"
                    "• c_23 = 0·1 + 1·0 + 2·2 = 0 + 0 + 4 = 4\n\n"
                    "3-satr:\n"
                    "• c_31 = 3·1 + 1·2 + 1·1 = 3 + 2 + 1 = 6\n"
                    "• c_32 = 3·0 + 1·1 + 1·1 = 0 + 1 + 1 = 2\n"
                    "• c_33 = 3·1 + 1·0 + 1·2 = 3 + 0 + 2 = 5\n\n"
                    "✅ <b>Javob:</b> <code>[[6, 3, 3], [4, 3, 4], [6, 2, 5]]</code>"
                )
            },
            {
                "id": "af1_var5",
                "name": "⭐ 5-Variant: Individual topshiriq",
                "shart": "A = [[2, 4], [1, 3]], B = [[3, -1], [2, 5]]. 2A - 3B va A · B ni hisoblang.",
                "solution": (
                    "📝 <b>1-Amaliy, 5-Variant yechimi:</b>\n\n"
                    "A = [[2, 4], [1, 3]], B = [[3, -1], [2, 5]]\n\n"
                    "<b>1) 2A - 3B:</b>\n"
                    "• 2A = [[4, 8], [2, 6]]\n"
                    "• 3B = [[9, -3], [6, 15]]\n"
                    "• 2A - 3B = [[4-9, 8-(-3)], [2-6, 6-15]] = [[-5, 11], [-4, -9]]\n\n"
                    "<b>2) A · B:</b>\n"
                    "• c_11 = 2·3 + 4·2 = 6 + 8 = 14\n"
                    "• c_12 = 2·(-1) + 4·5 = -2 + 20 = 18\n"
                    "• c_21 = 1·3 + 3·2 = 3 + 6 = 9\n"
                    "• c_22 = 1·(-1) + 3·5 = -1 + 15 = 14\n"
                    "A · B = [[14, 18], [9, 14]]\n\n"
                    "✅ <b>Javob:</b>\n"
                    "2A - 3B = <code>[[-5, 11], [-4, -9]]</code>\n"
                    "A · B = <code>[[14, 18], [9, 14]]</code>"
                )
            }
        ]
    },

    2: {
        "title": "2-Amaliy: O‘rinlashtirish va o‘rin almashtirish",
        "file": "Amaliy 2  O‘rinlashtirish va o‘rin almashtirish.pdf",
        "tasks": [
            {
                "id": "af2_t1",
                "name": "1-topshiriq: p = (3, 5, 1, 4, 2)",
                "shart": "p = (3, 5, 1, 4, 2) o'rin almashtirish inversiyalar soni va juft/toqligini aniqlang.",
                "solution": (
                    "📝 <b>2-Amaliy, 1-topshiriq yechimi:</b>\n\n"
                    "Berilgan o'rin almashtirish: p = (3, 5, 1, 4, 2)\n\n"
                    "<b>Inversiyalar (i < j ammo p[i] > p[j]):</b>\n"
                    "• 3 soni uchun: (3, 1), (3, 2) -> 2 ta\n"
                    "• 5 soni uchun: (5, 1), (5, 4), (5, 2) -> 3 ta\n"
                    "• 1 soni uchun: yo'q -> 0 ta\n"
                    "• 4 soni uchun: (4, 2) -> 1 ta\n"
                    "• 2 soni uchun: 0 ta\n\n"
                    "Jami inversiyalar soni: I(p) = 2 + 3 + 0 + 1 + 0 = 6\n"
                    "6 soni juft bo'lgani sababli, bu o'rin almashtirish <b>JUFT</b>.\n\n"
                    "✅ <b>Javob:</b> Inversiyalar soni = 6, <b>Juft</b> o'rin almashtirish."
                )
            },
            {
                "id": "af2_var5",
                "name": "⭐ 5-Variant: p = (4, 3, 1, 5, 2)",
                "shart": "p = (4, 3, 1, 5, 2) inversiyalari va disyukt tsikllarga ajrating.",
                "solution": (
                    "📝 <b>2-Amaliy, 5-Variant yechimi:</b>\n\n"
                    "Berilgan: p = (4, 3, 1, 5, 2)\n\n"
                    "<b>1) Inversiyalar soni:</b>\n"
                    "• 4 soni uchun: (4, 3), (4, 1), (4, 2) -> 3 ta\n"
                    "• 3 soni uchun: (3, 1), (3, 2) -> 2 ta\n"
                    "• 1 soni uchun: 0 ta\n"
                    "• 5 soni uchun: (5, 2) -> 1 ta\n"
                    "• 2 soni uchun: 0 ta\n"
                    "I(p) = 3 + 2 + 0 + 1 + 0 = 6 (Juft)\n\n"
                    "<b>2) Mustaqil (disyukt) tsikllarga ajratish:</b>\n"
                    "1 -> 4 -> 5 -> 2 -> 3 -> 1 ...\n"
                    "1 -> 4, 4 -> 5, 5 -> 2, 2 -> 3, 3 -> 1\n"
                    "Bitta katta tsikl: (1 4 5 2 3)\n\n"
                    "✅ <b>Javob:</b> I(p) = 6 (Juft), Tsikl ko'rinishi: (1 4 5 2 3)"
                )
            }
        ]
    },

    3: {
        "title": "3-Amaliy: n-tartibli determinantlar va ularning xossalari",
        "file": "Amaliy 3  n-tartibli determinantlar va ularning xossalari.pdf",
        "tasks": [
            {
                "id": "af3_t1",
                "name": "1-topshiriq (a, b): 2-tartibli determinantlar",
                "shart": "a) det [[5, 2], [7, 3]]; b) det [[1, 2], [3, 4]]",
                "solution": (
                    "📝 <b>3-Amaliy, 1-topshiriq yechimi:</b>\n\n"
                    "2-tartibli determinant formulasi: det [[a, b], [c, d]] = a·d - b·c\n\n"
                    "<b>a)</b> det [[5, 2], [7, 3]] = 5·3 - 2·7 = 15 - 14 = <b>1</b>\n"
                    "<b>b)</b> det [[1, 2], [3, 4]] = 1·4 - 2·3 = 4 - 6 = <b>-2</b>\n"
                    "<b>c)</b> det [[3, 2], [8, 5]] = 3·5 - 2·8 = 15 - 16 = <b>-1</b>\n\n"
                    "✅ <b>Javob:</b> a) 1; b) -2; c) -1"
                )
            },
            {
                "id": "af3_t2",
                "name": "2-topshiriq: 3x3 Determinant (Sarryus qoidasi)",
                "shart": "det [[2, 1, 1], [1, 3, 2], [1, 0, 0]]",
                "solution": (
                    "📝 <b>3-Amaliy, 2-topshiriq yechimi:</b>\n\n"
                    "A = [[2, 1, 1], [1, 3, 2], [1, 0, 0]]\n\n"
                    "Sarryus qoidasi bo'yicha hisoblash:\n"
                    "Asosiy diagonallar yig'indisi:\n"
                    "• 2 · 3 · 0 = 0\n"
                    "• 1 · 2 · 1 = 2\n"
                    "• 1 · 1 · 0 = 0\n"
                    "Yig'indi = 0 + 2 + 0 = 2\n\n"
                    "Yordamchi diagonallar yig'indisi:\n"
                    "• 1 · 3 · 1 = 3\n"
                    "• 2 · 2 · 0 = 0\n"
                    "• 1 · 1 · 0 = 0\n"
                    "Yig'indi = 3 + 0 + 0 = 3\n\n"
                    "det(A) = 2 - 3 = -1\n\n"
                    "✅ <b>Javob:</b> |A| = <b>-1</b>"
                )
            },
            {
                "id": "af3_var5",
                "name": "⭐ 5-Variant: 3x3 Determinant",
                "shart": "det [[3, 2, 1], [2, 5, 3], [3, 4, 2]]",
                "solution": (
                    "📝 <b>3-Amaliy, 5-Variant yechimi:</b>\n\n"
                    "A = [[3, 2, 1], [2, 5, 3], [3, 4, 2]]\n\n"
                    "Sarryus qoidasi:\n"
                    "• Asosiy: (3·5·2) + (2·3·3) + (1·2·4) = 30 + 18 + 8 = 56\n"
                    "• Yordamchi: (1·5·3) + (3·3·4) + (2·2·2) = 15 + 36 + 8 = 59\n\n"
                    "det(A) = 56 - 59 = -3\n\n"
                    "✅ <b>Javob:</b> |A| = <b>-3</b>"
                )
            }
        ]
    },

    4: {
        "title": "4-Amaliy: Minor va algebraik to‘ldiruvchi",
        "file": "Amaliy 4  Minor va algebraik to‘ldiruvchi.pdf",
        "tasks": [
            {
                "id": "af4_t1",
                "name": "1-topshiriq: Satr bo'yicha Laplas yoyilmasi",
                "shart": "A = [[1, 2, 3], [0, 4, 5], [1, 0, 6]] determinantini 1-satr bo'yicha hisoblang.",
                "solution": (
                    "📝 <b>4-Amaliy, 1-topshiriq yechimi:</b>\n\n"
                    "A = [[1, 2, 3], [0, 4, 5], [1, 0, 6]]\n\n"
                    "1-satr elementlari bo'yicha Laplas yoyilmasi:\n"
                    "|A| = a_11·A_11 + a_12·A_12 + a_13·A_13\n\n"
                    "• A_11 = (-1)^(1+1) · det [[4, 5], [0, 6]] = 1 · (24 - 0) = 24\n"
                    "• A_12 = (-1)^(1+2) · det [[0, 5], [1, 6]] = -1 · (0 - 5) = 5\n"
                    "• A_13 = (-1)^(1+3) · det [[0, 4], [1, 0]] = 1 · (0 - 4) = -4\n\n"
                    "|A| = 1 · 24 + 2 · 5 + 3 · (-4) = 24 + 10 - 12 = 22\n\n"
                    "✅ <b>Javob:</b> |A| = <b>22</b>"
                )
            },
            {
                "id": "af4_var5",
                "name": "⭐ 5-Variant: Minorlar va Laplas yoyilmasi",
                "shart": "A = [[2, -1, 3], [1, 4, 2], [3, 1, 5]] matritsaning determinantini 1-satr bo'yicha hisoblang.",
                "solution": (
                    "📝 <b>4-Amaliy, 5-Variant yechimi:</b>\n\n"
                    "A = [[2, -1, 3], [1, 4, 2], [3, 1, 5]]\n\n"
                    "• A_11 = + det [[4, 2], [1, 5]] = 20 - 2 = 18\n"
                    "• A_12 = - det [[1, 2], [3, 5]] = -(5 - 6) = 1\n"
                    "• A_13 = + det [[1, 4], [3, 1]] = 1 - 12 = -11\n\n"
                    "|A| = 2 · (18) + (-1) · (1) + 3 · (-11)\n"
                    "|A| = 36 - 1 - 33 = 2\n\n"
                    "✅ <b>Javob:</b> |A| = <b>2</b>"
                )
            }
        ]
    },

    5: {
        "title": "5-Amaliy: Teskari matritsa",
        "file": "Amaliy 5  Teskari matritsa.pdf",
        "tasks": [
            {
                "id": "af5_t1",
                "name": "1-topshiriq (a, b): 2x2 Teskari matritsalar",
                "shart": "a) A = [[1, 2], [3, 4]]; b) A = [[3, 4], [5, 7]]",
                "solution": (
                    "📝 <b>5-Amaliy, 1-topshiriq yechimi:</b>\n\n"
                    "2x2 matritsa uchun formula: A⁻¹ = (1/|A|) · [[d, -b], [-c, a]]\n\n"
                    "<b>a) A = [[1, 2], [3, 4]]:</b>\n"
                    "• |A| = 1·4 - 2·3 = -2\n"
                    "• A⁻¹ = -1/2 · [[4, -2], [-3, 1]] = [[-2, 1], [3/2, -1/2]]\n\n"
                    "<b>b) A = [[3, 4], [5, 7]]:</b>\n"
                    "• |A| = 3·7 - 4·5 = 21 - 20 = 1\n"
                    "• A⁻¹ = [[7, -4], [-5, 3]]\n\n"
                    "✅ <b>Javob:</b>\n"
                    "a) <code>[[-2, 1], [3/2, -1/2]]</code>\n"
                    "b) <code>[[7, -4], [-5, 3]]</code>"
                )
            },
            {
                "id": "af5_var5",
                "name": "⭐ 5-Variant: 3x3 Teskari matritsa",
                "shart": "A = [[2, 1, 1], [1, 2, 1], [1, 1, 2]] ning teskari matritsasini toping.",
                "solution": (
                    "📝 <b>5-Amaliy, 5-Variant yechimi:</b>\n\n"
                    "A = [[2, 1, 1], [1, 2, 1], [1, 1, 2]]\n\n"
                    "1) Determinant:\n"
                    "|A| = 2·(4-1) - 1·(2-1) + 1·(1-2) = 6 - 1 - 1 = 4\n\n"
                    "2) Algebraik to'ldiruvchilar:\n"
                    "• A_11 = 4-1 = 3, A_12 = -(2-1) = -1, A_13 = 1-2 = -1\n"
                    "• A_21 = -(2-1) = -1, A_22 = 4-1 = 3, A_23 = -(2-1) = -1\n"
                    "• A_31 = 1-2 = -1, A_32 = -(2-1) = -1, A_33 = 4-1 = 3\n\n"
                    "3) Biriktirilgan matritsa A* ni transponirlaymiz:\n"
                    "A* = [[3, -1, -1], [-1, 3, -1], [-1, -1, 3]]\n\n"
                    "4) A⁻¹ = (1/4) · A*:\n"
                    "✅ <b>Javob:</b> A⁻¹ = <code>[[3/4, -1/4, -1/4], [-1/4, 3/4, -1/4], [-1/4, -1/4, 3/4]]</code>"
                )
            }
        ]
    },

    6: {
        "title": "6-Amaliy: Chiziqli tenglamalar sistemalarini yechish",
        "file": "Amaliy_6_Chiziqli_tenglamalar_sistemalarini_yechish_usullari.pdf",
        "tasks": [
            {
                "id": "af6_t1",
                "name": "1-topshiriq: Kramer usulida yechish",
                "shart": "2x1 - x2 = 1; x1 + 16x2 = 17",
                "solution": (
                    "📝 <b>6-Amaliy, 1-topshiriq (Kramer) yechimi:</b>\n\n"
                    "Sistema:\n"
                    "2x1 - x2 = 1\n"
                    "x1 + 16x2 = 17\n\n"
                    "1) Asosiy determinant:\n"
                    "Δ = det [[2, -1], [1, 16]] = 2·16 - (-1)·1 = 32 + 1 = 33\n\n"
                    "2) Yordamchi determinantlar:\n"
                    "Δ_x1 = det [[1, -1], [17, 16]] = 16 - (-17) = 33\n"
                    "Δ_x2 = det [[2, 1], [1, 17]] = 34 - 1 = 33\n\n"
                    "3) Yechimlar:\n"
                    "x1 = Δ_x1 / Δ = 33 / 33 = 1\n"
                    "x2 = Δ_x2 / Δ = 33 / 33 = 1\n\n"
                    "✅ <b>Javob:</b> x1 = 1, x2 = 1"
                )
            },
            {
                "id": "af6_var5",
                "name": "⭐ 5-Variant: Gauss usulida yechish",
                "shart": "x1 + 2x2 + 3x3 = 14; 3x1 + x2 + 2x3 = 11; 2x1 + 3x2 + x3 = 11",
                "solution": (
                    "📝 <b>6-Amaliy, 5-Variant (Gauss usuli) yechimi:</b>\n\n"
                    "Kengaytirilgan matritsa:\n"
                    "[[1, 2, 3 | 14],\n"
                    " [3, 1, 2 | 11],\n"
                    " [2, 3, 1 | 11]]\n\n"
                    "1-qadam: 1-satr orqali pastdagilarni 0 ga aylantirish:\n"
                    "• Satr2 = Satr2 - 3·Satr1 -> [0, -5, -7 | -31]\n"
                    "• Satr3 = Satr3 - 2·Satr1 -> [0, -1, -5 | -17]\n\n"
                    "2-qadam: Satr2 va Satr3 ni almashtiramiz va soddalashtiramiz:\n"
                    "Teskari yurish orqali noma'lumlar topiladi:\n"
                    "• x3 = 3\n"
                    "• x2 = 2\n"
                    "• x1 = 1\n\n"
                    "Tekshirish: 1 + 2·2 + 3·3 = 1 + 4 + 9 = 14 (To'g'ri)\n\n"
                    "✅ <b>Javob:</b> x1 = 1, x2 = 2, x3 = 3"
                )
            }
        ]
    },

    7: {
        "title": "7-Amaliy: Matritsa rangi",
        "file": "Amaliy 7  Matritsa rangi.pdf",
        "tasks": [
            {
                "id": "af7_t1",
                "name": "1-topshiriq: Matritsa rangini topish",
                "shart": "A = [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]",
                "solution": (
                    "📝 <b>7-Amaliy, 1-topshiriq yechimi:</b>\n\n"
                    "A = [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]\n\n"
                    "Elementar almashtirishlar:\n"
                    "• Satr2 = Satr2 - 2·Satr1 = [0, 0, 0, 0]\n"
                    "• Satr3 = Satr3 - 3·Satr1 = [0, 0, 0, 0]\n\n"
                    "Pog'onasimon ko'rinish:\n"
                    "[[1, 2, 3, 4],\n"
                    " [0, 0, 0, 0],\n"
                    " [0, 0, 0, 0]]\n\n"
                    "Noldan farqli satrlar soni = 1.\n\n"
                    "✅ <b>Javob:</b> rang(A) = <b>1</b>"
                )
            },
            {
                "id": "af7_var5",
                "name": "⭐ 5-Variant: Matritsa rangi",
                "shart": "A = [[1, 2, -1, 2], [2, -1, 3, 1], [1, -3, 4, -1]]",
                "solution": (
                    "📝 <b>7-Amaliy, 5-Variant yechimi:</b>\n\n"
                    "A = [[1, 2, -1, 2], [2, -1, 3, 1], [1, -3, 4, -1]]\n\n"
                    "1) Satr2 = Satr2 - 2·Satr1:\n"
                    "[2-2, -1-4, 3-(-2), 1-4] = [0, -5, 5, -3]\n\n"
                    "2) Satr3 = Satr3 - Satr1:\n"
                    "[1-1, -3-2, 4-(-1), -1-2] = [0, -5, 5, -3]\n\n"
                    "3) Satr3 = Satr3 - Satr2:\n"
                    "[0, 0, 0, 0]\n\n"
                    "Pog'onasimon shakl:\n"
                    "[[1, 2, -1, 2],\n"
                    " [0, -5, 5, -3],\n"
                    " [0, 0, 0, 0]]\n\n"
                    "Noldan farqli satrlar soni = 2.\n\n"
                    "✅ <b>Javob:</b> rang(A) = <b>2</b>"
                )
            }
        ]
    },

    8: {
        "title": "8-Amaliy: Bir jinsli sistema va FYET",
        "file": "Amaliy_8_Bir_jinsli_chiziqli_tenglamalar_sistemasi_Kroneker_Kopelli.pdf",
        "tasks": [
            {
                "id": "af8_var5",
                "name": "⭐ 5-Variant: FYET (Fundamental Yechimlar Tizimi)",
                "shart": "x1 + 2x2 + 4x3 - 3x4 = 0; 3x1 + 5x2 + 6x3 - 4x4 = 0; 4x1 + 5x2 - 2x3 + 3x4 = 0",
                "solution": (
                    "📝 <b>8-Amaliy, 5-Variant yechimi:</b>\n\n"
                    "AX = 0 sistemasi koeffitsiyentlar matritsasi:\n"
                    "[[1, 2, 4, -3],\n"
                    " [3, 5, 6, -4],\n"
                    " [4, 5, -2, 3]]\n\n"
                    "Gauss usuli bilan pog'onasimon shaklga keltiramiz:\n"
                    "• Satr2 = Satr2 - 3·Satr1 -> [0, -1, -6, 5]\n"
                    "• Satr3 = Satr3 - 4·Satr1 -> [0, -3, -18, 15]\n"
                    "• Satr3 = Satr3 - 3·Satr2 -> [0, 0, 0, 0]\n\n"
                    "rang(A) = 2, o'zgaruvchilar soni n = 4.\n"
                    "Erkin o'zgaruvchilar soni = n - r = 4 - 2 = 2 (x3, x4 erkin).\n\n"
                    "FYET vektorlari:\n"
                    "• x3 = 1, x4 = 0 uchun: e_1 = [8, -6, 1, 0]^T\n"
                    "• x3 = 0, x4 = 1 uchun: e_2 = [-7, 5, 0, 1]^T\n\n"
                    "✅ <b>Javob:</b> Umumiy yechim: X = c1 · [8, -6, 1, 0]^T + c2 · [-7, 5, 0, 1]^T"
                )
            }
        ]
    },

    9: {
        "title": "9-Amaliy: Kompleks sonlar va amallar",
        "file": "Amaliy_9_Kompleks_sonlar_va_ular_ustida_amallar_Darajaga_ko‘tarish.pdf",
        "tasks": [
            {
                "id": "af9_t1",
                "name": "1-topshiriq: z1 = 2+3i va z2 = 1+2i",
                "shart": "z1 = 2 + 3i va z2 = 1 + 2i sonlarining yig'indisi, ko'paytmasi va bo'linmasini toping.",
                "solution": (
                    "📝 <b>9-Amaliy, 1-topshiriq (a) yechimi:</b>\n\n"
                    "z1 = 2 + 3i, z2 = 1 + 2i\n\n"
                    "<b>1) Yig'indi:</b>\n"
                    "z1 + z2 = (2 + 1) + (3 + 2)i = 3 + 5i\n\n"
                    "<b>2) Ko'paytma:</b>\n"
                    "z1 · z2 = (2 + 3i)(1 + 2i) = 2 + 4i + 3i + 6i²\n"
                    "i² = -1 bo'lgani uchun: 2 + 7i - 6 = -4 + 7i\n\n"
                    "<b>3) Bo'linma:</b>\n"
                    "z1 / z2 = (2 + 3i) / (1 + 2i) = [(2+3i)(1-2i)] / [(1+2i)(1-2i)]\n"
                    "= [2 - 4i + 3i - 6i²] / [1 - 4i²] = [8 - i] / 5 = 8/5 - (1/5)i\n\n"
                    "✅ <b>Javob:</b>\n"
                    "• z1 + z2 = 3 + 5i\n"
                    "• z1 · z2 = -4 + 7i\n"
                    "• z1 / z2 = 8/5 - (1/5)i"
                )
            },
            {
                "id": "af9_var5",
                "name": "⭐ 5-Variant: z1 = 4+3i, z2 = 2-i",
                "shart": "z1 = 4 + 3i, z2 = 2 - i ustida arifmetik amallar va modul/argument.",
                "solution": (
                    "📝 <b>9-Amaliy, 5-Variant yechimi:</b>\n\n"
                    "z1 = 4 + 3i, z2 = 2 - i\n\n"
                    "• z1 + z2 = (4+2) + (3-1)i = 6 + 2i\n"
                    "• z1 - z2 = (4-2) + (3-(-1))i = 2 + 4i\n"
                    "• z1 · z2 = (4+3i)(2-i) = 8 - 4i + 6i - 3(-1) = 11 + 2i\n"
                    "• z1 / z2 = [(4+3i)(2+i)] / 5 = [8 + 4i + 6i - 3] / 5 = [5 + 10i] / 5 = 1 + 2i\n\n"
                    "z1 moduli: |z1| = √(4² + 3²) = √25 = 5\n\n"
                    "✅ <b>Javob:</b> Yig'indi: 6 + 2i; Ko'paytma: 11 + 2i; Bo'linma: 1 + 2i"
                )
            }
        ]
    },

    10: {
        "title": "10-Amaliy: Muavr formulasi va ildiz chiqarish",
        "file": "Amaliy_10_Kompleks_sonni_darajaga_ko‘tarish_va_ildiz_chiqarish.pdf",
        "tasks": [
            {
                "id": "af10_t1",
                "name": "1-topshiriq: (1 + i)^25 hisoblash",
                "shart": "(1 + i)^25 ifodaning qiymatini Muavr formulasi bilan toping.",
                "solution": (
                    "📝 <b>10-Amaliy, 1-topshiriq yechimi:</b>\n\n"
                    "z = 1 + i sonini trigonometrik shaklga keltiramiz:\n"
                    "• r = √(1² + 1²) = √2\n"
                    "• φ = arctg(1/1) = π/4\n"
                    "z = √2 · (cos(π/4) + i·sin(π/4))\n\n"
                    "Muavr formulasi: zⁿ = rⁿ · (cos(nφ) + i·sin(nφ))\n"
                    "• r^25 = (√2)^25 = 2^(12.5) = 4096√2\n"
                    "• 25 · (π/4) = 6π + π/4\n"
                    "cos(25π/4) = cos(π/4) = √2 / 2\n"
                    "sin(25π/4) = sin(π/4) = √2 / 2\n\n"
                    "z^25 = 4096√2 · (√2/2 + i·√2/2) = 4096 · (1 + i) = 4096 + 4096i\n\n"
                    "✅ <b>Javob:</b> <code>4096 + 4096i</code>"
                )
            },
            {
                "id": "af10_var5",
                "name": "⭐ 5-Variant: 1 ning 3-darajali ildizlari",
                "shart": "w = ∛1 ning barcha 3 ta kompleks ildizini toping.",
                "solution": (
                    "📝 <b>10-Amaliy, 5-Variant yechimi:</b>\n\n"
                    "1 = 1 · (cos 0 + i·sin 0)\n"
                    "Ildiz formulasi: w_k = cos((0 + 2kπ)/3) + i·sin((0 + 2kπ)/3), k = 0, 1, 2\n\n"
                    "• k = 0: w_0 = cos 0 + i·sin 0 = <b>1</b>\n"
                    "• k = 1: w_1 = cos(2π/3) + i·sin(2π/3) = <b>-1/2 + (√3/2)i</b>\n"
                    "• k = 2: w_2 = cos(4π/3) + i·sin(4π/3) = <b>-1/2 - (√3/2)i</b>\n\n"
                    "✅ <b>Javob:</b> 1, -1/2 + (√3/2)i, -1/2 - (√3/2)i"
                )
            }
        ]
    },

    11: {
        "title": "11-Amaliy: Ko‘phadlar va qoldiqli bo'linish",
        "file": "Amaliy_11_Ko'phadlar_va_ular_ustida_amallar_Ko‘phadlarning_bo'linish.pdf",
        "tasks": [
            {
                "id": "af11_t1",
                "name": "1-topshiriq: Burchakli qoldiqli bo'lish",
                "shart": "f(x) = 2x^4 - 3x^3 + 4x^2 - 5x + 6 ko'phadni g(x) = x^2 - 3x + 1 ga bo'ling.",
                "solution": (
                    "📝 <b>11-Amaliy, 1-topshiriq yechimi:</b>\n\n"
                    "f(x) = 2x⁴ - 3x³ + 4x² - 5x + 6\n"
                    "g(x) = x² - 3x + 1\n\n"
                    "Burchakli bo'lish bosqichlari:\n"
                    "1) 2x⁴ / x² = 2x²\n"
                    "   f(x) - 2x²·g(x) = 3x³ + 2x² - 5x + 6\n\n"
                    "2) 3x³ / x² = 3x\n"
                    "   (3x³ + 2x² - 5x + 6) - 3x·g(x) = 11x² - 8x + 6\n\n"
                    "3) 11x² / x² = 11\n"
                    "   (11x² - 8x + 6) - 11·g(x) = 25x - 5\n\n"
                    "Bo'linma: Q(x) = 2x² + 3x + 11\n"
                    "Qoldiq: R(x) = 25x - 5\n\n"
                    "✅ <b>Javob:</b> Q(x) = 2x² + 3x + 11, R(x) = 25x - 5"
                )
            }
        ]
    },

    12: {
        "title": "12-Amaliy: Ko‘phadlarning EKUBi (Yevklid)",
        "file": "Amaliy 12   Ko‘phadlarning EKUB.pdf",
        "tasks": [
            {
                "id": "af12_t1",
                "name": "1-topshiriq: Yevklid algoritmi",
                "shart": "f(x) = x^4 + x^3 - 3x^2 - 4x - 1 va g(x) = x^3 + x^2 - x - 1 larning EKUBini toping.",
                "solution": (
                    "📝 <b>12-Amaliy, 1-topshiriq yechimi:</b>\n\n"
                    "f(x) = x⁴ + x³ - 3x² - 4x - 1\n"
                    "g(x) = x³ + x² - x - 1\n\n"
                    "1-qadam: f(x) ni g(x) ga bo'lamiz:\n"
                    "x⁴ + x³ - 3x² - 4x - 1 = x · (x³ + x² - x - 1) + (-2x² - 3x - 1)\n"
                    "Qoldiq: r1(x) = -2x² - 3x - 1 = -(2x² + 3x + 1) = -(2x + 1)(x + 1)\n\n"
                    "2-qadam: g(x) ni (2x² + 3x + 1) ga bo'lamiz:\n"
                    "2·g(x) = (x - 1/2) · (2x² + 3x + 1) + 0\n"
                    "Qoldiq 0 ga teng bo'ldi!\n\n"
                    "Oxirgi noldan farqli qoldiq normal holatda (bosh koeffitsiyenti 1):\n"
                    "EKUB(f, g) = x + 1\n\n"
                    "✅ <b>Javob:</b> EKUB = <b>x + 1</b>"
                )
            }
        ]
    },

    13: {
        "title": "13-Amaliy: Bezu teoremasi va Gorner sxemasi",
        "file": "Amaliy_13_Bezu_teoremasi_va_Gorner_sxemasi_Algebraning_asosiy_teoremasi.pdf",
        "tasks": [
            {
                "id": "af13_t1",
                "name": "1-topshiriq: Gorner sxemasi jadvali",
                "shart": "f(x) = x^4 - 2x^3 + 4x^2 - 6x + 8 ko'phadni x - 1 ga bo'ling (c = 1).",
                "solution": (
                    "📝 <b>13-Amaliy, 1-topshiriq yechimi:</b>\n\n"
                    "f(x) = x⁴ - 2x³ + 4x² - 6x + 8, c = 1\n\n"
                    "Gorner jadvali:\n"
                    "Koeffitsiyentlar: [1, -2, 4, -6, 8]\n"
                    "• b0 = 1\n"
                    "• b1 = 1·1 + (-2) = -1\n"
                    "• b2 = 1·(-1) + 4 = 3\n"
                    "• b3 = 1·3 + (-6) = -3\n"
                    "• Qoldiq R = 1·(-3) + 8 = <b>5</b>\n\n"
                    "Bo'linma: Q(x) = x³ - x² + 3x - 3\n"
                    "Qoldiq: f(1) = 5\n\n"
                    "✅ <b>Javob:</b> Q(x) = x³ - x² + 3x - 3, Qoldiq R = 5"
                )
            },
            {
                "id": "af13_var5",
                "name": "⭐ 5-Variant: Ratsional ildizlarni topish",
                "shart": "f(x) = x^3 - 6x^2 + 15x - 14 ko'phadning ratsional ildizlarini toping.",
                "solution": (
                    "📝 <b>13-Amaliy, 5-Variant yechimi:</b>\n\n"
                    "f(x) = x³ - 6x² + 15x - 14\n"
                    "Bosh koeffitsiyent a0 = 1, ozod had an = -14.\n\n"
                    "Nomzod ildizlar (-14 ning bo'luvchilari): ±1, ±2, ±7, ±14\n\n"
                    "Gorner sxemasi bilan tekshiramiz:\n"
                    "• x = 1: 1 - 6 + 15 - 14 = -4 ≠ 0\n"
                    "• x = 2: 2³ - 6·2² + 15·2 - 14 = 8 - 24 + 30 - 14 = <b>0</b>! (Ildiz!)\n\n"
                    "f(x) ni (x - 2) ga bo'lsak: Q(x) = x² - 4x + 7\n"
                    "x² - 4x + 7 = 0 uchun D = 16 - 28 = -12 < 0 (haqiqiy ildiz yo'q).\n\n"
                    "✅ <b>Javob:</b> Yagona haqiqiy/ratsional ildiz: <b>x = 2</b>"
                )
            }
        ]
    },

    14: {
        "title": "14-Amaliy: Ratsional kasrlar",
        "file": "Amaliy 14  Ratsional kasrlar.pdf",
        "tasks": [
            {
                "id": "af14_t1",
                "name": "1-topshiriq: Sodda kasrlarga yoyish",
                "shart": "(x + 1) / ((x - 1)(x - 2)) ni sodda kasrlar yig'indisiga ajrating.",
                "solution": (
                    "📝 <b>14-Amaliy, 1-topshiriq yechimi:</b>\n\n"
                    "Yoyilma ko'rinishi:\n"
                    "(x + 1) / ((x - 1)(x - 2)) = A / (x - 1) + B / (x - 2)\n\n"
                    "Umumiy maxraj beramiz:\n"
                    "x + 1 = A·(x - 2) + B·(x - 1)\n\n"
                    "Noma'lumlarni topish (xususiylashtirish usuli):\n"
                    "• x = 1 qo'yamiz: 1 + 1 = A·(1 - 2) + 0 -> 2 = -A -> A = -2\n"
                    "• x = 2 qo'yamiz: 2 + 1 = 0 + B·(2 - 1) -> 3 = B -> B = 3\n\n"
                    "✅ <b>Javob:</b> <code>-2 / (x - 1) + 3 / (x - 2)</code>"
                )
            }
        ]
    },

    15: {
        "title": "15-Amaliy: 3- va 4-darajali tenglamalar",
        "file": "Amaliy 15  3- va 4 – darajali tenglamalar.pdf",
        "tasks": [
            {
                "id": "af15_t1",
                "name": "1-topshiriq: Kardano formulasi",
                "shart": "x^3 - 6x - 9 = 0 tenglamani Kardano formulasi bilan yeching.",
                "solution": (
                    "📝 <b>15-Amaliy, 1-topshiriq yechimi:</b>\n\n"
                    "Tenglama: x³ - 6x - 9 = 0\n"
                    "Keltirilgan ko'rinish: x³ + px + q = 0, p = -6, q = -9\n\n"
                    "1) Diskriminant hisoblash:\n"
                    "Q = (p/3)³ + (q/2)² = (-2)³ + (-4.5)² = -8 + 20.25 = 12.25 > 0\n"
                    "√Q = √12.25 = 3.5\n\n"
                    "2) u va v larni topamiz:\n"
                    "• u = ∛(-q/2 + √Q) = ∛(4.5 + 3.5) = ∛8 = 2\n"
                    "• v = ∛(-q/2 - √Q) = ∛(4.5 - 3.5) = ∛1 = 1\n\n"
                    "3) Haqiqiy ildiz:\n"
                    "x1 = u + v = 2 + 1 = <b>3</b>\n\n"
                    "Tekshirish: 3³ - 6·3 - 9 = 27 - 18 - 9 = 0 (To'g'ri!)\n\n"
                    "✅ <b>Javob:</b> Asosiy ildiz: <b>x = 3</b> (qolganlari kompleks: -1.5 ± 0.866i)"
                )
            },
            {
                "id": "af15_var5",
                "name": "⭐ 5-Variant: 3-darajali tenglama",
                "shart": "x^3 - 6x^2 + 11x - 6 = 0 tenglamaning barcha ildizlarini toping.",
                "solution": (
                    "📝 <b>15-Amaliy, 5-Variant yechimi:</b>\n\n"
                    "Tenglama: x³ - 6x² + 11x - 6 = 0\n\n"
                    "1) Koeffitsiyentlar yig'indisi:\n"
                    "1 - 6 + 11 - 6 = 0 -> <b>x1 = 1</b> ildiz!\n\n"
                    "2) Ko'phadni (x - 1) ga bo'lamiz:\n"
                    "x³ - 6x² + 11x - 6 = (x - 1)(x² - 5x + 6)\n\n"
                    "3) Kvadrat tenglama yechimi: x² - 5x + 6 = 0\n"
                    "(x - 2)(x - 3) = 0\n"
                    "• x2 = 2\n"
                    "• x3 = 3\n\n"
                    "✅ <b>Javob:</b> x1 = 1, x2 = 2, x3 = 3"
                )
            }
        ]
    }
}
