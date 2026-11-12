/**
 * Matritsa amallari va chiziqli algebra algoritmlari (Step-by-Step).
 * Barcha hisoblashlar Fraction orqali aniq qiymatlarda bajariladi.
 */

class MatrixSolver {
    // Matritsani klonlash
    static clone(mat) {
        return mat.map(row => row.map(cell => Fraction.parse(cell)));
    }

    // Matritsani HTML jadval ko'rinishida chiqarish
    static toHTML(mat, highlightRow = -1, highlightCol = -1) {
        let html = '<div class="matrix-box"><div class="matrix-bracket left"></div><table class="matrix-table">';
        for (let i = 0; i < mat.length; i++) {
            html += '<tr>';
            for (let j = 0; j < mat[i].length; j++) {
                const hl = (i === highlightRow || j === highlightCol) ? ' class="hl"' : '';
                html += `<td${hl}>${mat[i][j].toHTML()}</td>`;
            }
            html += '</tr>';
        }
        html += '</table><div class="matrix-bracket right"></div></div>';
        return html;
    }

    // Kengaytirilgan matritsa HTML (Masalan Gauss yoki ChTS uchun [A | B])
    static augmentedToHTML(mat, splitCol) {
        let html = '<div class="matrix-box"><div class="matrix-bracket left"></div><table class="matrix-table augmented">';
        for (let i = 0; i < mat.length; i++) {
            html += '<tr>';
            for (let j = 0; j < mat[i].length; j++) {
                const border = (j === splitCol - 1) ? ' class="sep-right"' : '';
                html += `<td${border}>${mat[i][j].toHTML()}</td>`;
            }
            html += '</tr>';
        }
        html += '</table><div class="matrix-bracket right"></div></div>';
        return html;
    }

    // 1. Matritsalar qo'shish (A + B)
    static add(A, B) {
        const rows = A.length, cols = A[0].length;
        if (rows !== B.length || cols !== B[0].length) {
            throw new Error("Matritsalar o'lchami bir xil bo'lishi shart!");
        }
        const steps = [];
        steps.push(`<b>Matritsalarni qo'shish qoidasi:</b> Mos elementlar bir-biriga qo'shiladi: $c_{ij} = a_{ij} + b_{ij}$`);
        
        const C = [];
        for (let i = 0; i < rows; i++) {
            C[i] = [];
            for (let j = 0; j < cols; j++) {
                const a = Fraction.parse(A[i][j]);
                const b = Fraction.parse(B[i][j]);
                const res = a.add(b);
                C[i][j] = res;
                steps.push(`c_{${i+1}${j+1}} = ${a.toString()} + (${b.toString()}) = <b>${res.toString()}</b>`);
            }
        }
        return { result: C, steps };
    }

    // 2. Matritsalar ayirish (A - B)
    static sub(A, B) {
        const rows = A.length, cols = A[0].length;
        if (rows !== B.length || cols !== B[0].length) {
            throw new Error("Matritsalar o'lchami bir xil bo'lishi shart!");
        }
        const steps = [];
        steps.push(`<b>Matritsalarni ayirish qoidasi:</b> Mos elementlar ayiriladi: $c_{ij} = a_{ij} - b_{ij}$`);
        
        const C = [];
        for (let i = 0; i < rows; i++) {
            C[i] = [];
            for (let j = 0; j < cols; j++) {
                const a = Fraction.parse(A[i][j]);
                const b = Fraction.parse(B[i][j]);
                const res = a.sub(b);
                C[i][j] = res;
                steps.push(`c_{${i+1}${j+1}} = ${a.toString()} - (${b.toString()}) = <b>${res.toString()}</b>`);
            }
        }
        return { result: C, steps };
    }

    // 3. Matritsani songa ko'paytirish (k * A)
    static multiplyScalar(k, A) {
        const kFrac = Fraction.parse(k);
        const steps = [];
        steps.push(`Matritsaning har bir elementi $k = ${kFrac.toString()}$ soniga ko'paytiriladi:`);
        
        const C = [];
        for (let i = 0; i < A.length; i++) {
            C[i] = [];
            for (let j = 0; j < A[i].length; j++) {
                const a = Fraction.parse(A[i][j]);
                const res = a.mul(kFrac);
                C[i][j] = res;
                steps.push(`(${kFrac.toString()}) \\times ${a.toString()} = <b>${res.toString()}</b>`);
            }
        }
        return { result: C, steps };
    }

    // 4. Matritsalar ko'paytmasi (A * B)
    static multiply(A, B) {
        const rA = A.length, cA = A[0].length;
        const rB = B.length, cB = B[0].length;
        if (cA !== rB) {
            throw new Error(`Ko'paytirish mumkin emas: A ning ustunlari soni (${cA}) B ning satrlari soniga (${rB}) teng bo'lishi shart!`);
        }
        const steps = [];
        steps.push(`Natijaviy matritsa o'lchami: $${rA} \\times ${cB}$ bo'ladi.`);
        
        const C = [];
        for (let i = 0; i < rA; i++) {
            C[i] = [];
            for (let j = 0; j < cB; j++) {
                let sum = Fraction.zero();
                const terms = [];
                for (let k = 0; k < cA; k++) {
                    const a = Fraction.parse(A[i][k]);
                    const b = Fraction.parse(B[k][j]);
                    const prod = a.mul(b);
                    sum = sum.add(prod);
                    terms.push(`(${a.toString()} \\cdot ${b.toString()})`);
                }
                C[i][j] = sum;
                steps.push(`c_{${i+1}${j+1}} = ${terms.join(' + ')} = <b>${sum.toString()}</b>`);
            }
        }
        return { result: C, steps };
    }

    // 5. Transponirlash (A^T)
    static transpose(A) {
        const r = A.length, c = A[0].length;
        const T = [];
        const steps = [`Satrlar mos ravishda ustunlarga aylantiriladi (${r}x${c} -> ${c}x${r}):`];
        for (let j = 0; j < c; j++) {
            T[j] = [];
            for (let i = 0; i < r; i++) {
                T[j][i] = Fraction.parse(A[i][j]);
            }
        }
        return { result: T, steps };
    }

    // 6. Determinant (Qadamma-qadam)
    static determinant(A) {
        const n = A.length;
        if (n !== A[0].length) {
            throw new Error("Determinant faqat kvadrat matritsalar uchun mavjud!");
        }
        const steps = [];

        // 1x1
        if (n === 1) {
            const val = Fraction.parse(A[0][0]);
            steps.push(`1x1 matritsa determinanti: $|A| = ${val.toString()}$`);
            return { result: val, steps };
        }

        // 2x2
        if (n === 2) {
            const a = Fraction.parse(A[0][0]), b = Fraction.parse(A[0][1]);
            const c = Fraction.parse(A[1][0]), d = Fraction.parse(A[1][1]);
            const p1 = a.mul(d);
            const p2 = b.mul(c);
            const det = p1.sub(p2);
            steps.push(`2x2 formula: $|A| = a_{11}a_{22} - a_{12}a_{21}$`);
            steps.push(`$|A| = (${a.toString()})(${d.toString()}) - (${b.toString()})(${c.toString()}) = ${p1.toString()} - (${p2.toString()}) = <b>${det.toString()}</b>$`);
            return { result: det, steps };
        }

        // 3x3 Sarryus usuli bilan chiroyli tushuntirish
        if (n === 3) {
            steps.push(`<b>3x3 Sarryus (uchburchaklar) qoidasi:</b>`);
            const a11 = Fraction.parse(A[0][0]), a12 = Fraction.parse(A[0][1]), a13 = Fraction.parse(A[0][2]);
            const a21 = Fraction.parse(A[1][0]), a22 = Fraction.parse(A[1][1]), a23 = Fraction.parse(A[1][2]);
            const a31 = Fraction.parse(A[2][0]), a32 = Fraction.parse(A[2][1]), a33 = Fraction.parse(A[2][2]);

            // Asosiy diagonallar
            const p1 = a11.mul(a22).mul(a33);
            const p2 = a12.mul(a23).mul(a31);
            const p3 = a13.mul(a21).mul(a32);
            const sumP = p1.add(p2).add(p3);

            // Yordamchi diagonallar
            const m1 = a13.mul(a22).mul(a31);
            const m2 = a11.mul(a23).mul(a32);
            const m3 = a12.mul(a21).mul(a33);
            const sumM = m1.add(m2).add(m3);

            const det = sumP.sub(sumM);

            steps.push(`+ Asosiy diagonal bo'yicha:`);
            steps.push(`(${a11} · ${a22} · ${a33}) + (${a12} · ${a23} · ${a31}) + (${a13} · ${a21} · ${a32}) = ${p1} + ${p2} + ${p3} = <b>${sumP}</b>`);
            steps.push(`- Yordamchi diagonal bo'yicha:`);
            steps.push(`(${a13} · ${a22} · ${a31}) + (${a11} · ${a23} · ${a32}) + (${a12} · ${a21} · ${a33}) = ${m1} + ${m2} + ${m3} = <b>${sumM}</b>`);
            steps.push(`$|A| = (${sumP}) - (${sumM}) = <b>${det.toString()}</b>$`);
            return { result: det, steps };
        }

        // nxn (n >= 4) Gauss usuli (Uchburchak shaklga keltirish)
        steps.push(`<b>${n}x${n} matritsa uchun Gauss usuli (Uchburchak ko'rinishga keltirish):</b>`);
        const M = MatrixSolver.clone(A);
        let detSign = 1n;

        for (let col = 0; col < n; col++) {
            // Pivot topish
            let pivotRow = -1;
            for (let row = col; row < n; row++) {
                if (!M[row][col].isZero()) {
                    pivotRow = row;
                    break;
                }
            }

            if (pivotRow === -1) {
                steps.push(`Ustun #${col+1} dagi barcha elementlar 0 ga teng. Binobarin, $|A| = 0$.`);
                return { result: Fraction.zero(), steps };
            }

            if (pivotRow !== col) {
                // Satrlar o'rnini almashtirish (determinant ishorasi o'zgaradi)
                const temp = M[col];
                M[col] = M[pivotRow];
                M[pivotRow] = temp;
                detSign = -detSign;
                steps.push(`$S_{${col+1}} \\leftrightarrow S_{${pivotRow+1}}$ almashtirildi. Determinant ishorasi o'zgardi (x -1).`);
            }

            // Quyidagi satrlarni nolga aylantirish
            for (let r = col + 1; r < n; r++) {
                if (!M[r][col].isZero()) {
                    const factor = M[r][col].div(M[col][col]);
                    for (let c = col; c < n; c++) {
                        M[r][c] = M[r][c].sub(factor.mul(M[col][c]));
                    }
                    steps.push(`$S_{${r+1}} = S_{${r+1}} - (${factor.toString()}) \\cdot S_{${col+1}}$`);
                }
            }
        }

        // Bosh diagonal elementlarini ko'paytirish
        let det = new Fraction(detSign, 1n);
        const diagTerms = [];
        for (let i = 0; i < n; i++) {
            det = det.mul(M[i][i]);
            diagTerms.push(M[i][i].toString());
        }
        steps.push(`Uchburchak matritsa determinanti diagonal elementlar ko'paytmasiga teng:`);
        steps.push(`$|A| = (${detSign < 0n ? '-' : ''}1) \\cdot ${diagTerms.join(' \\cdot ')} = <b>${det.toString()}</b>$`);

        return { result: det, steps };
    }

    // 7. Teskari matritsa (Algebraik to'ldiruvchilar usuli)
    static inverse(A) {
        const n = A.length;
        if (n !== A[0].length) {
            throw new Error("Faqat kvadrat matritsaning teskarisi mavjud bo'lishi mumkin!");
        }

        const steps = [];
        steps.push(`<b>Teskari matritsani topish: $A^{-1} = \\frac{1}{|A|} \\cdot A^*$</b>`);

        // 1-qadam: Determinant
        const detObj = MatrixSolver.determinant(A);
        const det = detObj.result;
        steps.push(`1-qadam: Matritsa determinanti hisoblanadi: $|A| = ${det.toString()}$`);
        if (det.isZero()) {
            steps.push(`$|A| = 0$ bo'lgani uchun bu matritsa maxsus (xos) matritsa hisoblanadi va unga <b>teskari matritsa mavjud emas!</b>`);
            return { result: null, steps };
        }

        if (n === 1) {
            const inv = [ [ det.inv() ] ];
            steps.push(`$A^{-1} = [${det.inv().toString()}]$`);
            return { result: inv, steps };
        }

        // 2-qadam: Minorlar va Algebraik to'ldiruvchilar
        steps.push(`2-qadam: Har bir element uchun algebraik to'ldiruvchilar ($A_{ij} = (-1)^{i+j} M_{ij}$) hisoblanadi:`);
        const adj = [];
        for (let i = 0; i < n; i++) {
            adj[i] = [];
            for (let j = 0; j < n; j++) {
                // Minor matritsasini tuzish
                const sub = [];
                for (let r = 0; r < n; r++) {
                    if (r === i) continue;
                    const row = [];
                    for (let c = 0; c < n; c++) {
                        if (c === j) continue;
                        row.push(A[r][c]);
                    }
                    sub.push(row);
                }
                const subDet = MatrixSolver.determinant(sub).result;
                const sign = ((i + j) % 2 === 0) ? 1n : -1n;
                const cofactor = subDet.mul(new Fraction(sign, 1n));
                adj[i][j] = cofactor;
                steps.push(`$A_{${i+1}${j+1}} = (-1)^{${i+1}+${j+1}} \\cdot M_{${i+1}${j+1}} = (${sign > 0n ? '+' : '-'}${subDet.toString()}) = <b>${cofactor.toString()}</b>$`);
            }
        }

        // 3-qadam: Biriktirilgan (Adjugate) matritsa: A* = (A_ij)^T
        steps.push(`3-qadam: Algebraik to'ldiruvchilar matritsasi transponirlanadi ($A^* = C^T$):`);
        const adjT = [];
        for (let i = 0; i < n; i++) {
            adjT[i] = [];
            for (let j = 0; j < n; j++) {
                adjT[i][j] = adj[j][i];
            }
        }
        steps.push(MatrixSolver.toHTML(adjT));

        // 4-qadam: A^{-1} = (1 / det) * adjT
        steps.push(`4-qadam: $A^*$ matritsaning har bir elementi $|A| = ${det.toString()}$ ga bo'linadi:`);
        const inv = [];
        for (let i = 0; i < n; i++) {
            inv[i] = [];
            for (let j = 0; j < n; j++) {
                inv[i][j] = adjT[i][j].div(det);
            }
        }

        return { result: inv, steps };
    }

    // 8. Matritsa rangi (Rank)
    static rank(A) {
        const rows = A.length, cols = A[0].length;
        const M = MatrixSolver.clone(A);
        const steps = [];
        steps.push(`<b>Matritsa rangini topish (Gauss elementar almashtirishlari orqali):</b>`);
        steps.push(MatrixSolver.toHTML(M));

        let rank = 0;
        let leadCol = 0;

        for (let r = 0; r < rows; r++) {
            if (leadCol >= cols) break;

            let pivot = -1;
            for (let i = r; i < rows; i++) {
                if (!M[i][leadCol].isZero()) {
                    pivot = i;
                    break;
                }
            }

            if (pivot === -1) {
                leadCol++;
                r--;
                continue;
            }

            if (pivot !== r) {
                const tmp = M[r];
                M[r] = M[pivot];
                M[pivot] = tmp;
                steps.push(`$S_{${r+1}} \\leftrightarrow S_{${pivot+1}}$ almashtirildi:`);
                steps.push(MatrixSolver.toHTML(M));
            }

            for (let i = r + 1; i < rows; i++) {
                if (!M[i][leadCol].isZero()) {
                    const factor = M[i][leadCol].div(M[r][leadCol]);
                    for (let j = leadCol; j < cols; j++) {
                        M[i][j] = M[i][j].sub(factor.mul(M[r][j]));
                    }
                    steps.push(`$S_{${i+1}} = S_{${i+1}} - (${factor.toString()}) \\cdot S_{${r+1}}$`);
                }
            }

            leadCol++;
            rank++;
        }

        // Qadamli ko'rinishdan noldan farqli satrlarni sanash
        let nonZeroRows = 0;
        for (let i = 0; i < rows; i++) {
            const isZeroRow = M[i].every(c => c.isZero());
            if (!isZeroRow) nonZeroRows++;
        }

        steps.push(`Pog'onasimon ko'rinishdagi noldan farqli satrlar soni: <b>${nonZeroRows}</b>`);
        steps.push(`Natija: <b>rang(A) = ${nonZeroRows}</b>`);

        return { result: nonZeroRows, steps };
    }

    // 9. Chiziqli tenglamalar sistemasi (Kramer usuli)
    static solveCramer(A, B) {
        const n = A.length;
        if (n !== A[0].length || n !== B.length) {
            throw new Error("Kramer usuli faqat n noma'lumli n ta tenglamalar sistemasi uchun qo'llaniladi!");
        }

        const steps = [];
        steps.push(`<b>Chiziqli tenglamalar sistemasini Kramer usuli bilan yechish:</b>`);

        // Asosiy determinant Delta
        const detMainObj = MatrixSolver.determinant(A);
        const delta = detMainObj.result;
        steps.push(`1. Asosiy determinant: $\\Delta = <b>${delta.toString()}</b>$`);

        if (delta.isZero()) {
            steps.push(`$\\Delta = 0$ bo'lganligi sababli Kramer usulini qo'llab bo'lmaydi (sistema cheksiz ko'p yechimga ega yoki yechimga ega emas). Gauss usulidan foydalaning.`);
            return { result: null, steps };
        }

        const solutions = [];
        // Har bir noma'lum uchun Delta_i
        for (let i = 0; i < n; i++) {
            // A ning i-ustunini B bilan almashtirish
            const Ai = MatrixSolver.clone(A);
            for (let r = 0; r < n; r++) {
                Ai[r][i] = Fraction.parse(B[r]);
            }
            const detAi = MatrixSolver.determinant(Ai).result;
            const xi = detAi.div(delta);
            solutions.push(xi);
            steps.push(`$\\Delta_{x_{${i+1}}} = ${detAi.toString()}$`);
            steps.push(`$x_{${i+1}} = \\frac{\\Delta_{x_{${i+1}}}}{\\Delta} = \\frac{${detAi.toString()}}{${delta.toString()}} = <b>${xi.toString()}</b>$`);
        }

        return { result: solutions, steps };
    }

    // 10. Chiziqli tenglamalar sistemasi (Gauss usuli - qadamma-qadam)
    static solveGauss(A, B) {
        const n = A.length;
        const m = A[0].length;
        const steps = [];
        steps.push(`<b>Gauss usuli (Kengaytirilgan matritsani pog'onasimon ko'rinishga keltirish):</b>`);

        // Kengaytirilgan matritsa tuzish: [A | B]
        const aug = [];
        for (let i = 0; i < n; i++) {
            aug[i] = [];
            for (let j = 0; j < m; j++) {
                aug[i][j] = Fraction.parse(A[i][j]);
            }
            aug[i][m] = Fraction.parse(B[i]);
        }

        steps.push(`Boshlang'ich kengaytirilgan matritsa $[A | B]$:`);
        steps.push(MatrixSolver.augmentedToHTML(aug, m));

        let row = 0;
        for (let col = 0; col < m && row < n; col++) {
            let pivot = -1;
            for (let i = row; i < n; i++) {
                if (!aug[i][col].isZero()) {
                    pivot = i;
                    break;
                }
            }

            if (pivot === -1) continue;

            if (pivot !== row) {
                const tmp = aug[row];
                aug[row] = aug[pivot];
                aug[pivot] = tmp;
                steps.push(`$S_{${row+1}} \\leftrightarrow S_{${pivot+1}}$ almashtirildi.`);
            }

            for (let i = row + 1; i < n; i++) {
                if (!aug[i][col].isZero()) {
                    const factor = aug[i][col].div(aug[row][col]);
                    for (let j = col; j <= m; j++) {
                        aug[i][j] = aug[i][j].sub(factor.mul(aug[row][j]));
                    }
                    steps.push(`$S_{${i+1}} = S_{${i+1}} - (${factor.toString()}) \\cdot S_{${row+1}}$`);
                }
            }

            row++;
        }

        steps.push(`Pog'onasimon ko'rinish:`);
        steps.push(MatrixSolver.augmentedToHTML(aug, m));

        // Tekshirish: 0 = c (c != 0) holati bormi?
        for (let i = 0; i < n; i++) {
            const allZeroA = aug[i].slice(0, m).every(c => c.isZero());
            if (allZeroA && !aug[i][m].isZero()) {
                steps.push(`$0 \\cdot x_1 + ... + 0 \\cdot x_m = ${aug[i][m].toString()}$ ziddiyat hosil bo'ldi!`);
                steps.push(`<b>Sistema yechimga ega emas (birgalikda emas)!</b>`);
                return { result: null, steps };
            }
        }

        // Yagona yechim (agar kvadrat bo'lsa)
        if (n === m) {
            steps.push(`<b>Teskari yurish (Back substitution):</b>`);
            const X = new Array(n).fill(null);
            for (let i = n - 1; i >= 0; i--) {
                let s = aug[i][m];
                for (let j = i + 1; j < n; j++) {
                    s = s.sub(aug[i][j].mul(X[j]));
                }
                X[i] = s.div(aug[i][i]);
                steps.push(`$x_{${i+1}} = <b>${X[i].toString()}</b>$`);
            }
            return { result: X, steps };
        }

        return { result: aug, steps };
    }

    // 11. Laplas yoyilmasi (Satr yoki Ustun bo'yicha determinant hisoblash)
    static laplaceExpansion(A, type = 'row', idx = 0) {
        const n = A.length;
        if (n !== A[0].length) throw new Error("Laplas yoyilmasi faqat kvadrat matritsalar uchun!");
        const steps = [];
        let det = Fraction.zero();

        if (type === 'row') {
            steps.push(`<b>Determinantni ${idx + 1}-satr bo'yicha Laplas yoyilmasi orqali hisoblash:</b>`);
            steps.push(`Formula: $|A| = \\sum_{j=1}^{${n}} a_{${idx+1}j} \\cdot A_{${idx+1}j} = \\sum_{j=1}^{${n}} a_{${idx+1}j} (-1)^{${idx+1}+j} M_{${idx+1}j}$`);
            const terms = [];

            for (let j = 0; j < n; j++) {
                const aVal = Fraction.parse(A[idx][j]);
                // Minor
                const sub = [];
                for (let r = 0; r < n; r++) {
                    if (r === idx) continue;
                    const row = [];
                    for (let c = 0; c < n; c++) {
                        if (c === j) continue;
                        row.push(A[r][c]);
                    }
                    sub.push(row);
                }
                const subDet = MatrixSolver.determinant(sub).result;
                const sign = ((idx + j) % 2 === 0) ? 1n : -1n;
                const cofactor = subDet.mul(new Fraction(sign, 1n));
                const prod = aVal.mul(cofactor);
                det = det.add(prod);

                steps.push(`$a_{${idx+1}${j+1}} = ${aVal.toString()}$, $\\quad M_{${idx+1}${j+1}} = ${subDet.toString()}$, $\\quad A_{${idx+1}${j+1}} = (-1)^{${idx+1}+${j+1}} M = <b>${cofactor.toString()}</b>$`);
                steps.push(`Had: $a_{${idx+1}${j+1}} \\cdot A_{${idx+1}${j+1}} = (${aVal.toString()})(${cofactor.toString()}) = <b>${prod.toString()}</b>$`);
                terms.push(prod.toString());
            }

            steps.push(`$|A| = ${terms.join(' + ')} = <b>${det.toString()}</b>$`);
        } else {
            steps.push(`<b>Determinantni ${idx + 1}-ustun bo'yicha Laplas yoyilmasi orqali hisoblash:</b>`);
            steps.push(`Formula: $|A| = \\sum_{i=1}^{${n}} a_{i${idx+1}} \\cdot A_{i${idx+1}}$`);
            const terms = [];

            for (let i = 0; i < n; i++) {
                const aVal = Fraction.parse(A[i][idx]);
                const sub = [];
                for (let r = 0; r < n; r++) {
                    if (r === i) continue;
                    const row = [];
                    for (let c = 0; c < n; c++) {
                        if (c === idx) continue;
                        row.push(A[r][c]);
                    }
                    sub.push(row);
                }
                const subDet = MatrixSolver.determinant(sub).result;
                const sign = ((i + idx) % 2 === 0) ? 1n : -1n;
                const cofactor = subDet.mul(new Fraction(sign, 1n));
                const prod = aVal.mul(cofactor);
                det = det.add(prod);

                steps.push(`$a_{${i+1}${idx+1}} = ${aVal.toString()}$, $\\quad A_{${i+1}${idx+1}} = <b>${cofactor.toString()}</b>$`);
                terms.push(prod.toString());
            }

            steps.push(`$|A| = ${terms.join(' + ')} = <b>${det.toString()}</b>$`);
        }

        return { result: det, steps };
    }

    // 12. Bir jinsli sistema (AX = 0) va FYET (Fundamental Yechimlar Tizimi)
    static solveHomogeneous(A) {
        const m = A.length;
        const n = A[0].length;
        const steps = [];
        steps.push(`<b>Bir jinsli chiziqli tenglamalar sistemasi ($AX = 0$):</b>`);
        steps.push(`Tenglamalar soni: $m = ${m}$, noma'lumlar soni: $n = ${n}$`);

        // Gauss-Jordan almashtirishlari
        const M = MatrixSolver.clone(A);
        let rank = 0;
        let leadCol = 0;
        const pivotCols = [];

        for (let r = 0; r < m; r++) {
            if (leadCol >= n) break;
            let pivot = -1;
            for (let i = r; i < m; i++) {
                if (!M[i][leadCol].isZero()) {
                    pivot = i;
                    break;
                }
            }
            if (pivot === -1) {
                leadCol++;
                r--;
                continue;
            }
            if (pivot !== r) {
                const tmp = M[r];
                M[r] = M[pivot];
                M[pivot] = tmp;
            }
            // Pivot elementni 1 ga keltirish
            const pivotVal = M[r][leadCol];
            for (let c = 0; c < n; c++) {
                M[r][c] = M[r][c].div(pivotVal);
            }
            // Boshqa satrlarni 0 ga aylantirish
            for (let i = 0; i < m; i++) {
                if (i !== r && !M[i][leadCol].isZero()) {
                    const factor = M[i][leadCol];
                    for (let c = 0; c < n; c++) {
                        M[i][c] = M[i][c].sub(factor.mul(M[r][c]));
                    }
                }
            }
            pivotCols.push(leadCol);
            leadCol++;
            rank++;
        }

        steps.push(`Keltirilgan qadamli ko'rinish:`);
        steps.push(MatrixSolver.toHTML(M));
        steps.push(`Matritsa rangi: $\\operatorname{rang}(A) = <b>${rank}</b>$`);

        if (rank === n) {
            steps.push(`$\\operatorname{rang}(A) = n$ bo'lgani sababli, bir jinsli sistema <b>faqat trivial (nol) yechimga ega:</b>`);
            steps.push(`$(x_1, x_2, \\dots, x_n) = (0, 0, \\dots, 0)$`);
            return { result: 'trivial', steps };
        }

        const k = n - rank;
        steps.push(`$\\operatorname{rang}(A) < n$ bo'lgani sababli sistema cheksiz ko'p noldan farqli yechimlarga ega.`);
        steps.push(`Fundamental yechimlar tizimi (FYET) dagi bazis vektorlar soni: $k = n - \\operatorname{rang}(A) = ${n} - ${rank} = <b>${k}</b>$ ta.`);

        const isPivot = new Array(n).fill(false);
        pivotCols.forEach(c => isPivot[c] = true);

        const freeCols = [];
        for (let c = 0; c < n; c++) {
            if (!isPivot[c]) freeCols.push(c);
        }

        // FYET vektorlarini tuzish
        const fsr = [];
        for (let i = 0; i < k; i++) {
            const vec = new Array(n).fill(Fraction.zero());
            vec[freeCols[i]] = Fraction.one();
            for (let r = 0; r < rank; r++) {
                vec[pivotCols[r]] = M[r][freeCols[i]].neg();
            }
            fsr.push(vec);
            const vecStr = vec.map(v => v.toString()).join(', ');
            steps.push(`$e_{${i+1}} = (${vecStr})^T$`);
        }

        steps.push(`<b>Umumiy yechim:</b> $X = c_1 e_1 + c_2 e_2 + \\dots + c_{${k}} e_{${k}}$, bu yerda $c_i \\in \\mathbb{R}$ erkin parametrlar.`);
        return { result: fsr, steps };
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MatrixSolver;
}
