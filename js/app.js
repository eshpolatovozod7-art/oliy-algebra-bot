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

        // Saqlangan mavzuni (Tun / Kun) tiklash
        try {
            const savedTheme = localStorage.getItem('oa_theme');
            if (savedTheme === 'light') {
                document.body.classList.add('light-theme');
                const btn = document.getElementById('theme-toggle-btn');
                if (btn) btn.innerText = '☀️';
            }
        } catch (e) {}

        // Barcha gridlarni chizish
        this.renderGrid('A');
        this.renderGrid('B');
        this.renderSquareGrid();
        this.renderLaplaceGrid();
        this.renderInvGrid();
        this.renderSLEGrid();
        this.renderRankGrid();
        this.renderHomogGrid();

        // Barcha 15 ta mavzu uchun namunaviy qiymatlarni dastlabki yuklash
        for (let i = 1; i <= 15; i++) {
            this.loadSample(i);
        }

        this.onAmaliyFileChange("1");
        this.setupTopicPresets();

        // URL parametrlari bo'yicha rejimni tanlash (?mode=topics&topic=3)
        let modeParam = null;
        let topicParam = null;
        let fileParam = null;
        try {
            if (window.location && window.location.search) {
                const urlParams = new URLSearchParams(window.location.search);
                modeParam = urlParams.get('mode');
                topicParam = urlParams.get('topic');
                fileParam = urlParams.get('file');
            }
        } catch (e) {}

        if (modeParam === 'topics' || (window.location && window.location.hash === '#topics')) {
            this.switchMode('topics');
            if (topicParam) {
                this.onTopicSelect(topicParam);
            }
        } else {
            this.switchMode('files');
            if (fileParam) {
                const fSel = document.getElementById('amaliy-file-select');
                if (fSel) {
                    fSel.value = fileParam;
                    this.onAmaliyFileChange(fileParam);
                }
            }
        }
    },

    // --- MODE SWITCHER (FAYLLAR / MAVZULAR) ---
    switchMode(mode) {
        const btnFiles = document.getElementById('btn-mode-files');
        const btnTopics = document.getElementById('btn-mode-topics');
        const secFiles = document.getElementById('sec-files-category');
        const secTopics = document.getElementById('sec-topics-category');

        if (mode === 'files') {
            if (btnFiles) btnFiles.classList.add('active');
            if (btnTopics) btnTopics.classList.remove('active');
            if (secFiles) secFiles.style.display = 'block';
            if (secTopics) secTopics.style.display = 'none';
        } else {
            if (btnTopics) btnTopics.classList.add('active');
            if (btnFiles) btnFiles.classList.remove('active');
            if (secTopics) secTopics.style.display = 'block';
            if (secFiles) secFiles.style.display = 'none';
            const selEl = document.getElementById('main-topic-select');
            const topicVal = selEl ? selEl.value : '1';
            this.onTopicSelect(topicVal || '1');
        }
    },

    pdfPages: {
        1: 4, 2: 2, 3: 4, 4: 4, 5: 4,
        6: 4, 7: 4, 8: 4, 9: 3, 10: 4,
        11: 4, 12: 3, 13: 4, 14: 4, 15: 4
    },
    currentPdfPage: 1,

    togglePdfPreview() {
        const wrap = document.getElementById('amaliy-preview-wrap');
        const txt = document.getElementById('btn-toggle-preview-text');
        if (!wrap) return;
        const isHidden = wrap.style.display === 'none' || wrap.style.display === '';
        wrap.style.display = isHidden ? 'block' : 'none';
        if (txt) txt.innerText = isHidden ? "Yashirish" : "Ko'rsatish";
    },

    setPdfPage(fileId, pageNum) {
        this.currentPdfPage = pageNum;
        const img = document.getElementById('amaliy-preview-img');
        if (img) {
            img.src = `amaliy_previews/amaliy_${fileId}-${pageNum}.png`;
        }
        const tabs = document.getElementById('amaliy-page-tabs');
        if (tabs) {
            Array.from(tabs.children).forEach((btn, idx) => {
                if (idx + 1 === pageNum) {
                    btn.classList.add('active');
                    btn.style.background = 'var(--link-color)';
                    btn.style.color = '#fff';
                } else {
                    btn.classList.remove('active');
                    btn.style.background = 'rgba(255,255,255,0.1)';
                    btn.style.color = 'var(--text-color)';
                }
            });
        }
    },

    onAmaliyFileChange(fileId) {
        if (typeof AMALIY_DATABASE === 'undefined') return;
        const data = AMALIY_DATABASE[fileId];
        if (!data) return;

        const fileNum = parseInt(fileId);
        const pdfEl = document.getElementById('amaliy-pdf-name');
        if (pdfEl) pdfEl.innerText = `📄 Fayl: ${data.file}`;

        // Asl PDF CamScanner sahifasi previewini tayyorlash
        const maxPages = this.pdfPages[fileNum] || 2;
        const tabs = document.getElementById('amaliy-page-tabs');
        if (tabs) {
            tabs.innerHTML = '';
            for (let p = 1; p <= maxPages; p++) {
                const btn = document.createElement('button');
                btn.className = 'btn-secondary';
                btn.style.padding = '4px 10px';
                btn.style.fontSize = '0.78rem';
                btn.innerText = `${p}-sahifa`;
                btn.onclick = () => this.setPdfPage(fileNum, p);
                tabs.appendChild(btn);
            }
        }
        this.setPdfPage(fileNum, 1);

        const taskSelect = document.getElementById('amaliy-task-select');
        if (!taskSelect) return;
        taskSelect.innerHTML = '';

        data.tasks.forEach((t) => {
            const opt = document.createElement('option');
            opt.value = t.id;
            opt.innerText = t.name;
            taskSelect.appendChild(opt);
        });

        // Barcha misollar ro'yxatini chiqarish (Formulalari bilan xuddi darslikdek)
        const summaryEl = document.getElementById('amaliy-tasks-summary');
        if (summaryEl) {
            let listHtml = `<div style="font-weight: 700; margin-bottom: 8px; color: var(--text-color); font-size: 0.95rem;">📋 Ushbu fayldagi barcha misollar (${data.tasks.length} ta):</div><div style="display: flex; flex-direction: column; gap: 8px;">`;
            data.tasks.forEach((t) => {
                const mathHtml = this.formatTaskCondition(t.shart);
                listHtml += `
                <div style="padding: 10px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 220px;">
                        <div style="font-weight: 600; font-size: 0.85rem; color: var(--link-color);">${t.name}</div>
                        <div style="margin-top: 4px; overflow-x: auto;">${mathHtml}</div>
                    </div>
                    <button class="btn-secondary" style="padding: 6px 14px; font-size: 0.82rem; white-space: nowrap;" onclick="app.selectAndSolveTask('${t.id}')">⚡ Yechish</button>
                </div>`;
            });
            listHtml += '</div>';
            summaryEl.innerHTML = listHtml;
        }

        if (data.tasks.length > 0) {
            this.onAmaliyTaskChange(data.tasks[0].id);
        }
    },

    onAmaliyTaskChange(taskId) {
        if (typeof AMALIY_DATABASE === 'undefined') return;
        const fileId = document.getElementById('amaliy-file-select').value;
        const data = AMALIY_DATABASE[fileId];
        if (!data) return;

        const task = data.tasks.find(t => t.id === taskId);
        if (!task) return;

        const nameBadge = document.getElementById('amaliy-task-name-badge');
        if (nameBadge) {
            nameBadge.innerText = task.name;
        }

        const formulaEl = document.getElementById('amaliy-shart-formula');
        if (formulaEl) {
            formulaEl.innerHTML = this.formatTaskCondition(task.shart);
        }
    },

    selectAndSolveTask(taskId) {
        const sel = document.getElementById('amaliy-task-select');
        if (sel) sel.value = taskId;
        this.onAmaliyTaskChange(taskId);
        this.solveAmaliyTask();
    },

    solveAmaliyTask() {
        if (typeof AMALIY_DATABASE === 'undefined') return;
        const fileId = document.getElementById('amaliy-file-select').value;
        const data = AMALIY_DATABASE[fileId];
        if (!data) return;

        const taskId = document.getElementById('amaliy-task-select').value;
        const task = data.tasks.find(t => t.id === taskId);
        if (!task || !task.solve) return;

        task.solve();
    },

    // --- MAVZU TANLASH ---
    onTopicSelect(topicNum) {
        const sel = document.getElementById('main-topic-select');
        if (sel && sel.value !== String(topicNum)) {
            sel.value = String(topicNum);
        }
        document.querySelectorAll('#sec-topics-category .topic-section').forEach(sec => sec.classList.remove('active'));
        const target = document.getElementById(`sec-topic-${topicNum}`);
        if (target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },

    quickSample(topicNum) {
        this.switchMode('topics');
        const sel = document.getElementById('main-topic-select');
        if (sel) sel.value = String(topicNum);
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

    setupTopicPresets() {
        if (typeof AMALIY_DATABASE === 'undefined') return;
        for (let i = 1; i <= 16; i++) {
            const sel = document.getElementById(`topic-task-select-${i}`);
            if (!sel) continue;
            const data = AMALIY_DATABASE[i];
            if (!data || !data.tasks) continue;

            sel.innerHTML = `<option value="">-- Fayldagi misollardan tanlang (${data.tasks.length} ta misol) --</option>`;
            data.tasks.forEach(t => {
                const opt = document.createElement('option');
                opt.value = t.id;
                opt.innerText = t.name;
                sel.appendChild(opt);
            });
        }
    },

    onTopicPresetChange(topicNum, taskId) {
        if (!taskId || typeof AMALIY_DATABASE === 'undefined') return;
        const num = parseInt(topicNum);
        const data = AMALIY_DATABASE[num];
        if (!data) return;
        const task = data.tasks.find(t => t.id === taskId);
        if (!task) return;

        // Dropdowndagi qiymatni sinxronlashtirish
        const sel = document.getElementById(`topic-task-select-${num}`);
        if (sel && sel.value !== taskId) {
            sel.value = taskId;
        }

        // Kalkulyator inputlarini to'ldirish
        this.populateTopicInputs(num, taskId);

        // Misolni yechish
        if (task.solve) {
            task.solve();
        }
    },

    populateTopicInputs(topicNum, taskId) {
        switch (topicNum) {
            case 1:
                if (taskId === 'af1_t1_a') {
                    this.setMatrixValues('A', [[1, 2], [3, 4]]);
                    this.setMatrixValues('B', [[-1, 3], [0, 2]]);
                    document.getElementById('op-matrices').value = 'add';
                } else if (taskId === 'af1_t1') {
                    this.setMatrixValues('A', [[4, -3], [2, 3]]);
                    this.setMatrixValues('B', [[1, 1], [1, 1]]);
                    const kInp = document.getElementById('matrix-scalar-k');
                    if (kInp) kInp.value = '3';
                    document.getElementById('op-matrices').value = 'sub';
                } else if (taskId === 'af1_t1_c') {
                    this.setMatrixValues('A', [[1, 2], [2, 1]]);
                    this.setMatrixValues('B', [[-1, -1], [3, 0]]);
                    document.getElementById('op-matrices').value = 'add';
                } else if (taskId === 'af1_t2_a') {
                    this.setMatrixValues('A', [[2, 1], [3, 2]]);
                    this.setMatrixValues('B', [[1, -1], [1, 1]]);
                    document.getElementById('op-matrices').value = 'mul';
                } else if (taskId === 'af1_t2_b') {
                    this.setMatrixValues('A', [[3, -2], [5, -4]]);
                    this.setMatrixValues('B', [[3, 4], [2, 5]]);
                    document.getElementById('op-matrices').value = 'mul';
                } else if (taskId === 'af1_t2_c') {
                    this.setMatrixValues('A', [[1, -2, 3], [4, 5, -6]]);
                    this.setMatrixValues('B', [[1, 2], [3, 4], [5, 6]]);
                    document.getElementById('op-matrices').value = 'mul';
                } else if (taskId === 'af1_t3') {
                    this.setMatrixValues('A', [[1, 2, 1], [0, 1, 2], [3, 1, 1]]);
                    this.setMatrixValues('B', [[1, 0, 1], [2, 1, 0], [1, 1, 2]]);
                    document.getElementById('op-matrices').value = 'mul';
                } else if (taskId === 'af1_t4') {
                    this.setMatrixValues('A', [[3, 2, 1, 2], [4, 1, 1, 3]]);
                    document.getElementById('op-matrices').value = 'transpose';
                } else if (taskId === 'af1_t5') {
                    this.setMatrixValues('A', [[1, 1], [0, 1]]);
                    document.getElementById('op-matrices').value = 'mul';
                } else if (taskId === 'af1_var5') {
                    this.setMatrixValues('A', [[2, 4], [1, 3]]);
                    this.setMatrixValues('B', [[3, -1], [2, 1]]);
                    document.getElementById('op-matrices').value = 'mul';
                }
                this.onMatrixOpChange();
                break;
            case 2:
                const permInp = document.getElementById('perm-input');
                if (permInp) {
                    if (taskId === 'af2_t1') permInp.value = "3 5 1 4 2";
                    else if (taskId === 'af2_t2') permInp.value = "2 4 1 5 3";
                    else if (taskId === 'af2_t3') permInp.value = "4 1 3 2";
                    else if (taskId === 'af2_t4') permInp.value = "3 5 1 4 2";
                    else if (taskId === 'af2_var5') permInp.value = "4 3 1 5 2";
                }
                break;
            case 3:
                if (taskId === 'af3_t1_a') this.setSquareMatrixValues([[5, 2], [7, 3]]);
                else if (taskId === 'af3_t1_b') this.setSquareMatrixValues([[1, 2], [3, 4]]);
                else if (taskId === 'af3_t1_c') this.setSquareMatrixValues([[3, 2], [8, 5]]);
                else if (taskId === 'af3_t2') this.setSquareMatrixValues([[2, 1, 3], [5, 3, 2], [1, 4, 3]]);
                else if (taskId === 'af3_t3') this.setSquareMatrixValues([[1, 1, 1, 1], [1, 2, 3, 4], [1, 3, 6, 10], [1, 4, 10, 20]]);
                else if (taskId === 'af3_var5') this.setSquareMatrixValues([[3, 2, 1], [2, 5, 3], [3, 4, 2]]);
                break;
            case 4:
                const lapType = document.getElementById('laplace-type');
                const lapIdx = document.getElementById('laplace-idx');
                if (taskId === 'af4_t1') {
                    this.setLaplaceMatrixValues([[1, 2, 3], [0, 4, 5], [1, 0, 6]]);
                    if (lapType) lapType.value = 'row';
                    if (lapIdx) lapIdx.value = '1';
                } else if (taskId === 'af4_t2') {
                    this.setLaplaceMatrixValues([[2, 3, 1], [4, -2, 3], [3, 1, 4]]);
                    if (lapType) lapType.value = 'col';
                    if (lapIdx) lapIdx.value = '2';
                } else if (taskId === 'af4_t3') {
                    this.setLaplaceMatrixValues([[1, 2, 0, 0], [3, 4, 0, 0], [7, 6, 2, 1], [1, 5, 3, 4]]);
                    if (lapType) lapType.value = 'row';
                    if (lapIdx) lapIdx.value = '1';
                } else if (taskId === 'af4_var5') {
                    this.setLaplaceMatrixValues([[2, -1, 3], [1, 4, 2], [3, 1, 5]]);
                    if (lapType) lapType.value = 'row';
                    if (lapIdx) lapIdx.value = '1';
                }
                break;
            case 5:
                if (taskId === 'af5_t1_a') this.setInvMatrixValues([[1, 2], [3, 4]]);
                else if (taskId === 'af5_t1_b') this.setInvMatrixValues([[3, 4], [5, 7]]);
                else if (taskId === 'af5_t2') this.setInvMatrixValues([[1, 2, 3], [0, 1, 4], [5, 6, 0]]);
                else if (taskId === 'af5_t3') this.setInvMatrixValues([[1, 2], [3, 4]]);
                else if (taskId === 'af5_var5') this.setInvMatrixValues([[2, 1, 1], [1, 2, 1], [1, 1, 2]]);
                break;
            case 6:
                if (taskId === 'af6_t1_a') this.setSLEValues([[2, 3], [3, -1]], [8, 1]);
                else if (taskId === 'af6_t1_c') this.setSLEValues([[1, 1, -1], [2, -1, 1], [1, 2, -1]], [2, 1, 4]);
                else if (taskId === 'af6_t2') this.setSLEValues([[2, 1, -1], [3, -2, 2], [1, 1, 1]], [1, 5, 6]);
                else if (taskId === 'af6_t3') this.setSLEValues([[1, 2], [3, 4]], [5, 11]);
                else if (taskId === 'af6_var5') this.setSLEValues([[2, 1, 1], [1, 2, 1], [1, 1, 2]], [4, 5, 5]);
                break;
            case 7:
                if (taskId === 'af7_t1') this.setRankMatrixValues([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]);
                else if (taskId === 'af7_6a') this.setRankMatrixValues([[0, 4, 10, 1], [4, 8, 18, 7], [10, 18, 40, 17], [1, 7, 17, 3]]);
                else if (taskId === 'af7_6b') this.setRankMatrixValues([[2, 1, 11, 2], [1, 0, 4, -1], [11, 4, 56, 5], [2, -1, 5, -6]]);
                else if (taskId === 'af7_7a') this.setRankMatrixValues([[2, -1, 3, -2, 4], [4, -2, 5, 1, 7], [2, -1, 1, 8, 2]]);
                else if (taskId === 'af7_var5') this.setRankMatrixValues([[1, 0, 1, 0, 0], [1, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 1, 0], [0, 1, 0, 1, 1]]);
                break;
            case 8:
                if (taskId === 'af8_1c') this.setHomogMatrixValues([[1, 3, 2], [2, -1, 3], [3, -5, 4], [1, 17, 4]]);
                else if (taskId === 'af8_1d') this.setHomogMatrixValues([[3, 5, 2], [4, 7, 5], [1, 1, -4], [2, 9, 6]]);
                else if (taskId === 'af8_2a') this.setHomogMatrixValues([[2, -4, 5, 3], [3, -6, 4, 2], [4, -8, 17, 11]]);
                else if (taskId === 'af8_2b' || taskId === 'af8_var5') this.setHomogMatrixValues([[1, 2, 4, -3], [3, 5, 6, -4], [4, 5, -2, 3], [3, 8, 24, -19]]);
                else if (taskId === 'af8_2c') this.setHomogMatrixValues([[6, -2, 2, 5, 7], [9, -3, 4, 8, 9], [6, -2, 6, 7, 1], [3, -1, 4, 4, -1]]);
                else if (taskId === 'af8_2d') this.setHomogMatrixValues([[1, 0, -1, 0, 0, 0], [0, 1, 0, -1, 0, 0], [-1, 0, 1, 0, -1, 0], [0, -1, 0, 1, 0, -1], [0, 0, -1, 0, 1, 0], [0, 0, 0, -1, 0, 1]]);
                else if (taskId === 'af8_2e') this.setHomogMatrixValues([[1, 0, -1, 0, 1, 0], [0, 1, 0, -1, 0, 1], [1, -1, 0, 0, 1, -1], [0, 1, -1, 0, 0, 1], [1, 0, 0, -1, 1, 0]]);
                break;
            case 9:
                const c9z1 = document.getElementById('complex9-z1');
                const c9z2 = document.getElementById('complex9-z2');
                const c9op = document.getElementById('op-complex9');
                if (taskId === 'af9_t1') {
                    if (c9z1) c9z1.value = "2 + 3i";
                    if (c9z2) c9z2.value = "1 - 2i";
                    if (c9op) c9op.value = 'mul';
                } else if (taskId === 'af9_t2') {
                    if (c9z1) c9z1.value = "1 + 1.7320508i";
                    if (c9op) c9op.value = 'trig';
                } else if (taskId === 'af9_t3') {
                    if (c9z1) c9z1.value = "-1 - i";
                    if (c9op) c9op.value = 'trig';
                } else if (taskId === 'af9_var5') {
                    if (c9z1) c9z1.value = "4 + 3i";
                    if (c9z2) c9z2.value = "2 - i";
                    if (c9op) c9op.value = 'mul';
                }
                this.onComplex9OpChange();
                break;
            case 10:
                const c10z = document.getElementById('complex10-z');
                const c10n = document.getElementById('complex10-n');
                if (taskId === 'af10_t1') {
                    if (c10z) c10z.value = "1 + i";
                    if (c10n) c10n.value = "25";
                } else if (taskId === 'af10_t2') {
                    if (c10z) c10z.value = "1 + 1.7320508i";
                    if (c10n) c10n.value = "20";
                } else if (taskId === 'af10_t3') {
                    if (c10z) c10z.value = "1";
                    if (c10n) c10n.value = "3";
                } else if (taskId === 'af10_t4') {
                    if (c10z) c10z.value = "1.7320508 - i";
                    if (c10n) c10n.value = "10";
                } else if (taskId === 'af10_var5') {
                    if (c10z) c10z.value = "-16";
                    if (c10n) c10n.value = "4";
                }
                break;
            case 11:
                const p11P = document.getElementById('poly11-P');
                const p11Q = document.getElementById('poly11-Q');
                if (taskId === 'af11_t1') {
                    if (p11P) p11P.value = "2x^4 - 3x^3 + 4x^2 - 5x + 6";
                    if (p11Q) p11Q.value = "x^2 - 3x + 1";
                } else if (taskId === 'af11_t2') {
                    if (p11P) p11P.value = "x^3 + px + q";
                    if (p11Q) p11Q.value = "x^2 + mx - 1";
                } else if (taskId === 'af11_t3') {
                    if (p11P) p11P.value = "3x^3 - 6x + 3";
                    if (p11Q) p11Q.value = "4x^3 + 2x^2 - 8x + 6";
                } else if (taskId === 'af11_var5') {
                    if (p11P) p11P.value = "3x^4 + 2x^3 - 5x^2 + 2x - 7";
                    if (p11Q) p11Q.value = "x - 2";
                }
                break;
            case 12:
                const p12P = document.getElementById('poly12-P');
                const p12Q = document.getElementById('poly12-Q');
                if (taskId === 'af12_t1') {
                    if (p12P) p12P.value = "x^4 + x^3 - 3x^2 - 4x - 1";
                    if (p12Q) p12Q.value = "x^3 + x^2 - x - 1";
                } else if (taskId === 'af12_t2') {
                    if (p12P) p12P.value = "x^4 + 2x^3 - x - 2";
                    if (p12Q) p12Q.value = "x^3 - x^2 + x - 1";
                } else if (taskId === 'af12_t3') {
                    if (p12P) p12P.value = "x^5 + 3x^4 + x^3 + x^2 + 3x + 1";
                    if (p12Q) p12Q.value = "x^4 + 2x^3 + x + 2";
                } else if (taskId === 'af12_var5') {
                    if (p12P) p12P.value = "x^4 - 2x^3 + x^2 - x - 2";
                    if (p12Q) p12Q.value = "x^3 - 3x^2 + 3x - 1";
                }
                break;
            case 13:
                const p13P = document.getElementById('poly13-P');
                const p13c = document.getElementById('poly13-c');
                if (taskId === 'af13_t1') {
                    if (p13P) p13P.value = "x^4 - 2x^3 + 4x^2 - 6x + 8";
                    if (p13c) p13c.value = "2";
                } else if (taskId === 'af13_t2') {
                    if (p13P) p13P.value = "x^4 - 3x^3 + 6x^2 - 10x + 16";
                    if (p13c) p13c.value = "4";
                } else if (taskId === 'af13_t3') {
                    if (p13P) p13P.value = "x^3 - 4x^2 + 5x - 2";
                    if (p13c) p13c.value = "1";
                } else if (taskId === 'af13_var5') {
                    if (p13P) p13P.value = "x^3 - 6x^2 + 15x - 14";
                    if (p13c) p13c.value = "2";
                }
                break;
            case 14:
                const rfP = document.getElementById('rf-P');
                const rfa = document.getElementById('rf-a');
                const rfb = document.getElementById('rf-b');
                if (taskId === 'af14_t1') {
                    if (rfP) rfP.value = "x + 1";
                    if (rfa) rfa.value = "1";
                    if (rfb) rfb.value = "2";
                } else if (taskId === 'af14_t2') {
                    if (rfP) rfP.value = "2x + 5";
                    if (rfa) rfa.value = "2";
                    if (rfb) rfb.value = "3";
                } else if (taskId === 'af14_t3') {
                    if (rfP) rfP.value = "1";
                    if (rfa) rfa.value = "-1";
                    if (rfb) rfb.value = "-2";
                } else if (taskId === 'af14_t4') {
                    if (rfP) rfP.value = "x + 2";
                    if (rfa) rfa.value = "1";
                    if (rfb) rfb.value = "1";
                } else if (taskId === 'af14_var5') {
                    if (rfP) rfP.value = "3x - 1";
                    if (rfa) rfa.value = "1";
                    if (rfb) rfb.value = "3";
                }
                break;
            case 15:
                const ca = document.getElementById('cardano-a');
                const cb = document.getElementById('cardano-b');
                const cc = document.getElementById('cardano-c');
                const cd = document.getElementById('cardano-d');
                if (taskId === 'af15_t1') {
                    if (ca) ca.value = "1";
                    if (cb) cb.value = "0";
                    if (cc) cc.value = "-6";
                    if (cd) cd.value = "-9";
                } else if (taskId === 'af15_t2') {
                    if (ca) ca.value = "1";
                    if (cb) cb.value = "0";
                    if (cc) cc.value = "-9";
                    if (cd) cd.value = "8";
                } else if (taskId === 'af15_t3') {
                    if (ca) ca.value = "1";
                    if (cb) cb.value = "2";
                    if (cc) cc.value = "-6";
                    if (cd) cd.value = "-5";
                } else if (taskId === 'af15_t4') {
                    if (ca) ca.value = "1";
                    if (cb) cb.value = "0";
                    if (cc) cc.value = "3";
                    if (cd) cd.value = "-4";
                } else if (taskId === 'af15_var5') {
                    if (ca) ca.value = "1";
                    if (cb) cb.value = "-6";
                    if (cc) cc.value = "11";
                    if (cd) cd.value = "-6";
                }
                break;
        }
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
                mat[i][j] = (el && el.value !== undefined && el.value !== null) ? String(el.value).trim() : '0';
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
                if (el) el.value = String(mat[i][j]);
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
                mat[i][j] = (el && el.value !== undefined && el.value !== null) ? String(el.value).trim() : '0';
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
                A[i][j] = (el && el.value !== undefined && el.value !== null) ? String(el.value).trim() : '0';
            }
        }
        return A;
    },

    getSLEBValues() {
        const { eq } = this.sizes.sle;
        const B = [];
        for (let i = 0; i < eq; i++) {
            const el = document.getElementById(`cell-sle-B-${i}`);
            B[i] = (el && el.value !== undefined && el.value !== null) ? String(el.value).trim() : '0';
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
                mat[i][j] = (el && el.value !== undefined && el.value !== null) ? String(el.value).trim() : '0';
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
                const kEl = document.getElementById('matrix-scalar-k');
                const k = kEl ? String(kEl.value).trim() : '1';
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
                if (!res) throw new Error("Hisoblash uchun amal noto'g'ri tanlandi!");
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
            let idx = parseInt(document.getElementById('laplace-idx').value, 10) - 1;
            if (isNaN(idx) || idx < 0) idx = 0;
            if (idx >= this.sizes.lap) idx = this.sizes.lap - 1;
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
            if (!res || !res.steps) {
                throw new Error("Hisoblash uchun amal noto'g'ri tanlandi!");
            }
            this.showSolution(title, res.steps);
        } catch (e) { alert("Xatolik: " + e.message); }
    },

    // 10-Mavzu: Muavr va ildizlar
    solveTopic10(type) {
        try {
            const z = ComplexNumber.parse(document.getElementById('complex10-z').value);
            const n = parseInt(document.getElementById('complex10-n').value, 10);
            if (isNaN(n) || n < 1) throw new Error("Daraja/ildiz ko'rsatkichi kamida 1 bo'lishi kerak!");
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

        if (container && typeof container.scrollIntoView === 'function') {
            container.scrollIntoView({ behavior: 'smooth' });
        }
    },

    renderMathText(str) {
        if (!window.katex || !str) return str || "";
        // Double dollar $$...$$ display math mode
        let res = str.replace(/\$\$([^\$]+)\$\$/g, (match, formula) => {
            try {
                return window.katex.renderToString(formula.trim(), { displayMode: true, throwOnError: false });
            } catch (e) {
                return match;
            }
        });
        // Single dollar $...$ inline mode
        return res.replace(/\$([^\$]+)\$/g, (match, formula) => {
            try {
                return window.katex.renderToString(formula.trim(), { displayMode: false, throwOnError: false });
            } catch (e) {
                return match;
            }
        });
    },

    formatTaskCondition(text) {
        if (!text) return "";
        let s = text.trim();

        // Agar allaqachon LaTeX display math bo'lsa
        if (s.includes('$$')) {
            return this.renderMathText(s);
        }

        // det [[...]] -> \begin{vmatrix} ... \end{vmatrix}
        s = s.replace(/det\s*(\[\[[\s\S]*?\]\])/g, (match, p1) => {
            try {
                const arr = JSON.parse(p1);
                const rows = arr.map(r => r.join(' & ')).join(' \\\\ ');
                return `\\begin{vmatrix} ${rows} \\end{vmatrix}`;
            } catch(e) { return match; }
        });

        // [[...]] -> \begin{pmatrix} ... \end{pmatrix}
        s = s.replace(/\[\[[\s\S]*?\]\]/g, (match) => {
            try {
                const arr = JSON.parse(match);
                if (Array.isArray(arr) && arr.length > 0 && Array.isArray(arr[0])) {
                    const rows = arr.map(r => r.join(' & ')).join(' \\\\ ');
                    return `\\begin{pmatrix} ${rows} \\end{pmatrix}`;
                }
            } catch(e) {}
            return match;
        });

        // O'rin almashtirishlar: ((1, 2, 3), (2, 3, 1))
        s = s.replace(/\(\(([\d,\s]+)\),\s*\(([\d,\s]+)\)\)/g, (match, r1, r2) => {
            const row1 = r1.split(',').map(x => x.trim()).join(' & ');
            const row2 = r2.split(',').map(x => x.trim()).join(' & ');
            return `\\begin{pmatrix} ${row1} \\\\ ${row2} \\end{pmatrix}`;
        });

        // Tenglamalar sistemasi (agar yangi qator va = bo'lsa)
        if (s.includes('\n') && s.includes('=')) {
            const lines = s.split('\n').map(l => l.trim()).filter(l => l.includes('='));
            if (lines.length > 1) {
                s = `\\begin{cases} ${lines.join(' \\\\ ')} \\end{cases}`;
            }
        } else if (s.includes('= 0') && s.split('= 0').length > 2) {
            const eqParts = s.split(/,\s*(?=[^,]*=)/);
            if (eqParts.length > 1) {
                s = `\\begin{cases} ${eqParts.join(' \\\\ ')} \\end{cases}`;
            }
        }

        // Belgilar: · -> \cdot
        s = s.replace(/·/g, ' \\cdot ');

        // Agar matritsa, determinant yoki sistema bo'lsa
        if (s.includes('\\begin{')) {
            return this.renderMathText(`$$${s}$$`);
        }

        // Agar $ mavjud bo'lsa
        if (s.includes('$')) {
            return this.renderMathText(s);
        }

        // Agar algebraik ifoda bo'lsa (masalan f(x) = ...)
        if (s.includes('=') || s.includes('^') || s.includes('+') || s.includes('-') || s.includes('/') || s.includes('∛') || s.includes('√')) {
            return this.renderMathText(`$$${s}$$`);
        }

        return s;
    },

    toggleTheme() {
        const isLight = document.body.classList.toggle('light-theme');
        try {
            localStorage.setItem('oa_theme', isLight ? 'light' : 'dark');
        } catch (e) {}
        const btn = document.getElementById('theme-toggle-btn');
        if (btn) btn.innerText = isLight ? '☀️' : '🌙';
    },

    printSolution() {
        if (!this.lastSolution) {
            alert("Chop etish uchun avval biror misolni yeching!");
            return;
        }
        window.print();
    },

    clearSolution() {
        const container = document.getElementById('solution-container');
        const box = document.getElementById('solution-box');
        if (box) box.innerHTML = '';
        if (container) container.style.display = 'none';
        this.lastSolution = null;
    },

    copySolution() {
        if (!this.lastSolution) return;
        const text = `${this.lastSolution.title}\n\n` + this.lastSolution.steps.join('\n');
        navigator.clipboard.writeText(text).then(() => {
            alert("✅ Yechim buferga nusxalandi!");
        }).catch(() => {
            prompt("Yechimdan nusxa oling (Ctrl+C):", text);
        });
    },

    sendToBot() {
        if (!this.lastSolution) {
            alert("Avval misolni yeching!");
            return;
        }
        if (tg && tg.initData) {
            const payload = {
                title: this.lastSolution.title,
                steps: this.lastSolution.steps.slice(0, 15)
            };
            tg.sendData(JSON.stringify(payload));
        } else {
            const text = `${this.lastSolution.title}\n\n` + this.lastSolution.steps.join('\n');
            navigator.clipboard.writeText(text).then(() => {
                const openBot = confirm(
                    "✅ Yechim buferga nusxalandi!\n\n" +
                    "Telegram botni ochishni xohlaysizmi? (@Misol_ishladim_bot)"
                );
                if (openBot) {
                    window.open("https://t.me/Misol_ishladim_bot", "_blank");
                }
            }).catch(() => {
                window.open("https://t.me/Misol_ishladim_bot", "_blank");
            });
        }
    }
};

if (typeof window !== 'undefined') {
    window.app = app;
}

window.addEventListener('DOMContentLoaded', () => {
    app.init();

    // Tezkor klaviatura tugmalari (Hotkeys)
    window.addEventListener('keydown', (e) => {
        // Ctrl + Enter -> Hozirgi tanlangan misolni yechish
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            const btnFiles = document.getElementById('btn-mode-files');
            if (btnFiles && btnFiles.classList.contains('active')) {
                app.solveAmaliyTask();
            } else {
                const sel = document.getElementById('main-topic-select');
                const tNum = sel ? parseInt(sel.value) : 1;
                app.onTopicSelect(tNum);
            }
        }
        // Ctrl + P -> Chop etish / PDF ga saqlash
        if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
            if (app.lastSolution) {
                e.preventDefault();
                app.printSolution();
            }
        }
    });
});
