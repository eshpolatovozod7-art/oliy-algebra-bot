/**
 * 15 ta Amaliy Mashg'ulot Fayllari Topshiriqlari (Database & Presets)
 * Universitet "Oliy Algebra" dasturi bo'yicha barcha Amaliy 1 - Amaliy 15 PDF fayllaridagi misollar
 */

const AMALIY_DATABASE = {
    1: {
        title: "1-Amaliy: Matritsalar va ular ustida amallar",
        file: "Amaliy 1 Matritsalar va ular ustida amallar.pdf",
        tasks: [
            {
                id: "1_1_b",
                name: "1-topshiriq (b): 3A - B chiziqli amali",
                shart: "3 · [[4, -3], [2, 3]] - [[1, 1], [1, 1]]",
                type: "matrix_expr",
                load: () => {
                    app.sizes.A = { r: 2, c: 2 };
                    app.sizes.B = { r: 2, c: 2 };
                    app.setMatrixValues('A', [[4, -3], [2, 3]]);
                    app.setMatrixValues('B', [[1, 1], [1, 1]]);
                    document.getElementById('matrix-scalar-k').value = "3";
                },
                solve: () => {
                    const A = [[4, -3], [2, 3]];
                    const B = [[1, 1], [1, 1]];
                    const sA = MatrixSolver.multiplyScalar(3, A);
                    const diff = MatrixSolver.sub(sA.result, B);
                    const steps = [
                        `<b>Amaliy 1, 1-topshiriq (b):</b> $3A - B$ amalini bajarish.`,
                        `$A = \\begin{pmatrix} 4 & -3 \\\\ 2 & 3 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$`,
                        `<b>1-qadam:</b> $3 \\cdot A$ matritsani topamiz:`,
                        MatrixSolver.toHTML(sA.result),
                        `<b>2-qadam:</b> $3A - B$ ayirmani hisoblaymiz:`,
                        MatrixSolver.toHTML(diff.result),
                        `<div class="result-badge">Natija: $3A - B = \\begin{pmatrix} 11 & -10 \\\\ 5 & 8 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("1-Amaliy, 1-topshiriq (b)", steps);
                }
            },
            {
                id: "1_2_a",
                name: "2-topshiriq (a): 2x2 Matritsalar ko'paytmasi",
                shart: "[[2, 1], [3, 2]] · [[1, -1], [1, 1]]",
                solve: () => {
                    const A = [[2, 1], [3, 2]];
                    const B = [[1, -1], [1, 1]];
                    const res = MatrixSolver.multiply(A, B);
                    const steps = [
                        `<b>Amaliy 1, 2-topshiriq (a):</b> Matritsalarni ko'paytirish ($A \\times B$):`,
                        `$A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 2 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $A \\cdot B = \\begin{pmatrix} 3 & -1 \\\\ 5 & -1 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("1-Amaliy, 2-topshiriq (a)", steps);
                }
            },
            {
                id: "1_3_b",
                name: "3-topshiriq (b): 3x3 Matritsalar ko'paytmasi",
                shart: "[[1, 2, 1], [0, 1, 2], [3, 1, 1]] · [[1, 0, 1], [2, 1, 0], [1, 1, 2]]",
                solve: () => {
                    const A = [[1, 2, 1], [0, 1, 2], [3, 1, 1]];
                    const B = [[1, 0, 1], [2, 1, 0], [1, 1, 2]];
                    const res = MatrixSolver.multiply(A, B);
                    const steps = [
                        `<b>Amaliy 1, 3-topshiriq (b):</b> $3 \\times 3$ matritsalar ko'paytmasi:`,
                        ...res.steps,
                        `<div class="result-badge">Natija:</div>`,
                        MatrixSolver.toHTML(res.result)
                    ];
                    app.showSolution("1-Amaliy, 3-topshiriq (b)", steps);
                }
            },
            {
                id: "1_var_5",
                name: "⭐ 5-Variant: Individual topshiriq",
                shart: "A = [[2, 4], [1, 3]], B = [[3, -1], [2, 5]]. 2A - 3B va A · B ni hisoblang.",
                solve: () => {
                    const A = [[2, 4], [1, 3]];
                    const B = [[3, -1], [2, 5]];
                    const sA = MatrixSolver.multiplyScalar(2, A);
                    const sB = MatrixSolver.multiplyScalar(3, B);
                    const diff = MatrixSolver.sub(sA.result, sB.result);
                    const prod = MatrixSolver.multiply(A, B);
                    const steps = [
                        `<b>Amaliy 1, 5-Variant:</b>`,
                        `$A = \\begin{pmatrix} 2 & 4 \\\\ 1 & 3 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 3 & -1 \\\\ 2 & 5 \\end{pmatrix}$`,
                        `<b>1) $2A - 3B$:</b>`,
                        `$2A = \\begin{pmatrix} 4 & 8 \\\\ 2 & 6 \\end{pmatrix}, \\quad 3B = \\begin{pmatrix} 9 & -3 \\\\ 6 & 15 \\end{pmatrix}$`,
                        `$2A - 3B = \\begin{pmatrix} -5 & 11 \\\\ -4 & -9 \\end{pmatrix}$`,
                        `<b>2) $A \\cdot B$:</b>`,
                        ...prod.steps,
                        `<div class="result-badge">Natija: $A \\cdot B = \\begin{pmatrix} 14 & 18 \\\\ 9 & 14 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("1-Amaliy, 5-Variant", steps);
                }
            }
        ]
    },

    2: {
        title: "2-Amaliy: O‘rinlashtirish va o‘rin almashtirish",
        file: "Amaliy 2  O‘rinlashtirish va o‘rin almashtirish.pdf",
        tasks: [
            {
                id: "2_1",
                name: "1-topshiriq: O'rin almashtirish inversiyalari",
                shart: "p = (3, 5, 1, 4, 2) inversiyalar soni va juft-toqligi",
                solve: () => {
                    const res = PermutationSolver.analyze([3, 5, 1, 4, 2]);
                    app.showSolution("2-Amaliy, 1-topshiriq: p = (3, 5, 1, 4, 2)", res.steps);
                }
            },
            {
                id: "2_var_5",
                name: "⭐ 5-Variant: p = (4, 3, 1, 5, 2)",
                shart: "O'rin almashtirish inversiyalari va disyukt tsikllari",
                solve: () => {
                    const res = PermutationSolver.analyze([4, 3, 1, 5, 2]);
                    app.showSolution("2-Amaliy, 5-Variant: p = (4, 3, 1, 5, 2)", res.steps);
                }
            }
        ]
    },

    3: {
        title: "3-Amaliy: n-tartibli determinantlar va ularning xossalari",
        file: "Amaliy 3  n-tartibli determinantlar va ularning xossalari.pdf",
        tasks: [
            {
                id: "3_2",
                name: "2-topshiriq: 3x3 Determinant (Sarryus qoidasi)",
                shart: "det [[2, 1, 1], [1, 3, 2], [1, 0, 0]]",
                solve: () => {
                    const res = MatrixSolver.determinant([[2, 1, 1], [1, 3, 2], [1, 0, 0]]);
                    res.steps.push(`<div class="result-badge">Natija: |A| = ${res.result.toString()}</div>`);
                    app.showSolution("3-Amaliy, 2-topshiriq (Sarryus)", res.steps);
                }
            },
            {
                id: "3_var_5",
                name: "⭐ 5-Variant: 3x3 Determinant",
                shart: "det [[3, 2, 1], [2, 5, 3], [3, 4, 2]]",
                solve: () => {
                    const res = MatrixSolver.determinant([[3, 2, 1], [2, 5, 3], [3, 4, 2]]);
                    res.steps.push(`<div class="result-badge">Natija: |A| = ${res.result.toString()}</div>`);
                    app.showSolution("3-Amaliy, 5-Variant (Determinant)", res.steps);
                }
            }
        ]
    },

    4: {
        title: "4-Amaliy: Minor va algebraik to‘ldiruvchi",
        file: "Amaliy 4  Minor va algebraik to‘ldiruvchi.pdf",
        tasks: [
            {
                id: "4_1",
                name: "1-topshiriq: 1-satr bo'yicha Laplas yoyilmasi",
                shart: "A = [[1, 2, 3], [0, 4, 5], [1, 0, 6]]",
                solve: () => {
                    const res = MatrixSolver.laplaceExpansion([[1, 2, 3], [0, 4, 5], [1, 0, 6]], 'row', 0);
                    res.steps.push(`<div class="result-badge">Natija: |A| = ${res.result.toString()}</div>`);
                    app.showSolution("4-Amaliy, 1-topshiriq: Laplas yoyilmasi", res.steps);
                }
            },
            {
                id: "4_var_5",
                name: "⭐ 5-Variant: Minorlar va algebraik to'ldiruvchilar",
                shart: "A = [[2, -1, 3], [1, 4, 2], [3, 1, 5]]",
                solve: () => {
                    const res = MatrixSolver.laplaceExpansion([[2, -1, 3], [1, 4, 2], [3, 1, 5]], 'row', 0);
                    res.steps.push(`<div class="result-badge">Natija: |A| = ${res.result.toString()}</div>`);
                    app.showSolution("4-Amaliy, 5-Variant: Laplas yoyilmasi", res.steps);
                }
            }
        ]
    },

    5: {
        title: "5-Amaliy: Teskari matritsa",
        file: "Amaliy 5  Teskari matritsa.pdf",
        tasks: [
            {
                id: "5_1",
                name: "1-topshiriq: 3x3 Teskari matritsa (A⁻¹)",
                shart: "A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]]",
                solve: () => {
                    const res = MatrixSolver.inverse([[1, 2, 3], [0, 1, 4], [5, 6, 0]]);
                    res.steps.push(`<div class="result-badge">Natija A⁻¹:</div>`);
                    res.steps.push(MatrixSolver.toHTML(res.result));
                    app.showSolution("5-Amaliy, 1-topshiriq: Teskari matritsa", res.steps);
                }
            },
            {
                id: "5_var_5",
                name: "⭐ 5-Variant: Teskari matritsani topish",
                shart: "A = [[2, 1, 1], [1, 2, 1], [1, 1, 2]]",
                solve: () => {
                    const res = MatrixSolver.inverse([[2, 1, 1], [1, 2, 1], [1, 1, 2]]);
                    res.steps.push(`<div class="result-badge">Natija A⁻¹:</div>`);
                    res.steps.push(MatrixSolver.toHTML(res.result));
                    app.showSolution("5-Amaliy, 5-Variant (A⁻¹)", res.steps);
                }
            }
        ]
    },

    6: {
        title: "6-Amaliy: Chiziqli tenglamalar sistemalarini yechish",
        file: "Amaliy_6_Chiziqli_tenglamalar_sistemalarini_yechish_usullari.pdf",
        tasks: [
            {
                id: "6_1",
                name: "1-topshiriq: Kramer usulida yechish",
                shart: "2x1 + x2 - x3 = 8; 3x1 - 2x2 + 2x3 = 1; x1 + x2 + x3 = 6",
                solve: () => {
                    const A = [[2, 1, -1], [3, -2, 2], [1, 1, 1]];
                    const B = [8, 1, 6];
                    const res = MatrixSolver.solveCramer(A, B);
                    const ans = res.result.map((x, i) => `x_{${i+1}} = ${x.toString()}`).join(', ');
                    res.steps.push(`<div class="result-badge">Yechim: ${ans}</div>`);
                    app.showSolution("6-Amaliy, 1-topshiriq (Kramer)", res.steps);
                }
            },
            {
                id: "6_var_5",
                name: "⭐ 5-Variant: Gauss usulida yechish",
                shart: "x1 + 2x2 + 3x3 = 14; 3x1 + x2 + 2x3 = 11; 2x1 + 3x2 + x3 = 11",
                solve: () => {
                    const A = [[1, 2, 3], [3, 1, 2], [2, 3, 1]];
                    const B = [14, 11, 11];
                    const res = MatrixSolver.solveGauss(A, B);
                    const ans = res.result.map((x, i) => `x_{${i+1}} = ${x.toString()}`).join(', ');
                    res.steps.push(`<div class="result-badge">Yechim: ${ans}</div>`);
                    app.showSolution("6-Amaliy, 5-Variant (Gauss usuli)", res.steps);
                }
            }
        ]
    },

    7: {
        title: "7-Amaliy: Matritsa rangi",
        file: "Amaliy 7  Matritsa rangi.pdf",
        tasks: [
            {
                id: "7_1",
                name: "1-topshiriq: Matritsa rangini topish",
                shart: "[[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]",
                solve: () => {
                    const res = MatrixSolver.rank([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]);
                    res.steps.push(`<div class="result-badge">rang(A) = ${res.result}</div>`);
                    app.showSolution("7-Amaliy, 1-topshiriq: Matritsa rangi", res.steps);
                }
            },
            {
                id: "7_var_5",
                name: "⭐ 5-Variant: 3x4 Matritsa rangi",
                shart: "[[2, 1, -1, 3], [1, -2, 3, 1], [3, -1, 2, 4]]",
                solve: () => {
                    const res = MatrixSolver.rank([[2, 1, -1, 3], [1, -2, 3, 1], [3, -1, 2, 4]]);
                    res.steps.push(`<div class="result-badge">rang(A) = ${res.result}</div>`);
                    app.showSolution("7-Amaliy, 5-Variant (Rang)", res.steps);
                }
            }
        ]
    },

    8: {
        title: "8-Amaliy: Bir jinsli sistema va FYET",
        file: "Amaliy_8_Bir_jinsli_chiziqli_tenglamalar_sistemasi_Kroneker_Kopelli.pdf",
        tasks: [
            {
                id: "8_1",
                name: "1-topshiriq: AX = 0 uchun FYET topish",
                shart: "x1 + 2x2 + 4x3 - 3x4 = 0; 3x1 + 5x2 + 6x3 - 4x4 = 0; 4x1 + 5x2 - 2x3 + 3x4 = 0",
                solve: () => {
                    const res = MatrixSolver.solveHomogeneous([
                        [1, 2, 4, -3],
                        [3, 5, 6, -4],
                        [4, 5, -2, 3]
                    ]);
                    app.showSolution("8-Amaliy, 1-topshiriq: FYET (AX = 0)", res.steps);
                }
            }
        ]
    },

    9: {
        title: "9-Amaliy: Kompleks sonlar va amallar",
        file: "Amaliy_9_Kompleks_sonlar_va_ular_ustida_amallar_Darajaga_ko‘tarish.pdf",
        tasks: [
            {
                id: "9_1",
                name: "1-topshiriq: Bo'lish va ko'paytirish",
                shart: "z1 = 2 + 3i, z2 = 1 - 2i. z1 * z2 va z1 / z2 ni hisoblang.",
                solve: () => {
                    const z1 = ComplexNumber.parse("2 + 3i");
                    const z2 = ComplexNumber.parse("1 - 2i");
                    const mul = ComplexNumber.mul(z1, z2);
                    const div = ComplexNumber.div(z1, z2);
                    const steps = [
                        `<b>Amaliy 9, 1-topshiriq:</b>`,
                        `$z_1 = 2 + 3i, \\quad z_2 = 1 - 2i$`,
                        `<b>1) Ko'paytirish:</b>`,
                        ...mul.steps,
                        `<b>2) Bo'lish:</b>`,
                        ...div.steps
                    ];
                    app.showSolution("9-Amaliy, 1-topshiriq (Kompleks sonlar)", steps);
                }
            }
        ]
    },

    10: {
        title: "10-Amaliy: Muavr formulasi va ildiz chiqarish",
        file: "Amaliy_10_Kompleks_sonni_darajaga_ko‘tarish_va_ildiz_chiqarish.pdf",
        tasks: [
            {
                id: "10_1",
                name: "1-topshiriq: (1 + i)^8 Muavr formulasi",
                shart: "(1 + i)^8 ni hisoblash",
                solve: () => {
                    const z = ComplexNumber.parse("1 + i");
                    const res = ComplexNumber.powerMoivre(z, 8);
                    app.showSolution("10-Amaliy, 1-topshiriq: (1 + i)^8", res.steps);
                }
            },
            {
                id: "10_2",
                name: "2-topshiriq: 4-darajali ildizlar (⁴√1)",
                shart: "w = ⁴√1 barcha 4 ta kompleks ildizini topish",
                solve: () => {
                    const z = ComplexNumber.parse("1");
                    const res = ComplexNumber.roots(z, 4);
                    app.showSolution("10-Amaliy, 2-topshiriq: ⁴√1 ildizlar", res.steps);
                }
            }
        ]
    },

    11: {
        title: "11-Amaliy: Ko‘phadlar va qoldiqli bo'linish",
        file: "Amaliy_11_Ko'phadlar_va_ular_ustida_amallar_Ko‘phadlarning_bo'linish.pdf",
        tasks: [
            {
                id: "11_1",
                name: "1-topshiriq: Burchakli qoldiqli bo'lish",
                shart: "P(x) = 2x^4 - 3x^3 + 4x^2 - 5x + 6 ni Q(x) = x^2 - 3x + 1 ga bo'lish",
                solve: () => {
                    const P = Polynomial.parse("2x^4 - 3x^3 + 4x^2 - 5x + 6");
                    const Q = Polynomial.parse("x^2 - 3x + 1");
                    const res = Polynomial.divide(P, Q);
                    app.showSolution("11-Amaliy, 1-topshiriq: Qoldiqli bo'lish", res.steps);
                }
            }
        ]
    },

    12: {
        title: "12-Amaliy: Ko‘phadlarning EKUBi (Yevklid)",
        file: "Amaliy 12   Ko‘phadlarning EKUB.pdf",
        tasks: [
            {
                id: "12_1",
                name: "1-topshiriq: EKUB(P, Q) ni Yevklid bilan topish",
                shart: "P(x) = x^4 + x^3 - 3x^2 - 4x - 1, Q(x) = x^3 + x^2 - x - 1",
                solve: () => {
                    const P = Polynomial.parse("x^4 + x^3 - 3x^2 - 4x - 1");
                    const Q = Polynomial.parse("x^3 + x^2 - x - 1");
                    const res = Polynomial.gcd(P, Q);
                    app.showSolution("12-Amaliy, 1-topshiriq: EKUB(P, Q)", res.steps);
                }
            }
        ]
    },

    13: {
        title: "13-Amaliy: Bezu teoremasi va Gorner sxemasi",
        file: "Amaliy_13_Bezu_teoremasi_va_Gorner_sxemasi_Algebraning_asosiy_teoremasi.pdf",
        tasks: [
            {
                id: "13_1",
                name: "1-topshiriq: Gorner sxemasi jadvali",
                shart: "P(x) = x^4 - 2x^3 + 4x^2 - 6x + 8, c = 2 nuqtada",
                solve: () => {
                    const P = Polynomial.parse("x^4 - 2x^3 + 4x^2 - 6x + 8");
                    const res = Polynomial.horner(P, 2);
                    app.showSolution("13-Amaliy, 1-topshiriq: Gorner sxemasi", res.steps);
                }
            },
            {
                id: "13_2",
                name: "2-topshiriq: Barcha ratsional ildizlarni topish",
                shart: "P(x) = x^3 - 6x^2 + 11x - 6 ning ratsional ildizlari",
                solve: () => {
                    const P = Polynomial.parse("x^3 - 6x^2 + 11x - 6");
                    const res = Polynomial.findRationalRoots(P);
                    app.showSolution("13-Amaliy, 2-topshiriq: Ratsional ildizlar", res.steps);
                }
            }
        ]
    },

    14: {
        title: "14-Amaliy: Ratsional kasrlar",
        file: "Amaliy 14  Ratsional kasrlar.pdf",
        tasks: [
            {
                id: "14_1",
                name: "1-topshiriq: Sodda kasrlarga yoyish",
                shart: "(x + 3) / [(x - 1)(x + 2)]",
                solve: () => {
                    const P = Polynomial.parse("x + 3");
                    const res = RationalFractionSolver.decomposeSimple(P.coeffs, 1, -2);
                    app.showSolution("14-Amaliy, 1-topshiriq: Sodda kasrlar", res.steps);
                }
            }
        ]
    },

    15: {
        title: "15-Amaliy: 3- va 4-darajali tenglamalar",
        file: "Amaliy 15  3- va 4 – darajali tenglamalar.pdf",
        tasks: [
            {
                id: "15_1",
                name: "1-topshiriq: Kardano usulida kubik tenglama",
                shart: "x^3 - 6x - 9 = 0",
                solve: () => {
                    const res = HigherDegreeSolver.solveCubic(1, 0, -6, -9);
                    app.showSolution("15-Amaliy, 1-topshiriq: x³ - 6x - 9 = 0", res.steps);
                }
            },
            {
                id: "15_var_5",
                name: "⭐ 5-Variant: Kardano formulasi (3 ta haqiqiy ildiz)",
                shart: "x^3 - 3x - 1 = 0 (Casus Irreducibilis)",
                solve: () => {
                    const res = HigherDegreeSolver.solveCubic(1, 0, -3, -1);
                    app.showSolution("15-Amaliy, 5-Variant (Casus Irreducibilis)", res.steps);
                }
            }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AMALIY_DATABASE;
}
