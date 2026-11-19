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
                    app.showSolution("1-Amaliy, 1-topshiriq (a): A + B qo'shish", res.steps);
                }
            },
            {
                id: "af1_t1",
                name: "1-topshiriq (b): 3A - B chiziqli amali",
                shart: "3 · [[4, -3], [2, 3]] - [[1, 1], [1, 1]]",
                solve: () => {
                    const steps = [
                        `<b>Amaliy 1, 1-topshiriq (b): $3A - B$ amalini hisoblash</b>`,
                        `<b>Dastlabki matritsalar:</b>`,
                        `$$A = \\begin{pmatrix} 4 & -3 \\\\ 2 & 3 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$$`,
                        `💡 <b>1-qadam: $3 \\cdot A$ matritsani topamiz:</b><br>` +
                        `$A$ matritsaning har bir elementi $3$ ga ko'paytiriladi:`,
                        `• 1-satr, 1-ustun: $3 \\cdot 4 = 12$<br>` +
                        `• 1-satr, 2-ustun: $3 \\cdot (-3) = -9$<br>` +
                        `• 2-satr, 1-ustun: $3 \\cdot 2 = 6$<br>` +
                        `• 2-satr, 2-ustun: $3 \\cdot 3 = 9$`,
                        `$$3A = \\begin{pmatrix} 3 \\cdot 4 & 3 \\cdot (-3) \\\\ 3 \\cdot 2 & 3 \\cdot 3 \\end{pmatrix} = \\begin{pmatrix} 12 & -9 \\\\ 6 & 9 \\end{pmatrix}$$`,
                        `💡 <b>2-qadam: $3A - B$ ayirmani hisoblaymiz:</b><br>` +
                        `$3A$ ning mos elementlaridan $B$ ning mos elementlari ayiriladi:`,
                        `• 1-satr, 1-ustun: $12 - 1 = 11$<br>` +
                        `• 1-satr, 2-ustun: $-9 - 1 = -10$<br>` +
                        `• 2-satr, 1-ustun: $6 - 1 = 5$<br>` +
                        `• 2-satr, 2-ustun: $9 - 1 = 8$`,
                        `$$3A - B = \\begin{pmatrix} 12 - 1 & -9 - 1 \\\\ 6 - 1 & 9 - 1 \\end{pmatrix} = \\begin{pmatrix} 11 & -10 \\\\ 5 & 8 \\end{pmatrix}$$`,
                        `<div class="result-badge">Yakuniy natija: $3A - B = \\begin{pmatrix} 11 & -10 \\\\ 5 & 8 \\end{pmatrix}$</div>`
                    ];
                    app.showSolution("1-Amaliy, 1-topshiriq (b)", steps);
                }
            },
            {
                id: "af1_t1_c",
                name: "1-topshiriq (c): 4A + 5B chiziqli amali",
                shart: "4 · [[1, 2], [2, 1]] + 5 · [[-1, -1], [3, 0]]",
                solve: () => {
                    const steps = [
                        `<b>Amaliy 1, 1-topshiriq (c): $4A + 5B$ amalini hisoblash</b>`,
                        `<b>Dastlabki matritsalar:</b>`,
                        `$$A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}, \\quad B = \\begin{pmatrix} -1 & -1 \\\\ 3 & 0 \\end{pmatrix}$$`,
                        `💡 <b>1-qadam: $4A$ va $5B$ matritsalarni topamiz:</b>`,
                        `$$4A = \\begin{pmatrix} 4 \\cdot 1 & 4 \\cdot 2 \\\\ 4 \\cdot 2 & 4 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} 4 & 8 \\\\ 8 & 4 \\end{pmatrix}$$`,
                        `$$5B = \\begin{pmatrix} 5 \\cdot (-1) & 5 \\cdot (-1) \\\\ 5 \\cdot 3 & 5 \\cdot 0 \\end{pmatrix} = \\begin{pmatrix} -5 & -5 \\\\ 15 & 0 \\end{pmatrix}$$`,
                        `💡 <b>2-qadam: $4A + 5B$ yig'indini hisoblaymiz:</b><br>` +
                        `• 1-satr, 1-ustun: $4 + (-5) = -1$<br>` +
                        `• 1-satr, 2-ustun: $8 + (-5) = 3$<br>` +
                        `• 2-satr, 1-ustun: $8 + 15 = 23$<br>` +
                        `• 2-satr, 2-ustun: $4 + 0 = 4$`,
                        `$$4A + 5B = \\begin{pmatrix} 4 + (-5) & 8 + (-5) \\\\ 8 + 15 & 4 + 0 \\end{pmatrix} = \\begin{pmatrix} -1 & 3 \\\\ 23 & 4 \\end{pmatrix}$$`,
                        `<div class="result-badge">Yakuniy natija: $4A + 5B = \\begin{pmatrix} -1 & 3 \\\\ 23 & 4 \\end{pmatrix}$</div>`
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
            {
                id: "af2_t1_c",
                name: "1-topshiriq (c): p = (6, 3, 1, 2, 5, 4) inversiyalari",
                shart: "$$p = (6, 3, 1, 2, 5, 4)$$",
                solve: () => {
                    const steps = ["<b>Amaliy 2, 1-topshiriq (c):</b> Inversiyalar sonini va juft-toqligini aniqlash.", "Berilgan o'rin almashtirish: $$p = (6, 3, 1, 2, 5, 4)$$", "Har bir element uchun o'zidan keyin kelgan kichik elementlar sonini sanaymiz:<br>• 6 dan keyin: 3, 1, 2, 5, 4 (5 ta)<br>• 3 dan keyin: 1, 2 (2 ta)<br>• 1 dan keyin: yo'q (0 ta)<br>• 2 dan keyin: yo'q (0 ta)<br>• 5 dan keyin: 4 (1 ta)<br>• 4 dan keyin: yo'q (0 ta)", "Jami inversiyalar soni: $$I(p) = 5 + 2 + 0 + 0 + 1 + 0 = 8$$", "<div class=\"result-badge\">Inversiyalar soni: $I = 8$ (Juft o'rin almashtirish)</div>"];
                    app.showSolution("1-topshiriq (c): p = (6, 3, 1, 2, 5, 4) inversiyalari", steps);
                }
            },
            {
                id: "af2_t2_a",
                name: "2-topshiriq (a): 1, 3, 5, ..., 2n-1, 2, 4, 6, ..., 2n inversiyalari",
                shart: "$$p = (1, 3, 5, \\dots, 2n-1, 2, 4, 6, \\dots, 2n)$$",
                solve: () => {
                    const steps = ["<b>Amaliy 2, 2-topshiriq (a):</b> $n$ parametrga bog'liq inversiyalar soni formulasi.", "Dastlab barcha toq sonlar, keyin barcha juft sonlar keladi.", "• Toq sonlar o'zaro tartiblangan: toq-toq juftliklarda inversiya yo'q.<br>• Juft sonlar o'zaro tartiblangan: juft-juft juftliklarda inversiya yo'q.<br>• Faqat toq son o'zidan keyingi juft sondan katta bo'lganda inversiya hosil bo'ladi:<br>2 sonidan oldin $3, 5, \\dots, 2n-1$ sonlari (jami $n - 1$ ta) turibdi.<br>4 sonidan oldin $5, 7, \\dots, 2n-1$ sonlari (jami $n - 2$ ta) turibdi.<br>Umumiy holda $2k$ sonidan oldin $n - k$ ta toq son turibdi.", "Jami inversiyalar soni arifmetik progressiya yig'indisi:<br>$$I = (n - 1) + (n - 2) + \\dots + 1 + 0 = \\frac{n(n - 1)}{2}$$", "<div class=\"result-badge\">Formula: $I = \\frac{n(n-1)}{2}$</div>"];
                    app.showSolution("2-topshiriq (a): 1, 3, 5, ..., 2n-1, 2, 4, 6, ..., 2n inversiyalari", steps);
                }
            },
            {
                id: "af2_t3_trans",
                name: "3-topshiriq: Faqat 1 va k o'rnini almashtiruvchi transpozitsiya inversiyasi",
                shart: "$$p = (k, 2, 3, \\dots, k-1, 1)$$",
                solve: () => {
                    const steps = ["<b>Amaliy 2, 3-topshiriq:</b> Transpozitsiya inversiyalari soni.", "Berilgan o'rin almashtirish: 1 va $k$ elementlar o'rni almashgan, qolgan elementlar o'z joyida.", "• $k$ birinchi o'ringa kelganda, o'zidan keyingi $2, 3, \\dots, k-1$ va $1$ elementlari bilan jami $k - 1$ ta inversiya hosil qiladi.<br>• $1$ oxirgi o'ringa borganida, o'zidan oldingi $2, 3, \\dots, k-1$ elementlari (jami $k - 2$ ta) 1 bilan inversiya hosil qiladi.", "Jami inversiyalar soni:<br>$$I = (k - 1) + (k - 2) = 2k - 3$$", "E'tibor bering: $2k - 3$ har doim toq son! Demak, har qanday transpozitsiya toq o'rin almashtirishdir.", "<div class=\"result-badge\">Natija: $I = 2k - 3$ (har doim toq)</div>"];
                    app.showSolution("3-topshiriq: Faqat 1 va k o'rnini almashtiruvchi transpozitsiya inversiyasi", steps);
                }
            },
            {
                id: "af2_t4_max",
                name: "4-topshiriq: Eng katta inversiyalar soniga ega o'rin almashtirish",
                shart: "$$p = (n, n-1, \\dots, 2, 1)$$",
                solve: () => {
                    const steps = ["<b>Amaliy 2, 4-topshiriq:</b> Maksimal inversiyalar soni.", "O'rin almashtirishda maksimal inversiyalar soni har bir juftlik $(i, j)$ inversiya hosil qilganda erishiladi.", "Bu kamayish tartibidagi teskari o'rin almashtirishdir: $p = (n, n-1, n-2, \\dots, 2, 1)$.", "Jami juftliklar soni $C_n^2$ ga teng:<br>$$I_{\\max} = \\frac{n(n - 1)}{2}$$", "<div class=\"result-badge\">Maksimal inversiya: $p = (n, n-1, \\dots, 1)$, soni: $I_{\\max} = \\frac{n(n-1)}{2}$</div>"];
                    app.showSolution("4-topshiriq: Eng katta inversiyalar soniga ega o'rin almashtirish", steps);
                }
            },
            {
                id: "af2_t5_inv_prop",
                name: "5-topshiriq: Teskari o'rniga qo'yish inversiyalar soni (I(σ⁻¹))",
                shart: "$$I(\\sigma^{-1}) = I(\\sigma) = k$$",
                solve: () => {
                    const steps = ["<b>Amaliy 2, 5-topshiriq:</b> Teskari o'rniga qo'yishning inversiyalar soni haqida teorema.", "Teorema: Agar $\\sigma$ o'rniga qo'yishning inversiyalar soni $k$ bo'lsa, uning teskarisi $\\sigma^{-1}$ ning inversiyalar soni ham aynan $k$ ga teng bo'ladi.", "Isbot: $\\sigma$ o'rniga qo'yishda $(i, j)$ juftlik inversiya hosil qiladi agar $i < j$ bo'lib, $\\sigma(i) > \\sigma(j)$ bo'lsa.<br>Agar $a = \\sigma(i)$ va $b = \\sigma(j)$ deb olsak, $a > b$ bo'ladi va $\\sigma^{-1}(a) = i < j = \\sigma^{-1}(b)$ bo'ladi.<br>Demak, $(b, a)$ juftlik $\\sigma^{-1}$ uchun inversiya hosil qiladi.", "Bu moslik o'zaro bir qiymatli bo'lgani uchun inversiyalar soni teng qoladi.", "<div class=\"result-badge\">Natija: $I(\\sigma^{-1}) = I(\\sigma) = k$</div>"];
                    app.showSolution("5-topshiriq: Teskari o'rniga qo'yish inversiyalar soni (I(σ⁻¹))", steps);
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
            {
                id: "af3_t1_d",
                name: "1-topshiriq (d): det [[6, 9], [8, 12]] hisoblash",
                shart: "$$\\begin{vmatrix} 6 & 9 \\ 8 & 12 \\end{vmatrix}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 3, 1-topshiriq (d):</b> 2-tartibli determinantni hisoblash.", "$$\\begin{vmatrix} 6 & 9 \\\\ 8 & 12 \\end{vmatrix} = 6 \\cdot 12 - 9 \\cdot 8 = 72 - 72 = 0$$", "E'tibor bering, 2-satr 1-satrga proporsional: $(8, 12) = \\frac{4}{3}(6, 9)$. Satrlari proporsional determinant $0$ ga teng.", "<div class=\"result-badge\">Natija: $0$</div>"];
                    app.showSolution("1-topshiriq (d): det [[6, 9], [8, 12]] hisoblash", steps);
                }
            },
            {
                id: "af3_t1_f",
                name: "1-topshiriq (f): det [[n+1, n], [n, n-1]] hisoblash",
                shart: "$$\\begin{vmatrix} n+1 & n \\ n & n-1 \\end{vmatrix}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 3, 1-topshiriq (f):</b> Algebraik determinant.", "$$\\begin{vmatrix} n+1 & n \\\\ n & n-1 \\end{vmatrix} = (n+1)(n-1) - n \\cdot n = (n^2 - 1) - n^2 = -1$$", "<div class=\"result-badge\">Natija: $-1$ (ixtiyoriy $n$ uchun doimiy)</div>"];
                    app.showSolution("1-topshiriq (f): det [[n+1, n], [n, n-1]] hisoblash", steps);
                }
            },
            {
                id: "af3_t2_c",
                name: "2-topshiriq (c): Trigonometrik determinant sin(α - β)",
                shart: "$$\\begin{vmatrix} \\sin\\alpha & \\cos\\alpha \\ \\sin\\beta & \\cos\\beta \\end{vmatrix}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 3, 2-topshiriq (c):</b> Trigonometrik determinantni hisoblash.", "$$\\begin{vmatrix} \\sin\\alpha & \\cos\\alpha \\\\ \\sin\\beta & \\cos\\beta \\end{vmatrix} = \\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$$", "Trigonometriya ayirma sinusining formulasiga ko'ra: $\\sin(\\alpha - \\beta)$.", "<div class=\"result-badge\">Natija: $\\sin(\\alpha - \\beta)$</div>"];
                    app.showSolution("2-topshiriq (c): Trigonometrik determinant sin(α - β)", steps);
                }
            },
            {
                id: "af3_t3_vandermonde",
                name: "3-topshiriq (k): Vandermond determinanti V(5, 7, 8)",
                shart: "$$\\begin{vmatrix} 1 & 5 & 25 \\ 1 & 7 & 49 \\ 1 & 8 & 64 \\end{vmatrix}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 3, 3-topshiriq (k):</b> 3-tartibli Vandermond determinanti.", "Formulasi: $$V(x_1, x_2, x_3) = \\begin{vmatrix} 1 & x_1 & x_1^2 \\\\ 1 & x_2 & x_2^2 \\\\ 1 & x_3 & x_3^2 \\end{vmatrix} = (x_2 - x_1)(x_3 - x_1)(x_3 - x_2)$$", "Bu yerda $x_1 = 5, x_2 = 7, x_3 = 8$:", "$$V = (7 - 5)(8 - 5)(8 - 7) = 2 \\cdot 3 \\cdot 1 = 6$$", "<div class=\"result-badge\">Natija: $6$</div>"];
                    app.showSolution("3-topshiriq (k): Vandermond determinanti V(5, 7, 8)", steps);
                }
            },
            {
                id: "af3_t10_min",
                name: "10-topshiriq: a_ij = min(i, j) elementli n-tartibli determinant",
                shart: "$$a_{ij} = \\min(i, j) \\quad (n\\text{-tartibli)}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 3, 10-topshiriq:</b> $a_{ij} = \\min(i, j)$ shartli determinantni hisoblash.", "Matritsa ko'rinishi:<br>$$D_n = \\begin{vmatrix} 1 & 1 & 1 & \\dots & 1 \\\\ 1 & 2 & 2 & \\dots & 2 \\\\ 1 & 2 & 3 & \\dots & 3 \\\\ \\dots & \\dots & \\dots & \\dots & \\dots \\\\ 1 & 2 & 3 & \\dots & n \\end{vmatrix}$$", "Har bir $k$-satrdan $(k-1)$-satrni ketma-ket ayirib chiqamiz ($k = n, n-1, \\dots, 2$):<br>Natijada bosh diagonalda barcha elementlar $1$ ga aylanadi, bosh diagonal ostidagi elementlar esa $0$ bo'ladi (yuqori uchburchak matritsa):", "$$D_n = \\begin{vmatrix} 1 & 1 & 1 & \\dots & 1 \\\\ 0 & 1 & 1 & \\dots & 1 \\\\ 0 & 0 & 1 & \\dots & 1 \\\\ \\dots & \\dots & \\dots & \\dots & \\dots \\\\ 0 & 0 & 0 & \\dots & 1 \\end{vmatrix} = 1 \\cdot 1 \\cdot \\dots \\cdot 1 = 1$$", "<div class=\"result-badge\">Natija: $\\det(A) = 1$</div>"];
                    app.showSolution("10-topshiriq: a_ij = min(i, j) elementli n-tartibli determinant", steps);
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
            {
                id: "af4_t1_det3",
                name: "1-topshiriq: 3-qator bo'yicha determinant yoyilmasi",
                shart: "$$\\begin{vmatrix} 2 & -3 & 4 & 1 \\ 4 & -2 & 3 & 2 \\ a & b & c & d \\ 3 & -1 & 4 & 3 \\end{vmatrix}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 4, 1-topshiriq:</b> Uchinchi qator bo'yicha yoyib determinantni hisoblash.", "Determinant: $$D = \\begin{vmatrix} 2 & -3 & 4 & 1 \\\\ 4 & -2 & 3 & 2 \\\\ a & b & c & d \\\\ 3 & -1 & 4 & 3 \\end{vmatrix}$$", "Laplas teoremasiga ko'ra 3-qator elementlari va ularning algebraik to'ldiruvchilari ko'paytmasi yig'indisi:<br>$$D = a A_{31} + b A_{32} + c A_{33} + d A_{34}$$", "Bu yerda $A_{3j} = (-1)^{3+j} M_{3j}$. Har bir 3x3 minorni hisoblaymiz:", "• $A_{31} = +\\begin{vmatrix} -3 & 4 & 1 \\\\ -2 & 3 & 2 \\\\ -1 & 4 & 3 \\end{vmatrix} = 8 - 8 - 8 = -8$", "• $A_{32} = -\\begin{vmatrix} 2 & 4 & 1 \\\\ 4 & 3 & 2 \\\\ 3 & 4 & 3 \\end{vmatrix} = -(-5) = 5$", "• $A_{33} = +\\begin{vmatrix} 2 & -3 & 1 \\\\ 4 & -2 & 2 \\\\ 3 & -1 & 3 \\end{vmatrix} = 8$", "• $A_{34} = -\\begin{vmatrix} 2 & -3 & 4 \\\\ 4 & -2 & 3 \\\\ 3 & -1 & 4 \\end{vmatrix} = -(-5) = 5$", "Yakuniy ifoda: $$D = -8a + 5b + 8c + 5d$$", "<div class=\"result-badge\">Natija: $D = -8a + 5b + 8c + 5d$</div>"];
                    app.showSolution("1-topshiriq: 3-qator bo'yicha determinant yoyilmasi", steps);
                }
            },
            {
                id: "af4_t3_block",
                name: "3-topshiriq: Blokli uchburchak determinant",
                shart: "$$\\begin{vmatrix} A & B \\ 0 & C \\end{vmatrix} = \\det(A) \\cdot \\det(C)$$",
                solve: () => {
                    const steps = ["<b>Amaliy 4, 3-topshiriq:</b> Quyi burchagi nol bo'lgan blokli matritsa determinanti.", "Teorema: Agar kvadrat matritsa $\\begin{pmatrix} A & B \\\\ 0 & C \\end{pmatrix}$ ko'rinishida bo'lsa, bu yerda $A$ va $C$ kvadrat bloklar, u holda:<br>$$\\det \\begin{pmatrix} A & B \\\\ 0 & C \\end{pmatrix} = \\det(A) \\cdot \\det(C)$$", "Laplas teoremasi bo'yicha $A$ bloki egallagan satrlar bo'yicha yoyilganda yagona noldan farqli had $\\det(A) \\cdot \\det(C)$ bo'ladi.", "<div class=\"result-badge\">Qoida: Blok-uchburchak matritsa determinanti diagonal bloklar determinantlari ko'paytmasiga teng!</div>"];
                    app.showSolution("3-topshiriq: Blokli uchburchak determinant", steps);
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
            {
                id: "af5_t1_c",
                name: "1-topshiriq (c): 2x2 Teskari matritsa [[2, 5], [1, 3]]",
                shart: "$$\\begin{pmatrix} 2 & 5 \\ 1 & 3 \\end{pmatrix}^{-1}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 5, 1-topshiriq (c):</b> 2x2 matritsaning teskarisini topish.", "Determinant: $\\det(A) = 2 \\cdot 3 - 5 \\cdot 1 = 6 - 5 = 1 \\neq 0$", "2x2 matritsa teskarisi formulasi: $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$", "$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$$", "Tekshirish: $\\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix} \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 6-5 & -10+10 \\\\ 3-3 & -5+6 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = E$", "<div class=\"result-badge\">Teskari matritsa: $A^{-1} = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$</div>"];
                    app.showSolution("1-topshiriq (c): 2x2 Teskari matritsa [[2, 5], [1, 3]]", steps);
                }
            },
            {
                id: "af5_t1_d",
                name: "1-topshiriq (d): Trigonometrik burish matritsasining teskarisi",
                shart: "$$\\begin{pmatrix} \\cos\\alpha & -\\sin\\alpha \\ \\sin\\alpha & \\cos\\alpha \\end{pmatrix}^{-1}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 5, 1-topshiriq (d):</b> Burish matritsasining teskarisi.", "Determinant: $\\det(A) = \\cos^2\\alpha - (-\\sin^2\\alpha) = \\cos^2\\alpha + \\sin^2\\alpha = 1$", "Biriktirilgan matritsa transponirlanadi:<br>$$A^{-1} = \\begin{pmatrix} \\cos\\alpha & \\sin\\alpha \\\\ -\\sin\\alpha & \\cos\\alpha \\end{pmatrix}$$", "E'tibor bering: $A^{-1} = A^T = R(-\\alpha)$, ya'ni $\\alpha$ burchakka burishning teskarisi $-\\alpha$ burchakka burishdir (ortogonal matritsa).", "<div class=\"result-badge\">Teskari matritsa: $A^{-1} = \\begin{pmatrix} \\cos\\alpha & \\sin\\alpha \\\\ -\\sin\\alpha & \\cos\\alpha \\end{pmatrix}$</div>"];
                    app.showSolution("1-topshiriq (d): Trigonometrik burish matritsasining teskarisi", steps);
                }
            },
            {
                id: "af5_t3_orthogonal",
                name: "3-topshiriq: 3x3 Ortogonal matritsaning teskarisi",
                shart: "$$\\begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \\end{pmatrix}^{-1}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 5, 3-topshiriq:</b>", "Berilgan matritsa: $$A = \\begin{pmatrix} 1 & 2 & 2 \\\\ 2 & 1 & -2 \\\\ 2 & -2 & 1 \\end{pmatrix}$$", "Determinant: $\\det(A) = 1(1 - 4) - 2(2 + 4) + 2(-4 - 2) = -3 - 12 - 12 = -27$", "Algebraik to'ldiruvchilar hisoblanganda $A^* = -3 \\begin{pmatrix} 1 & 2 & 2 \\\\ 2 & 1 & -2 \\\\ 2 & -2 & 1 \\end{pmatrix}^T$", "$$A^{-1} = \\frac{1}{9} \\begin{pmatrix} 1 & 2 & 2 \\\\ 2 & 1 & -2 \\\\ 2 & -2 & 1 \\end{pmatrix}$$", "<div class=\"result-badge\">Teskari matritsa: $A^{-1} = \\frac{1}{9} A$</div>"];
                    app.showSolution("3-topshiriq: 3x3 Ortogonal matritsaning teskarisi", steps);
                }
            },
            {
                id: "af5_t5_eq_xab",
                name: "5-topshiriq: Matritsaviy tenglamalar (XA = B va AXB = C)",
                shart: "$$XA = B \\implies X = B A^{-1}, \\quad AXB = C \\implies X = A^{-1} C B^{-1}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 5, 5-topshiriq:</b> Matritsaviy tenglamalarni yechish qoidalari.", "• 1-tur ($AX = B$): Chapdan $A^{-1}$ ga ko'paytiriladi: $A^{-1}(AX) = A^{-1}B \\implies X = A^{-1}B$.<br>• 2-tur ($XA = B$): O'ngdan $A^{-1}$ ga ko'paytiriladi: $(XA)A^{-1} = BA^{-1} \\implies X = BA^{-1}$.<br>• 3-tur ($AXB = C$): Chapdan $A^{-1}$ ga, o'ngdan $B^{-1}$ ga ko'paytiriladi: $X = A^{-1} C B^{-1}$.", "Shart: $A$ va $B$ xosmas matritsalar bo'lishi kerak $(\\det(A) \\neq 0, \\det(B) \\neq 0)$.", "<div class=\"result-badge\">Qoida: $X = A^{-1} C B^{-1}$</div>"];
                    app.showSolution("5-topshiriq: Matritsaviy tenglamalar (XA = B va AXB = C)", steps);
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
                shart: "2x + 3y = 8\\n3x - y = 1",
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
                shart: "x + y - z = 2\\n2x - y + z = 1\\nx + 2y - z = 3",
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
                shart: "2x1 + x2 - x3 = 1\\n3x1 - 2x2 + 2x3 = 5\\nx1 + x2 + x3 = 6",
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
                shart: "x + 2y = 5\\n3x + 4y = 11",
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
                shart: "2x + y + z = 4\\nx + 2y + z = 5\\nx + y + 2z = 7",
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
            {
                id: "af6_t1_b",
                name: "1-topshiriq (b): Kramer usuli (2x1 + 5x2 = 1, 3x1 + 7x2 = 2)",
                shart: "$$\\begin{cases} 2x_1 + 5x_2 = 1 \\ 3x_1 + 7x_2 = 2 \\end{cases}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 6, 1-topshiriq (b):</b> Kramer usuli bilan yechish.", "Asosiy determinant: $$\\Delta = \\begin{vmatrix} 2 & 5 \\\\ 3 & 7 \\end{vmatrix} = 2 \\cdot 7 - 5 \\cdot 3 = 14 - 15 = -1 \\neq 0$$", "Yordamchi determinantlar:<br>$$\\Delta_{x_1} = \\begin{vmatrix} 1 & 5 \\\\ 2 & 7 \\end{vmatrix} = 7 - 10 = -3$$$$\\Delta_{x_2} = \\begin{vmatrix} 2 & 1 \\\\ 3 & 2 \\end{vmatrix} = 4 - 3 = 1$$", "Yechimlar:<br>$$x_1 = \\frac{\\Delta_{x_1}}{\\Delta} = \\frac{-3}{-1} = 3$$$$x_2 = \\frac{\\Delta_{x_2}}{\\Delta} = \\frac{1}{-1} = -1$$", "<div class=\"result-badge\">Yechim: $x_1 = 3, \\quad x_2 = -1$</div>"];
                    app.showSolution("1-topshiriq (b): Kramer usuli (2x1 + 5x2 = 1, 3x1 + 7x2 = 2)", steps);
                }
            },
            {
                id: "af6_t1_d",
                name: "1-topshiriq (d): 3x3 Kramer usuli (x1, x2, x3)",
                shart: "$$\\begin{cases} 2x_1 + x_2 + x_3 = 3 \\ x_1 + 2x_2 + x_3 = 0 \\ x_1 + x_2 + 2x_3 = 0 \\end{cases}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 6, 1-topshiriq (d):</b>", "Asosiy determinant:<br>$$\\Delta = \\begin{vmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{vmatrix} = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$$", "$$\\Delta_{x_1} = \\begin{vmatrix} 3 & 1 & 1 \\\\ 0 & 2 & 1 \\\\ 0 & 1 & 2 \\end{vmatrix} = 3(4-1) = 9 \\implies x_1 = \\frac{9}{4} = 2.25$$ (yoki simmetriya bo'yicha $x_2 = x_3 = -0.75$).", "<div class=\"result-badge\">Yechim: $x_1 = 2.25, \\quad x_2 = -0.75, \\quad x_3 = -0.75$</div>"];
                    app.showSolution("1-topshiriq (d): 3x3 Kramer usuli (x1, x2, x3)", steps);
                }
            },
            {
                id: "af6_t2_b",
                name: "2-topshiriq (b): Gauss usuli (5x1 + 2x2 - 4x3 = 4)",
                shart: "$$\\begin{cases} 5x_1 + 2x_2 - 4x_3 = 4 \\ x_1 + 3x_2 + 4x_3 = 3 \\ 2x_1 + 4x_2 + x_3 = 1 \\end{cases}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 6, 2-topshiriq (b):</b> Gauss usulida pog'onaviy ko'rinishga keltirish.", "Kengaytirilgan matritsa: $$\\begin{pmatrix} 5 & 2 & -4 & | & 4 \\\\ 1 & 3 & 4 & | & 3 \\\\ 2 & 4 & 1 & | & 1 \\end{pmatrix}$$", "1- va 2-satrlarni almashtirib, bosh diagonal ostini nolga aylantiramiz.", "Natijada teskari harakat orqali: $x_3 = 0, x_2 = -1, x_1 = 2$ hosil bo'ladi.", "<div class=\"result-badge\">Yechim: $x_1 = 2, \\quad x_2 = -1, \\quad x_3 = 0$</div>"];
                    app.showSolution("2-topshiriq (b): Gauss usuli (5x1 + 2x2 - 4x3 = 4)", steps);
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
                id: "af7_6a",
                name: "6-topshiriq (a): 4x4 Matritsa rangi",
                shart: "A = [[0, 4, 10, 1], [4, 8, 18, 7], [10, 18, 40, 17], [1, 7, 17, 3]]",
                solve: () => {
                    const A = [
                        [0, 4, 10, 1],
                        [4, 8, 18, 7],
                        [10, 18, 40, 17],
                        [1, 7, 17, 3]
                    ];
                    const res = MatrixSolver.rank(A);
                    const steps = [
                        `<b>Amaliy 7, 6-topshiriq (a):</b> 4x4 Matritsa rangini topish:`,
                        ...res.steps,
                        `<div class="result-badge">rank(A) = 2</div>`
                    ];
                    app.showSolution("7-Amaliy, 6-topshiriq (a)", steps);
                }
            },
            {
                id: "af7_6b",
                name: "6-topshiriq (b): 4x4 Matritsa rangi",
                shart: "A = [[2, 1, 11, 2], [1, 0, 4, -1], [11, 4, 56, 5], [2, -1, 5, -6]]",
                solve: () => {
                    const A = [
                        [2, 1, 11, 2],
                        [1, 0, 4, -1],
                        [11, 4, 56, 5],
                        [2, -1, 5, -6]
                    ];
                    const res = MatrixSolver.rank(A);
                    const steps = [
                        `<b>Amaliy 7, 6-topshiriq (b):</b> 4x4 Matritsa rangini topish:`,
                        ...res.steps,
                        `<div class="result-badge">rank(A) = 2</div>`
                    ];
                    app.showSolution("7-Amaliy, 6-topshiriq (b)", steps);
                }
            },
            {
                id: "af7_7a",
                name: "7-topshiriq (a): O'ralgan minorlar usuli (3x5)",
                shart: "A = [[2, -1, 3, -2, 4], [4, -2, 5, 1, 7], [2, -1, 1, 8, 2]]",
                solve: () => {
                    const A = [
                        [2, -1, 3, -2, 4],
                        [4, -2, 5, 1, 7],
                        [2, -1, 1, 8, 2]
                    ];
                    const res = MatrixSolver.rank(A);
                    const steps = [
                        `<b>Amaliy 7, 7-topshiriq (a):</b> O'ralgan minorlar usulida rangni aniqlash:`,
                        `2-tartibli noldan farqli minor: $M_2 = \\begin{vmatrix} -1 & 3 \\\\ -2 & 5 \\end{vmatrix} = 1 \\neq 0$`,
                        `Uni o'rovchi barcha 3-tartibli minorlar 0 ga teng.`,
                        ...res.steps,
                        `<div class="result-badge">rank(A) = 2</div>`
                    ];
                    app.showSolution("7-Amaliy, 7-topshiriq (a)", steps);
                }
            },
            {
                id: "af7_var5",
                name: "⭐ 5-Variant: 6-topshiriq (e) 5x5 Matritsa rangi",
                shart: "A = [[1, 0, 1, 0, 0], [1, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 1, 0], [0, 1, 0, 1, 1]]",
                solve: () => {
                    const A = [
                        [1, 0, 1, 0, 0],
                        [1, 1, 0, 0, 0],
                        [0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0],
                        [0, 1, 0, 1, 1]
                    ];
                    const res = MatrixSolver.rank(A);
                    const steps = [
                        `<b>Amaliy 7, 5-Variant:</b> 5x5 Matritsa rangini topish:`,
                        ...res.steps,
                        `<div class="result-badge">rank(A) = 4</div>`
                    ];
                    app.showSolution("7-Amaliy, 5-Variant", steps);
                }
            },
            {
                id: "af7_t2_vec",
                name: "2-topshiriq: a1 + 2a2 + 3a3 + 4x = 0 vektor tenglamasi",
                shart: "$$a_1 + 2a_2 + 3a_3 + 4x = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 7, 2-topshiriq:</b> Vektor tenglamasidan $x$ noma'lum vektorni topish.", "Berilgan vektorlar:<br>$$a_1 = (5, -8, -12), \\quad a_2 = (2, -1, 4, -3), \\quad a_3 = (-3, 2, -5, 4)$$", "Tenglamani $x$ ga nisbatan yechamiz:<br>$$4x = -(a_1 + 2a_2 + 3a_3) \\implies x = -\\frac{1}{4}(a_1 + 2a_2 + 3a_3)$$", "Chiziqli kombinatsiyani koordinatalar bo'yicha hisoblaymiz.", "<div class=\"result-badge\">Vektor yechim: $x = \\left(0; \\frac{3}{2}; \\frac{15}{4}; -\\frac{3}{2}\\right)$</div>"];
                    app.showSolution("2-topshiriq: a1 + 2a2 + 3a3 + 4x = 0 vektor tenglamasi", steps);
                }
            },
            {
                id: "af7_t4_indep",
                name: "4-topshiriq (a): a1 = (1, 2, 3), a2 = (3, 6, 7) chiziqli erkliligi",
                shart: "$$a_1 = (1, 2, 3), \\quad a_2 = (3, 6, 7)$$",
                solve: () => {
                    const steps = ["<b>Amaliy 7, 4-topshiriq (a):</b> Vektorlar sistemasining chiziqli erkliligini tekshirish.", "Koordinatalar nisbatini tekshiramiz:<br>$$\\frac{3}{1} = 3, \\quad \\frac{6}{2} = 3, \\quad \\frac{7}{3} \\neq 3$$", "Koordinatalar to'liq proporsional emas! Matritsaning rangi 2 ga teng.", "Demak, $\\alpha_1 a_1 + \\alpha_2 a_2 = 0$ faqat $\\alpha_1 = \\alpha_2 = 0$ bo'lgandagina bajariladi.", "<div class=\"result-badge\">Xulosa: Vektorlar sistemasi CHIZIQLI ERKLI</div>"];
                    app.showSolution("4-topshiriq (a): a1 = (1, 2, 3), a2 = (3, 6, 7) chiziqli erkliligi", steps);
                }
            },
            {
                id: "af7_t4_dep",
                name: "4-topshiriq (b): a1 = (4, -2, 6), a2 = (6, -3, 9) chiziqli bog'liqligi",
                shart: "$$a_1 = (4, -2, 6), \\quad a_2 = (6, -3, 9)$$",
                solve: () => {
                    const steps = ["<b>Amaliy 7, 4-topshiriq (b):</b>", "Koordinatalar nisbatini tekshiramiz:<br>$$\\frac{6}{4} = \\frac{3}{2}, \\quad \\frac{-3}{-2} = \\frac{3}{2}, \\quad \\frac{9}{6} = \\frac{3}{2}$$", "Barcha koordinatalar nisbati bir xil: $a_2 = \\frac{3}{2} a_1$.", "Demak, $3a_1 - 2a_2 = 0$ nolmas chiziqli kombinatsiya mavjud.", "<div class=\"result-badge\">Xulosa: Vektorlar sistemasi CHIZIQLI BOG'LIQ</div>"];
                    app.showSolution("4-topshiriq (b): a1 = (4, -2, 6), a2 = (6, -3, 9) chiziqli bog'liqligi", steps);
                }
            },
        ]
    },
    8: {
        title: "8-Amaliy: Bir jinsli sistema va FYET",
        file: "Amaliy_8_Bir_jinsli_chiziqli_tenglamalar_sistemasi_Kroneker_Kopelli.pdf",
        tasks: [
            {
                id: "af8_1c",
                name: "1-topshiriq (c): 4x3 Bir jinsli sistema (Nolmas yechim)",
                shart: "x1 + 3x2 + 2x3 = 0, 2x1 - x2 + 3x3 = 0, 3x1 - 5x2 + 4x3 = 0, x1 + 17x2 + 4x3 = 0",
                solve: () => {
                    const A = [
                        [1, 3, 2],
                        [2, -1, 3],
                        [3, -5, 4],
                        [1, 17, 4]
                    ];
                    const res = MatrixSolver.solveHomogeneous(A);
                    const steps = [
                        `<b>Amaliy 8, 1-topshiriq (c):</b> Bir jinsli tenglamalar sistemasining umumiy va fundamental yechimlar sistemasi:`,
                        ...res.steps,
                        `<div class="result-badge"><b>rank(A) = 2 &lt; n = 3</b> => Nolmas yechimlar mavjud. FYET: $e_1 = (-11, -1, 7)^T$</div>`
                    ];
                    app.showSolution("8-Amaliy, 1-topshiriq (c)", steps);
                }
            },
            {
                id: "af8_1d",
                name: "1-topshiriq (d): 4x3 Bir jinsli sistema (Trivial yechim)",
                shart: "3x1 + 5x2 + 2x3 = 0, 4x1 + 7x2 + 5x3 = 0, x1 + x2 - 4x3 = 0, 2x1 + 9x2 + 6x3 = 0",
                solve: () => {
                    const A = [
                        [3, 5, 2],
                        [4, 7, 5],
                        [1, 1, -4],
                        [2, 9, 6]
                    ];
                    const res = MatrixSolver.solveHomogeneous(A);
                    const steps = [
                        `<b>Amaliy 8, 1-topshiriq (d):</b> Bir jinsli tenglamalar sistemasini tahlil qilish:`,
                        ...res.steps,
                        `<div class="result-badge"><b>rank(A) = 3 = n</b> => Faqat yagona nol (trivial) yechim: $x_1=0, x_2=0, x_3=0$</div>`
                    ];
                    app.showSolution("8-Amaliy, 1-topshiriq (d)", steps);
                }
            },
            {
                id: "af8_2a",
                name: "2-topshiriq (a): 3x4 FYET va umumiy yechim",
                shart: "2x1 - 4x2 + 5x3 + 3x4 = 0, 3x1 - 6x2 + 4x3 + 2x4 = 0, 4x1 - 8x2 + 17x3 + 11x4 = 0",
                solve: () => {
                    const A = [
                        [2, -4, 5, 3],
                        [3, -6, 4, 2],
                        [4, -8, 17, 11]
                    ];
                    const res = MatrixSolver.solveHomogeneous(A);
                    const steps = [
                        `<b>Amaliy 8, 2-topshiriq (a):</b> Umumiy va fundamental yechimlar sistemasini (FYET) topish:`,
                        ...res.steps,
                        `<div class="result-badge"><b>rank(A) = 2, n = 4</b> => FYET: $e_1 = (2, 1, 0, 0)^T, \\quad e_2 = (2, 0, -5, 7)^T$</div>`
                    ];
                    app.showSolution("8-Amaliy, 2-topshiriq (a)", steps);
                }
            },
            {
                id: "af8_2b",
                name: "2-topshiriq (b): 4x4 FYET va umumiy yechim",
                shart: "x1 + 2x2 + 4x3 - 3x4 = 0, 3x1 + 5x2 + 6x3 - 4x4 = 0, 4x1 + 5x2 - 2x3 + 3x4 = 0, 3x1 + 8x2 + 24x3 - 19x4 = 0",
                solve: () => {
                    const A = [
                        [1, 2, 4, -3],
                        [3, 5, 6, -4],
                        [4, 5, -2, 3],
                        [3, 8, 24, -19]
                    ];
                    const res = MatrixSolver.solveHomogeneous(A);
                    const steps = [
                        `<b>Amaliy 8, 2-topshiriq (b):</b> Umumiy va fundamental yechimlar sistemasini (FYET) topish:`,
                        ...res.steps,
                        `<div class="result-badge"><b>rank(A) = 2, n = 4</b> => FYET: $e_1 = (8, -6, 1, 0)^T, \\quad e_2 = (-7, 5, 0, 1)^T$</div>`
                    ];
                    app.showSolution("8-Amaliy, 2-topshiriq (b)", steps);
                }
            },
            {
                id: "af8_2c",
                name: "2-topshiriq (c): 4x5 FYET va umumiy yechim",
                shart: "6x1 - 2x2 + 2x3 + 5x4 + 7x5 = 0, 9x1 - 3x2 + 4x3 + 8x4 + 9x5 = 0, 6x1 - 2x2 + 6x3 + 7x4 + x5 = 0, 3x1 - x2 + 4x3 + 4x4 - x5 = 0",
                solve: () => {
                    const A = [
                        [6, -2, 2, 5, 7],
                        [9, -3, 4, 8, 9],
                        [6, -2, 6, 7, 1],
                        [3, -1, 4, 4, -1]
                    ];
                    const res = MatrixSolver.solveHomogeneous(A);
                    const steps = [
                        `<b>Amaliy 8, 2-topshiriq (c):</b> 5 noma'lumli bir jinsli sistema FYET:`,
                        ...res.steps,
                        `<div class="result-badge"><b>rank(A) = 2, n = 5</b> => FYET 3 ta vektor: $e_1 = (1, 3, 0, 0, 0)^T, e_2 = (-4, 0, -3, 6, 0)^T, e_3 = (-10, 0, 9, 0, 6)^T$</div>`
                    ];
                    app.showSolution("8-Amaliy, 2-topshiriq (c)", steps);
                }
            },
            {
                id: "af8_2d",
                name: "2-topshiriq (d): 6x6 Bir jinsli sistema FYET",
                shart: "x1 - x3 = 0, x2 - x4 = 0, -x1 + x3 - x5 = 0, -x2 + x4 - x6 = 0, -x3 + x5 = 0, -x4 + x6 = 0",
                solve: () => {
                    const A = [
                        [1, 0, -1, 0, 0, 0],
                        [0, 1, 0, -1, 0, 0],
                        [-1, 0, 1, 0, -1, 0],
                        [0, -1, 0, 1, 0, -1],
                        [0, 0, -1, 0, 1, 0],
                        [0, 0, 0, -1, 0, 1]
                    ];
                    const res = MatrixSolver.solveHomogeneous(A);
                    const steps = [
                        `<b>Amaliy 8, 2-topshiriq (d):</b> 6x6 bir jinsli sistema tahlili:`,
                        ...res.steps,
                        `<div class="result-badge"><b>rank(A) = 6 = n</b> => Faqat yagona nol (trivial) yechim: $x_1=x_2=x_3=x_4=x_5=x_6=0$</div>`
                    ];
                    app.showSolution("8-Amaliy, 2-topshiriq (d)", steps);
                }
            },
            {
                id: "af8_2e",
                name: "2-topshiriq (e): 5x6 FYET va umumiy yechim",
                shart: "x1 - x3 + x5 = 0, x2 - x4 + x6 = 0, x1 - x2 + x5 - x6 = 0, x2 - x3 + x6 = 0, x1 - x4 + x5 = 0",
                solve: () => {
                    const A = [
                        [1, 0, -1, 0, 1, 0],
                        [0, 1, 0, -1, 0, 1],
                        [1, -1, 0, 0, 1, -1],
                        [0, 1, -1, 0, 0, 1],
                        [1, 0, 0, -1, 1, 0]
                    ];
                    const res = MatrixSolver.solveHomogeneous(A);
                    const steps = [
                        `<b>Amaliy 8, 2-topshiriq (e):</b> 6 noma'lumli sistema FYET:`,
                        ...res.steps,
                        `<div class="result-badge"><b>rank(A) = 3, n = 6</b> => FYET: $e_1 = (1, 1, 1, 1, 0, 0)^T, e_2 = (-1, 0, 0, 0, 1, 0)^T, e_3 = (0, -1, 0, 0, 0, 1)^T$</div>`
                    ];
                    app.showSolution("8-Amaliy, 2-topshiriq (e)", steps);
                }
            },
            {
                id: "af8_var5",
                name: "⭐ 5-Variant: 2.b topshiriq bo'yicha FYET",
                shart: "x1 + 2x2 + 4x3 - 3x4 = 0, 3x1 + 5x2 + 6x3 - 4x4 = 0, 4x1 + 5x2 - 2x3 + 3x4 = 0, 3x1 + 8x2 + 24x3 - 19x4 = 0",
                solve: () => {
                    const A = [
                        [1, 2, 4, -3],
                        [3, 5, 6, -4],
                        [4, 5, -2, 3],
                        [3, 8, 24, -19]
                    ];
                    const res = MatrixSolver.solveHomogeneous(A);
                    const steps = [
                        `<b>Amaliy 8, 5-Variant:</b> 2-topshiriq (b) bo'yicha FYET topish:`,
                        ...res.steps,
                        `<div class="result-badge">FYET: $e_1 = (8, -6, 1, 0)^T, \\quad e_2 = (-7, 5, 0, 1)^T$</div>`
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
                id: "af9_t1_a",
                name: "1-topshiriq (a): z1 = 2+3i, z2 = 1+i ustida amallar",
                shart: "$$z_1 = 2 + 3i, \\quad z_2 = 1 + i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 1-topshiriq (a):</b> Kompleks sonlar ustida arifmetik amallarni bajarish.", "Berilgan sonlar: $$z_1 = 2 + 3i, \\quad z_2 = 1 + i$$", "<b>1) Yig'indisi:</b><br>$$z_1 + z_2 = (2 + 1) + (3 + 1)i = 3 + 4i$$", "<b>2) Ayirmasi:</b><br>$$z_1 - z_2 = (2 - 1) + (3 - 1)i = 1 + 2i$$", "<b>3) Ko'paytmasi:</b><br>$$z_1 \\cdot z_2 = (2 + 3i)(1 + i) = 2 + 2i + 3i + 3i^2 = (2 - 3) + (2 + 3)i = -1 + 5i$$", "<b>4) Bo'linmasi:</b><br>Kasr maxrajining qo'shmasi $(1 - i)$ ga ko'paytiramiz:<br>$$\\frac{z_1}{z_2} = \\frac{2 + 3i}{1 + i} = \\frac{(2 + 3i)(1 - i)}{(1 + i)(1 - i)} = \\frac{2 - 2i + 3i - 3i^2}{1^2 - i^2} = \\frac{5 + i}{2} = \\frac{5}{2} + \\frac{1}{2}i$$", "<div class=\"result-badge\">Natijalar: $z_1 + z_2 = 3 + 4i$, $\\quad z_1 \\cdot z_2 = -1 + 5i$, $\\quad \\frac{z_1}{z_2} = 2.5 + 0.5i$</div>"];
                    app.showSolution("1-topshiriq (a): z1 = 2+3i, z2 = 1+i ustida amallar", steps);
                }
            },
            {
                id: "af9_t1_b",
                name: "1-topshiriq (b): z1 = 1-2i, z2 = -3+7i ustida amallar",
                shart: "$$z_1 = 1 - 2i, \\quad z_2 = -3 + 7i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 1-topshiriq (b):</b> Kompleks sonlar ustida amallar.", "Berilgan: $$z_1 = 1 - 2i, \\quad z_2 = -3 + 7i$$", "<b>1) Yig'indisi:</b><br>$$z_1 + z_2 = (1 - 3) + (-2 + 7)i = -2 + 5i$$", "<b>2) Ko'paytmasi:</b><br>$$z_1 \\cdot z_2 = (1 - 2i)(-3 + 7i) = -3 + 7i + 6i - 14i^2 = (-3 + 14) + 13i = 11 + 13i$$", "<b>3) Bo'linmasi:</b><br>Maxraj moduli: $|z_2|^2 = (-3)^2 + 7^2 = 9 + 49 = 58$<br>$$\\frac{z_1}{z_2} = \\frac{(1 - 2i)(-3 - 7i)}{58} = \\frac{-3 - 7i + 6i + 14i^2}{58} = \\frac{-17 - i}{58} = -\\frac{17}{58} - \\frac{1}{58}i$$", "<div class=\"result-badge\">Natijalar: $z_1 + z_2 = -2 + 5i$, $\\quad z_1 \\cdot z_2 = 11 + 13i$, $\\quad \\frac{z_1}{z_2} = -\\frac{17}{58} - \\frac{1}{58}i$</div>"];
                    app.showSolution("1-topshiriq (b): z1 = 1-2i, z2 = -3+7i ustida amallar", steps);
                }
            },
            {
                id: "af9_t1_c",
                name: "1-topshiriq (c): z1 = 2+5i, z2 = -4-i ustida amallar",
                shart: "$$z_1 = 2 + 5i, \\quad z_2 = -4 - i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 1-topshiriq (c):</b>", "Berilgan: $$z_1 = 2 + 5i, \\quad z_2 = -4 - i$$", "<b>1) Yig'indisi:</b><br>$$z_1 + z_2 = (2 - 4) + (5 - 1)i = -2 + 4i$$", "<b>2) Ko'paytmasi:</b><br>$$z_1 \\cdot z_2 = (2 + 5i)(-4 - i) = -8 - 2i - 20i - 5i^2 = -3 - 22i$$", "<b>3) Bo'linmasi:</b><br>$$|z_2|^2 = (-4)^2 + (-1)^2 = 17$$<br>$$\\frac{z_1}{z_2} = \\frac{(2 + 5i)(-4 + i)}{17} = \\frac{-8 + 2i - 20i + 5i^2}{17} = -\\frac{13}{17} - \\frac{18}{17}i$$", "<div class=\"result-badge\">Natijalar: $z_1 + z_2 = -2 + 4i$, $\\quad z_1 \\cdot z_2 = -3 - 22i$, $\\quad \\frac{z_1}{z_2} = -\\frac{13}{17} - \\frac{18}{17}i$</div>"];
                    app.showSolution("1-topshiriq (c): z1 = 2+5i, z2 = -4-i ustida amallar", steps);
                }
            },
            {
                id: "af9_t1_d",
                name: "1-topshiriq (d): z1 = 3-7i, z2 = 2-5i ustida amallar",
                shart: "$$z_1 = 3 - 7i, \\quad z_2 = 2 - 5i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 1-topshiriq (d):</b>", "Berilgan: $$z_1 = 3 - 7i, \\quad z_2 = 2 - 5i$$", "<b>1) Yig'indisi:</b><br>$$z_1 + z_2 = (3 + 2) + (-7 - 5)i = 5 - 12i$$", "<b>2) Ko'paytmasi:</b><br>$$z_1 \\cdot z_2 = (3 - 7i)(2 - 5i) = 6 - 15i - 14i + 35i^2 = -29 - 29i$$", "<b>3) Bo'linmasi:</b><br>$$|z_2|^2 = 2^2 + (-5)^2 = 29$$<br>$$\\frac{z_1}{z_2} = \\frac{(3 - 7i)(2 + 5i)}{29} = \\frac{6 + 15i - 14i - 35i^2}{29} = \\frac{41 + i}{29} = \\frac{41}{29} + \\frac{1}{29}i$$", "<div class=\"result-badge\">Natijalar: $z_1 + z_2 = 5 - 12i$, $\\quad z_1 \\cdot z_2 = -29 - 29i$, $\\quad \\frac{z_1}{z_2} = \\frac{41}{29} + \\frac{1}{29}i$</div>"];
                    app.showSolution("1-topshiriq (d): z1 = 3-7i, z2 = 2-5i ustida amallar", steps);
                }
            },
            {
                id: "af9_t1_e",
                name: "1-topshiriq (e): z1 = 2+6i, z2 = -2+3i ustida amallar",
                shart: "$$z_1 = 2 + 6i, \\quad z_2 = -2 + 3i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 1-topshiriq (e):</b>", "Berilgan: $$z_1 = 2 + 6i, \\quad z_2 = -2 + 3i$$", "<b>1) Yig'indisi:</b><br>$$z_1 + z_2 = (2 - 2) + (6 + 3)i = 9i$$", "<b>2) Ko'paytmasi:</b><br>$$z_1 \\cdot z_2 = (2 + 6i)(-2 + 3i) = -4 + 6i - 12i + 18i^2 = -22 - 6i$$", "<b>3) Bo'linmasi:</b><br>$$|z_2|^2 = (-2)^2 + 3^2 = 13$$<br>$$\\frac{z_1}{z_2} = \\frac{(2 + 6i)(-2 - 3i)}{13} = \\frac{-4 - 6i - 12i - 18i^2}{13} = \\frac{14 - 18i}{13} = \\frac{14}{13} - \\frac{18}{13}i$$", "<div class=\"result-badge\">Natijalar: $z_1 + z_2 = 9i$, $\\quad z_1 \\cdot z_2 = -22 - 6i$, $\\quad \\frac{z_1}{z_2} = \\frac{14}{13} - \\frac{18}{13}i$</div>"];
                    app.showSolution("1-topshiriq (e): z1 = 2+6i, z2 = -2+3i ustida amallar", steps);
                }
            },
            {
                id: "af9_t1_f",
                name: "1-topshiriq (f): z1 = 4+2i, z2 = -3-2i ustida amallar",
                shart: "$$z_1 = 4 + 2i, \\quad z_2 = -3 - 2i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 1-topshiriq (f):</b>", "Berilgan: $$z_1 = 4 + 2i, \\quad z_2 = -3 - 2i$$", "<b>1) Yig'indisi:</b><br>$$z_1 + z_2 = (4 - 3) + (2 - 2)i = 1$$", "<b>2) Ko'paytmasi:</b><br>$$z_1 \\cdot z_2 = (4 + 2i)(-3 - 2i) = -12 - 8i - 6i - 4i^2 = -8 - 14i$$", "<b>3) Bo'linmasi:</b><br>$$|z_2|^2 = (-3)^2 + (-2)^2 = 13$$<br>$$\\frac{z_1}{z_2} = \\frac{(4 + 2i)(-3 + 2i)}{13} = \\frac{-12 + 8i - 6i + 4i^2}{13} = -\\frac{16}{13} + \\frac{2}{13}i$$", "<div class=\"result-badge\">Natijalar: $z_1 + z_2 = 1$, $\\quad z_1 \\cdot z_2 = -8 - 14i$, $\\quad \\frac{z_1}{z_2} = -\\frac{16}{13} + \\frac{2}{13}i$</div>"];
                    app.showSolution("1-topshiriq (f): z1 = 4+2i, z2 = -3-2i ustida amallar", steps);
                }
            },
            {
                id: "af9_t1_g",
                name: "1-topshiriq (g): z1 = 5+3i, z2 = 3+2i ustida amallar",
                shart: "$$z_1 = 5 + 3i, \\quad z_2 = 3 + 2i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 1-topshiriq (g):</b>", "Berilgan: $$z_1 = 5 + 3i, \\quad z_2 = 3 + 2i$$", "<b>1) Yig'indisi:</b><br>$$z_1 + z_2 = (5 + 3) + (3 + 2)i = 8 + 5i$$", "<b>2) Ko'paytmasi:</b><br>$$z_1 \\cdot z_2 = (5 + 3i)(3 + 2i) = 15 + 10i + 9i + 6i^2 = 9 + 19i$$", "<b>3) Bo'linmasi:</b><br>$$|z_2|^2 = 3^2 + 2^2 = 13$$<br>$$\\frac{z_1}{z_2} = \\frac{(5 + 3i)(3 - 2i)}{13} = \\frac{15 - 10i + 9i - 6i^2}{13} = \\frac{21 - i}{13} = \\frac{21}{13} - \\frac{1}{13}i$$", "<div class=\"result-badge\">Natijalar: $z_1 + z_2 = 8 + 5i$, $\\quad z_1 \\cdot z_2 = 9 + 19i$, $\\quad \\frac{z_1}{z_2} = \\frac{21}{13} - \\frac{1}{13}i$</div>"];
                    app.showSolution("1-topshiriq (g): z1 = 5+3i, z2 = 3+2i ustida amallar", steps);
                }
            },
            {
                id: "af9_t1_h",
                name: "1-topshiriq (h): z1 = 6-2i, z2 = 3-4i ustida amallar",
                shart: "$$z_1 = 6 - 2i, \\quad z_2 = 3 - 4i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 1-topshiriq (h):</b>", "Berilgan: $$z_1 = 6 - 2i, \\quad z_2 = 3 - 4i$$", "<b>1) Yig'indisi:</b><br>$$z_1 + z_2 = (6 + 3) + (-2 - 4)i = 9 - 6i$$", "<b>2) Ko'paytmasi:</b><br>$$z_1 \\cdot z_2 = (6 - 2i)(3 - 4i) = 18 - 24i - 6i + 8i^2 = 10 - 30i$$", "<b>3) Bo'linmasi:</b><br>$$|z_2|^2 = 3^2 + (-4)^2 = 25$$<br>$$\\frac{z_1}{z_2} = \\frac{(6 - 2i)(3 + 4i)}{25} = \\frac{18 + 24i - 6i - 8i^2}{25} = \\frac{26 + 18i}{25} = \\frac{26}{25} + \\frac{18}{25}i$$", "<div class=\"result-badge\">Natijalar: $z_1 + z_2 = 9 - 6i$, $\\quad z_1 \\cdot z_2 = 10 - 30i$, $\\quad \\frac{z_1}{z_2} = \\frac{26}{25} + \\frac{18}{25}i$</div>"];
                    app.showSolution("1-topshiriq (h): z1 = 6-2i, z2 = 3-4i ustida amallar", steps);
                }
            },
            {
                id: "af9_t2_exact",
                name: "2-topshiriq: (1+2i)x + (3-5i)y = 1-3i tenglikdan x va y ni topish",
                shart: "$$(1+2i)x + (3-5i)y = 1 - 3i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 2-topshiriq:</b> Berilgan tenglikni qanoatlantiruvchi $x$ va $y$ haqiqiy sonlarni toping.", "Tenglama: $$(1+2i)x + (3-5i)y = 1 - 3i$$", "💡 <b>1-qadam: Chap tomonni haqiqiy va mavhum qismlarga ajratamiz:</b><br>$$(x + 2xi) + (3y - 5yi) = 1 - 3i$$$$(x + 3y) + (2x - 5y)i = 1 - 3i$$", "💡 <b>2-qadam: Kompleks sonlar tengligining ta'rifiga ko'ra:</b><br>Haqiqiy qismlar va mavhum qismlar o'zaro teng bo'lishi kerak:<br>$$\\begin{cases} x + 3y = 1 \\\\ 2x - 5y = -3 \\end{cases}$$", "💡 <b>3-qadam: Sistemani Kramer usuli bilan yechamiz:</b><br>$$\\Delta = \\begin{vmatrix} 1 & 3 \\\\ 2 & -5 \\end{vmatrix} = 1 \\cdot (-5) - 3 \\cdot 2 = -5 - 6 = -11$$", "$$\\Delta_x = \\begin{vmatrix} 1 & 3 \\\\ -3 & -5 \\end{vmatrix} = 1 \\cdot (-5) - 3 \\cdot (-3) = -5 + 9 = 4$$", "$$\\Delta_y = \\begin{vmatrix} 1 & 1 \\\\ 2 & -3 \\end{vmatrix} = 1 \\cdot (-3) - 1 \\cdot 2 = -3 - 2 = -5$$", "Noma'lumlarni topamiz:<br>$$x = \\frac{\\Delta_x}{\\Delta} = \\frac{4}{-11} = -\\frac{4}{11}$$$$y = \\frac{\\Delta_y}{\\Delta} = \\frac{-5}{-11} = \\frac{5}{11}$$", "<div class=\"result-badge\">Yechim: $x = -\\frac{4}{11}, \\quad y = \\frac{5}{11}$</div>"];
                    app.showSolution("2-topshiriq: (1+2i)x + (3-5i)y = 1-3i tenglikdan x va y ni topish", steps);
                }
            },
            {
                id: "af9_t4_power",
                name: "4-topshiriq: n-butun son uchun i^n ni hisoblang",
                shart: "$$i^n \\quad (n \\in \\mathbb{Z})$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 4-topshiriq:</b> $n$-butun son uchun $i^n$ ning qiymatlarini aniqlash.", "💡 <b>Mavhum birlik $i$ ning darajalari:</b><br>• $i^0 = 1$<br>• $i^1 = i$<br>• $i^2 = -1$<br>• $i^3 = i^2 \\cdot i = -i$<br>• $i^4 = (i^2)^2 = (-1)^2 = 1$<br>", "Demak, $i$ ning darajalari har 4 qadamda davriy takrorlanadi. Ixtiyoriy butun $n$ sonini $4$ ga bo'lganda:<br>$$n = 4k + r, \\quad r \\in \\{0, 1, 2, 3\\}$$ ko'rinishida yozish mumkin.", "<b>Qoldiq $r$ ga qarab qiymatlar:</b><br>• Agar $n = 4k$ bo'lsa: $i^n = i^{4k} = (i^4)^k = 1^k = <b>1</b>$<br>• Agar $n = 4k + 1$ bo'lsa: $i^n = i^{4k+1} = i^{4k} \\cdot i = <b>i</b>$<br>• Agar $n = 4k + 2$ bo'lsa: $i^n = i^{4k+2} = i^{4k} \\cdot i^2 = <b>-1</b>$<br>• Agar $n = 4k + 3$ bo'lsa: $i^n = i^{4k+3} = i^{4k} \\cdot i^3 = <b>-i</b>$", "<div class=\"result-badge\">Xulosa: $i^n = \\begin{cases} 1, & n = 4k \\\\ i, & n = 4k+1 \\\\ -1, & n = 4k+2 \\\\ -i, & n = 4k+3 \\end{cases}$</div>"];
                    app.showSolution("4-topshiriq: n-butun son uchun i^n ni hisoblang", steps);
                }
            },
            {
                id: "af9_t5_simplify",
                name: "5-topshiriq: (x-1-i)(x-1+i)(x+1+i)(x+1-i) ifodani soddalashtiring",
                shart: "$$(x-1-i)(x-1+i)(x+1+i)(x+1-i)$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 5-topshiriq:</b> Ko'paytmani soddalashtirish.", "Berilgan ifoda: $$A = (x - 1 - i)(x - 1 + i)(x + 1 + i)(x + 1 - i)$$", "💡 <b>1-qadam: Qo'shma juftliklarni qisqa ko'paytirish formulasi $(a-b)(a+b) = a^2 - b^2$ bo'yicha guruhlaymiz:</b><br>1-juftlik: $[(x - 1) - i][(x - 1) + i] = (x - 1)^2 - i^2 = (x - 1)^2 + 1 = x^2 - 2x + 1 + 1 = x^2 - 2x + 2$<br>2-juftlik: $[(x + 1) + i][(x + 1) - i] = (x + 1)^2 - i^2 = (x + 1)^2 + 1 = x^2 + 2x + 1 + 1 = x^2 + 2x + 2$", "💡 <b>2-qadam: Hosil bo'lgan ko'phadlarni ko'paytiramiz:</b><br>$$A = (x^2 - 2x + 2)(x^2 + 2x + 2) = [(x^2 + 2) - 2x][(x^2 + 2) + 2x]$$", "Yana kvadratlar ayirmasi formulasini qo'llaymiz:<br>$$A = (x^2 + 2)^2 - (2x)^2 = (x^4 + 4x^2 + 4) - 4x^2 = x^4 + 4$$", "<div class=\"result-badge\">Soddalashgan ifoda: $x^4 + 4$</div>"];
                    app.showSolution("5-topshiriq: (x-1-i)(x-1+i)(x+1+i)(x+1-i) ifodani soddalashtiring", steps);
                }
            },
            {
                id: "af9_t6_a",
                name: "6-topshiriq (a): z² + 2 = 0 tenglamaning kompleks ildizlari",
                shart: "$$z^2 + 2 = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 6-topshiriq (a):</b> Kvadrat tenglamani yechish.", "$$z^2 + 2 = 0$$", "$z^2 = -2$", "$z = \\pm \\sqrt{-2} = \\pm i\\sqrt{2}$", "<div class=\"result-badge\">Ildizlar: $z_{1,2} = \\pm i\\sqrt{2}$</div>"];
                    app.showSolution("6-topshiriq (a): z² + 2 = 0 tenglamaning kompleks ildizlari", steps);
                }
            },
            {
                id: "af9_t6_b",
                name: "6-topshiriq (b): z² + 1 = 0 tenglamaning kompleks ildizlari",
                shart: "$$z^2 + 1 = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 6-topshiriq (b):</b> Kvadrat tenglamani yechish.", "$$z^2 + 1 = 0$$", "$z^2 = -1$", "$z = \\pm \\sqrt{-1} = \\pm i$", "<div class=\"result-badge\">Ildizlar: $z_{1,2} = \\pm i$</div>"];
                    app.showSolution("6-topshiriq (b): z² + 1 = 0 tenglamaning kompleks ildizlari", steps);
                }
            },
            {
                id: "af9_t6_c",
                name: "6-topshiriq (c): 3z² + 4 = 0 tenglamaning kompleks ildizlari",
                shart: "$$3z^2 + 4 = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 6-topshiriq (c):</b> Kvadrat tenglamani yechish.", "$$3z^2 + 4 = 0$$", "$3z^2 = -4 \\implies z^2 = -\\frac{4}{3}$", "$z = \\pm i \\sqrt{\\frac{4}{3}} = \\pm \\frac{2\\sqrt{3}}{3}i$", "<div class=\"result-badge\">Ildizlar: $z_{1,2} = \\pm \\frac{2\\sqrt{3}}{3}i$</div>"];
                    app.showSolution("6-topshiriq (c): 3z² + 4 = 0 tenglamaning kompleks ildizlari", steps);
                }
            },
            {
                id: "af9_t6_d",
                name: "6-topshiriq (d): z² + z + 6 = 0 tenglamaning kompleks ildizlari",
                shart: "$$z^2 + z + 6 = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 6-topshiriq (d):</b> Kvadrat tenglamani yechish.", "$$z^2 + z + 6 = 0$$", "Diskriminant: $D = b^2 - 4ac = 1^2 - 4 \\cdot 1 \\cdot 6 = 1 - 24 = -23 < 0$", "$\\sqrt{D} = \\pm i\\sqrt{23}$", "$z_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{-1 \\pm i\\sqrt{23}}{2}$", "<div class=\"result-badge\">Ildizlar: $z_{1,2} = -\\frac{1}{2} \\pm \\frac{\\sqrt{23}}{2}i$</div>"];
                    app.showSolution("6-topshiriq (d): z² + z + 6 = 0 tenglamaning kompleks ildizlari", steps);
                }
            },
            {
                id: "af9_t6_e",
                name: "6-topshiriq (e): 2z² - 5z + 4 = 0 tenglamaning kompleks ildizlari",
                shart: "$$2z^2 - 5z + 4 = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 6-topshiriq (e):</b> Kvadrat tenglamani yechish.", "$$2z^2 - 5z + 4 = 0$$", "Diskriminant: $D = (-5)^2 - 4 \\cdot 2 \\cdot 4 = 25 - 32 = -7 < 0$", "$\\sqrt{D} = \\pm i\\sqrt{7}$", "$z_{1,2} = \\frac{5 \\pm i\\sqrt{7}}{4}$", "<div class=\"result-badge\">Ildizlar: $z_{1,2} = \\frac{5}{4} \\pm \\frac{\\sqrt{7}}{4}i$</div>"];
                    app.showSolution("6-topshiriq (e): 2z² - 5z + 4 = 0 tenglamaning kompleks ildizlari", steps);
                }
            },
            {
                id: "af9_t6_f",
                name: "6-topshiriq (f): 7z² + z + 1 = 0 tenglamaning kompleks ildizlari",
                shart: "$$7z^2 + z + 1 = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 6-topshiriq (f):</b> Kvadrat tenglamani yechish.", "$$7z^2 + z + 1 = 0$$", "Diskriminant: $D = 1^2 - 4 \\cdot 7 \\cdot 1 = 1 - 28 = -27 < 0$", "$\\sqrt{D} = \\pm \\sqrt{-27} = \\pm 3i\\sqrt{3}$", "$z_{1,2} = \\frac{-1 \\pm 3i\\sqrt{3}}{14}$", "<div class=\"result-badge\">Ildizlar: $z_{1,2} = -\\frac{1}{14} \\pm \\frac{3\\sqrt{3}}{14}i$</div>"];
                    app.showSolution("6-topshiriq (f): 7z² + z + 1 = 0 tenglamaning kompleks ildizlari", steps);
                }
            },
            {
                id: "af9_t7_a",
                name: "7-topshiriq (a): (1+i)^8 darajani hisoblash",
                shart: "$$(1+i)^8$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 7-topshiriq (a):</b> $(1+i)^8$ ni hisoblash.", "💡 <b>1-usul (Trigonometrik shakl va Muavr formulasi):</b><br>$1 + i$ ning moduli: $r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$<br>Argumenti: $\\varphi = \\frac{\\pi}{4}$<br>Demak: $1 + i = \\sqrt{2} \\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$", "Muavr formulasi bo'yicha:<br>$$(1 + i)^8 = (\\sqrt{2})^8 \\left(\\cos\\left(8 \\cdot \\frac{\\pi}{4}\\right) + i\\sin\\left(8 \\cdot \\frac{\\pi}{4}\\right)\\right) = 16 (\\cos 2\\pi + i\\sin 2\\pi) = 16(1 + 0) = 16$$", "💡 <b>2-usul (Algebraik):</b><br>$(1+i)^2 = 1 + 2i - 1 = 2i$<br>$$(1+i)^8 = ((1+i)^2)^4 = (2i)^4 = 2^4 \\cdot i^4 = 16 \\cdot 1 = 16$$", "<div class=\"result-badge\">Natija: $(1+i)^8 = 16$</div>"];
                    app.showSolution("7-topshiriq (a): (1+i)^8 darajani hisoblash", steps);
                }
            },
            {
                id: "af9_t7_b",
                name: "7-topshiriq (b): (2+i)^7 + (2-i)^7 ifodani hisoblash",
                shart: "$$(2+i)^7 + (2-i)^7$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 7-topshiriq (b):</b> Qo'shma kompleks sonlar darajalari yig'indisi.", "E'tibor bering, $z_1 = 2 + i$ va $z_2 = 2 - i = \\bar{z_1}$ qo'shma sonlardir.<br>Demak, $z^7 + \\bar{z}^7 = 2 \\cdot \\text{Re}(z^7)$ har doim haqiqiy son bo'ladi.", "Binom formulasini qo'llaymiz:<br>$(2+i)^7 + (2-i)^7 = 2 \\left[ C_7^0 2^7 - C_7^2 2^5 + C_7^4 2^3 - C_7^6 2^1 \\right]$", "• $C_7^0 2^7 = 1 \\cdot 128 = 128$<br>• $C_7^2 2^5 = 21 \\cdot 32 = 672$<br>• $C_7^4 2^3 = 35 \\cdot 8 = 280$<br>• $C_7^6 2^1 = 7 \\cdot 2 = 14$", "Qavs ichidagi yig'indi: $128 - 672 + 280 - 14 = -278$<br>Yakuniy ko'paytma: $2 \\cdot (-278) = -556$", "<div class=\"result-badge\">Natija: $(2+i)^7 + (2-i)^7 = -556$</div>"];
                    app.showSolution("7-topshiriq (b): (2+i)^7 + (2-i)^7 ifodani hisoblash", steps);
                }
            },
            {
                id: "af9_t7_c",
                name: "7-topshiriq (c): (1+2i)^5 - (1-2i)^5 ifodani hisoblash",
                shart: "$$(1+2i)^5 - (1-2i)^5$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 7-topshiriq (c):</b>", "Qo'shma sonlar ayirmasi: $z^5 - \\bar{z}^5 = 2i \\cdot \\text{Im}(z^5)$", "Binom formulasiga ko'ra:<br>$(1+2i)^5 - (1-2i)^5 = 2i \\left[ C_5^1 1^4 \\cdot 2 - C_5^3 1^2 \\cdot 2^3 + C_5^5 \\cdot 2^5 \\right]$", "• $C_5^1 \\cdot 2 = 5 \\cdot 2 = 10$<br>• $C_5^3 \\cdot 8 = 10 \\cdot 8 = 80$<br>• $C_5^5 \\cdot 32 = 1 \\cdot 32 = 32$", "Qavs ichi: $10 - 80 + 32 = -38$<br>Yakuniy ko'paytma: $2i \\cdot (-38) = -76i$", "<div class=\"result-badge\">Natija: $(1+2i)^5 - (1-2i)^5 = -76i$</div>"];
                    app.showSolution("7-topshiriq (c): (1+2i)^5 - (1-2i)^5 ifodani hisoblash", steps);
                }
            },
            {
                id: "af9_t8_pure_imag",
                name: "8-topshiriq: Ikki kompleks son ko'paytmasi qachon faqat mavhum qismdan iborat bo'ladi?",
                shart: "$$\\text{Re}(z_1 \\cdot z_2) = 0 \\quad \\text{shartini toping}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 8-topshiriq:</b> Ikki kompleks sonning ko'paytmasi qachon sof mavhum bo'ladi?", "Ikki son: $z_1 = a_1 + b_1 i$ va $z_2 = a_2 + b_2 i$.", "Ko'paytmani hisoblaymiz:<br>$$z_1 \\cdot z_2 = (a_1 a_2 - b_1 b_2) + (a_1 b_2 + a_2 b_1)i$$", "💡 <b>Faqat mavhum qismdan iborat bo'lishi uchun haqiqiy qism nolga teng bo'lishi kerak:</b><br>$$\\text{Re}(z_1 \\cdot z_2) = a_1 a_2 - b_1 b_2 = 0 \\implies a_1 a_2 = b_1 b_2$$", "Agar $b_1 \\neq 0$ va $a_2 \\neq 0$ bo'lsa:<br>$$\\frac{a_1}{b_1} = \\frac{b_2}{a_2} \\quad \\text{yoki} \\quad \\text{ctg}(\\varphi_1) = \\text{tg}(\\varphi_2)$$", "💡 <b>Geometrik ma'nosi:</b><br>Argand tekisligida ko'paytmaning argumenti argumentlar yig'indisiga teng:<br>$$\\arg(z_1 \\cdot z_2) = \\arg(z_1) + \\arg(z_2) = \\frac{\\pi}{2} + \\pi k, \\quad k \\in \\mathbb{Z}$$Demak, ularning argumentlari yig'indisi $90^\\circ$ yoki $270^\\circ$ ga teng bo'lishi kerak (vektorlar o'zaro perpendikulyar yo'nalish hosil qiladi).", "<div class=\"result-badge\">Zarur va yetarli shart: $a_1 a_2 - b_1 b_2 = 0$ yoki $\\arg z_1 + \\arg z_2 = \\frac{\\pi}{2} + \\pi k$</div>"];
                    app.showSolution("8-topshiriq: Ikki kompleks son ko'paytmasi qachon faqat mavhum qismdan iborat bo'ladi?", steps);
                }
            },
            {
                id: "af9_t9_a",
                name: "9-topshiriq (a): (1+2i)³ - (1-i)³ ifodani hisoblash",
                shart: "$$(1+2i)^3 - (1-i)^3$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 9-topshiriq (a):</b> Ifodaning qiymatini topish.", "1) $(1+2i)^3 = 1^3 + 3(1)^2(2i) + 3(1)(2i)^2 + (2i)^3 = 1 + 6i - 12 - 8i = -11 - 2i$<br>2) $(1-i)^3 = 1^3 - 3(1)^2(i) + 3(1)(i)^2 - i^3 = 1 - 3i - 3 + i = -2 - 2i$", "3) Ayirmani hisoblaymiz:<br>$$(-11 - 2i) - (-2 - 2i) = -11 - 2i + 2 + 2i = -9$$", "<div class=\"result-badge\">Natija: $-9$</div>"];
                    app.showSolution("9-topshiriq (a): (1+2i)³ - (1-i)³ ifodani hisoblash", steps);
                }
            },
            {
                id: "af9_t9_b",
                name: "9-topshiriq (b): (1 + i tg α) / (1 - i tg α) ifodani soddalashtirish",
                shart: "$$\\frac{1 + i\\operatorname{tg}\\alpha}{1 - i\\operatorname{tg}\\alpha}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 9-topshiriq (b):</b> Trigonometrik ifodani soddalashtirish.", "$$\\operatorname{tg}\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$$ o'rniga qo'yamiz:<br>$$\\frac{1 + i\\frac{\\sin\\alpha}{\\cos\\alpha}}{1 - i\\frac{\\sin\\alpha}{\\cos\\alpha}} = \\frac{\\frac{\\cos\\alpha + i\\sin\\alpha}{\\cos\\alpha}}{\\frac{\\cos\\alpha - i\\sin\\alpha}{\\cos\\alpha}} = \\frac{\\cos\\alpha + i\\sin\\alpha}{\\cos\\alpha - i\\sin\\alpha}$$", "Eyler formulasi $e^{i\\alpha} = \\cos\\alpha + i\\sin\\alpha$ ga ko'ra:<br>$$\\cos\\alpha + i\\sin\\alpha = e^{i\\alpha}$$$$\\cos\\alpha - i\\sin\\alpha = e^{-i\\alpha}$$Kasr nisbati:<br>$$\\frac{e^{i\\alpha}}{e^{-i\\alpha}} = e^{i\\alpha - (-i\\alpha)} = e^{i 2\\alpha} = \\cos 2\\alpha + i\\sin 2\\alpha$$", "<div class=\"result-badge\">Natija: $\\cos 2\\alpha + i\\sin 2\\alpha$</div>"];
                    app.showSolution("9-topshiriq (b): (1 + i tg α) / (1 - i tg α) ifodani soddalashtirish", steps);
                }
            },
            {
                id: "af9_t10_power",
                name: "10-topshiriq: (-1/2 + i√3/2)^n darajani hisoblash",
                shart: "$$\\left(-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i\\right)^n \\quad (n \\in \\mathbb{Z})$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 10-topshiriq:</b> $n$-butun son uchun darajani hisoblash.", "Asosiy kompleks son: $z = -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i$<br>Moduli: $r = \\sqrt{\\left(-\\frac{1}{2}\\right)^2 + \\left(\\frac{\\sqrt{3}}{2}\\right)^2} = \\sqrt{\\frac{1}{4} + \\frac{3}{4}} = 1$<br>Argumenti: Nuqta II chorakda joylashgan, $\\varphi = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$<br>Trigonometrik shakli: $$z = \\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}$$", "Muavr formulasiga ko'ra:<br>$$z^n = \\cos\\left(\\frac{2\\pi n}{3}\\right) + i\\sin\\left(\\frac{2\\pi n}{3}\\right)$$", "Bu son 3 davrli takrorlanadi ($k \\in \\mathbb{Z}$):<br>• Agar $n = 3k$ bo'lsa: $\\cos(2\\pi k) + i\\sin(2\\pi k) = <b>1</b>$<br>• Agar $n = 3k + 1$ bo'lsa: $\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3} = <b>-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i</b>$<br>• Agar $n = 3k + 2$ bo'lsa: $\\cos\\frac{4\\pi}{3} + i\\sin\\frac{4\\pi}{3} = <b>-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i</b>$", "<div class=\"result-badge\">Natija: $\\cos\\frac{2\\pi n}{3} + i\\sin\\frac{2\\pi n}{3}$</div>"];
                    app.showSolution("10-topshiriq: (-1/2 + i√3/2)^n darajani hisoblash", steps);
                }
            },
            {
                id: "af9_t11_a",
                name: "11-topshiriq (a): Kompleks koeffitsiyentli sistema (3-i)x + (4+2i)y = 2+6i",
                shart: "$$\\begin{cases} (3-i)x + (4+2i)y = 2+6i \\ (4+2i)x - (2+3i)y = 5+4i \\end{cases}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 11-topshiriq (a):</b> Kompleks koeffitsiyentli sistemani Kramer usulida yechish.", "1) Asosiy determinant $\\Delta$:<br>$$\\Delta = \\begin{vmatrix} 3-i & 4+2i \\\\ 4+2i & -(2+3i) \\end{vmatrix} = -(3-i)(2+3i) - (4+2i)^2$$• $(3-i)(2+3i) = 6 + 9i - 2i + 3 = 9 + 7i \\implies -(9 + 7i) = -9 - 7i$<br>• $(4+2i)^2 = 16 + 16i - 4 = 12 + 16i$<br>$$\\Delta = -9 - 7i - 12 - 16i = -21 - 23i$$", "2) $\\Delta_x$ va $\\Delta_y$ determinantlari hisoblanadi va $x = \\frac{\\Delta_x}{\\Delta}$, $y = \\frac{\\Delta_y}{\\Delta}$ topiladi.", "<div class=\"result-badge\">Yechim: $x = 1 + i, \\quad y = i$</div>"];
                    app.showSolution("11-topshiriq (a): Kompleks koeffitsiyentli sistema (3-i)x + (4+2i)y = 2+6i", steps);
                }
            },
            {
                id: "af9_t11_b",
                name: "11-topshiriq (b): (2+i)x + (2-i)y = 6 va (3+2i)x + (3-2i)y = 8",
                shart: "$$\\begin{cases} (2+i)x + (2-i)y = 6 \\ (3+2i)x + (3-2i)y = 8 \\end{cases}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 11-topshiriq (b):</b> Tenglamalar sistemasini yechish.", "$$\\Delta = \\begin{vmatrix} 2+i & 2-i \\\\ 3+2i & 3-2i \\end{vmatrix} = (2+i)(3-2i) - (2-i)(3+2i)$$• $(2+i)(3-2i) = 6 - 4i + 3i + 2 = 8 - i$<br>• $(2-i)(3+2i) = 6 + 4i - 3i + 2 = 8 + i$<br>$$\\Delta = (8 - i) - (8 + i) = -2i$$", "$$\\Delta_x = \\begin{vmatrix} 6 & 2-i \\\\ 8 & 3-2i \\end{vmatrix} = 6(3-2i) - 8(2-i) = 18 - 12i - 16 + 8i = 2 - 4i$$", "$$x = \\frac{2 - 4i}{-2i} = \\frac{2}{-2i} - \\frac{4i}{-2i} = i + 2 = 2 + i$$", "$$\\Delta_y = \\begin{vmatrix} 2+i & 6 \\\\ 3+2i & 8 \\end{vmatrix} = 8(2+i) - 6(3+2i) = 16 + 8i - 18 - 12i = -2 - 4i$$", "$$y = \\frac{-2 - 4i}{-2i} = \\frac{-2}{-2i} - \\frac{4i}{-2i} = -i + 2 = 2 - i$$", "<div class=\"result-badge\">Yechim: $x = 2 + i, \\quad y = 2 - i$</div>"];
                    app.showSolution("11-topshiriq (b): (2+i)x + (2-i)y = 6 va (3+2i)x + (3-2i)y = 8", steps);
                }
            },
            {
                id: "af9_t12_proof",
                name: "12-topshiriq: x+yi = (s+ti)^n bo'lsa, x²+y² = (s²+t²)^n tenglikni isbotlang",
                shart: "$$x+yi = (s+ti)^n \\implies x^2+y^2 = (s^2+t^2)^n$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 12-topshiriq:</b> Modul xossasidan foydalanib tenglikni isbotlash.", "Berilgan: $$x + yi = (s + ti)^n$$", "💡 <b>1-qadam: Tenglikning har ikkala tomonining modulini olamiz:</b><br>$$|x + yi| = |(s + ti)^n|$$", "💡 <b>2-qadam: Kompleks sonlar moduli xossalariga ko'ra:</b><br>1) $|x + yi| = \\sqrt{x^2 + y^2}$<br>2) Darajaning moduli modulning darajasiga teng: $|z^n| = |z|^n$<br>$$|(s + ti)^n| = |s + ti|^n = \\left(\\sqrt{s^2 + t^2}\\right)^n = (s^2 + t^2)^{n/2}$$", "💡 <b>3-qadam: Modullar tengligini yozamiz:</b><br>$$\\sqrt{x^2 + y^2} = (s^2 + t^2)^{n/2}$$", "Har ikki tomonni kvadratga ko'taramiz:<br>$$\\left(\\sqrt{x^2 + y^2}\\right)^2 = \\left((s^2 + t^2)^{n/2}\\right)^2 \\implies x^2 + y^2 = (s^2 + t^2)^n$$", "<div class=\"result-badge\">Tenglik to'liq isbotlandi! ∎</div>"];
                    app.showSolution("12-topshiriq: x+yi = (s+ti)^n bo'lsa, x²+y² = (s²+t²)^n tenglikni isbotlang", steps);
                }
            },
            {
                id: "af9_t13_a",
                name: "13-topshiriq (a): √(2i) kvadrat ildizlarini topish",
                shart: "$$\\sqrt{2i}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 13-topshiriq (a):</b> Kvadrat ildiz chiqarish.", "$$\\sqrt{2i}$$", "$a = 0, b = 2$, moduli: $r = \\sqrt{0^2 + 2^2} = 2$", "Kvadrat ildiz formulasi: $\\pm \\left( \\sqrt{\\frac{r+a}{2}} + i \\operatorname{sgn}(b)\\sqrt{\\frac{r-a}{2}} \\right)$", "$\\pm \\left( \\sqrt{\\frac{2+0}{2}} + i \\sqrt{\\frac{2-0}{2}} \\right) = \\pm (1 + i)$", "<div class=\"result-badge\">Ildizlar: $\\pm(1 + i)$</div>"];
                    app.showSolution("13-topshiriq (a): √(2i) kvadrat ildizlarini topish", steps);
                }
            },
            {
                id: "af9_t13_b",
                name: "13-topshiriq (b): √(-8) kvadrat ildizlarini topish",
                shart: "$$\\sqrt{-8}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 13-topshiriq (b):</b> Kvadrat ildiz chiqarish.", "$$\\sqrt{-8}$$", "$a = -8, b = 0$, $r = 8$", "$\\sqrt{-8} = \\pm i \\sqrt{8} = \\pm 2i\\sqrt{2}$", "<div class=\"result-badge\">Ildizlar: $\\pm 2\\sqrt{2}i$</div>"];
                    app.showSolution("13-topshiriq (b): √(-8) kvadrat ildizlarini topish", steps);
                }
            },
            {
                id: "af9_t13_c",
                name: "13-topshiriq (c): √(3-4i) kvadrat ildizlarini topish",
                shart: "$$\\sqrt{3-4i}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 13-topshiriq (c):</b> Kvadrat ildiz chiqarish.", "$$\\sqrt{3-4i}$$", "$a = 3, b = -4$, moduli: $r = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$", "$\\pm \\left( \\sqrt{\\frac{5+3}{2}} - i \\sqrt{\\frac{5-3}{2}} \\right) = \\pm (\\sqrt{4} - i\\sqrt{1}) = \\pm (2 - i)$", "<div class=\"result-badge\">Ildizlar: $\\pm(2 - i)$</div>"];
                    app.showSolution("13-topshiriq (c): √(3-4i) kvadrat ildizlarini topish", steps);
                }
            },
            {
                id: "af9_t13_d",
                name: "13-topshiriq (d): √(-15+8i) kvadrat ildizlarini topish",
                shart: "$$\\sqrt{-15+8i}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 13-topshiriq (d):</b> Kvadrat ildiz chiqarish.", "$$\\sqrt{-15+8i}$$", "$a = -15, b = 8$, moduli: $r = \\sqrt{(-15)^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17$", "$\\pm \\left( \\sqrt{\\frac{17-15}{2}} + i \\sqrt{\\frac{17+15}{2}} \\right) = \\pm (\\sqrt{1} + i\\sqrt{16}) = \\pm (1 + 4i)$", "<div class=\"result-badge\">Ildizlar: $\\pm(1 + 4i)$</div>"];
                    app.showSolution("13-topshiriq (d): √(-15+8i) kvadrat ildizlarini topish", steps);
                }
            },
            {
                id: "af9_t13_e",
                name: "13-topshiriq (e): √(-3-4i) kvadrat ildizlarini topish",
                shart: "$$\\sqrt{-3-4i}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 13-topshiriq (e):</b> Kvadrat ildiz chiqarish.", "$$\\sqrt{-3-4i}$$", "$a = -3, b = -4, r = 5$", "$\\pm \\left( \\sqrt{\\frac{5-3}{2}} - i \\sqrt{\\frac{5+3}{2}} \\right) = \\pm (1 - 2i)$", "<div class=\"result-badge\">Ildizlar: $\\pm(1 - 2i)$</div>"];
                    app.showSolution("13-topshiriq (e): √(-3-4i) kvadrat ildizlarini topish", steps);
                }
            },
            {
                id: "af9_t13_f",
                name: "13-topshiriq (f): √(-11+60i) kvadrat ildizlarini topish",
                shart: "$$\\sqrt{-11+60i}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 13-topshiriq (f):</b> Kvadrat ildiz chiqarish.", "$$\\sqrt{-11+60i}$$", "$a = -11, b = 60, r = \\sqrt{121 + 3600} = \\sqrt{3721} = 61$", "$\\pm \\left( \\sqrt{\\frac{61-11}{2}} + i \\sqrt{\\frac{61+11}{2}} \\right) = \\pm (\\sqrt{25} + i\\sqrt{36}) = \\pm (5 + 6i)$", "<div class=\"result-badge\">Ildizlar: $\\pm(5 + 6i)$</div>"];
                    app.showSolution("13-topshiriq (f): √(-11+60i) kvadrat ildizlarini topish", steps);
                }
            },
            {
                id: "af9_t13_g",
                name: "13-topshiriq (g): √(-8+6i) kvadrat ildizlarini topish",
                shart: "$$\\sqrt{-8+6i}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 13-topshiriq (g):</b> Kvadrat ildiz chiqarish.", "$$\\sqrt{-8+6i}$$", "$a = -8, b = 6, r = \\sqrt{64 + 36} = 10$", "$\\pm \\left( \\sqrt{\\frac{10-8}{2}} + i \\sqrt{\\frac{10+8}{2}} \\right) = \\pm (1 + 3i)$", "<div class=\"result-badge\">Ildizlar: $\\pm(1 + 3i)$</div>"];
                    app.showSolution("13-topshiriq (g): √(-8+6i) kvadrat ildizlarini topish", steps);
                }
            },
            {
                id: "af9_t13_h",
                name: "13-topshiriq (h): √(-8-6i) kvadrat ildizlarini topish",
                shart: "$$\\sqrt{-8-6i}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 13-topshiriq (h):</b> Kvadrat ildiz chiqarish.", "$$\\sqrt{-8-6i}$$", "$a = -8, b = -6, r = 10$", "$\\pm \\left( \\sqrt{\\frac{10-8}{2}} - i \\sqrt{\\frac{10+8}{2}} \\right) = \\pm (1 - 3i)$", "<div class=\"result-badge\">Ildizlar: $\\pm(1 - 3i)$</div>"];
                    app.showSolution("13-topshiriq (h): √(-8-6i) kvadrat ildizlarini topish", steps);
                }
            },
            {
                id: "af9_t14_a",
                name: "14-topshiriq (a): z² - (2+i)z + (-1+7i) = 0 tenglamani yechish",
                shart: "$$z^2 - (2+i)z + (-1+7i) = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 14-topshiriq (a):</b> Kompleks koeffitsiyentli kvadrat tenglama.", "Diskriminant: $D = b^2 - 4ac = [-(2+i)]^2 - 4(1)(-1+7i)$<br>• $(2+i)^2 = 4 + 4i - 1 = 3 + 4i$<br>• $-4(-1+7i) = 4 - 28i$<br>$$D = (3 + 4i) + (4 - 28i) = 7 - 24i$$", "$\\sqrt{D} = \\sqrt{7 - 24i}$: moduli $r = \\sqrt{49 + 576} = 25$<br>$\\sqrt{D} = \\pm \\left(\\sqrt{\\frac{25+7}{2}} - i\\sqrt{\\frac{25-7}{2}}\\right) = \\pm (4 - 3i)$", "Ildizlarni hisoblaymiz:<br>$$z_1 = \\frac{(2+i) + (4-3i)}{2} = \\frac{6 - 2i}{2} = 3 - i$$$$z_2 = \\frac{(2+i) - (4-3i)}{2} = \\frac{-2 + 4i}{2} = -1 + 2i$$", "<div class=\"result-badge\">Ildizlar: $z_1 = 3 - i, \\quad z_2 = -1 + 2i$</div>"];
                    app.showSolution("14-topshiriq (a): z² - (2+i)z + (-1+7i) = 0 tenglamani yechish", steps);
                }
            },
            {
                id: "af9_t14_b",
                name: "14-topshiriq (b): z² - (3-2i)z + (5-5i) = 0 tenglamani yechish",
                shart: "$$z^2 - (3-2i)z + (5-5i) = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 14-topshiriq (b):</b>", "$$D = [-(3-2i)]^2 - 4(5-5i) = (9 - 12i - 4) - (20 - 20i) = (5 - 12i) - 20 + 20i = -15 + 8i$$", "$\\sqrt{D} = \\sqrt{-15 + 8i}$: $r = \\sqrt{225 + 64} = 17$<br>$\\sqrt{D} = \\pm (1 + 4i)$", "Ildizlar:<br>$$z_1 = \\frac{(3-2i) + (1+4i)}{2} = \\frac{4 + 2i}{2} = 2 + i$$$$z_2 = \\frac{(3-2i) - (1+4i)}{2} = \\frac{2 - 6i}{2} = 1 - 3i$$", "<div class=\"result-badge\">Ildizlar: $z_1 = 2 + i, \\quad z_2 = 1 - 3i$</div>"];
                    app.showSolution("14-topshiriq (b): z² - (3-2i)z + (5-5i) = 0 tenglamani yechish", steps);
                }
            },
            {
                id: "af9_t14_c",
                name: "14-topshiriq (c): (2+i)z² - (5-i)z + (2-2i) = 0 tenglamani yechish",
                shart: "$$(2+i)z^2 - (5-i)z + (2-2i) = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 14-topshiriq (c):</b>", "$D = (5-i)^2 - 4(2+i)(2-2i) = (25 - 10i - 1) - 4(4 - 4i + 2i + 2) = (24 - 10i) - 4(6 - 2i) = -2i$", "$\\sqrt{D} = \\sqrt{-2i} = \\pm(1 - i)$", "Ildizlar:<br>$$z_1 = \\frac{(5-i) + (1-i)}{2(2+i)} = \\frac{6 - 2i}{4 + 2i} = \\frac{3 - i}{2 + i} = \\frac{(3-i)(2-i)}{5} = \\frac{5 - 5i}{5} = 1 - i$$$$z_2 = \\frac{(5-i) - (1-i)}{2(2+i)} = \\frac{4}{2(2+i)} = \\frac{2}{2+i} = \\frac{2(2-i)}{5} = \\frac{4}{5} - \\frac{2}{5}i$$", "<div class=\"result-badge\">Ildizlar: $z_1 = 1 - i, \\quad z_2 = 0.8 - 0.4i$</div>"];
                    app.showSolution("14-topshiriq (c): (2+i)z² - (5-i)z + (2-2i) = 0 tenglamani yechish", steps);
                }
            },
            {
                id: "af9_t14_d",
                name: "14-topshiriq (d): z⁴ + 3z² + 4 = 0 bikvadrat tenglamani yechish",
                shart: "$$z^4 + 3z^2 + 4 = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 14-topshiriq (d):</b> Bikvadrat tenglama.", "$t = z^2$ almashtirish kiritamiz:<br>$$t^2 + 3t + 4 = 0$$$D = 9 - 16 = -7 \\implies t_{1,2} = \\frac{-3 \\pm i\\sqrt{7}}{2}$", "Endi $z = \\pm \\sqrt{t}$ ni hisoblaymiz. Modul: $|t| = \\sqrt{\\frac{9 + 7}{4}} = 2$<br>$$z = \\pm \\left(\\sqrt{\\frac{2 - 1.5}{2}} \\pm i \\sqrt{\\frac{2 + 1.5}{2}}\\right) = \\pm \\left(\\frac{1}{2} \\pm i\\frac{\\sqrt{7}}{2}\\right)$$", "<div class=\"result-badge\">To'rtta kompleks ildiz: $z = \\pm \\frac{1}{2} \\pm i\\frac{\\sqrt{7}}{2}$</div>"];
                    app.showSolution("14-topshiriq (d): z⁴ + 3z² + 4 = 0 bikvadrat tenglamani yechish", steps);
                }
            },
            {
                id: "af9_t14_e",
                name: "14-topshiriq (e): z⁴ - 30z² + 289 = 0 tenglamani yechish",
                shart: "$$z^4 - 30z^2 + 289 = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 14-topshiriq (e):</b>", "$t = z^2$ almashtirish:<br>$$t^2 - 30t + 289 = 0$$$D = 900 - 4(289) = 900 - 1156 = -256 = (16i)^2$", "$$t_{1,2} = \\frac{30 \\pm 16i}{2} = 15 \\pm 8i$$", "Endi $z = \\sqrt{15 \\pm 8i}$ ni hisoblaymiz. Moduli: $r = \\sqrt{225 + 64} = 17$<br>$$z = \\pm \\left(\\sqrt{\\frac{17+15}{2}} \\pm i\\sqrt{\\frac{17-15}{2}}\\right) = \\pm(4 \\pm i)$$", "<div class=\"result-badge\">Ildizlar: $z = \\pm 4 \\pm i$ (to'rtta ildiz)</div>"];
                    app.showSolution("14-topshiriq (e): z⁴ - 30z² + 289 = 0 tenglamani yechish", steps);
                }
            },
            {
                id: "af9_t15_a",
                name: "15-topshiriq (a): z = 3 - 2i kompleks sonining geometrik tasviri",
                shart: "$$z = 3 - 2i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 15-topshiriq (a):</b> Kompleks sonning geometrik tasvirini topish.", "$$z = 3 - 2i$$", "$x = \\text{Re}(z) = 3, \\quad y = \\text{Im}(z) = -2$", "Nuqta koordinatasi: $M(3; -2)$", "Kompleks tekislikdagi o'rni: <b>IV koordinata choragi</b>", "Radius-vektor uzunligi (modul): $r = |z| = \\sqrt{3^2 + (-2)^2} = \\sqrt{9 + 4} = \\sqrt{13} \\approx 3.606$", "Haqiqiy o'q bilan hosil qilgan burchagi (argument): $\\varphi = \\operatorname{arctg}\\left(-\\frac{2}{3}\\right) \\approx -33.69^\\circ$", "<div class=\"result-badge\">Geometrik tasvir: $M(3; -2)$ nuqta va unga yo'naltirilgan radius-vektor ($r = \\sqrt{13}$)</div>"];
                    app.showSolution("15-topshiriq (a): z = 3 - 2i kompleks sonining geometrik tasviri", steps);
                }
            },
            {
                id: "af9_t15_b",
                name: "15-topshiriq (b): z = 5 + i kompleks sonining geometrik tasviri",
                shart: "$$z = 5 + i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 15-topshiriq (b):</b> Kompleks sonning geometrik tasvirini topish.", "$$z = 5 + i$$", "$x = \\text{Re}(z) = 5, \\quad y = \\text{Im}(z) = 1$", "Nuqta koordinatasi: $M(5; 1)$", "Kompleks tekislikdagi o'rni: <b>I koordinata choragi</b>", "Modul: $r = \\sqrt{5^2 + 1^2} = \\sqrt{26} \\approx 5.099$", "Argument: $\\varphi = \\operatorname{arctg}\\left(\\frac{1}{5}\\right) \\approx 11.31^\\circ$", "<div class=\"result-badge\">Geometrik tasvir: $M(5; 1)$ nuqta ($r = \\sqrt{26}$)</div>"];
                    app.showSolution("15-topshiriq (b): z = 5 + i kompleks sonining geometrik tasviri", steps);
                }
            },
            {
                id: "af9_t15_c",
                name: "15-topshiriq (c): z = -2 + 5i kompleks sonining geometrik tasviri",
                shart: "$$z = -2 + 5i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 15-topshiriq (c):</b> Kompleks sonning geometrik tasvirini topish.", "$$z = -2 + 5i$$", "$x = \\text{Re}(z) = -2, \\quad y = \\text{Im}(z) = 5$", "Nuqta koordinatasi: $M(-2; 5)$", "Kompleks tekislikdagi o'rni: <b>II koordinata choragi</b>", "Modul: $r = \\sqrt{(-2)^2 + 5^2} = \\sqrt{4 + 25} = \\sqrt{29} \\approx 5.385$", "Argument: $\\varphi = \\pi - \\operatorname{arctg}\\left(\\frac{5}{2}\\right) \\approx 180^\\circ - 68.20^\\circ = 111.80^\\circ$", "<div class=\"result-badge\">Geometrik tasvir: $M(-2; 5)$ nuqta ($r = \\sqrt{29}$)</div>"];
                    app.showSolution("15-topshiriq (c): z = -2 + 5i kompleks sonining geometrik tasviri", steps);
                }
            },
            {
                id: "af9_t15_d",
                name: "15-topshiriq (d): z = 6 - 2i kompleks sonining geometrik tasviri",
                shart: "$$z = 6 - 2i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 15-topshiriq (d):</b> Kompleks sonning geometrik tasvirini topish.", "$$z = 6 - 2i$$", "$x = \\text{Re}(z) = 6, \\quad y = \\text{Im}(z) = -2$", "Nuqta koordinatasi: $M(6; -2)$", "Kompleks tekislikdagi o'rni: <b>IV koordinata choragi</b>", "Modul: $r = \\sqrt{6^2 + (-2)^2} = \\sqrt{36 + 4} = \\sqrt{40} = 2\\sqrt{10} \\approx 6.325$", "Argument: $\\varphi = -\\operatorname{arctg}\\left(\\frac{2}{6}\\right) = -\\operatorname{arctg}\\left(\\frac{1}{3}\\right) \\approx -18.43^\\circ$", "<div class=\"result-badge\">Geometrik tasvir: $M(6; -2)$ nuqta ($r = 2\\sqrt{10}$)</div>"];
                    app.showSolution("15-topshiriq (d): z = 6 - 2i kompleks sonining geometrik tasviri", steps);
                }
            },
            {
                id: "af9_t16_a",
                name: "16-topshiriq (a): z = 2 - 2i ning trigonometrik shakli",
                shart: "$$z = 2 - 2i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 16-topshiriq (a):</b> Kompleks sonning trigonometrik shakli $z = r(\\cos\\varphi + i\\sin\\varphi)$ ni topish.", "$$z = 2 - 2i$$", "$a = 2, \\quad b = -2$", "Modul: $r = \\sqrt{2^2 + (-2)^2} = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}$", "Nuqta IV chorakda: $\\varphi = \\operatorname{arctg}\\left(\\frac{-2}{2}\\right) = -\\frac{\\pi}{4}$", "Trigonometrik shakli: $$z = r(\\cos\\varphi + i\\sin\\varphi) = 2\\sqrt{2}\\left(\\cos\\left(-\\frac{\\pi}{4}\\right) + i\\sin\\left(-\\frac{\\pi}{4}\\right)\\right)$$", "<div class=\"result-badge\">Trigonometrik shakli: $z = 2\\sqrt{2}\\left(\\cos\\left(-\\frac{\\pi}{4}\\right) + i\\sin\\left(-\\frac{\\pi}{4}\\right)\\right)$</div>"];
                    app.showSolution("16-topshiriq (a): z = 2 - 2i ning trigonometrik shakli", steps);
                }
            },
            {
                id: "af9_t16_b",
                name: "16-topshiriq (b): z = 2 - 2√3i ning trigonometrik shakli",
                shart: "$$z = 2 - 2\\sqrt{3}i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 16-topshiriq (b):</b> Kompleks sonning trigonometrik shakli $z = r(\\cos\\varphi + i\\sin\\varphi)$ ni topish.", "$$z = 2 - 2\\sqrt{3}i$$", "$a = 2, \\quad b = -2\\sqrt{3}$", "Modul: $r = \\sqrt{2^2 + (-2\\sqrt{3})^2} = \\sqrt{4 + 12} = \\sqrt{16} = 4$", "Nuqta IV chorakda: $\\varphi = \\operatorname{arctg}\\left(\\frac{-2\\sqrt{3}}{2}\\right) = \\operatorname{arctg}(-\\sqrt{3}) = -\\frac{\\pi}{3}$", "Trigonometrik shakli: $$z = 4\\left(\\cos\\left(-\\frac{\\pi}{3}\\right) + i\\sin\\left(-\\frac{\\pi}{3}\\right)\\right)$$", "<div class=\"result-badge\">Trigonometrik shakli: $z = 4\\left(\\cos\\left(-\\frac{\\pi}{3}\\right) + i\\sin\\left(-\\frac{\\pi}{3}\\right)\\right)$</div>"];
                    app.showSolution("16-topshiriq (b): z = 2 - 2√3i ning trigonometrik shakli", steps);
                }
            },
            {
                id: "af9_t16_c",
                name: "16-topshiriq (c): z = -2 - 2√3i ning trigonometrik shakli",
                shart: "$$z = -2 - 2\\sqrt{3}i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 16-topshiriq (c):</b> Kompleks sonning trigonometrik shakli $z = r(\\cos\\varphi + i\\sin\\varphi)$ ni topish.", "$$z = -2 - 2\\sqrt{3}i$$", "$a = -2, \\quad b = -2\\sqrt{3}$", "Modul: $r = \\sqrt{(-2)^2 + (-2\\sqrt{3})^2} = \\sqrt{16} = 4$", "Nuqta III chorakda ($a < 0, b < 0$): $\\varphi = -\\pi + \\operatorname{arctg}(\\sqrt{3}) = -\\pi + \\frac{\\pi}{3} = -\\frac{2\\pi}{3}$", "Trigonometrik shakli: $$z = 4\\left(\\cos\\left(-\\frac{2\\pi}{3}\\right) + i\\sin\\left(-\\frac{2\\pi}{3}\\right)\\right)$$", "<div class=\"result-badge\">Trigonometrik shakli: $z = 4\\left(\\cos\\left(-\\frac{2\\pi}{3}\\right) + i\\sin\\left(-\\frac{2\\pi}{3}\\right)\\right)$</div>"];
                    app.showSolution("16-topshiriq (c): z = -2 - 2√3i ning trigonometrik shakli", steps);
                }
            },
            {
                id: "af9_t16_d",
                name: "16-topshiriq (d): z = 2√3 - 2i ning trigonometrik shakli",
                shart: "$$z = 2\\sqrt{3} - 2i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 16-topshiriq (d):</b> Kompleks sonning trigonometrik shakli $z = r(\\cos\\varphi + i\\sin\\varphi)$ ni topish.", "$$z = 2\\sqrt{3} - 2i$$", "$a = 2\\sqrt{3}, \\quad b = -2$", "Modul: $r = \\sqrt{(2\\sqrt{3})^2 + (-2)^2} = \\sqrt{12 + 4} = 4$", "Nuqta IV chorakda: $\\varphi = \\operatorname{arctg}\\left(\\frac{-2}{2\\sqrt{3}}\\right) = \\operatorname{arctg}\\left(-\\frac{1}{\\sqrt{3}}\\right) = -\\frac{\\pi}{6}$", "Trigonometrik shakli: $$z = 4\\left(\\cos\\left(-\\frac{\\pi}{6}\\right) + i\\sin\\left(-\\frac{\\pi}{6}\\right)\\right)$$", "<div class=\"result-badge\">Trigonometrik shakli: $z = 4\\left(\\cos\\left(-\\frac{\\pi}{6}\\right) + i\\sin\\left(-\\frac{\\pi}{6}\\right)\\right)$</div>"];
                    app.showSolution("16-topshiriq (d): z = 2√3 - 2i ning trigonometrik shakli", steps);
                }
            },
            {
                id: "af9_t16_e",
                name: "16-topshiriq (e): z = 2√3 + 2i ning trigonometrik shakli",
                shart: "$$z = 2\\sqrt{3} + 2i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 16-topshiriq (e):</b> Kompleks sonning trigonometrik shakli $z = r(\\cos\\varphi + i\\sin\\varphi)$ ni topish.", "$$z = 2\\sqrt{3} + 2i$$", "$a = 2\\sqrt{3}, \\quad b = 2$", "Modul: $r = \\sqrt{(2\\sqrt{3})^2 + 2^2} = \\sqrt{12 + 4} = 4$", "Nuqta I chorakda: $\\varphi = \\operatorname{arctg}\\left(\\frac{2}{2\\sqrt{3}}\\right) = \\frac{\\pi}{6}$", "Trigonometrik shakli: $$z = 4\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)$$", "<div class=\"result-badge\">Trigonometrik shakli: $z = 4\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)$</div>"];
                    app.showSolution("16-topshiriq (e): z = 2√3 + 2i ning trigonometrik shakli", steps);
                }
            },
            {
                id: "af9_t16_f",
                name: "16-topshiriq (f): z = 3 - 3i ning trigonometrik shakli",
                shart: "$$z = 3 - 3i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 16-topshiriq (f):</b> Kompleks sonning trigonometrik shakli $z = r(\\cos\\varphi + i\\sin\\varphi)$ ni topish.", "$$z = 3 - 3i$$", "$a = 3, \\quad b = -3$", "Modul: $r = \\sqrt{3^2 + (-3)^2} = \\sqrt{18} = 3\\sqrt{2}$", "Nuqta IV chorakda: $\\varphi = \\operatorname{arctg}(-1) = -\\frac{\\pi}{4}$", "Trigonometrik shakli: $$z = 3\\sqrt{2}\\left(\\cos\\left(-\\frac{\\pi}{4}\\right) + i\\sin\\left(-\\frac{\\pi}{4}\\right)\\right)$$", "<div class=\"result-badge\">Trigonometrik shakli: $z = 3\\sqrt{2}\\left(\\cos\\left(-\\frac{\\pi}{4}\\right) + i\\sin\\left(-\\frac{\\pi}{4}\\right)\\right)$</div>"];
                    app.showSolution("16-topshiriq (f): z = 3 - 3i ning trigonometrik shakli", steps);
                }
            },
            {
                id: "af9_t16_g",
                name: "16-topshiriq (g): z = -√3 - 3i ning trigonometrik shakli",
                shart: "$$z = -\\sqrt{3} - 3i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 16-topshiriq (g):</b> Kompleks sonning trigonometrik shakli $z = r(\\cos\\varphi + i\\sin\\varphi)$ ni topish.", "$$z = -\\sqrt{3} - 3i$$", "$a = -\\sqrt{3}, \\quad b = -3$", "Modul: $r = \\sqrt{(-\\sqrt{3})^2 + (-3)^2} = \\sqrt{3 + 9} = \\sqrt{12} = 2\\sqrt{3}$", "Nuqta III chorakda: $\\varphi = -\\pi + \\operatorname{arctg}\\left(\\frac{-3}{-\\sqrt{3}}\\right) = -\\pi + \\frac{\\pi}{3} = -\\frac{2\\pi}{3}$", "Trigonometrik shakli: $$z = 2\\sqrt{3}\\left(\\cos\\left(-\\frac{2\\pi}{3}\\right) + i\\sin\\left(-\\frac{2\\pi}{3}\\right)\\right)$$", "<div class=\"result-badge\">Trigonometrik shakli: $z = 2\\sqrt{3}\\left(\\cos\\left(-\\frac{2\\pi}{3}\\right) + i\\sin\\left(-\\frac{2\\pi}{3}\\right)\\right)$</div>"];
                    app.showSolution("16-topshiriq (g): z = -√3 - 3i ning trigonometrik shakli", steps);
                }
            },
            {
                id: "af9_t16_h",
                name: "16-topshiriq (h): z = 2 + √3 + i ning trigonometrik shakli",
                shart: "$$z = (2 + \\sqrt{3}) + i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 16-topshiriq (h):</b> Kompleks sonning trigonometrik shakli $z = r(\\cos\\varphi + i\\sin\\varphi)$ ni topish.", "$$z = (2 + \\sqrt{3}) + i$$", "$a = 2 + \\sqrt{3}, \\quad b = 1$", "Modul: $r = \\sqrt{(2+\\sqrt{3})^2 + 1^2} = \\sqrt{4 + 4\\sqrt{3} + 3 + 1} = \\sqrt{8 + 4\\sqrt{3}} = 2\\sqrt{2+\\sqrt{3}} = \\sqrt{6} + \\sqrt{2}$", "Argument: $\\operatorname{tg}\\varphi = \\frac{1}{2+\\sqrt{3}} = 2 - \\sqrt{3} \\implies \\varphi = \\frac{\\pi}{12} = 15^\\circ$", "Trigonometrik shakli: $$z = (\\sqrt{6} + \\sqrt{2})\\left(\\cos\\frac{\\pi}{12} + i\\sin\\frac{\\pi}{12}\\right)$$", "<div class=\"result-badge\">Trigonometrik shakli: $z = (\\sqrt{6} + \\sqrt{2})\\left(\\cos\\frac{\\pi}{12} + i\\sin\\frac{\\pi}{12}\\right)$</div>"];
                    app.showSolution("16-topshiriq (h): z = 2 + √3 + i ning trigonometrik shakli", steps);
                }
            },
            {
                id: "af9_t16_i",
                name: "16-topshiriq (i): z = 2 - √3 + i ning trigonometrik shakli",
                shart: "$$z = (2 - \\sqrt{3}) + i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 16-topshiriq (i):</b> Kompleks sonning trigonometrik shakli $z = r(\\cos\\varphi + i\\sin\\varphi)$ ni topish.", "$$z = (2 - \\sqrt{3}) + i$$", "$a = 2 - \\sqrt{3}, \\quad b = 1$", "Modul: $r = \\sqrt{(2-\\sqrt{3})^2 + 1^2} = \\sqrt{4 - 4\\sqrt{3} + 3 + 1} = \\sqrt{8 - 4\\sqrt{3}} = 2\\sqrt{2-\\sqrt{3}} = \\sqrt{6} - \\sqrt{2}$", "Argument: $\\operatorname{tg}\\varphi = \\frac{1}{2-\\sqrt{3}} = 2 + \\sqrt{3} \\implies \\varphi = \\frac{5\\pi}{12} = 75^\\circ$", "Trigonometrik shakli: $$z = (\\sqrt{6} - \\sqrt{2})\\left(\\cos\\frac{5\\pi}{12} + i\\sin\\frac{5\\pi}{12}\\right)$$", "<div class=\"result-badge\">Trigonometrik shakli: $z = (\\sqrt{6} - \\sqrt{2})\\left(\\cos\\frac{5\\pi}{12} + i\\sin\\frac{5\\pi}{12}\\right)$</div>"];
                    app.showSolution("16-topshiriq (i): z = 2 - √3 + i ning trigonometrik shakli", steps);
                }
            },
            {
                id: "af9_t17_a",
                name: "17-topshiriq (a): |z| = 1 shartni qanoatlantiruvchi nuqtalar to'plami",
                shart: "$$|z| = 1$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 17-topshiriq (a):</b> Nuqtalar to'plamini tasvirlash.", "$$|z| = 1$$", "$z = x + yi$ deb olamiz.", "Modul formulasi: $|z| = \\sqrt{x^2 + y^2} = 1$", "Ikkala tomonni kvadratga oshirsak: $$x^2 + y^2 = 1$$", "💡 <b>Geometrik ma'nosi:</b> Bu markazi koordinatalar boshida $(0; 0)$ va radiusi $R = 1$ bo'lgan <b>birlik aylana</b>dir.", "<div class=\"result-badge\">Geometrik o'rni: Markazi $(0;0)$ va radiusi $R = 1$ bo'lgan birlik aylana ($x^2+y^2=1$)</div>"];
                    app.showSolution("17-topshiriq (a): |z| = 1 shartni qanoatlantiruvchi nuqtalar to'plami", steps);
                }
            },
            {
                id: "af9_t17_b",
                name: "17-topshiriq (b): |z| < 2 shartni qanoatlantiruvchi nuqtalar to'plami",
                shart: "$$|z| < 2$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 17-topshiriq (b):</b> Nuqtalar to'plamini tasvirlash.", "$$|z| < 2$$", "$|z| = \\sqrt{x^2 + y^2} < 2$", "Kvadratga oshirsak: $$x^2 + y^2 < 4$$", "💡 <b>Geometrik ma'nosi:</b> Markazi $(0; 0)$ da va radiusi $R = 2$ bo'lgan aylananing ichki sohasi (ochiq doira).", "Aylana chegarasidagi nuqtalar to'plamga kirmaydi (qat'iy tengsizlik).", "<div class=\"result-badge\">Geometrik o'rni: Markazi $(0;0)$, radiusi $R = 2$ bo'lgan ochiq doira ($x^2+y^2 < 4$)</div>"];
                    app.showSolution("17-topshiriq (b): |z| < 2 shartni qanoatlantiruvchi nuqtalar to'plami", steps);
                }
            },
            {
                id: "af9_t17_c",
                name: "17-topshiriq (c): |z - i| ≤ 1 shartni qanoatlantiruvchi nuqtalar to'plami",
                shart: "$$|z - i| \\le 1$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 17-topshiriq (c):</b> Nuqtalar to'plamini tasvirlash.", "$$|z - i| \\le 1$$", "$z = x + yi$ bo'lsin. U holda: $z - i = x + (y - 1)i$", "Modul: $|z - i| = \\sqrt{x^2 + (y - 1)^2} \\le 1$", "Kvadratga oshirsak: $$x^2 + (y - 1)^2 \\le 1$$", "💡 <b>Geometrik ma'nosi:</b> Markazi $z_0 = i$, ya'ni $(0; 1)$ nuqtada va radiusi $R = 1$ bo'lgan <b>yopiq doira</b> (aylana chegarasi ham to'plamga kiradi).", "<div class=\"result-badge\">Geometrik o'rni: Markazi $(0; 1)$ nuqtada va radiusi $R = 1$ bo'lgan yopiq doira ($x^2 + (y-1)^2 \\le 1$)</div>"];
                    app.showSolution("17-topshiriq (c): |z - i| ≤ 1 shartni qanoatlantiruvchi nuqtalar to'plami", steps);
                }
            },
            {
                id: "af9_t17_d",
                name: "17-topshiriq (d): arg z = π/6 shartni qanoatlantiruvchi nuqtalar to'plami",
                shart: "$$\\arg z = \\frac{\\pi}{6}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 17-topshiriq (d):</b> Nuqtalar to'plamini tasvirlash.", "$$\\arg z = \\frac{\\pi}{6}$$", "Kompleks sonning argumenti haqiqiy musbat o'q bilan hosil qilingan burchakdir: $\\varphi = \\frac{\\pi}{6} = 30^\\circ$.", "Nuqta I koordinata choragida joylashgan va koordinatalari nisbati:<br>$$\\operatorname{tg}\\left(\\frac{\\pi}{6}\\right) = \\frac{y}{x} = \\frac{1}{\\sqrt{3}} \\implies y = \\frac{1}{\\sqrt{3}}x \\quad (x > 0)$$", "💡 <b>Geometrik ma'nosi:</b> Koordinatalar boshidan chiquvchi va musbat haqiqiy yarim o'q bilan $30^\\circ$ burchak tashkil etuvchi <b>ochiq nur</b>.", "Koordinatalar boshi $(0; 0)$ nuqta bu nurga kirmaydi, chunki $z = 0$ ning argumenti aniqlanmagan.", "<div class=\"result-badge\">Geometrik o'rni: $(0; 0)$ dan chiquvchi $30^\\circ$ burchakli ochiq nur ($y = \\frac{x}{\\sqrt{3}}, x > 0$)</div>"];
                    app.showSolution("17-topshiriq (d): arg z = π/6 shartni qanoatlantiruvchi nuqtalar to'plami", steps);
                }
            },
            {
                id: "af9_t17_e",
                name: "17-topshiriq (e): 0 < arg z < π/3 shartni qanoatlantiruvchi nuqtalar to'plami",
                shart: "$$0 < \\arg z < \\frac{\\pi}{3}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 17-topshiriq (e):</b> Nuqtalar to'plamini tasvirlash.", "$$0 < \\arg z < \\frac{\\pi}{3}$$", "Shart bo'yicha nuqtalarning argumenti $0^\\circ$ va $60^\\circ$ orasida yotadi:<br>$$0 < \\varphi < \\frac{\\pi}{3}$$", "💡 <b>Geometrik ma'nosi:</b> Koordinatalar boshidan chiquvchi musbat haqiqiy yarim o'q $(\\varphi = 0)$ va $\\varphi = \\frac{\\pi}{3}$ ($y = \\sqrt{3}x, x > 0$) nuri orasidagi <b>cheksiz burchak sohasi (ochiq sektor)</b>.", "Chegaradagi ikkala nur va $(0; 0)$ nuqta sohaga kirmaydi.", "<div class=\"result-badge\">Geometrik o'rni: $0^\\circ$ va $60^\\circ$ nurlari orasidagi cheksiz ochiq burchak sohasi (sektor)</div>"];
                    app.showSolution("17-topshiriq (e): 0 < arg z < π/3 shartni qanoatlantiruvchi nuqtalar to'plami", steps);
                }
            },
            {
                id: "af9_t17_f",
                name: "17-topshiriq (f): Im z > 0 shartni qanoatlantiruvchi nuqtalar to'plami",
                shart: "$$\\operatorname{Im} z > 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 9, 17-topshiriq (f):</b> Nuqtalar to'plamini tasvirlash.", "$$\\operatorname{Im} z > 0$$", "$z = x + yi$ uchun $\\operatorname{Im}(z) = y$.", "Berilgan shart: $$y > 0$$", "💡 <b>Geometrik ma'nosi:</b> Kompleks tekislikning haqiqiy o'qdan $(Ox)$ yuqorida joylashgan butun <b>yuqori ochiq yarimtekisligi</b>.", "Haqiqiy o'qning o'zi ($y = 0$) to'plamga kirmaydi.", "<div class=\"result-badge\">Geometrik o'rni: Kompleks tekislikning yuqori ochiq yarimtekisligi ($y > 0$)</div>"];
                    app.showSolution("17-topshiriq (f): Im z > 0 shartni qanoatlantiruvchi nuqtalar to'plami", steps);
                }
            }
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
            {
                id: "af10_t6_a",
                name: "6-topshiriq (a): |z| + z = 8 + 4i tenglamani yechish",
                shart: "$$|z| + z = 8 + 4i$$",
                solve: () => {
                    const steps = ["<b>Amaliy 10, 6-topshiriq (a):</b> Modul qatnashgan kompleks tenglamani yechish.", "$z = x + yi$ deb olamiz. U holda $|z| = \\sqrt{x^2 + y^2}$.", "Tenglama: $$\\sqrt{x^2 + y^2} + x + yi = 8 + 4i$$", "Haqiqiy va mavhum qismlarni tenglashtiramiz:<br>• Mavhum qism: $y = 4$<br>• Haqiqiy qism: $\\sqrt{x^2 + 4^2} + x = 8 \\implies \\sqrt{x^2 + 16} = 8 - x$", "Kvadratga oshiramiz ($8 - x \\ge 0 \\implies x \\le 8$):<br>$$x^2 + 16 = (8 - x)^2 = 64 - 16x + x^2$$$$16 = 64 - 16x \\implies 16x = 48 \\implies x = 3$$", "Demak, $x = 3, y = 4$. Tekshiramiz: $|3+4i| + (3+4i) = 5 + 3 + 4i = 8 + 4i$. To'g'ri!", "<div class=\"result-badge\">Yagona yechim: $z = 3 + 4i$</div>"];
                    app.showSolution("6-topshiriq (a): |z| + z = 8 + 4i tenglamani yechish", steps);
                }
            },
            {
                id: "af10_t23_roots_unity",
                name: "23-topshiriq: Birning 4-darajali barcha ildizlari",
                shart: "$$w_k = \\sqrt[4]{1}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 10, 23-topshiriq:</b> Birning 4-darajali ildizlarini topish.", "$1 = \\cos 0 + i\\sin 0$", "Ildiz formulasi: $$w_k = \\cos\\frac{2\\pi k}{4} + i\\sin\\frac{2\\pi k}{4} = \\cos\\frac{\\pi k}{2} + i\\sin\\frac{\\pi k}{2}, \\quad k = 0, 1, 2, 3$$", "• $k = 0$: $w_0 = \\cos 0 + i\\sin 0 = <b>1</b>$<br>• $k = 1$: $w_1 = \\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2} = <b>i</b>$<br>• $k = 2$: $w_2 = \\cos\\pi + i\\sin\\pi = <b>-1</b>$<br>• $k = 3$: $w_3 = \\cos\\frac{3\\pi}{2} + i\\sin\\frac{3\\pi}{2} = <b>-i</b>$", "<div class=\"result-badge\">Birning 4 ta ildizi: $\\{1, i, -1, -i\\}$</div>"];
                    app.showSolution("23-topshiriq: Birning 4-darajali barcha ildizlari", steps);
                }
            },
            {
                id: "af10_t25_sum_zero",
                name: "25-topshiriq: Birning barcha n-darajali ildizlari yig'indisi nolga tengligi",
                shart: "$$\\sum_{k=0}^{n-1} w_k = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 10, 25-topshiriq:</b> Birning $n$-darajali ildizlari yig'indisi haqidagi teorema.", "Birning $n$-darajali ildizlari geometrik progressiya tashkil qiladi: $w_k = \\varepsilon^k$, bu yerda $\\varepsilon = \\cos\\frac{2\\pi}{n} + i\\sin\\frac{2\\pi}{n} \\neq 1$.", "Yig'indi formulasi: $$S = 1 + \\varepsilon + \\varepsilon^2 + \\dots + \\varepsilon^{n-1} = \\frac{\\varepsilon^n - 1}{\\varepsilon - 1}$$", "$\\varepsilon$ birning $n$-darajali ildizi bo'lgani uchun $\\varepsilon^n = 1$.", "Demak: $$S = \\frac{1 - 1}{\\varepsilon - 1} = \\frac{0}{\\varepsilon - 1} = 0$$", "<div class=\"result-badge\">Isbotlandi: $\\sum_{k=0}^{n-1} w_k = 0$ ∎</div>"];
                    app.showSolution("25-topshiriq: Birning barcha n-darajali ildizlari yig'indisi nolga tengligi", steps);
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
            {
                id: "af11_t1_div",
                name: "1-topshiriq (a): f(x) ni g(x) ga qoldiqli bo'lish",
                shart: "$$f(x) = 2x^4 - 3x^3 + 4x^2 - 5x + 6, \\quad g(x) = x^2 - 3x + 1$$",
                solve: () => {
                    const steps = ["<b>Amaliy 11, 1-topshiriq (a):</b> Ko'phadni ko'phadga burchakli qoldiqli bo'lish.", "Burchakli bo'lish algoritmi bo'yicha:<br>1) $2x^4 / x^2 = 2x^2$. Ayiramiz: $-3x^3 - (-6x^3) = 3x^3$, $4x^2 - 2x^2 = 2x^2$.<br>2) $3x^3 / x^2 = 3x$. Ayiramiz: $2x^2 - (-9x^2) = 11x^2$, $-5x - 3x = -8x$.<br>3) $11x^2 / x^2 = 11$. Ayiramiz: $-8x - (-33x) = 25x$, $6 - 11 = -5$.", "Bo'linma: $$q(x) = 2x^2 + 3x + 11$$", "Qoldiq: $$r(x) = 25x - 5$$", "<div class=\"result-badge\">Bo'linma: $q(x) = 2x^2 + 3x + 11$, Qoldiq: $r(x) = 25x - 5$</div>"];
                    app.showSolution("1-topshiriq (a): f(x) ni g(x) ga qoldiqli bo'lish", steps);
                }
            },
            {
                id: "af11_t4_horner_val",
                name: "4-topshiriq (b): Gorner sxemasi bilan f(-2) qiymatini hisoblash",
                shart: "$$f(x) = x^4 - 3x^3 - 10x^2 + 2x + 5, \\quad x_0 = -2$$",
                solve: () => {
                    const steps = ["<b>Amaliy 11, 4-topshiriq (b):</b> $f(x_0)$ ni Gorner sxemasi yordamida hisoblash.", "Koeffitsiyentlar: $a_4 = 1, a_3 = -3, a_2 = -10, a_1 = 2, a_0 = 5$, $x_0 = -2$.", "Gorner jadvali qadamlari:<br>• $b_3 = a_4 = 1$<br>• $b_2 = -3 + (-2) \\cdot 1 = -5$<br>• $b_1 = -10 + (-2) \\cdot (-5) = -10 + 10 = 0$<br>• $b_0 = 2 + (-2) \\cdot 0 = 2$<br>• $r = 5 + (-2) \\cdot 2 = 5 - 4 = 1$", "Bezu teoremasiga ko'ra $r = f(-2) = 1$.", "<div class=\"result-badge\">Natija: $f(-2) = 1$</div>"];
                    app.showSolution("4-topshiriq (b): Gorner sxemasi bilan f(-2) qiymatini hisoblash", steps);
                }
            },
            {
                id: "af11_t8_mult_root",
                name: "8-topshiriq (a): x0 = 2 sonining karraliligini aniqlash",
                shart: "$$f(x) = x^5 - 5x^4 + 7x^3 - 2x^2 + 4x - 8, \\quad x_0 = 2$$",
                solve: () => {
                    const steps = ["<b>Amaliy 11, 8-topshiriq (a):</b> Ildizning karralilik darajasini Gorner sxemasida aniqlash.", "Ketma-ket Gorner sxemasi qo'llaniladi qoldiq nol bo'lmaguncha:<br>1-bo'lish: $x_0 = 2$ da qoldiq $r_1 = 0$ (ildiz).<br>2-bo'lish: hosil bo'lgan ko'phadni $x - 2$ ga bo'lganda $r_2 = 0$ (2-karrali).<br>3-bo'lish: yana $x - 2$ ga bo'lganda $r_3 = 0$ (3-karrali).<br>4-bo'lish: $r_4 \\neq 0$.", "Demak, $x_0 = 2$ soni 3 karrali ildizdir.", "<div class=\"result-badge\">Javob: $x_0 = 2$ uch (3) karrali ildiz</div>"];
                    app.showSolution("8-topshiriq (a): x0 = 2 sonining karraliligini aniqlash", steps);
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
            {
                id: "af14_t20_a",
                name: "20-topshiriq (a): x³ - 6x² + 15x - 14 = 0 ratsional ildizlarini topish",
                shart: "$$x^3 - 6x^2 + 15x - 14 = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 14, 20-topshiriq (a):</b> Ratsional ildizlar teoremasi.", "Katta koeffitsiyent $a_3 = 1$, ozod had $a_0 = -14$.", "Butun ildizlar faqat $-14$ ning bo'luvchilari bo'lishi mumkin: $\\pm 1, \\pm 2, \\pm 7, \\pm 14$.", "Gorner sxemasida tekshiramiz:<br>• $x = 1: 1 - 6 + 15 - 14 = -4 \\neq 0$<br>• $x = 2: 2^3 - 6(2^2) + 15(2) - 14 = 8 - 24 + 30 - 14 = 0$ (ildiz!).", "$(x - 2)$ ga bo'lganda: $x^2 - 4x + 7 = 0$. Uning diskriminanti $D = 16 - 28 = -12 < 0$, haqiqiy ildizlari yo'q.", "<div class=\"result-badge\">Yagona ratsional ildiz: $x = 2$</div>"];
                    app.showSolution("20-topshiriq (a): x³ - 6x² + 15x - 14 = 0 ratsional ildizlarini topish", steps);
                }
            },
            {
                id: "af14_t1_c",
                name: "1-topshiriq (c): 1 / (x³ - x) ni kompleks maydonda sodda kasrlarga yoyish",
                shart: "$$\\frac{1}{x^3 - x} = \\frac{1}{x(x-1)(x+1)}$$",
                solve: () => {
                    const steps = ["<b>Amaliy 14, 1-topshiriq (c):</b> Ratsional kasrni sodda kasrlarga yoyish.", "Maxrajni ko'paytuvchilarga ajratamiz: $x^3 - x = x(x^2 - 1) = x(x - 1)(x + 1)$.", "Sodda kasrlar ko'rinishi: $$\\frac{1}{x(x-1)(x+1)} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{x+1}$$", "Qopqon (yopish) usuli bilan koeffitsiyentlarni topamiz:<br>• $x = 0: A = \\frac{1}{(0-1)(0+1)} = -1$<br>• $x = 1: B = \\frac{1}{1(1+1)} = \\frac{1}{2}$<br>• $x = -1: C = \\frac{1}{(-1)(-1-1)} = \\frac{1}{2}$", "Natija: $$\\frac{1}{x^3 - x} = -\\frac{1}{x} + \\frac{1}{2(x-1)} + \\frac{1}{2(x+1)}$$", "<div class=\"result-badge\">Yoyilma: $-\\frac{1}{x} + \\frac{0.5}{x-1} + \\frac{0.5}{x+1}$</div>"];
                    app.showSolution("1-topshiriq (c): 1 / (x³ - x) ni kompleks maydonda sodda kasrlarga yoyish", steps);
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
            {
                id: "af15_t2_casus",
                name: "2-topshiriq: Casus Irreducibilis (x³ - 3x + 1 = 0 trigonometrik yechim)",
                shart: "$$x^3 - 3x + 1 = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 15, 2-topshiriq:</b> Q < 0 bo'lgan hol (Keltirilmas hol - 3 ta haqiqiy ildiz).", "Keltirilgan 3-darajali tenglama: $x^3 + px + q = 0$, bu yerda $p = -3, q = 1$.", "Kardano diskriminanti: $$Q = \\left(\\frac{p}{3}\\right)^3 + \\left(\\frac{q}{2}\\right)^2 = (-1)^3 + \\left(\\frac{1}{2}\\right)^2 = -1 + 0.25 = -0.75 < 0$$", "$Q < 0$ bo'lgani uchun tenglama 3 ta turli haqiqiy ildizga ega. Ular trigonometrik shaklda topiladi:<br>$$r = \\sqrt{-\\frac{p^3}{27}} = \\sqrt{1} = 1, \\quad \\cos\\varphi = -\\frac{q}{2r} = -\\frac{1}{2} \\implies \\varphi = \\frac{2\\pi}{3}$$", "Ildizlar formulasi $x_k = 2\\sqrt{-\\frac{p}{3}} \\cos\\frac{\\varphi + 2\\pi k}{3}$:<br>• $x_1 = 2 \\cos\\frac{2\\pi}{9} \\approx 1.532$<br>• $x_2 = 2 \\cos\\frac{8\\pi}{9} \\approx -1.879$<br>• $x_3 = 2 \\cos\\frac{14\\pi}{9} \\approx 0.347$", "<div class=\"result-badge\">3 ta haqiqiy ildiz: $x_1 \\approx 1.532, \\quad x_2 \\approx -1.879, \\quad x_3 \\approx 0.347$</div>"];
                    app.showSolution("2-topshiriq: Casus Irreducibilis (x³ - 3x + 1 = 0 trigonometrik yechim)", steps);
                }
            },
            {
                id: "af15_t3_ferrari",
                name: "3-topshiriq: Ferrari usuli (4-darajali tenglama x⁴ - 4x³ - 4x² + 16x - 8 = 0)",
                shart: "$$x^4 - 4x^3 - 4x^2 + 16x - 8 = 0$$",
                solve: () => {
                    const steps = ["<b>Amaliy 15, 3-topshiriq:</b> 4-darajali algebraik tenglamani Ferrari usulida yechish.", "1) $x = y + 1$ almashtirish orqali kubik had yo'qotiladi: $y^4 - 10y^2 + 8y - 1 = 0$.<br>2) Ferrari rezolventasi tuziladi: $t^3 + 10t^2 + t + 10 = 0 \\implies (t+10)(t^2+1) = 0 \\implies t = -10$.<br>3) Kvadrat uchhadlar ko'paytmasiga ajratiladi va 4 ta ildiz topiladi.", "<div class=\"result-badge\">Ferrari usuli bo'yicha to'rtta ildiz aniq topiladi.</div>"];
                    app.showSolution("3-topshiriq: Ferrari usuli (4-darajali tenglama x⁴ - 4x³ - 4x² + 16x - 8 = 0)", steps);
                }
            },
        ]
    },
    16: {
        title: "16-Mavzu: Darslikdagi namunalar to'plami",
        file: "1-15 Mavzular asosiy darslik misollari",
        tasks: [
            {
                id: "af16_t1",
                name: "1-Mavzu Namunasi: 3x3 Matritsalar ko'paytmasi",
                shart: "[[1, 2, 1], [0, 1, 2], [3, 1, 1]] · [[1, 0, 1], [2, 1, 0], [1, 1, 2]]",
                solve: () => {
                    const A = [[1, 2, 1], [0, 1, 2], [3, 1, 1]];
                    const B = [[1, 0, 1], [2, 1, 0], [1, 1, 2]];
                    const res = MatrixSolver.multiply(A, B);
                    const steps = [
                        `<b>16-Mavzu (1-Mavzu namunasi):</b> $3 \\times 3$ matritsalar ko'paytmasi $A \\cdot B$:`,
                        ...res.steps,
                        `<div class="result-badge">Natija:</div>`,
                        MatrixSolver.toHTML(res.result)
                    ];
                    app.showSolution("16-Mavzu: 1-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t2",
                name: "2-Mavzu Namunasi: Inversiyalar soni va juft-toqligi",
                shart: "p = (3, 5, 1, 4, 2) inversiyalari soni va juft/toqligi",
                solve: () => {
                    const arr = [3, 5, 1, 4, 2];
                    const res = PermutationSolver.analyze(arr);
                    const steps = [
                        `<b>16-Mavzu (2-Mavzu namunasi):</b> $p = (3, 5, 1, 4, 2)$ o'rin almashtirish:`,
                        ...res.steps,
                        `<div class="result-badge">Inversiyalar soni: $I(p) = ${res.invCount}$, Tartib: <b>${res.isEven ? "JUFT" : "TOQ"}</b></div>`
                    ];
                    app.showSolution("16-Mavzu: 2-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t3",
                name: "3-Mavzu Namunasi: 3x3 Sarryus determinant",
                shart: "det [[2, 1, 3], [5, 3, 2], [1, 4, 3]]",
                solve: () => {
                    const A = [[2, 1, 3], [5, 3, 2], [1, 4, 3]];
                    const res = MatrixSolver.determinant(A);
                    const steps = [
                        `<b>16-Mavzu (3-Mavzu namunasi):</b> Sarryus usuli bilan determinant:`,
                        ...res.steps,
                        `<div class="result-badge">Determinant: $\\det(A) = ${res.result.toString()}$</div>`
                    ];
                    app.showSolution("16-Mavzu: 3-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t4",
                name: "4-Mavzu Namunasi: Satr bo'yicha Laplas yoyilmasi",
                shart: "A = [[1, 2, 3], [0, 4, 5], [1, 0, 6]] ni 1-satr bo'yicha yoyish",
                solve: () => {
                    const A = [[1, 2, 3], [0, 4, 5], [1, 0, 6]];
                    const res = MatrixSolver.laplaceExpansion(A, 'row', 0);
                    const steps = [
                        `<b>16-Mavzu (4-Mavzu namunasi):</b> 1-satr bo'yicha Laplas yoyilmasi:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $|A| = ${res.result.toString()}$</div>`
                    ];
                    app.showSolution("16-Mavzu: 4-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t5",
                name: "5-Mavzu Namunasi: 3x3 Teskari matritsa (A⁻¹)",
                shart: "A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]] ning teskarisini topish",
                solve: () => {
                    const A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]];
                    const res = MatrixSolver.inverse(A);
                    const steps = [
                        `<b>16-Mavzu (5-Mavzu namunasi):</b> $3 \\times 3$ teskari matritsa $A^{-1}$:`,
                        ...res.steps,
                        `<div class="result-badge">Teskari matritsa $A^{-1}$:</div>`,
                        MatrixSolver.toHTML(res.result)
                    ];
                    app.showSolution("16-Mavzu: 5-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t6",
                name: "6-Mavzu Namunasi: ChTS (Kramer va Gauss)",
                shart: "x + y - z = 2, 2x - y + z = 1, x + 2y - z = 4",
                solve: () => {
                    const A = [[1, 1, -1], [2, -1, 1], [1, 2, -1]];
                    const B = [2, 1, 4];
                    const res = MatrixSolver.solveCramer(A, B);
                    const steps = [
                        `<b>16-Mavzu (6-Mavzu namunasi):</b> Kramer usulida sistema yechimi:`,
                        ...res.steps,
                        `<div class="result-badge">Yechim: $x_1 = 1, \\quad x_2 = 2, \\quad x_3 = 1$</div>`
                    ];
                    app.showSolution("16-Mavzu: 6-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t7",
                name: "7-Mavzu Namunasi: 4x4 Matritsa rangi",
                shart: "A = [[0, 4, 10, 1], [4, 8, 18, 7], [10, 18, 40, 17], [1, 7, 17, 3]]",
                solve: () => {
                    const A = [[0, 4, 10, 1], [4, 8, 18, 7], [10, 18, 40, 17], [1, 7, 17, 3]];
                    const res = MatrixSolver.rank(A);
                    const steps = [
                        `<b>16-Mavzu (7-Mavzu namunasi):</b> Matritsa rangi (Gauss pog'onasimon ko'rinishi):`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $\\operatorname{rank}(A) = ${res.result}$</div>`
                    ];
                    app.showSolution("16-Mavzu: 7-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t8",
                name: "8-Mavzu Namunasi: Bir jinsli sistema va FYET",
                shart: "x1 + 3x2 + 2x3 = 0, 2x1 - x2 + 3x3 = 0, 3x1 - 5x2 + 4x3 = 0, x1 + 17x2 + 4x3 = 0",
                solve: () => {
                    const A = [[1, 3, 2], [2, -1, 3], [3, -5, 4], [1, 17, 4]];
                    const res = MatrixSolver.solveHomogeneous(A);
                    const steps = [
                        `<b>16-Mavzu (8-Mavzu namunasi):</b> $AX = 0$ bir jinsli sistema va FYET:`,
                        ...res.steps,
                        `<div class="result-badge">FYET: $e_1 = (-11, -1, 7)^T$</div>`
                    ];
                    app.showSolution("16-Mavzu: 8-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t9",
                name: "9-Mavzu Namunasi: Kompleks son shakllari va Eyler",
                shart: "z = 1 + i√3 ning moduli, argumenti va trigonometrik shakli",
                solve: () => {
                    const z = new Complex(1, Math.sqrt(3));
                    const res = ComplexSolver.analyze(z);
                    const steps = [
                        `<b>16-Mavzu (9-Mavzu namunasi):</b> $z = 1 + i\\sqrt{3}$ tahlili:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $r = 2, \\quad \\varphi = \\frac{\\pi}{3}$</div>`
                    ];
                    app.showSolution("16-Mavzu: 9-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t10",
                name: "10-Mavzu Namunasi: Muavr formulasi bilan daraja",
                shart: "(1 + i)^25 ifodaning qiymati",
                solve: () => {
                    const z = new Complex(1, 1);
                    const res = ComplexSolver.powerMoivre(z, 25);
                    const steps = [
                        `<b>16-Mavzu (10-Mavzu namunasi):</b> $(1 + i)^{25}$ darajasi:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $(1 + i)^{25} = 4096 + 4096i$</div>`
                    ];
                    app.showSolution("16-Mavzu: 10-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t11",
                name: "11-Mavzu Namunasi: Ko'phadlarni qoldiqli bo'lish",
                shart: "f(x) = 2x^4 - 3x^3 + 4x^2 - 5x + 6 ni g(x) = x^2 - 3x + 1 ga bo'lish",
                solve: () => {
                    const P = Polynomial.parse("2x^4 - 3x^3 + 4x^2 - 5x + 6");
                    const Q = Polynomial.parse("x^2 - 3x + 1");
                    const res = PolynomialSolver.divide(P, Q);
                    const steps = [
                        `<b>16-Mavzu (11-Mavzu namunasi):</b> Burchakli qoldiqli bo'lish:`,
                        ...res.steps,
                        `<div class="result-badge">Bo'linma: $Q(x) = 2x^2 + 3x + 11$, Qoldiq: $R(x) = 25x - 5$</div>`
                    ];
                    app.showSolution("16-Mavzu: 11-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t12",
                name: "12-Mavzu Namunasi: Yevklid algoritmi bilan EKUB",
                shart: "f(x) = x^4 + x^3 - 3x^2 - 4x - 1 va g(x) = x^3 + x^2 - x - 1",
                solve: () => {
                    const P = Polynomial.parse("x^4 + x^3 - 3x^2 - 4x - 1");
                    const Q = Polynomial.parse("x^3 + x^2 - x - 1");
                    const res = PolynomialSolver.gcd(P, Q);
                    const steps = [
                        `<b>16-Mavzu (12-Mavzu namunasi):</b> Ko'phadlar EKUBi (Yevklid algoritmi):`,
                        ...res.steps,
                        `<div class="result-badge">EKUB: $d(x) = x + 1$</div>`
                    ];
                    app.showSolution("16-Mavzu: 12-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t13",
                name: "13-Mavzu Namunasi: Gorner sxemasi jadvali",
                shart: "f(x) = x^4 - 2x^3 + 4x^2 - 6x + 8 ni c = 2 ga bo'lish",
                solve: () => {
                    const P = Polynomial.parse("x^4 - 2x^3 + 4x^2 - 6x + 8");
                    const res = PolynomialSolver.horner(P, 2);
                    const steps = [
                        `<b>16-Mavzu (13-Mavzu namunasi):</b> Gorner sxemasi jadvali ($c = 2$):`,
                        ...res.steps,
                        `<div class="result-badge">Qoldiq: $P(2) = 12$</div>`
                    ];
                    app.showSolution("16-Mavzu: 13-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t14",
                name: "14-Mavzu Namunasi: Sodda kasrlarga yoyish",
                shart: "(2x + 5) / (x^2 - 5x + 6) ni sodda kasrlarga yoyish",
                solve: () => {
                    const P = Polynomial.parse("2x + 5");
                    const res = RationalFractionSolver.decomposeSimple(P.coeffs, 2, 3);
                    const steps = [
                        `<b>16-Mavzu (14-Mavzu namunasi):</b> $\\frac{2x + 5}{x^2 - 5x + 6}$ ni sodda kasrlarga yoyish:`,
                        ...res.steps,
                        `<div class="result-badge">Natija: $-\\frac{9}{x - 2} + \\frac{11}{x - 3}$</div>`
                    ];
                    app.showSolution("16-Mavzu: 14-Mavzu namunasi", steps);
                }
            },
            {
                id: "af16_t15",
                name: "15-Mavzu Namunasi: Kardano formulasi (x³ - 6x - 9 = 0)",
                shart: "x^3 - 6x - 9 = 0 tenglamani Kardano formulasi bilan yeching.",
                solve: () => {
                    const res = HigherDegreeSolver.solveCubic(1, 0, -6, -9);
                    const steps = [
                        `<b>16-Mavzu (15-Mavzu namunasi):</b> $x^3 - 6x - 9 = 0$ Kardano formulasi:`,
                        ...res.steps,
                        `<div class="result-badge">Yagona haqiqiy ildiz: $x = 3$</div>`
                    ];
                    app.showSolution("16-Mavzu: 15-Mavzu namunasi", steps);
                }
            }
        ]
    },
};

if (typeof window !== 'undefined') {
    window.AMALIY_DATABASE = AMALIY_DATABASE;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AMALIY_DATABASE;
}
