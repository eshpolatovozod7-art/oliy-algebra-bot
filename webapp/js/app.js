/**
 * Oliy Algebra WebApp Controller (16 ta Mavzu)
 * Barcha 16 ta amaliy va ma'ruza mavzulari bo'yicha interfeys va hisoblashlarni boshqarish
 */

const tg = window.Telegram ? window.Telegram.WebApp : null;

const app = {
    sizes: {
        A: { r: 2, c: 2 },
        B: { r: 2, c: 2 },
        sq: 3,
        lap: 3,
        inv: 3,
        sle: { eq: 3, vars: 3 },
        rank: { r: 3, c: 4 },
        homog: { m: 3, n: 4 }
    },
    lastSolution: null,

    init() {
        if (tg) {
            tg.ready();
            tg.expand();
            if (tg.setHeaderColor) tg.setHeaderColor('#0f172a');
        }

        // Barcha gridlarni chizish
        this.renderGrid('A');
        this.renderGrid('B');
        this.renderSquareGrid();
        this.renderLaplaceGrid();
        this.renderInvGrid();
        this.renderSLEGrid();
        this.renderRankGrid();
        this.renderHomogGrid();

        // Standart boshlang'ich namunalar
        this.loadSample(1);
    },

    // --- MAVZU TANLASH ---
    onTopicSelect(topicNum) {
        document.querySelectorAll('.topic-section').forEach(sec => sec.classList.remove('active'));
        const target = document.getElementById(`sec-topic-${topicNum}`);
        if (target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },

    quickSample(topicNum) {
        document.getElementById('main-topic-select').value = topicNum;
        this.onTopicSelect(topicNum);
        this.loadSample(topicNum);

        // Avtomatik yechish
        setTimeout(() => {
            switch(parseInt(topicNum)) {
                case 1: this.solveTopic1(); break;
                case 2: this.solveTopic2(); break;
                case 3: this.solveTopic3(); break;
                case 4: this.solveTopic4(); break;
                case 5: this.solveTopic5(); break;
                case 6: this.solveSLE('cramer'); break;
                case 7: this.solveTopic7(); break;
                case 8: this.solveTopic8(); break;
                case 9: this.solveTopic9(); break;
                case 10: this.solveTopic10('moivre'); break;
                case 11: this.solveTopic11(); break;
                case 12: this.solveTopic12(); break;
                case 13: this.solveTopic13('horner'); break;
                case 14: this.solveTopic14(); break;
                case 15: this.solveTopic15(); break;
            }
        }, 100);
    },

    // --- NAMUNA MISOLLARNI YUKLASH ---
    loadSample(topicNum) {
        switch (parseInt(topicNum)) {
            case 1:
                this.setMatrixValues('A', [[1, 2], [3, 4]]);
                this.setMatrixValues('B', [[5, 6], [7, 8]]);
                break;
            case 2:
                document.getElementById('perm-input').value = "4 3 1 5 2";
                break;
            case 3:
                this.setSquareMatrixValues([[2, 1, 1], [1, 3, 2], [1, 0, 0]]);
                break;
            case 4:
                this.setLaplaceMatrixValues([[1, 2, 3], [0, 4, 5], [1, 0, 6]]);
                document.getElementById('laplace-type').value = 'row';
                document.getElementById('laplace-idx').value = '1';
                break;
            case 5:
                this.setInvMatrixValues([[1, 2, 3], [0, 1, 4], [5, 6, 0]]);
                break;
            case 6:
                this.setSLEValues(
                    [[2, 1, -1], [3, -2, 2], [1, 1, 1]],
                    [8, 1, 6]
                );
                break;
            case 7:
                this.setRankMatrixValues([
                    [1, 2, 3, 4],
                    [2, 4, 6, 8],
                    [3, 6, 9, 12]
                ]);
                break;
            case 8:
                this.setHomogMatrixValues([
                    [1, 2, 4, -3],
                    [3, 5, 6, -4],
                    [4, 5, -2, 3]
                ]);
                break;
            case 9:
                document.getElementById('complex9-z1').value = "2 + 3i";
                document.getElementById('complex9-z2').value = "1 - 2i";
                break;
            case 10:
                document.getElementById('complex10-z').value = "1 + i";
                document.getElementById('complex10-n').value = "4";
                break;
            case 11:
                document.getElementById('poly11-P').value = "2x^4 - 3x^3 + 4x^2 - 5x + 6";
                document.getElementById('poly11-Q').value = "x^2 - 3x + 1";
                break;
            case 12:
                document.getElementById('poly12-P').value = "x^4 + x^3 - 3x^2 - 4x - 1";
                document.getElementById('poly12-Q').value = "x^3 + x^2 - x - 1";
                break;
            case 13:
                document.getElementById('poly13-P').value = "x^4 - 2x^3 + 4x^2 - 6x + 8";
                document.getElementById('poly13-c').value = "2";
                break;
            case 14:
                document.getElementById('rf-P').value = "x + 3";
                document.getElementById('rf-a').value = "1";
                document.getElementById('rf-b').value = "-2";
                break;
            case 15:
                document.getElementById('cardano-a').value = "1";
                document.getElementById('cardano-b').value = "0";
                document.getElementById('cardano-c').value = "-6";
                document.getElementById('cardano-d').value = "-9";
                break;
        }
    },

    // --- GRID RENDERING HELPERS ---
    renderGrid(name) {
        const { r, c } = this.sizes[name];
        const grid = document.getElementById(`grid-${name}`);
        if (!grid) return;
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
        s.r = Math.max(1, Math.min(6, s.r + deltaR));
        s.c = Math.max(1, Math.min(6, s.c + deltaC));
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
        this.sizes[name] = { r: mat.length, c: mat[0].length };
        this.renderGrid(name);
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                const el = document.getElementById(`cell-${name}-${i}-${j}`);
                if (el) el.value = mat[i][j];
            }
        }
    },

    // Kvadrat matritsa
    renderSquareGrid() {
        const n = this.sizes.sq;
        const grid = document.getElementById('grid-sq');
        if (!grid) return;
        const prev = this.getGenericSquareValues('sq', n);
        grid.style.gridTemplateColumns = `repeat(${n}, 52px)`;
        grid.innerHTML = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const inp = document.createElement('input');
                inp.type = 'text';
                inp.id = `cell-sq-${i}-${j}`;
                inp.value = (prev[i] && prev[i][j] !== undefined) ? prev[i][j] : '0';
                grid.appendChild(inp);
            }
        }
        document.getElementById('size-sq-n').innerText = n;
    },

    changeSquareMatrixSize(delta) {
        this.sizes.sq = Math.max(1, Math.min(6, this.sizes.sq + delta));
        this.renderSquareGrid();
    },

    setSquareMatrixValues(mat) {
        this.sizes.sq = mat.length;
        this.renderSquareGrid();
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                const el = document.getElementById(`cell-sq-${i}-${j}`);
                if (el) el.value = mat[i][j];
            }
        }
    },

    // Laplas grid
    renderLaplaceGrid() {
        const n = this.sizes.lap;
        const grid = document.getElementById('grid-lap');
        if (!grid) return;
        const prev = this.getGenericSquareValues('lap', n);
        grid.style.gridTemplateColumns = `repeat(${n}, 52px)`;
        grid.innerHTML = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const inp = document.createElement('input');
                inp.type = 'text';
                inp.id = `cell-lap-${i}-${j}`;
                inp.value = (prev[i] && prev[i][j] !== undefined) ? prev[i][j] : '0';
                grid.appendChild(inp);
            }
        }
        document.getElementById('size-lap-n').innerText = n;
    },

    changeLaplaceSize(delta) {
        this.sizes.lap = Math.max(1, Math.min(6, this.sizes.lap + delta));
        this.renderLaplaceGrid();
    },

    setLaplaceMatrixValues(mat) {
        this.sizes.lap = mat.length;
        this.renderLaplaceGrid();
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                const el = document.getElementById(`cell-lap-${i}-${j}`);
                if (el) el.value = mat[i][j];
            }
        }
    },

    // Inverse grid
    renderInvGrid() {
        const n = this.sizes.inv;
        const grid = document.getElementById('grid-inv');
        if (!grid) return;
        const prev = this.getGenericSquareValues('inv', n);
        grid.style.gridTemplateColumns = `repeat(${n}, 52px)`;
        grid.innerHTML = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const inp = document.createElement('input');
                inp.type = 'text';
                inp.id = `cell-inv-${i}-${j}`;
                inp.value = (prev[i] && prev[i][j] !== undefined) ? prev[i][j] : '0';
                grid.appendChild(inp);
            }
        }
        document.getElementById('size-inv-n').innerText = n;
    },

    changeInvSize(delta) {
        this.sizes.inv = Math.max(1, Math.min(6, this.sizes.inv + delta));
        this.renderInvGrid();
    },

    setInvMatrixValues(mat) {
        this.sizes.inv = mat.length;
        this.renderInvGrid();
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                const el = document.getElementById(`cell-inv-${i}-${j}`);
                if (el) el.value = mat[i][j];
            }
        }
    },

    getGenericSquareValues(prefix, n) {
        const mat = [];
        for (let i = 0; i < n; i++) {
            mat[i] = [];
            for (let j = 0; j < n; j++) {
                const el = document.getElementById(`cell-${prefix}-${i}-${j}`);
                mat[i][j] = el ? el.value.trim() : '0';
            }
        }
        return mat;
    },

    // ChTS (SLE)
    renderSLEGrid() {
        const { eq, vars } = this.sizes.sle;
        const grid = document.getElementById('grid-sle');
        if (!grid) return;
        const prevA = this.getSLEAValues();
        const prevB = this.getSLEBValues();
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
            const eqSign = document.createElement('div');
            eqSign.style.cssText = 'display:flex;align-items:center;justify-content:center;font-weight:bold;';
            eqSign.innerText = '=';
            grid.appendChild(eqSign);

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
        this.sizes.sle.eq = Math.max(1, Math.min(6, this.sizes.sle.eq + deltaEq));
        this.sizes.sle.vars = Math.max(1, Math.min(6, this.sizes.sle.vars + deltaVar));
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
        this.sizes.sle = { eq: A.length, vars: A[0].length };
        this.renderSLEGrid();
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < A[i].length; j++) {
                const el = document.getElementById(`cell-sle-A-${i}-${j}`);
                if (el) el.value = A[i][j];
            }
            const elB = document.getElementById(`cell-sle-B-${i}`);
            if (elB && B[i] !== undefined) elB.value = B[i];
        }
    },

    // Rank Grid
    renderRankGrid() {
        const { r, c } = this.sizes.rank;
        const grid = document.getElementById('grid-rank');
        if (!grid) return;
        const prev = this.getGenericRectValues('rank', r, c);
        grid.style.gridTemplateColumns = `repeat(${c}, 52px)`;
        grid.innerHTML = '';
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                const inp = document.createElement('input');
                inp.type = 'text';
                inp.id = `cell-rank-${i}-${j}`;
                inp.value = (prev[i] && prev[i][j] !== undefined) ? prev[i][j] : '0';
                grid.appendChild(inp);
            }
        }
        document.getElementById('size-rank-r').innerText = r;
        document.getElementById('size-rank-c').innerText = c;
    },

    changeRankSize(deltaR, deltaC) {
        this.sizes.rank.r = Math.max(1, Math.min(6, this.sizes.rank.r + deltaR));
        this.sizes.rank.c = Math.max(1, Math.min(6, this.sizes.rank.c + deltaC));
        this.renderRankGrid();
    },

    setRankMatrixValues(mat) {
        this.sizes.rank = { r: mat.length, c: mat[0].length };
        this.renderRankGrid();
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                const el = document.getElementById(`cell-rank-${i}-${j}`);
                if (el) el.value = mat[i][j];
            }
        }
    },

    // Homogeneous Grid
    renderHomogGrid() {
        const { m, n } = this.sizes.homog;
        const grid = document.getElementById('grid-homog');
        if (!grid) return;
        const prev = this.getGenericRectValues('homog', m, n);
        grid.style.gridTemplateColumns = `repeat(${n}, 52px)`;
        grid.innerHTML = '';
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                const inp = document.createElement('input');
                inp.type = 'text';
                inp.id = `cell-homog-${i}-${j}`;
                inp.value = (prev[i] && prev[i][j] !== undefined) ? prev[i][j] : '0';
                grid.appendChild(inp);
            }
        }
        document.getElementById('size-homog-m').innerText = m;
        document.getElementById('size-homog-n').innerText = n;
    },

    changeHomogSize(deltaM, deltaN) {
        this.sizes.homog.m = Math.max(1, Math.min(6, this.sizes.homog.m + deltaM));
        this.sizes.homog.n = Math.max(1, Math.min(6, this.sizes.homog.n + deltaN));
        this.renderHomogGrid();
    },

    setHomogMatrixValues(mat) {
        this.sizes.homog = { m: mat.length, n: mat[0].length };
        this.renderHomogGrid();
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                const el = document.getElementById(`cell-homog-${i}-${j}`);
                if (el) el.value = mat[i][j];
            }
        }
    },

    getGenericRectValues(prefix, r, c) {
        const mat = [];
        for (let i = 0; i < r; i++) {
            mat[i] = [];
            for (let j = 0; j < c; j++) {
                const el = document.getElementById(`cell-${prefix}-${i}-${j}`);
                mat[i][j] = el ? el.value.trim() : '0';
            }
        }
        return mat;
    },

    onMatrixOpChange() {
        const op = document.getElementById('op-matrices').value;
        document.getElementById('card-B').style.display = ['add', 'sub', 'mul'].includes(op) ? 'block' : 'none';
        document.getElementById('scalar-input-wrap').style.display = (op === 'scalar') ? 'block' : 'none';
    },

    onComplex9OpChange() {
        const op = document.getElementById('op-complex9').value;
        document.getElementById('complex9-z2-wrap').style.display = ['add', 'sub', 'mul', 'div'].includes(op) ? 'block' : 'none';
    },

    // ==========================================
    // --- 16 TA MAVZU BO'YICHA SOLVERLAR ---
    // ==========================================

    // 1-Mavzu: Matritsalar
    solveTopic1() {
        try {
            const op = document.getElementById('op-matrices').value;
            const A = this.getGridValues('A');
            let res, title;

            if (op === 'transpose') {
                title = "1-Mavzu: Transponirlash (Aᵀ)";
                res = MatrixSolver.transpose(A);
                res.steps.push(MatrixSolver.toHTML(res.result));
            } else if (op === 'scalar') {
                title = "1-Mavzu: Songa ko'paytirish (k · A)";
                const k = document.getElementById('matrix-scalar-k').value.trim();
                res = MatrixSolver.multiplyScalar(k, A);
                res.steps.push(MatrixSolver.toHTML(res.result));
            } else {
                const B = this.getGridValues('B');
                if (op === 'add') {
                    title = "1-Mavzu: Matritsalarni qo'shish (A + B)";
                    res = MatrixSolver.add(A, B);
                } else if (op === 'sub') {
                    title = "1-Mavzu: Matritsalarni ayirish (A - B)";
                    res = MatrixSolver.sub(A, B);
                } else if (op === 'mul') {
                    title = "1-Mavzu: Matritsalar ko'paytmasi (A · B)";
                    res = MatrixSolver.multiply(A, B);
                }
                res.steps.push(`<div class="result-badge">Natija:</div>`);
                res.steps.push(MatrixSolver.toHTML(res.result));
            }
            this.showSolution(title, res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 2-Mavzu: O'rin almashtirish
    solveTopic2() {
        try {
            const str = document.getElementById('perm-input').value;
            const p = PermutationSolver.parse(str);
            const res = PermutationSolver.analyze(p);
            this.showSolution("2-Mavzu: O'rin almashtirishlar va Inversiyalar", res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 3-Mavzu: Determinant
    solveTopic3() {
        try {
            const mat = this.getGenericSquareValues('sq', this.sizes.sq);
            const res = MatrixSolver.determinant(mat);
            res.steps.push(`<div class="result-badge">|A| = ${res.result.toString()}</div>`);
            this.showSolution(`3-Mavzu: Determinant (${this.sizes.sq}x${this.sizes.sq})`, res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 4-Mavzu: Laplas yoyilmasi
    solveTopic4() {
        try {
            const mat = this.getGenericSquareValues('lap', this.sizes.lap);
            const type = document.getElementById('laplace-type').value;
            const idx = parseInt(document.getElementById('laplace-idx').value, 10) - 1;
            const res = MatrixSolver.laplaceExpansion(mat, type, idx);
            res.steps.push(`<div class="result-badge">|A| = ${res.result.toString()}</div>`);
            this.showSolution("4-Mavzu: Minor va Laplas yoyilmasi", res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 5-Mavzu: Teskari matritsa
    solveTopic5() {
        try {
            const mat = this.getGenericSquareValues('inv', this.sizes.inv);
            const res = MatrixSolver.inverse(mat);
            if (res.result) {
                res.steps.push(`<div class="result-badge">Teskari matritsa A⁻¹:</div>`);
                res.steps.push(MatrixSolver.toHTML(res.result));
            }
            this.showSolution("5-Mavzu: Teskari matritsa topish (A⁻¹)", res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 6-Mavzu: ChTS
    solveSLE(method) {
        try {
            const A = this.getSLEAValues();
            const B = this.getSLEBValues();
            let res, title;
            if (method === 'cramer') {
                title = "6-Mavzu: ChTS - Kramer usuli";
                res = MatrixSolver.solveCramer(A, B);
            } else {
                title = "6-Mavzu: ChTS - Gauss usuli";
                res = MatrixSolver.solveGauss(A, B);
            }
            if (res.result && Array.isArray(res.result) && !(res.result[0] instanceof Array)) {
                const ans = res.result.map((x, i) => `x_{${i+1}} = ${x.toString()}`).join(', ');
                res.steps.push(`<div class="result-badge">Yechim: ${ans}</div>`);
            }
            this.showSolution(title, res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 7-Mavzu: Matritsa rangi
    solveTopic7() {
        try {
            const mat = this.getGenericRectValues('rank', this.sizes.rank.r, this.sizes.rank.c);
            const res = MatrixSolver.rank(mat);
            res.steps.push(`<div class="result-badge">rang(A) = ${res.result}</div>`);
            this.showSolution("7-Mavzu: Matritsa rangi", res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 8-Mavzu: Bir jinsli sistema va FYET
    solveTopic8() {
        try {
            const mat = this.getGenericRectValues('homog', this.sizes.homog.m, this.sizes.homog.n);
            const res = MatrixSolver.solveHomogeneous(mat);
            this.showSolution("8-Mavzu: Bir jinsli sistema va FYET", res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 9-Mavzu: Kompleks sonlar amallari
    solveTopic9() {
        try {
            const op = document.getElementById('op-complex9').value;
            const z1 = ComplexNumber.parse(document.getElementById('complex9-z1').value);
            let res, title;

            if (op === 'trig') {
                title = "9-Mavzu: Kompleks son - Modul, Argument, Shakllar";
                res = ComplexNumber.analyze(z1);
            } else {
                const z2 = ComplexNumber.parse(document.getElementById('complex9-z2').value);
                if (op === 'add') { title = "9-Mavzu: Qo'shish"; res = ComplexNumber.add(z1, z2); }
                else if (op === 'sub') { title = "9-Mavzu: Ayirish"; res = ComplexNumber.sub(z1, z2); }
                else if (op === 'mul') { title = "9-Mavzu: Ko'paytirish"; res = ComplexNumber.mul(z1, z2); }
                else if (op === 'div') { title = "9-Mavzu: Bo'lish"; res = ComplexNumber.div(z1, z2); }
            }
            this.showSolution(title, res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 10-Mavzu: Muavr va ildizlar
    solveTopic10(type) {
        try {
            const z = ComplexNumber.parse(document.getElementById('complex10-z').value);
            const n = parseInt(document.getElementById('complex10-n').value, 10);
            let res, title;
            if (type === 'moivre') {
                title = `10-Mavzu: Muavr formulasi (z^${n})`;
                res = ComplexNumber.powerMoivre(z, n);
            } else {
                title = `10-Mavzu: Kompleks sondan ${n}-darajali ildizlar`;
                res = ComplexNumber.roots(z, n);
            }
            this.showSolution(title, res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 11-Mavzu: Burchakli qoldiqli bo'lish
    solveTopic11() {
        try {
            const P = Polynomial.parse(document.getElementById('poly11-P').value);
            const Q = Polynomial.parse(document.getElementById('poly11-Q').value);
            const res = Polynomial.divide(P, Q);
            this.showSolution("11-Mavzu: Ko'phadlarni qoldiqli bo'lish", res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 12-Mavzu: EKUB (Yevklid)
    solveTopic12() {
        try {
            const P = Polynomial.parse(document.getElementById('poly12-P').value);
            const Q = Polynomial.parse(document.getElementById('poly12-Q').value);
            const res = Polynomial.gcd(P, Q);
            this.showSolution("12-Mavzu: Ko'phadlarning EKUBi (Yevklid)", res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 13-Mavzu: Gorner va ildizlar
    solveTopic13(type) {
        try {
            const P = Polynomial.parse(document.getElementById('poly13-P').value);
            let res, title;
            if (type === 'horner') {
                const c = document.getElementById('poly13-c').value;
                title = "13-Mavzu: Gorner sxemasi jadvali";
                res = Polynomial.horner(P, c);
            } else {
                title = "13-Mavzu: Ratsional ildizlarni nomzodlar bilan topish";
                res = Polynomial.findRationalRoots(P);
            }
            this.showSolution(title, res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 14-Mavzu: Sodda kasrlarga yoyish
    solveTopic14() {
        try {
            const pStr = document.getElementById('rf-P').value;
            const P = Polynomial.parse(pStr);
            const a = document.getElementById('rf-a').value;
            const b = document.getElementById('rf-b').value;
            const res = RationalFractionSolver.decomposeSimple(P.coeffs, a, b);
            this.showSolution("14-Mavzu: Sodda kasrlarga yoyish", res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 15-Mavzu: Kardano formulasi
    solveTopic15() {
        try {
            const a = parseFloat(document.getElementById('cardano-a').value);
            const b = parseFloat(document.getElementById('cardano-b').value);
            const c = parseFloat(document.getElementById('cardano-c').value);
            const d = parseFloat(document.getElementById('cardano-d').value);
            const res = HigherDegreeSolver.solveCubic(a, b, c, d);
            this.showSolution("15-Mavzu: 3-darajali tenglama (Kardano)", res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // --- YECHIMNI CHIQARISH VA TG BILAN INTEGRATSIYA ---
    showSolution(title, steps) {
        const container = document.getElementById('solution-container');
        const box = document.getElementById('solution-box');

        let html = `<h3 style="margin-bottom: 12px; color: var(--link-color);">${title}</h3>`;
        steps.forEach(step => {
            html += `<div class="step-item">${this.renderMathText(step)}</div>`;
        });

        box.innerHTML = html;
        container.style.display = 'block';

        this.lastSolution = {
            title,
            steps: steps.map(s => s.replace(/<[^>]+>/g, '').trim()),
            rawSteps: steps
        };

        container.scrollIntoView({ behavior: 'smooth' });
    },

    renderMathText(str) {
        if (!window.katex) return str;
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
                steps: this.lastSolution.steps.slice(0, 15)
            };
            tg.sendData(JSON.stringify(payload));
        } else {
            alert("Bu tugma Telegram ichidagi Mini App orqali ishlaydi!");
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    app.init();
});
