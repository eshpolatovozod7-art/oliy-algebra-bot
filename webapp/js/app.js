/**
 * Oliy Algebra WebApp Controller
 * Telegram WebApp SDK integratsiyasi, interfeys va hisoblashlarni boshqarish
 */

const tg = window.Telegram ? window.Telegram.WebApp : null;

const app = {
    sizes: {
        A: { r: 2, c: 2 },
        B: { r: 2, c: 2 },
        sq: 3,
        sle: { eq: 3, vars: 3 }
    },
    lastSolution: null,

    init() {
        if (tg) {
            tg.ready();
            tg.expand();
            if (tg.setHeaderColor) {
                tg.setHeaderColor('#0f172a');
            }
        }

        this.setupTabs();
        this.renderGrid('A');
        this.renderGrid('B');
        this.renderSquareGrid();
        this.renderSLEGrid();

        // Standart boshlang'ich qiymatlar bilan to'ldirish
        this.setDefaultValues();
    },

    setupTabs() {
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

                btn.classList.add('active');
                const targetId = `tab-${btn.dataset.tab}`;
                const target = document.getElementById(targetId);
                if (target) target.classList.add('active');
            });
        });
    },

    setDefaultValues() {
        // A matritsa (2x2)
        this.setMatrixValues('A', [[1, 2], [3, 4]]);
        // B matritsa (2x2)
        this.setMatrixValues('B', [[5, 6], [7, 8]]);
        // Kvadrat matritsa (3x3)
        this.setSquareMatrixValues([[2, 1, 1], [1, 3, 2], [1, 0, 0]]);
        // ChTS (3x3)
        this.setSLEValues(
            [[2, 1, -1], [3, -2, 2], [1, 1, 1]],
            [8, 1, 6]
        );
    },

    // --- GRID RENDERING ---
    renderGrid(name) {
        const { r, c } = this.sizes[name];
        const grid = document.getElementById(`grid-${name}`);
        if (!grid) return;

        // Oldingi qiymatlarni saqlab qolish
        const prevVals = this.getGridValues(name);

        grid.style.gridTemplateColumns = `repeat(${c}, 52px)`;
        grid.innerHTML = '';

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                const inp = document.createElement('input');
                inp.type = 'text';
                inp.id = `cell-${name}-${i}-${j}`;
                inp.value = (prevVals[i] && prevVals[i][j] !== undefined) ? prevVals[i][j] : '0';
                grid.appendChild(inp);
            }
        }

        document.getElementById(`size-${name}-r`).innerText = r;
        document.getElementById(`size-${name}-c`).innerText = c;
    },

    changeMatrixSize(name, deltaR, deltaC) {
        const s = this.sizes[name];
        const newR = Math.max(1, Math.min(6, s.r + deltaR));
        const newC = Math.max(1, Math.min(6, s.c + deltaC));
        if (newR === s.r && newC === s.c) return;

        s.r = newR;
        s.c = newC;
        this.renderGrid(name);
    },

    getGridValues(name) {
        const { r, c } = this.sizes[name];
        const mat = [];
        for (let i = 0; i < r; i++) {
            mat[i] = [];
            for (let j = 0; j < c; j++) {
                const el = document.getElementById(`cell-${name}-${i}-${j}`);
                mat[i][j] = el ? el.value.trim() : '0';
            }
        }
        return mat;
    },

    setMatrixValues(name, mat) {
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                const el = document.getElementById(`cell-${name}-${i}-${j}`);
                if (el) el.value = mat[i][j];
            }
        }
    },

    // --- KVADRAT MATRITSA ---
    renderSquareGrid() {
        const n = this.sizes.sq;
        const grid = document.getElementById('grid-sq');
        if (!grid) return;

        const prevVals = this.getSquareMatrixValues();
        grid.style.gridTemplateColumns = `repeat(${n}, 52px)`;
        grid.innerHTML = '';

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const inp = document.createElement('input');
                inp.type = 'text';
                inp.id = `cell-sq-${i}-${j}`;
                inp.value = (prevVals[i] && prevVals[i][j] !== undefined) ? prevVals[i][j] : '0';
                grid.appendChild(inp);
            }
        }
        document.getElementById('size-sq-n').innerText = n;
    },

    changeSquareMatrixSize(delta) {
        const newN = Math.max(1, Math.min(6, this.sizes.sq + delta));
        if (newN === this.sizes.sq) return;
        this.sizes.sq = newN;
        this.renderSquareGrid();
    },

    getSquareMatrixValues() {
        const n = this.sizes.sq;
        const mat = [];
        for (let i = 0; i < n; i++) {
            mat[i] = [];
            for (let j = 0; j < n; j++) {
                const el = document.getElementById(`cell-sq-${i}-${j}`);
                mat[i][j] = el ? el.value.trim() : '0';
            }
        }
        return mat;
    },

    setSquareMatrixValues(mat) {
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                const el = document.getElementById(`cell-sq-${i}-${j}`);
                if (el) el.value = mat[i][j];
            }
        }
    },

    // --- CHIZIQLI TENGLAMALAR SISTEMASI (ChTS) ---
    renderSLEGrid() {
        const { eq, vars } = this.sizes.sle;
        const grid = document.getElementById('grid-sle');
        if (!grid) return;

        const prevA = this.getSLEAValues();
        const prevB = this.getSLEBValues();

        // ustunlar: vars ta A va 1 ta B (ajratilgan)
        grid.style.gridTemplateColumns = `repeat(${vars}, 50px) 20px 50px`;
        grid.innerHTML = '';

        for (let i = 0; i < eq; i++) {
            for (let j = 0; j < vars; j++) {
                const inp = document.createElement('input');
                inp.type = 'text';
                inp.id = `cell-sle-A-${i}-${j}`;
                inp.value = (prevA[i] && prevA[i][j] !== undefined) ? prevA[i][j] : '0';
                grid.appendChild(inp);
            }

            // Tenglik belgisi '='
            const eqSign = document.createElement('div');
            eqSign.style.display = 'flex';
            eqSign.style.alignItems = 'center';
            eqSign.style.justifyContent = 'center';
            eqSign.style.fontWeight = 'bold';
            eqSign.innerText = '=';
            grid.appendChild(eqSign);

            // B elementi
            const inpB = document.createElement('input');
            inpB.type = 'text';
            inpB.id = `cell-sle-B-${i}`;
            inpB.style.borderColor = 'var(--accent)';
            inpB.value = (prevB[i] !== undefined) ? prevB[i] : '0';
            grid.appendChild(inpB);
        }

        document.getElementById('size-sle-eq').innerText = eq;
        document.getElementById('size-sle-var').innerText = vars;
    },

    changeSLESize(deltaEq, deltaVar) {
        const s = this.sizes.sle;
        const newEq = Math.max(1, Math.min(6, s.eq + deltaEq));
        const newVar = Math.max(1, Math.min(6, s.vars + deltaVar));
        if (newEq === s.eq && newVar === s.vars) return;

        s.eq = newEq;
        s.vars = newVar;
        this.renderSLEGrid();
    },

    getSLEAValues() {
        const { eq, vars } = this.sizes.sle;
        const A = [];
        for (let i = 0; i < eq; i++) {
            A[i] = [];
            for (let j = 0; j < vars; j++) {
                const el = document.getElementById(`cell-sle-A-${i}-${j}`);
                A[i][j] = el ? el.value.trim() : '0';
            }
        }
        return A;
    },

    getSLEBValues() {
        const { eq } = this.sizes.sle;
        const B = [];
        for (let i = 0; i < eq; i++) {
            const el = document.getElementById(`cell-sle-B-${i}`);
            B[i] = el ? el.value.trim() : '0';
        }
        return B;
    },

    setSLEValues(A, B) {
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < A[i].length; j++) {
                const el = document.getElementById(`cell-sle-A-${i}-${j}`);
                if (el) el.value = A[i][j];
            }
            const elB = document.getElementById(`cell-sle-B-${i}`);
            if (elB && B[i] !== undefined) elB.value = B[i];
        }
    },

    // --- OPERATSIYALAR O'ZGARGANDA ELEMENTLARNI KO'RSATISH/YASHIRISH ---
    onMatrixOpChange() {
        const op = document.getElementById('op-matrices').value;
        const cardB = document.getElementById('card-B');
        const scalarWrap = document.getElementById('scalar-input-wrap');

        cardB.style.display = ['add', 'sub', 'mul'].includes(op) ? 'block' : 'none';
        scalarWrap.style.display = (op === 'scalar') ? 'block' : 'none';
    },

    onComplexOpChange() {
        const op = document.getElementById('op-complex').value;
        const z2Wrap = document.getElementById('complex-z2-wrap');
        const nWrap = document.getElementById('complex-n-wrap');

        z2Wrap.style.display = ['add', 'sub', 'mul', 'div'].includes(op) ? 'block' : 'none';
        nWrap.style.display = ['moivre', 'roots'].includes(op) ? 'block' : 'none';
    },

    onPolyOpChange() {
        const op = document.getElementById('op-poly').value;
        const cWrap = document.getElementById('poly-c-wrap');
        const qWrap = document.getElementById('poly-Q-wrap');

        cWrap.style.display = (op === 'horner') ? 'block' : 'none';
        qWrap.style.display = ['divide', 'gcd'].includes(op) ? 'block' : 'none';
    },

    // --- SOLVERS ---
    solveMatrices() {
        try {
            const op = document.getElementById('op-matrices').value;
            const A = this.getGridValues('A');
            let res;
            let title = "";

            if (op === 'det') {
                title = "Determinant |A|";
                res = MatrixSolver.determinant(A);
                res.steps.push(`<div class="result-badge">Natija: |A| = ${res.result.toString()}</div>`);
            } else if (op === 'inv') {
                title = "Teskari matritsa A⁻¹";
                res = MatrixSolver.inverse(A);
                if (res.result) {
                    res.steps.push(`<div class="result-badge">Natija A⁻¹:</div>`);
                    res.steps.push(MatrixSolver.toHTML(res.result));
                }
            } else if (op === 'rank') {
                title = "Matritsa rangi";
                res = MatrixSolver.rank(A);
                res.steps.push(`<div class="result-badge">rang(A) = ${res.result}</div>`);
            } else if (op === 'transpose') {
                title = "Transponirlash Aᵀ";
                res = MatrixSolver.transpose(A);
                res.steps.push(MatrixSolver.toHTML(res.result));
            } else if (op === 'scalar') {
                title = "Songa ko'paytirish";
                const k = document.getElementById('matrix-scalar-k').value.trim();
                res = MatrixSolver.multiplyScalar(k, A);
                res.steps.push(MatrixSolver.toHTML(res.result));
            } else {
                const B = this.getGridValues('B');
                if (op === 'add') {
                    title = "Matritsalarni qo'shish (A + B)";
                    res = MatrixSolver.add(A, B);
                } else if (op === 'sub') {
                    title = "Matritsalarni ayirish (A - B)";
                    res = MatrixSolver.sub(A, B);
                } else if (op === 'mul') {
                    title = "Matritsalarni ko'paytirish (A · B)";
                    res = MatrixSolver.multiply(A, B);
                }
                res.steps.push(`<div class="result-badge">Natija:</div>`);
                res.steps.push(MatrixSolver.toHTML(res.result));
            }

            this.showSolution(title, res.steps);
        } catch (e) {
            alert("Xatolik: " + e.message);
        }
    },

    solveSquareMatrix(type) {
        try {
            const mat = this.getSquareMatrixValues();
            let res;
            let title = "";

            if (type === 'det') {
                title = `Determinant (${this.sizes.sq}x${this.sizes.sq})`;
                res = MatrixSolver.determinant(mat);
                res.steps.push(`<div class="result-badge">|A| = ${res.result.toString()}</div>`);
            } else {
                title = `Teskari matritsa A⁻¹ (${this.sizes.sq}x${this.sizes.sq})`;
                res = MatrixSolver.inverse(mat);
                if (res.result) {
                    res.steps.push(`<div class="result-badge">Natijaviy A⁻¹:</div>`);
                    res.steps.push(MatrixSolver.toHTML(res.result));
                }
            }

            this.showSolution(title, res.steps);
        } catch (e) {
            alert("Xatolik: " + e.message);
        }
    },

    solveSLE(method) {
        try {
            const A = this.getSLEAValues();
            const B = this.getSLEBValues();
            let res;
            let title = "";

            if (method === 'cramer') {
                title = "ChTS - Kramer usuli";
                res = MatrixSolver.solveCramer(A, B);
                if (res.result) {
                    const ans = res.result.map((x, i) => `x_{${i+1}} = ${x.toString()}`).join(', ');
                    res.steps.push(`<div class="result-badge">Yechim: ${ans}</div>`);
                }
            } else {
                title = "ChTS - Gauss usuli";
                res = MatrixSolver.solveGauss(A, B);
                if (res.result && Array.isArray(res.result) && !(res.result[0] instanceof Array)) {
                    const ans = res.result.map((x, i) => `x_{${i+1}} = ${x.toString()}`).join(', ');
                    res.steps.push(`<div class="result-badge">Yechim: ${ans}</div>`);
                }
            }

            this.showSolution(title, res.steps);
        } catch (e) {
            alert("Xatolik: " + e.message);
        }
    },

    solveComplex() {
        try {
            const op = document.getElementById('op-complex').value;
            const z1Str = document.getElementById('complex-z1').value.trim();
            const z1 = ComplexNumber.parse(z1Str);
            let res;
            let title = "";

            if (['add', 'sub', 'mul', 'div'].includes(op)) {
                const z2Str = document.getElementById('complex-z2').value.trim();
                const z2 = ComplexNumber.parse(z2Str);

                if (op === 'add') {
                    title = "Kompleks sonlar: Qo'shish";
                    res = ComplexNumber.add(z1, z2);
                } else if (op === 'sub') {
                    title = "Kompleks sonlar: Ayirish";
                    res = ComplexNumber.sub(z1, z2);
                } else if (op === 'mul') {
                    title = "Kompleks sonlar: Ko'paytirish";
                    res = ComplexNumber.mul(z1, z2);
                } else if (op === 'div') {
                    title = "Kompleks sonlar: Bo'lish";
                    res = ComplexNumber.div(z1, z2);
                }
            } else if (op === 'trig') {
                title = "Kompleks son: Modul, Argument, Trigonometrik shakl";
                res = ComplexNumber.analyze(z1);
            } else if (op === 'moivre') {
                title = "Muavr formulasi (zⁿ)";
                const n = parseInt(document.getElementById('complex-n').value, 10);
                res = ComplexNumber.powerMoivre(z1, n);
            } else if (op === 'roots') {
                title = "Kompleks sondan ildizlar (ⁿ√z)";
                const n = parseInt(document.getElementById('complex-n').value, 10);
                res = ComplexNumber.roots(z1, n);
            }

            this.showSolution(title, res.steps);
        } catch (e) {
            alert("Xatolik: " + e.message);
        }
    },

    solvePolynomial() {
        try {
            const op = document.getElementById('op-poly').value;
            const pStr = document.getElementById('poly-P').value.trim();
            const P = Polynomial.parse(pStr);
            let res;
            let title = "";

            if (op === 'horner') {
                title = "Gorner sxemasi";
                const cVal = document.getElementById('poly-c').value.trim();
                res = Polynomial.horner(P, cVal);
            } else if (op === 'divide') {
                title = "Ko'phadlarni qoldiqli bo'lish";
                const qStr = document.getElementById('poly-Q').value.trim();
                const Q = Polynomial.parse(qStr);
                res = Polynomial.divide(P, Q);
            } else if (op === 'gcd') {
                title = "Ko'phadlar EKUBi (Yevklid)";
                const qStr = document.getElementById('poly-Q').value.trim();
                const Q = Polynomial.parse(qStr);
                res = Polynomial.gcd(P, Q);
            }

            this.showSolution(title, res.steps);
        } catch (e) {
            alert("Xatolik: " + e.message);
        }
    },

    // --- YECHIMNI CHIQARISH ---
    showSolution(title, steps) {
        const container = document.getElementById('solution-container');
        const box = document.getElementById('solution-box');

        let html = `<h3 style="margin-bottom: 12px; color: var(--link-color);">${title}</h3>`;
        steps.forEach((step, idx) => {
            html += `<div class="step-item">${this.renderMathText(step)}</div>`;
        });

        box.innerHTML = html;
        container.style.display = 'block';

        this.lastSolution = {
            title,
            steps: steps.map(s => s.replace(/<[^>]+>/g, '').trim()),
            rawSteps: steps
        };

        // Scroll qilish
        container.scrollIntoView({ behavior: 'smooth' });
    },

    renderMathText(str) {
        if (!window.katex) return str;

        // $...$ orasidagi formulalarni KaTeX orqali render qilish
        return str.replace(/\$([^\$]+)\$/g, (match, formula) => {
            try {
                return window.katex.renderToString(formula, { throwOnError: false });
            } catch (e) {
                return match;
            }
        });
    },

    copySolution() {
        if (!this.lastSolution) return;
        const text = `${this.lastSolution.title}\n\n` + this.lastSolution.steps.join('\n');
        navigator.clipboard.writeText(text).then(() => {
            alert("Yechim nusxalandi!");
        });
    },

    sendToBot() {
        if (!this.lastSolution) return;

        if (tg) {
            const payload = {
                title: this.lastSolution.title,
                steps: this.lastSolution.steps.slice(0, 15) // Telegram xabar chegarasiga moslab
            };
            tg.sendData(JSON.stringify(payload));
        } else {
            alert("Bu funksiya Telegram ichidagi Mini App orqali ishlaydi!");
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    app.init();
});
