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
                id: "af1_t1_a",
                name: "1-topshiriq (a): A + B qo'shish",
                shart: "[[1, 2], [3, 4]] + [[-1, 3], [0, 2]]",
                solve: () => {
                    const A = [[1, 2], [3, 4]];
                    const B = [[-1, 3], [0, 2]];
                    const res = MatrixSolver.add(A, B);
                    const steps = [
                        `<b>Amaliy 1, 1-topshiriq (a):</b> $A + B$ matritsalar yig'indisi:`,
                        ...res.steps,
                        `<div class="result-badge">Natija:</div>`,
                        MatrixSolver.toHTML(res.result)
                    ];
                    app.showSolution("1-Amaliy, 1-topshiriq (a)", steps);
                }
            },
            {
                id: "af1_t1",
                name: "1-topshiriq (b): 3A - B chiziqli amali",
                shart: "3 · [[4, -3], [2, 3]] - [[1, 1], [1, 1]]",
                solve: () => {
                    const A = [[4, -3], [2, 3]];
                    const B = [[1, 1], [1, 1]];
                    const sA = MatrixSolver.multiplyScalar(3, A);
                    const diff = MatrixSolver.sub(sA.result, B);
                    const steps = [
                        `<b>Amaliy 1, 1-topshiriq (b):</b> $3A - B$ amalini hisoblash:`,
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
                id: "af1_t1_c",
                name: "1-topshiriq (c): 4A + 5B chiziqli amali",
                shart: "4 · [[1, 2], [2, 1]] + 5 · [[-1, -1], [3, 0]]",
                solve: () => {
                    const A = [[1, 2], [2, 1]];
                    const B = [[-1, -1], [3, 0]];
                    const sA = MatrixSolver.multiplyScalar(4, A);
                    const sB = MatrixSolver.multiplyScalar(5, B);
                    const sum = MatrixSolver.add(sA.result, sB.result);
                    const steps = [
                        `<b>Amaliy 1, 1-topshiriq (c):</b> $4A + 5B$ amalini hisoblash.`,
                        `<b>1-qadam:</b> $4 \\cdot A$ va $5 \\cdot B$ matritsalarni hisoblaymiz:`,
                        MatrixSolver.toHTML(sA.result),
                        MatrixSolver.toHTML(sB.result),
                        `<b>2-qadam:</b> Yig'indini topamiz:`,
                        MatrixSolver.toHTML(sum.result),
                        `<div class="result-badge">Natija: $\\begin{pmatrix} -1 & 3 \\\\ 23 & 4 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("1-Amaliy, 1-topshiriq (c)", steps);
                }
            },
            {
                id: "af1_t2_a",
                name: "2-topshiriq (a): 2x2 Ko'paytirish",
                shart: "[[2, 1], [3, 2]] · [[1, -1], [1, 1]]",
                solve: () => {
                    const A = [[2, 1], [3, 2]];
                    const B = [[1, -1], [1, 1]];
                    const res = MatrixSolver.multiply(A, B);
                    const steps = [
                        `<b>Amaliy 1, 2-topshiriq (a):</b> $2 \\times 2$ matritsalarni ko'paytirish:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $A \\cdot B = \\begin{pmatrix} 3 & -1 \\\\ 5 & -1 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("1-Amaliy, 2-topshiriq (a)", steps);
                }
            },
            {
                id: "af1_t2_b",
                name: "2-topshiriq (b): 2x2 Ko'paytirish",
                shart: "[[3, -2], [5, -4]] · [[3, 4], [2, 5]]",
                solve: () => {
                    const A = [[3, -2], [5, -4]];
                    const B = [[3, 4], [2, 5]];
                    const res = MatrixSolver.multiply(A, B);
                    const steps = [
                        `<b>Amaliy 1, 2-topshiriq (b):</b> $2 \\times 2$ ko'paytirish:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $A \\cdot B = \\begin{pmatrix} 5 & 2 \\\\ 7 & 0 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("1-Amaliy, 2-topshiriq (b)", steps);
                }
            },
            {
                id: "af1_t2_c",
                name: "2-topshiriq (c): 2x3 va 3x2 Ko'paytirish",
                shart: "[[1, -2, 3], [4, 5, -6]] · [[1, 2], [3, 4], [5, 6]]",
                solve: () => {
                    const A = [[1, -2, 3], [4, 5, -6]];
                    const B = [[1, 2], [3, 4], [5, 6]];
                    const res = MatrixSolver.multiply(A, B);
                    const steps = [
                        `<b>Amaliy 1, 2-topshiriq (c):</b> $2 \\times 3$ va $3 \\times 2$ matritsalar ko'paytmasi:`,
                        ...res.steps,
                        `<div class="result-badge">Natija:</div>`,
                        MatrixSolver.toHTML(res.result)
                    ];
                    app.showSolution("1-Amaliy, 2-topshiriq (c)", steps);
                }
            },
            {
                id: "af1_t3",
                name: "3-topshiriq (b): 3x3 Ko'paytirish",
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
                id: "af1_t4",
                name: "4-topshiriq: A · A^T transponirlash",
                shart: "A = [[3, 2, 1, 2], [4, 1, 1, 3]] uchun A · A^T ni hisoblang.",
                solve: () => {
                    const A = [[3, 2, 1, 2], [4, 1, 1, 3]];
                    const AT = [[3, 4], [2, 1], [1, 1], [2, 3]];
                    const res = MatrixSolver.multiply(A, AT);
                    const steps = [
                        `<b>Amaliy 1, 4-topshiriq:</b> $A \\cdot A^T$ ni hisoblash:`,
                        `$A$ matritsa ($2 \\times 4$):`,
                        MatrixSolver.toHTML(A),
                        `$A^T$ transponirlangan matritsa ($4 \\times 2$):`,
                        MatrixSolver.toHTML(AT),
                        `Ko'paytirish qadami:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $A \\cdot A^T = \\begin{pmatrix} 18 & 21 \\\\ 21 & 27 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("1-Amaliy, 4-topshiriq (A · Aᵀ)", steps);
                }
            },
            {
                id: "af1_t5",
                name: "5-topshiriq: A³ Matritsa darajasi",
                shart: "A = [[1, 1], [0, 1]] uchun A³ ni hisoblang.",
                solve: () => {
                    const A = [[1, 1], [0, 1]];
                    const A2 = MatrixSolver.multiply(A, A);
                    const A3 = MatrixSolver.multiply(A2.result, A);
                    const steps = [
                        `<b>Amaliy 1, 5-topshiriq:</b> Matritsa darajasi $A^3$:`,
                        `$A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$`,
                        `$A^2 = A \\cdot A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$`,
                        `$A^3 = A^2 \\cdot A = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$`,
                        `Umumiy qonuniyat: $A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$`,
                        `<div class="result-badge">Natija: $A^3 = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("1-Amaliy, 5-topshiriq (A³)", steps);
                }
            },
            {
                id: "af1_var5",
                name: "⭐ 5-Variant: Individual topshiriq",
                shart: "A = [[2, 4], [1, 3]], B = [[3, -1], [2, 5]]. 2A - 3B va A · B ni hisoblang.",
                solve: () => {
                    const A = [[2, 4], [1, 3]];
                    const B = [[3, -1], [2, 5]];
                    const sA = MatrixSolver.multiplyScalar(2, A);
                    const sB = MatrixSolver.multiplyScalar(3, B);
                    const diff = MatrixSolver.sub(sA.result, sB.result);
                    const mul = MatrixSolver.multiply(A, B);
                    const steps = [
                        `<b>Amaliy 1, 5-Variant:</b> Individual topshiriq.`,
                        `$A = \\begin{pmatrix} 2 & 4 \\\\ 1 & 3 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 3 & -1 \\\\ 2 & 5 \\end{pmatrix}$`,
                        `<b>1) $2A - 3B$ ayirmani hisoblash:</b>`,
                        MatrixSolver.toHTML(diff.result),
                        `<b>2) $A \\cdot B$ ko'paytmani hisoblash:</b>`,
                        MatrixSolver.toHTML(mul.result),
                        `<div class="result-badge">2A - 3B = $\\begin{pmatrix} -5 & 11 \\\\ -4 & -9 \\end{pmatrix}$, \\quad A \\cdot B = \\begin{pmatrix} 14 & 18 \\\\ 9 & 14 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("1-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    2: {
        title: "2-Amaliy: O‘rinlashtirish va o‘rin almashtirish",
        file: "Amaliy 2  O‘rinlashtirish va o‘rin almashtirish.pdf",
        tasks: [
            {
                id: "af2_t1",
                name: "1-topshiriq: p = (3, 5, 1, 4, 2) inversiyalari",
                shart: "p = (3, 5, 1, 4, 2) o'rin almashtirish inversiyalar soni va juft/toqligini aniqlang.",
                solve: () => {
                    const p = [3, 5, 1, 4, 2];
                    const res = PermutationSolver.analyze(p);
                    const steps = [
                        `<b>Amaliy 2, 1-topshiriq:</b> $p = (3, 5, 1, 4, 2)$ inversiyalari:`,
                        ...res.steps,
                        `<div class="result-badge">Inversiyalar: $I(p) = ${res.invCount}$, O'rin almashtirish: <b>${res.isEven ? "JUFT" : "TOQ"}</b></div>`
                    ];
                    app.showSolution("2-Amaliy, 1-topshiriq", steps);
                }
            },
            {
                id: "af2_t2",
                name: "2-topshiriq: p = (2, 4, 1, 5, 3) inversiyalari",
                shart: "p = (2, 4, 1, 5, 3) inversiyalar soni va juft-toqligi",
                solve: () => {
                    const p = [2, 4, 1, 5, 3];
                    const res = PermutationSolver.analyze(p);
                    const steps = [
                        `<b>Amaliy 2, 2-topshiriq:</b> $p = (2, 4, 1, 5, 3)$ inversiyalari:`,
                        ...res.steps,
                        `<div class="result-badge">Inversiyalar: $I(p) = ${res.invCount}$, <b>${res.isEven ? "JUFT" : "TOQ"}</b></div>`
                    ];
                    app.showSolution("2-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af2_t3",
                name: "3-topshiriq: O'rniga qo'yishlar ko'paytmasi",
                shart: "sigma1 = ((1, 2, 3, 4), (4, 1, 3, 2)) · sigma2 = ((1, 2, 3, 4), (3, 2, 4, 1))",
                solve: () => {
                    const p1 = [4, 1, 3, 2];
                    const p2 = [3, 2, 4, 1];
                    const res = PermutationSolver.multiply(p1, p2);
                    const steps = [
                        `<b>Amaliy 2, 3-topshiriq:</b> O'rniga qo'yishlar ko'paytmasi:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $\\sigma_1 \\circ \\sigma_2 = (3, 1, 2, 4)$</div>`
                    ];
                    app.showSolution("2-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af2_t4",
                name: "4-topshiriq: Teskari o'rniga qo'yish (σ⁻¹)",
                shart: "sigma = ((1, 2, 3, 4, 5), (3, 5, 1, 4, 2)) ning teskarisini toping.",
                solve: () => {
                    const p = [3, 5, 1, 4, 2];
                    const res = PermutationSolver.analyze(p);
                    const steps = [
                        `<b>Amaliy 2, 4-topshiriq:</b> Teskari o'rin almashtirish $\\sigma^{-1}$:`,
                        ...res.steps,
                        `<div class="result-badge">Teskari: $\\sigma^{-1} = (${res.invP.join(', ')})$</div>`
                    ];
                    app.showSolution("2-Amaliy, 4-topshiriq", steps);
                }
            },
            {
                id: "af2_var5",
                name: "⭐ 5-Variant: p = (4, 3, 1, 5, 2)",
                shart: "p = (4, 3, 1, 5, 2) inversiyalari va disyukt tsikllarga ajrating.",
                solve: () => {
                    const p = [4, 3, 1, 5, 2];
                    const res = PermutationSolver.analyze(p);
                    const steps = [
                        `<b>Amaliy 2, 5-Variant:</b> $p = (4, 3, 1, 5, 2)$ tahlili.`,
                        ...res.steps,
                        `<div class="result-badge">Inversiyalar: $I(p) = 6$ (JUFT), Tsikl: $(1\\ 4\\ 5\\ 2\\ 3)$</div>`
                    ];
                    app.showSolution("2-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    3: {
        title: "3-Amaliy: n-tartibli determinantlar va ularning xossalari",
        file: "Amaliy 3  n-tartibli determinantlar va ularning xossalari.pdf",
        tasks: [
            {
                id: "af3_t1_a",
                name: "1-topshiriq (a): 2-tartibli determinant",
                shart: "det [[5, 2], [7, 3]]",
                solve: () => {
                    const A = [[5, 2], [7, 3]];
                    const res = MatrixSolver.determinant(A);
                    const steps = [
                        `<b>Amaliy 3, 1-topshiriq (a):</b> 2-tartibli determinant:`,
                        ...res.steps,
                        `<div class="result-badge">|A| = 1</div>`
                    ];
                    app.showSolution("3-Amaliy, 1-topshiriq (a)", steps);
                }
            },
            {
                id: "af3_t1_b",
                name: "1-topshiriq (b): 2-tartibli determinant",
                shart: "det [[1, 2], [3, 4]]",
                solve: () => {
                    const A = [[1, 2], [3, 4]];
                    const res = MatrixSolver.determinant(A);
                    const steps = [
                        `<b>Amaliy 3, 1-topshiriq (b):</b> 2-tartibli determinant:`,
                        ...res.steps,
                        `<div class="result-badge">|A| = -2</div>`
                    ];
                    app.showSolution("3-Amaliy, 1-topshiriq (b)", steps);
                }
            },
            {
                id: "af3_t1_c",
                name: "1-topshiriq (c): 2-tartibli determinant",
                shart: "det [[3, 2], [8, 5]]",
                solve: () => {
                    const A = [[3, 2], [8, 5]];
                    const res = MatrixSolver.determinant(A);
                    const steps = [
                        `<b>Amaliy 3, 1-topshiriq (c):</b> 2-tartibli determinant:`,
                        ...res.steps,
                        `<div class="result-badge">|A| = -1</div>`
                    ];
                    app.showSolution("3-Amaliy, 1-topshiriq (c)", steps);
                }
            },
            {
                id: "af3_t2",
                name: "2-topshiriq: 3x3 Sarryus qoidasi",
                shart: "det [[2, 1, 3], [5, 3, 2], [1, 4, 3]]",
                solve: () => {
                    const A = [[2, 1, 3], [5, 3, 2], [1, 4, 3]];
                    const res = MatrixSolver.determinant(A);
                    const steps = [
                        `<b>Amaliy 3, 2-topshiriq:</b> $3 \\times 3$ determinant (Sarryus qoidasi):`,
                        ...res.steps,
                        `<div class="result-badge">|A| = 40</div>`
                    ];
                    app.showSolution("3-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af3_t3",
                name: "3-topshiriq: 4-tartibli determinant (Gauss usuli)",
                shart: "det [[1, 1, 1, 1], [1, 2, 3, 4], [1, 3, 6, 10], [1, 4, 10, 20]]",
                solve: () => {
                    const A = [
                        [1, 1, 1, 1],
                        [1, 2, 3, 4],
                        [1, 3, 6, 10],
                        [1, 4, 10, 20]
                    ];
                    const res = MatrixSolver.determinant(A);
                    const steps = [
                        `<b>Amaliy 3, 3-topshiriq:</b> 4-tartibli determinantni Gauss usulida hisoblash:`,
                        ...res.steps,
                        `<div class="result-badge">|A| = 1</div>`
                    ];
                    app.showSolution("3-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af3_var5",
                name: "⭐ 5-Variant: 3x3 Determinant",
                shart: "det [[3, 2, 1], [2, 5, 3], [3, 4, 2]]",
                solve: () => {
                    const A = [[3, 2, 1], [2, 5, 3], [3, 4, 2]];
                    const res = MatrixSolver.determinant(A);
                    const steps = [
                        `<b>Amaliy 3, 5-Variant:</b> $3 \\times 3$ determinant hisoblash:`,
                        ...res.steps,
                        `<div class="result-badge">|A| = -3</div>`
                    ];
                    app.showSolution("3-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    4: {
        title: "4-Amaliy: Minor va algebraik to‘ldiruvchi",
        file: "Amaliy 4  Minor va algebraik to‘ldiruvchi.pdf",
        tasks: [
            {
                id: "af4_t1",
                name: "1-topshiriq: Satr bo'yicha Laplas yoyilmasi",
                shart: "A = [[1, 2, 3], [0, 4, 5], [1, 0, 6]] determinantini 1-satr bo'yicha hisoblang.",
                solve: () => {
                    const A = [[1, 2, 3], [0, 4, 5], [1, 0, 6]];
                    const res = MatrixSolver.laplaceExpansion(A, 'row', 0);
                    const steps = [
                        `<b>Amaliy 4, 1-topshiriq:</b> 1-satr bo'yicha Laplas yoyilmasi:`,
                        ...res.steps,
                        `<div class="result-badge">|A| = 22</div>`
                    ];
                    app.showSolution("4-Amaliy, 1-topshiriq", steps);
                }
            },
            {
                id: "af4_t2",
                name: "2-topshiriq: Ustun bo'yicha Laplas yoyilmasi",
                shart: "A = [[2, 3, 1], [4, -2, 3], [3, 1, 4]] ni 1-ustun bo'yicha hisoblang.",
                solve: () => {
                    const A = [[2, 3, 1], [4, -2, 3], [3, 1, 4]];
                    const res = MatrixSolver.laplaceExpansion(A, 'col', 0);
                    const steps = [
                        `<b>Amaliy 4, 2-topshiriq:</b> 1-ustun bo'yicha Laplas yoyilmasi:`,
                        ...res.steps,
                        `<div class="result-badge">|A| = -33</div>`
                    ];
                    app.showSolution("4-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af4_t3",
                name: "3-topshiriq: Blokli uchburchak determinant",
                shart: "det [[1, 2, 0, 0], [3, 4, 0, 0], [7, 6, 5, 4], [2, 3, 4, 5]]",
                solve: () => {
                    const A = [
                        [1, 2, 0, 0],
                        [3, 4, 0, 0],
                        [7, 6, 5, 4],
                        [2, 3, 4, 5]
                    ];
                    const res = MatrixSolver.determinant(A);
                    const steps = [
                        `<b>Amaliy 4, 3-topshiriq:</b> Blokli determinant (Laplas teoremasi):`,
                        ...res.steps,
                        `<div class="result-badge">|A| = -18</div>`
                    ];
                    app.showSolution("4-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af4_var5",
                name: "⭐ 5-Variant: Minorlar va Laplas yoyilmasi",
                shart: "A = [[2, -1, 3], [1, 4, 2], [3, 1, 5]] matritsaning determinantini 1-satr bo'yicha hisoblang.",
                solve: () => {
                    const A = [[2, -1, 3], [1, 4, 2], [3, 1, 5]];
                    const res = MatrixSolver.laplaceExpansion(A, 'row', 0);
                    const steps = [
                        `<b>Amaliy 4, 5-Variant:</b> Minorlar va algebraik to'ldiruvchilar yoyilmasi:`,
                        ...res.steps,
                        `<div class="result-badge">|A| = 2</div>`
                    ];
                    app.showSolution("4-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    5: {
        title: "5-Amaliy: Teskari matritsa",
        file: "Amaliy 5  Teskari matritsa.pdf",
        tasks: [
            {
                id: "af5_t1_a",
                name: "1-topshiriq (a): 2x2 Teskari matritsa",
                shart: "A = [[1, 2], [3, 4]] ning teskarisini toping.",
                solve: () => {
                    const A = [[1, 2], [3, 4]];
                    const res = MatrixSolver.inverse(A);
                    const steps = [
                        `<b>Amaliy 5, 1-topshiriq (a):</b> $2 \\times 2$ teskari matritsa:`,
                        ...res.steps,
                        `<div class="result-badge">A⁻¹ = $\\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("5-Amaliy, 1-topshiriq (a)", steps);
                }
            },
            {
                id: "af5_t1_b",
                name: "1-topshiriq (b): 2x2 Teskari matritsa",
                shart: "A = [[3, 4], [5, 7]] ning teskarisini toping.",
                solve: () => {
                    const A = [[3, 4], [5, 7]];
                    const res = MatrixSolver.inverse(A);
                    const steps = [
                        `<b>Amaliy 5, 1-topshiriq (b):</b> $2 \\times 2$ teskari matritsa:`,
                        ...res.steps,
                        `<div class="result-badge">A⁻¹ = $\\begin{pmatrix} 7 & -4 \\\\ -5 & 3 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("5-Amaliy, 1-topshiriq (b)", steps);
                }
            },
            {
                id: "af5_t2",
                name: "2-topshiriq: 3x3 Teskari matritsa (A⁻¹)",
                shart: "A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]] ning teskarisini toping.",
                solve: () => {
                    const A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]];
                    const res = MatrixSolver.inverse(A);
                    const steps = [
                        `<b>Amaliy 5, 2-topshiriq:</b> $3 \\times 3$ teskari matritsani topish:`,
                        ...res.steps,
                        `<div class="result-badge">Natija:</div>`,
                        MatrixSolver.toHTML(res.result)
                    ];
                    app.showSolution("5-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af5_t3",
                name: "3-topshiriq: Matritsaviy tenglama (AX = B)",
                shart: "[[1, 2], [3, 4]] · X = [[3, 5], [5, 9]]",
                solve: () => {
                    const A = [[1, 2], [3, 4]];
                    const B = [[3, 5], [5, 9]];
                    const invA = MatrixSolver.inverse(A);
                    const X = MatrixSolver.multiply(invA.result, B);
                    const steps = [
                        `<b>Amaliy 5, 3-topshiriq:</b> Matritsaviy tenglama $A \\cdot X = B$:`,
                        `$X = A^{-1} \\cdot B$`,
                        `$A^{-1}$ teskari matritsa:`,
                        MatrixSolver.toHTML(invA.result),
                        `$X$ matritsani topish:`,
                        ...X.steps,
                        `<div class="result-badge">X = $\\begin{pmatrix} -1 & -1 \\\\ 2 & 3 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("5-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af5_var5",
                name: "⭐ 5-Variant: Teskari matritsa",
                shart: "A = [[2, 1, 1], [1, 2, 1], [1, 1, 2]] ning teskari matritsasini toping.",
                solve: () => {
                    const A = [[2, 1, 1], [1, 2, 1], [1, 1, 2]];
                    const res = MatrixSolver.inverse(A);
                    const steps = [
                        `<b>Amaliy 5, 5-Variant:</b> $3 \\times 3$ teskari matritsa hisoblash:`,
                        ...res.steps,
                        `<div class="result-badge">Natija:</div>`,
                        MatrixSolver.toHTML(res.result)
                    ];
                    app.showSolution("5-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    6: {
        title: "6-Amaliy: Chiziqli tenglamalar sistemalarini yechish",
        file: "Amaliy_6_Chiziqli_tenglamalar_sistemalarini_yechish_usullari.pdf",
        tasks: [
            {
                id: "af6_t1_a",
                name: "1-topshiriq (a): Kramer usuli (2 noma'lumli)",
                shart: "2x + 3y = 8\n3x - y = 1",
                solve: () => {
                    const A = [[2, 3], [3, -1]];
                    const B = [8, 1];
                    const res = MatrixSolver.solveCramer(A, B);
                    const steps = [
                        `<b>Amaliy 6, 1-topshiriq (a):</b> Kramer usulida 2 noma'lumli ChTS:`,
                        ...res.steps,
                        `<div class="result-badge">Yechim: $x = 1, \\quad y = 2$</div>`
                    ];
                    app.showSolution("6-Amaliy, 1-topshiriq (a)", steps);
                }
            },
            {
                id: "af6_t1_c",
                name: "1-topshiriq (c): Kramer usuli (3 noma'lumli)",
                shart: "x + y - z = 2\n2x - y + z = 1\nx + 2y - z = 3",
                solve: () => {
                    const A = [[1, 1, -1], [2, -1, 1], [1, 2, -1]];
                    const B = [2, 1, 3];
                    const res = MatrixSolver.solveCramer(A, B);
                    const steps = [
                        `<b>Amaliy 6, 1-topshiriq (c):</b> Kramer usuli:`,
                        ...res.steps,
                        `<div class="result-badge">Yechim: $x = 1, \\quad y = 2, \\quad z = 1$</div>`
                    ];
                    app.showSolution("6-Amaliy, 1-topshiriq (c)", steps);
                }
            },
            {
                id: "af6_t2",
                name: "2-topshiriq: Gauss usulida yechish",
                shart: "2x1 + x2 - x3 = 1\n3x1 - 2x2 + 2x3 = 5\nx1 + x2 + x3 = 6",
                solve: () => {
                    const A = [[2, 1, -1], [3, -2, 2], [1, 1, 1]];
                    const B = [1, 5, 6];
                    const res = MatrixSolver.solveGauss(A, B);
                    const steps = [
                        `<b>Amaliy 6, 2-topshiriq:</b> Gauss usulida tenglamalar sistemasini yechish:`,
                        ...res.steps,
                        `<div class="result-badge">Yechim: $x_1 = 1, \\quad x_2 = 2, \\quad x_3 = 3$</div>`
                    ];
                    app.showSolution("6-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af6_t3",
                name: "3-topshiriq: Matritsaviy usulda ChTS",
                shart: "x + 2y = 5\n3x + 4y = 11",
                solve: () => {
                    const A = [[1, 2], [3, 4]];
                    const B = [5, 11];
                    const inv = MatrixSolver.inverse(A);
                    const X = MatrixSolver.multiply(inv.result, [[5], [11]]);
                    const steps = [
                        `<b>Amaliy 6, 3-topshiriq:</b> Matritsaviy usulda ($X = A^{-1}B$) yechish:`,
                        `$A^{-1}$ teskari matritsa:`,
                        MatrixSolver.toHTML(inv.result),
                        `$X = A^{-1} \\cdot B$:`,
                        ...X.steps,
                        `<div class="result-badge">Yechim: $x = 1, \\quad y = 2$</div>`
                    ];
                    app.showSolution("6-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af6_var5",
                name: "⭐ 5-Variant: Gauss usulida ChTS",
                shart: "2x + y + z = 4\nx + 2y + z = 5\nx + y + 2z = 7",
                solve: () => {
                    const A = [[2, 1, 1], [1, 2, 1], [1, 1, 2]];
                    const B = [4, 5, 7];
                    const res = MatrixSolver.solveGauss(A, B);
                    const steps = [
                        `<b>Amaliy 6, 5-Variant:</b> Gauss usulida sistema yechimi:`,
                        ...res.steps,
                        `<div class="result-badge">Yechim: $x = 0, \\quad y = 1, \\quad z = 3$</div>`
                    ];
                    app.showSolution("6-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    7: {
        title: "7-Amaliy: Matritsa rangi",
        file: "Amaliy 7  Matritsa rangi.pdf",
        tasks: [
            {
                id: "af7_t1",
                name: "1-topshiriq: Matritsa rangini topish",
                shart: "A = [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]",
                solve: () => {
                    const A = [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]];
                    const res = MatrixSolver.rank(A);
                    const steps = [
                        `<b>Amaliy 7, 1-topshiriq:</b> Elementar almashtirishlar bilan rangni topish:`,
                        ...res.steps,
                        `<div class="result-badge">rank(A) = 1</div>`
                    ];
                    app.showSolution("7-Amaliy, 1-topshiriq", steps);
                }
            },
            {
                id: "af7_t2",
                name: "2-topshiriq: 4x4 Matritsa rangi",
                shart: "A = [[1, 3, 5, -1], [2, -1, -3, 4], [5, 1, -1, 7], [7, 7, 9, 1]]",
                solve: () => {
                    const A = [
                        [1, 3, 5, -1],
                        [2, -1, -3, 4],
                        [5, 1, -1, 7],
                        [7, 7, 9, 1]
                    ];
                    const res = MatrixSolver.rank(A);
                    const steps = [
                        `<b>Amaliy 7, 2-topshiriq:</b> $4 \\times 4$ matritsa rangini topish:`,
                        ...res.steps,
                        `<div class="result-badge">rank(A) = 3</div>`
                    ];
                    app.showSolution("7-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af7_t3",
                name: "3-topshiriq: O'ralgan minorlar usuli",
                shart: "A = [[2, 1, 1], [3, 1, 2], [1, 0, 1]]",
                solve: () => {
                    const A = [[2, 1, 1], [3, 1, 2], [1, 0, 1]];
                    const res = MatrixSolver.rank(A);
                    const steps = [
                        `<b>Amaliy 7, 3-topshiriq:</b> O'ralgan minorlar usulida rangni aniqlash:`,
                        `$M_2 = \\begin{vmatrix} 2 & 1 \\\\ 3 & 1 \\end{vmatrix} = -1 \\neq 0$`,
                        `$\\det(A) = 0$`,
                        ...res.steps,
                        `<div class="result-badge">rank(A) = 2</div>`
                    ];
                    app.showSolution("7-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af7_var5",
                name: "⭐ 5-Variant: Matritsa rangi",
                shart: "A = [[1, 2, 1, 3], [2, 4, 2, 6], [3, 6, 3, 9], [1, 1, 1, 1]]",
                solve: () => {
                    const A = [
                        [1, 2, 1, 3],
                        [2, 4, 2, 6],
                        [3, 6, 3, 9],
                        [1, 1, 1, 1]
                    ];
                    const res = MatrixSolver.rank(A);
                    const steps = [
                        `<b>Amaliy 7, 5-Variant:</b> Matritsa rangini topish:`,
                        ...res.steps,
                        `<div class="result-badge">rank(A) = 2</div>`
                    ];
                    app.showSolution("7-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    8: {
        title: "8-Amaliy: Bir jinsli sistema va FYET",
        file: "Amaliy_8_Bir_jinsli_chiziqli_tenglamalar_sistemasi_Kroneker_Kopelli.pdf",
        tasks: [
            {
                id: "af8_t1",
                name: "1-topshiriq: AX = 0 bir jinsli sistema FYET",
                shart: "2x1 - 4x2 + 5x3 + 3x4 = 0\n3x1 - 6x2 + 4x3 + 2x4 = 0",
                solve: () => {
                    const A = [[2, -4, 5, 3], [3, -6, 4, 2]];
                    const res = MatrixSolver.solveHomogeneous(A);
                    const steps = [
                        `<b>Amaliy 8, 1-topshiriq:</b> Bir jinsli sistema va FYET:`,
                        ...res.steps,
                        `<div class="result-badge">FYET: $n - r = 4 - 2 = 2$ ta bazis vektor</div>`
                    ];
                    app.showSolution("8-Amaliy, 1-topshiriq", steps);
                }
            },
            {
                id: "af8_t2",
                name: "2-topshiriq: Kroneker-Kapelli teoremasi",
                shart: "Sistema birgalikda bo'lish shartini tekshirish: rank(A) = rank(A|B)",
                solve: () => {
                    const steps = [
                        `<b>Amaliy 8, 2-topshiriq:</b> Kroneker-Kapelli teoremasi tahlili:`,
                        `<b>Teorema:</b> Chiziqli algebraik tenglamalar sistemasi $AX = B$ birgalikda bo'lishi uchun quyidagi shart bajarilishi zarur va yetarli:`,
                        `<div style="text-align: center; font-size: 1.2rem; margin: 10px 0; color: #38ef7d;">$$\\operatorname{rank}(A) = \\operatorname{rank}(A|B)$$</div>`,
                        `<b>Hollar:</b>`,
                        `1) $\\operatorname{rank}(A) < \\operatorname{rank}(A|B) \\implies$ Birgalikda emas (yechim mavjud emas).`,
                        `2) $\\operatorname{rank}(A) = \\operatorname{rank}(A|B) = n \\implies$ Yagona aniq yechim mavjud.`,
                        `3) $\\operatorname{rank}(A) = \\operatorname{rank}(A|B) = r < n \\implies$ Cheksiz ko'p yechim ($n - r$ ta erkin noma'lum).`,
                        `<div class="result-badge">Kroneker-Kapelli sharti to'liq tahlil qilindi</div>`
                    ];
                    app.showSolution("8-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af8_var5",
                name: "⭐ 5-Variant: FYET (Fundamental Yechimlar Tizimi)",
                shart: "x1 + 2x2 - x3 + 2x4 = 0\n2x1 - x2 + 3x3 - x4 = 0",
                solve: () => {
                    const A = [[1, 2, -1, 2], [2, -1, 3, -1]];
                    const res = MatrixSolver.solveHomogeneous(A);
                    const steps = [
                        `<b>Amaliy 8, 5-Variant:</b> FYET topish:`,
                        ...res.steps,
                        `<div class="result-badge">FYET: $e_1 = (-1, 1, 1, 0)^T, \\quad e_2 = (0, -1, 0, 1)^T$</div>`
                    ];
                    app.showSolution("8-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    9: {
        title: "9-Amaliy: Kompleks sonlar va amallar",
        file: "Amaliy_9_Kompleks_sonlar_va_ular_ustida_amallar_Darajaga_ko‘tarish.pdf",
        tasks: [
            {
                id: "af9_t1",
                name: "1-topshiriq (a): Arifmetik amallar",
                shart: "z1 = 2 + 3i, z2 = 1 - 2i ustida arifmetik amallar",
                solve: () => {
                    const z1 = new Complex(2, 3);
                    const z2 = new Complex(1, -2);
                    const add = ComplexSolver.add(z1, z2);
                    const mul = ComplexSolver.mul(z1, z2);
                    const div = ComplexSolver.div(z1, z2);
                    const steps = [
                        `<b>Amaliy 9, 1-topshiriq:</b> Kompleks sonlar ustida amallar:`,
                        `$z_1 = 2 + 3i, \\quad z_2 = 1 - 2i$`,
                        `<b>1) Qo'shish:</b> $z_1 + z_2 = 3 + i$`,
                        `<b>2) Ko'paytirish:</b> $z_1 \\cdot z_2 = 8 - i$`,
                        `<b>3) Bo'lish:</b> $z_1 / z_2 = -4/5 + (7/5)i$`,
                        `<div class="result-badge">$z_1 + z_2 = 3 + i, \\quad z_1 \\cdot z_2 = 8 - i, \\quad z_1 / z_2 = -0.8 + 1.4i$</div>`
                    ];
                    app.showSolution("9-Amaliy, 1-topshiriq", steps);
                }
            },
            {
                id: "af9_t2",
                name: "2-topshiriq: Modul va argument",
                shart: "z = 1 + i√3 ning moduli, argumenti va trigonometrik shaklini toping.",
                solve: () => {
                    const z = new Complex(1, Math.sqrt(3));
                    const res = ComplexSolver.analyze(z);
                    const steps = [
                        `<b>Amaliy 9, 2-topshiriq:</b> Modul va argument:`,
                        ...res.steps,
                        `<div class="result-badge">$r = 2, \\quad \\varphi = \\pi/3 = 60^\\circ$</div>`
                    ];
                    app.showSolution("9-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af9_t3",
                name: "3-topshiriq: Ko'rsatkichli shakl (Eyler formulasi)",
                shart: "z = -1 - i kompleks sonni ko'rsatkichli shaklga keltiring.",
                solve: () => {
                    const z = new Complex(-1, -1);
                    const res = ComplexSolver.analyze(z);
                    const steps = [
                        `<b>Amaliy 9, 3-topshiriq:</b> Ko'rsatkichli shakl (Eyler formulasi):`,
                        `$z = -1 - i$`,
                        ...res.steps,
                        `<div class="result-badge">$z = \\sqrt{2} e^{-i \\frac{3\\pi}{4}}$</div>`
                    ];
                    app.showSolution("9-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af9_var5",
                name: "⭐ 5-Variant: z1 = 4+3i, z2 = 2-i",
                shart: "z1 = 4 + 3i, z2 = 2 - i ustida arifmetik amallar va modul/argument.",
                solve: () => {
                    const z1 = new Complex(4, 3);
                    const z2 = new Complex(2, -1);
                    const add = ComplexSolver.add(z1, z2);
                    const mul = ComplexSolver.mul(z1, z2);
                    const div = ComplexSolver.div(z1, z2);
                    const steps = [
                        `<b>Amaliy 9, 5-Variant:</b> $z_1 = 4+3i, \\quad z_2 = 2-i$ amallari:`,
                        `$z_1 + z_2 = 6 + 2i$`,
                        `$z_1 \\cdot z_2 = 11 + 2i$`,
                        `$z_1 / z_2 = 1 + 2i$`,
                        `$|z_1| = \\sqrt{4^2 + 3^2} = 5$`,
                        `<div class="result-badge">Yig'indi: $6+2i$, Ko'paytma: $11+2i$, Bo'linma: $1+2i$</div>`
                    ];
                    app.showSolution("9-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    10: {
        title: "10-Amaliy: Muavr formulasi va ildiz chiqarish",
        file: "Amaliy_10_Kompleks_sonni_darajaga_ko‘tarish_va_ildiz_chiqarish.pdf",
        tasks: [
            {
                id: "af10_t1",
                name: "1-topshiriq: (1 + i)^25 Muavr formulasi",
                shart: "(1 + i)^25 ifodaning qiymatini Muavr formulasi bilan toping.",
                solve: () => {
                    const z = new Complex(1, 1);
                    const res = ComplexSolver.powerMoivre(z, 25);
                    const steps = [
                        `<b>Amaliy 10, 1-topshiriq:</b> $(1 + i)^{25}$ Muavr formulasi bilan:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $4096 + 4096i$</div>`
                    ];
                    app.showSolution("10-Amaliy, 1-topshiriq", steps);
                }
            },
            {
                id: "af10_t2",
                name: "2-topshiriq: (1 + i√3)^20 darajasi",
                shart: "(1 + i√3)^20 ifodani hisoblang.",
                solve: () => {
                    const z = new Complex(1, Math.sqrt(3));
                    const res = ComplexSolver.powerMoivre(z, 20);
                    const steps = [
                        `<b>Amaliy 10, 2-topshiriq:</b> $(1 + i\\sqrt{3})^{20}$:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $2^{19} (-1 + i\\sqrt{3}) = -524288 + 524288\\sqrt{3}i$</div>`
                    ];
                    app.showSolution("10-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af10_t3",
                name: "3-topshiriq: 1 ning 3-darajali ildizlari",
                shart: "w = ∛1 barcha 3 ta kompleks ildizini toping.",
                solve: () => {
                    const z = new Complex(1, 0);
                    const res = ComplexSolver.roots(z, 3);
                    const steps = [
                        `<b>Amaliy 10, 3-topshiriq:</b> $\\sqrt[3]{1}$ ning 3 ta ildizi:`,
                        ...res.steps,
                        `<div class="result-badge">$w_0 = 1, \\quad w_1 = -1/2 + \\frac{\\sqrt{3}}{2}i, \\quad w_2 = -1/2 - \\frac{\\sqrt{3}}{2}i$</div>`
                    ];
                    app.showSolution("10-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af10_t4",
                name: "4-topshiriq: (√3 - i)^10 darajasi",
                shart: "(√3 - i)^10 ifodaning qiymatini toping.",
                solve: () => {
                    const z = new Complex(Math.sqrt(3), -1);
                    const res = ComplexSolver.powerMoivre(z, 10);
                    const steps = [
                        `<b>Amaliy 10, 4-topshiriq:</b> $(\\sqrt{3} - i)^{10}$:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $512 + 512\\sqrt{3}i$</div>`
                    ];
                    app.showSolution("10-Amaliy, 4-topshiriq", steps);
                }
            },
            {
                id: "af10_var5",
                name: "⭐ 5-Variant: ⁴√(-16) ildizlari",
                shart: "w = ⁴√(-16) barcha 4 ta kompleks ildizini toping.",
                solve: () => {
                    const z = new Complex(-16, 0);
                    const res = ComplexSolver.roots(z, 4);
                    const steps = [
                        `<b>Amaliy 10, 5-Variant:</b> $\\sqrt[4]{-16}$ barcha ildizlari:`,
                        ...res.steps,
                        `<div class="result-badge">Ildizlar: $\\pm\\sqrt{2} \\pm i\\sqrt{2}$</div>`
                    ];
                    app.showSolution("10-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    11: {
        title: "11-Amaliy: Ko‘phadlar va qoldiqli bo'linish",
        file: "Amaliy_11_Ko'phadlar_va_ular_ustida_amallar_Ko‘phadlarning_bo'linish.pdf",
        tasks: [
            {
                id: "af11_t1",
                name: "1-topshiriq: Burchakli qoldiqli bo'lish",
                shart: "f(x) = 2x^4 - 3x^3 + 4x^2 - 5x + 6 ko'phadni g(x) = x^2 - 3x + 1 ga bo'ling.",
                solve: () => {
                    const P = Polynomial.parse("2x^4 - 3x^3 + 4x^2 - 5x + 6");
                    const Q = Polynomial.parse("x^2 - 3x + 1");
                    const res = PolynomialSolver.divide(P, Q);
                    const steps = [
                        `<b>Amaliy 11, 1-topshiriq:</b> Ko'phadlarni burchakli qoldiqli bo'lish:`,
                        ...res.steps,
                        `<div class="result-badge">Q(x) = $2x^2 + 3x + 11$, \\quad R(x) = $25x - 5$</div>`
                    ];
                    app.showSolution("11-Amaliy, 1-topshiriq", steps);
                }
            },
            {
                id: "af11_t2",
                name: "2-topshiriq: Qoldiqsiz bo'linish shartlari",
                shart: "f(x) = x^3 + px + q ko'phad g(x) = x^2 + mx - 1 ga qoldiqsiz bo'linishi shartlarini toping.",
                solve: () => {
                    const steps = [
                        `<b>Amaliy 11, 2-topshiriq:</b> Qoldiqsiz bo'linish shartlarini aniqlash:`,
                        `$f(x) = x^3 + px + q, \\quad g(x) = x^2 + mx - 1$`,
                        `Burchakli bo'lish bajaramiz:`,
                        `$x^3 + px + q = (x^2 + mx - 1)(x - m) + R(x)$`,
                        `Qoldiq: $R(x) = (p + 1 + m^2)x + (q - m)$`,
                        `Qoldiqsiz bo'linishi uchun $R(x) \\equiv 0$ bo'lishi shart:`,
                        `$$\\begin{cases} q - m = 0 \\\\ p + 1 + m^2 = 0 \\end{cases} \\implies m = q, \\quad p = -q^2 - 1$$`,
                        `<div class="result-badge">Shart: $m = q, \\quad p = -q^2 - 1$</div>`
                    ];
                    app.showSolution("11-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af11_t3",
                name: "3-topshiriq: Ko'phadlar chiziqli amali",
                shart: "3 · (x^3 - 2x + 1) - 2 · (2x^3 + x^2 - 4)",
                solve: () => {
                    const steps = [
                        `<b>Amaliy 11, 3-topshiriq:</b> Ko'phadlar chiziqli kombinatsiyasi:`,
                        `$3(x^3 - 2x + 1) - 2(2x^3 + x^2 - 4)$`,
                        `$= (3x^3 - 6x + 3) - (4x^3 + 2x^2 - 8)$`,
                        `$= -x^3 - 2x^2 - 6x + 11$`,
                        `<div class="result-badge">Natija: $-x^3 - 2x^2 - 6x + 11$</div>`
                    ];
                    app.showSolution("11-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af11_var5",
                name: "⭐ 5-Variant: Qoldiqli bo'lish",
                shart: "f(x) = 3x^4 + 2x^3 - 5x^2 + 2x - 7 ni g(x) = x^2 + 2x - 3 ga bo'ling.",
                solve: () => {
                    const P = Polynomial.parse("3x^4 + 2x^3 - 5x^2 + 2x - 7");
                    const Q = Polynomial.parse("x^2 + 2x - 3");
                    const res = PolynomialSolver.divide(P, Q);
                    const steps = [
                        `<b>Amaliy 11, 5-Variant:</b> Qoldiqli bo'lish:`,
                        ...res.steps,
                        `<div class="result-badge">Q(x) = $3x^2 - 4x + 12$, \\quad R(x) = $-34x + 29$</div>`
                    ];
                    app.showSolution("11-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    12: {
        title: "12-Amaliy: Ko‘phadlarning EKUBi (Yevklid)",
        file: "Amaliy 12   Ko‘phadlarning EKUB.pdf",
        tasks: [
            {
                id: "af12_t1",
                name: "1-topshiriq: Yevklid algoritmi",
                shart: "f(x) = x^4 + x^3 - 3x^2 - 4x - 1 va g(x) = x^3 + x^2 - x - 1 larning EKUBini toping.",
                solve: () => {
                    const P = Polynomial.parse("x^4 + x^3 - 3x^2 - 4x - 1");
                    const Q = Polynomial.parse("x^3 + x^2 - x - 1");
                    const res = PolynomialSolver.gcd(P, Q);
                    const steps = [
                        `<b>Amaliy 12, 1-topshiriq:</b> Yevklid algoritmi bilan EKUBni topish:`,
                        ...res.steps,
                        `<div class="result-badge">EKUB(f, g) = $x + 1$</div>`
                    ];
                    app.showSolution("12-Amaliy, 1-topshiriq", steps);
                }
            },
            {
                id: "af12_t2",
                name: "2-topshiriq: EKUB chiziqli ifodasi",
                shart: "d(x) = EKUB(f, g) ni u(x)f(x) + v(x)g(x) chiziqli kombinatsiya shaklida ifodalang.",
                solve: () => {
                    const steps = [
                        `<b>Amaliy 12, 2-topshiriq:</b> EKUBning chiziqli ifodasi (Bezout ayniyati):`,
                        `Tenglik: $u(x)f(x) + v(x)g(x) = d(x)$, bu yerda $d(x) = \\text{EKUB}(f, g)$`,
                        `Yevklid algoritmining teskari zanjiri:`,
                        `1) $r_1(x) = f(x) - q_1(x)g(x)$`,
                        `2) $r_2(x) = g(x) - q_2(x)r_1(x) = g(x) - q_2(x)[f(x) - q_1(x)g(x)]$`,
                        `$$d(x) = -q_2(x)f(x) + [1 + q_1(x)q_2(x)]g(x)$$`,
                        `<div class="result-badge">Bezout koeffitsientlari $u(x)$ va $v(x)$ muvaffaqiyatli topildi</div>`
                    ];
                    app.showSolution("12-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af12_t3",
                name: "3-topshiriq: Yevklid algoritmi",
                shart: "f(x) = x^5 + 3x^4 + x^3 + x^2 + 3x + 1 va g(x) = x^4 + 2x^3 + x + 2 EKUBini toping.",
                solve: () => {
                    const P = Polynomial.parse("x^5 + 3x^4 + x^3 + x^2 + 3x + 1");
                    const Q = Polynomial.parse("x^4 + 2x^3 + x + 2");
                    const res = PolynomialSolver.gcd(P, Q);
                    const steps = [
                        `<b>Amaliy 12, 3-topshiriq:</b> Yevklid algoritmi:`,
                        ...res.steps,
                        `<div class="result-badge">EKUB(f, g) = $x^2 + 1$</div>`
                    ];
                    app.showSolution("12-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af12_var5",
                name: "⭐ 5-Variant: EKUB(f, g)",
                shart: "f(x) = x^4 - 2x^3 + x^2 - x - 2, g(x) = x^3 - x^2 - x - 2 ning EKUBini toping.",
                solve: () => {
                    const P = Polynomial.parse("x^4 - 2x^3 + x^2 - x - 2");
                    const Q = Polynomial.parse("x^3 - x^2 - x - 2");
                    const res = PolynomialSolver.gcd(P, Q);
                    const steps = [
                        `<b>Amaliy 12, 5-Variant:</b> EKUB(f, g) hisoblash:`,
                        ...res.steps,
                        `<div class="result-badge">EKUB(f, g) = $x - 2$</div>`
                    ];
                    app.showSolution("12-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    13: {
        title: "13-Amaliy: Bezu teoremasi va Gorner sxemasi",
        file: "Amaliy_13_Bezu_teoremasi_va_Gorner_sxemasi_Algebraning_asosiy_teoremasi.pdf",
        tasks: [
            {
                id: "af13_t1",
                name: "1-topshiriq: Gorner sxemasi jadvali",
                shart: "f(x) = x^4 - 2x^3 + 4x^2 - 6x + 8 ko'phadni x - 1 ga bo'ling (c = 1).",
                solve: () => {
                    const P = Polynomial.parse("x^4 - 2x^3 + 4x^2 - 6x + 8");
                    const res = PolynomialSolver.horner(P, 1);
                    const steps = [
                        `<b>Amaliy 13, 1-topshiriq:</b> Gorner sxemasi jadvali ($c = 1$):`,
                        ...res.steps,
                        `<div class="result-badge">Q(x) = $x^3 - x^2 + 3x - 3$, \\quad Qoldiq: $R = 5$</div>`
                    ];
                    app.showSolution("13-Amaliy, 1-topshiriq", steps);
                }
            },
            {
                id: "af13_t2",
                name: "2-topshiriq: Ko'phad qiymatini topish (x0 nuqtada)",
                shart: "f(x) = x^4 - 3x^3 + 6x^2 - 10x + 16 ning x0 = 4 nuqtadagi qiymati",
                solve: () => {
                    const P = Polynomial.parse("x^4 - 3x^3 + 6x^2 - 10x + 16");
                    const res = PolynomialSolver.horner(P, 4);
                    const steps = [
                        `<b>Amaliy 13, 2-topshiriq:</b> Gorner sxemasi orqali $f(4)$ ni hisoblash:`,
                        ...res.steps,
                        `<div class="result-badge">f(4) = 136</div>`
                    ];
                    app.showSolution("13-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af13_t3",
                name: "3-topshiriq: Barcha ratsional ildizlarni topish",
                shart: "f(x) = x^3 - 4x^2 + 5x - 2 ko'phadning barcha ildizlarini toping.",
                solve: () => {
                    const P = Polynomial.parse("x^3 - 4x^2 + 5x - 2");
                    const res = PolynomialSolver.findRationalRoots(P);
                    const steps = [
                        `<b>Amaliy 13, 3-topshiriq:</b> Ratsional ildizlarni topish:`,
                        ...res.steps,
                        `<div class="result-badge">Ildizlar: $x = 1$ (2-karrali), $x = 2$</div>`
                    ];
                    app.showSolution("13-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af13_var5",
                name: "⭐ 5-Variant: Ratsional ildizlarni topish",
                shart: "f(x) = x^3 - 6x^2 + 15x - 14 ko'phadning ratsional ildizlarini toping.",
                solve: () => {
                    const P = Polynomial.parse("x^3 - 6x^2 + 15x - 14");
                    const res = PolynomialSolver.findRationalRoots(P);
                    const steps = [
                        `<b>Amaliy 13, 5-Variant:</b> $f(x) = x^3 - 6x^2 + 15x - 14$ ildizlari:`,
                        ...res.steps,
                        `<div class="result-badge">Yagona haqiqiy/ratsional ildiz: $x = 2$</div>`
                    ];
                    app.showSolution("13-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    14: {
        title: "14-Amaliy: Ratsional kasrlar",
        file: "Amaliy 14  Ratsional kasrlar.pdf",
        tasks: [
            {
                id: "af14_t1",
                name: "1-topshiriq: To'g'ri kasrni sodda kasrlarga yoyish",
                shart: "(x + 1) / ((x - 1)(x - 2)) ni sodda kasrlar yig'indisiga ajrating.",
                solve: () => {
                    const P = Polynomial.parse("x + 1");
                    const res = RationalFractionSolver.decomposeSimple(P.coeffs, 1, 2);
                    const steps = [
                        `<b>Amaliy 14, 1-topshiriq:</b> To'g'ri ratsional kasrni sodda kasrlarga yoyish:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $-\\frac{2}{x - 1} + \\frac{3}{x - 2}$</div>`
                    ];
                    app.showSolution("14-Amaliy, 1-topshiriq", steps);
                }
            },
            {
                id: "af14_t2",
                name: "2-topshiriq: Kvadrat uchhadli maxraj",
                shart: "(2x + 5) / (x^2 - 5x + 6) ni sodda kasrlarga yoying.",
                solve: () => {
                    const P = Polynomial.parse("2x + 5");
                    const res = RationalFractionSolver.decomposeSimple(P.coeffs, 2, 3);
                    const steps = [
                        `<b>Amaliy 14, 2-topshiriq:</b> $(2x + 5) / (x^2 - 5x + 6)$ ni yoyish:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $-\\frac{9}{x - 2} + \\frac{11}{x - 3}$</div>`
                    ];
                    app.showSolution("14-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af14_t3",
                name: "3-topshiriq: 3 ta chiziqli ko'paytuvchi",
                shart: "1 / ((x + 1)(x + 2)(x + 3)) ni sodda kasrlarga yoying.",
                solve: () => {
                    const res = RationalFractionSolver.decomposeThreeLinear([1], -1, -2, -3);
                    const steps = [
                        `<b>Amaliy 14, 3-topshiriq:</b> 3 ta ko'paytuvchili maxraj:`,
                        ...res.steps,
                        `<div class="result-badge">$\\frac{1}{2(x+1)} - \\frac{1}{x+2} + \\frac{1}{2(x+3)}$</div>`
                    ];
                    app.showSolution("14-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af14_t4",
                name: "4-topshiriq: Karrali maxraj",
                shart: "(x + 2) / (x - 1)^2 ni sodda kasrlarga yoying.",
                solve: () => {
                    const P = Polynomial.parse("x + 2");
                    const res = RationalFractionSolver.decomposeSimple(P.coeffs, 1, 1);
                    const steps = [
                        `<b>Amaliy 14, 4-topshiriq:</b> Karrali maxrajli ratsional kasr:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $\\frac{1}{x - 1} + \\frac{3}{(x - 1)^2}$</div>`
                    ];
                    app.showSolution("14-Amaliy, 4-topshiriq", steps);
                }
            },
            {
                id: "af14_var5",
                name: "⭐ 5-Variant: Sodda kasrlarga yoyish",
                shart: "(3x - 1) / (x^2 - 4x + 3) ni sodda kasrlarga yoying.",
                solve: () => {
                    const P = Polynomial.parse("3x - 1");
                    const res = RationalFractionSolver.decomposeSimple(P.coeffs, 1, 3);
                    const steps = [
                        `<b>Amaliy 14, 5-Variant:</b> Sodda kasrlarga yoyish:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $-\\frac{1}{x - 1} + \\frac{4}{x - 3}$</div>`
                    ];
                    app.showSolution("14-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
    15: {
        title: "15-Amaliy: 3- va 4-darajali tenglamalar",
        file: "Amaliy 15  3- va 4 – darajali tenglamalar.pdf",
        tasks: [
            {
                id: "af15_t1",
                name: "1-topshiriq: Kardano formulasi (Q > 0)",
                shart: "x^3 - 6x - 9 = 0 tenglamani Kardano formulasi bilan yeching.",
                solve: () => {
                    const res = HigherDegreeSolver.solveCubic(1, 0, -6, -9);
                    const steps = [
                        `<b>Amaliy 15, 1-topshiriq:</b> $x^3 - 6x - 9 = 0$ (Kardano formulasi, $D > 0$):`,
                        ...res.steps,
                        `<div class="result-badge">Haqiqiy ildiz: $x_1 = 3$</div>`
                    ];
                    app.showSolution("15-Amaliy, 1-topshiriq", steps);
                }
            },
            {
                id: "af15_t2",
                name: "2-topshiriq: Casus Irreducibilis (Q < 0, 3 ta haqiqiy ildiz)",
                shart: "y^3 - 9y + 8 = 0 tenglamani Kardano formulasi bilan yeching.",
                solve: () => {
                    const res = HigherDegreeSolver.solveCubic(1, 0, -9, 8);
                    const steps = [
                        `<b>Amaliy 15, 2-topshiriq:</b> $y^3 - 9y + 8 = 0$ (Casus Irreducibilis, $D < 0$):`,
                        ...res.steps,
                        `<div class="result-badge">Ildizlar: $y_1 = 1, \\quad y_{2,3} = \\frac{-1 \\pm \\sqrt{33}}{2}$</div>`
                    ];
                    app.showSolution("15-Amaliy, 2-topshiriq", steps);
                }
            },
            {
                id: "af15_t3",
                name: "3-topshiriq: Ferrari usuli (4-darajali tenglama)",
                shart: "x^4 + 2x^3 - 6x^2 - 5x + 2 = 0 tenglamani Ferrari usulida yeching.",
                solve: () => {
                    const res = HigherDegreeSolver.solveFerrari(1, 2, -6, -5, 2);
                    const steps = [
                        `<b>Amaliy 15, 3-topshiriq:</b> 4-darajali tenglamani Ferrari usulida yechish:`,
                        ...res.steps,
                        `<div class="result-badge">Ildizlar: $x_1 = 2, \\quad x_2 = -1, \\quad x_{3,4} = \\frac{-3 \\pm \\sqrt{13}}{2}$</div>`
                    ];
                    app.showSolution("15-Amaliy, 3-topshiriq", steps);
                }
            },
            {
                id: "af15_t4",
                name: "4-topshiriq: Keltirilgan 3-darajali tenglama",
                shart: "x^3 + 3x - 4 = 0 tenglamani yeching.",
                solve: () => {
                    const res = HigherDegreeSolver.solveCubic(1, 0, 3, -4);
                    const steps = [
                        `<b>Amaliy 15, 4-topshiriq:</b> $x^3 + 3x - 4 = 0$:`,
                        ...res.steps,
                        `<div class="result-badge">Yagona haqiqiy ildiz: $x = 1$</div>`
                    ];
                    app.showSolution("15-Amaliy, 4-topshiriq", steps);
                }
            },
            {
                id: "af15_var5",
                name: "⭐ 5-Variant: 3-darajali tenglama",
                shart: "x^3 - 6x^2 + 11x - 6 = 0 tenglamaning barcha ildizlarini toping.",
                solve: () => {
                    const res = HigherDegreeSolver.solveCubic(1, -6, 11, -6);
                    const steps = [
                        `<b>Amaliy 15, 5-Variant:</b> $x^3 - 6x^2 + 11x - 6 = 0$:`,
                        ...res.steps,
                        `<div class="result-badge">Ildizlar: $x_1 = 1, \\quad x_2 = 2, \\quad x_3 = 3$</div>`
                    ];
                    app.showSolution("15-Amaliy, 5-Variant", steps);
                }
            },
        ]
    },
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AMALIY_DATABASE;
}
