/**
 * 2-Mavzu: O'rin almashtirishlar va inversiyalar (Permutations)
 * Inversiyalar soni, juft/toqlik, tsikllarga ajratish, ko'paytirish va teskari o'rin almashtirish
 */

class PermutationSolver {
    static parse(str) {
        const nums = str.trim().split(/[\s,]+/).map(x => parseInt(x, 10)).filter(x => !isNaN(x));
        const n = nums.length;
        if (n === 0) throw new Error("O'rin almashtirish bo'sh bo'lishi mumkin emas!");

        const seen = new Set();
        for (const x of nums) {
            if (x < 1 || x > n) {
                throw new Error(`Sonlar 1 dan ${n} gacha bo'lishi kerak! Noto'g'ri element: ${x}`);
            }
            if (seen.has(x)) {
                throw new Error(`Element takrorlangan: ${x}`);
            }
            seen.add(x);
        }
        return nums;
    }

    static analyze(p) {
        const n = p.length;
        const steps = [];
        steps.push(`<b>O'rin almashtirish:</b> $\\sigma = \\begin{pmatrix} 1 & 2 & \\dots & ${n} \\\\ ${p.join(' & ')} \\end{pmatrix}$`);

        // 1. Inversiyalar
        let invCount = 0;
        const pairs = [];
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (p[i] > p[j]) {
                    invCount++;
                    pairs.push(`(${p[i]}, ${p[j]})`);
                }
            }
        }

        steps.push(`<b>1. Inversiyalar sharti:</b> $i < j$ bo'lganda $\\sigma(i) > \\sigma(j)$ bo'lishi kerak.`);
        if (pairs.length === 0) {
            steps.push(`Hech qanday inversiya yo'q (aynan almashtirish). Inversiyalar soni: $I(\\sigma) = 0$`);
        } else {
            steps.push(`Topilgan inversiya juftliklari (${invCount} ta):`);
            steps.push(`<div style="padding: 6px; background: rgba(255,255,255,0.05); border-radius: 6px;">${pairs.join(', ')}</div>`);
        }

        const isEven = (invCount % 2 === 0);
        steps.push(`Jami inversiyalar soni: <b>$I(\\sigma) = ${invCount}$</b>`);
        steps.push(`Juft-toqligi: <b>${isEven ? "JUFT" : "TOQ"}</b> (chunki ${invCount} - ${isEven ? "juft" : "toq"} son)`);
        steps.push(`O'rin almashtirish ishorasi: $\\operatorname{sgn}(\\sigma) = (-1)^{${invCount}} = <b>${isEven ? "+1" : "-1"}</b>$`);

        // 2. Mustaqil tsikllarga ajratish
        const visited = new Array(n).fill(false);
        const cycles = [];
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                const cycle = [];
                let cur = i;
                while (!visited[cur]) {
                    visited[cur] = true;
                    cycle.push(cur + 1);
                    cur = p[cur] - 1;
                }
                cycles.push(cycle);
            }
        }

        const nonTrivial = cycles.filter(c => c.length > 1);
        let cycleStr = "";
        if (nonTrivial.length === 0) {
            cycleStr = "(e) - aynan almashtirish";
        } else {
            cycleStr = nonTrivial.map(c => `(${c.join(' ')})`).join(' ');
        }
        steps.push(`<b>2. Mustaqil disyukt tsikllarga ajratish:</b> $\\sigma = ${cycleStr}$`);

        // 3. Teskari o'rin almashtirish: sigma^-1
        const invP = new Array(n);
        for (let i = 0; i < n; i++) {
            invP[p[i] - 1] = i + 1;
        }
        steps.push(`<b>3. Teskari o'rin almashtirish:</b> $\\sigma^{-1} = \\begin{pmatrix} 1 & 2 & \\dots & ${n} \\\\ ${invP.join(' & ')} \\end{pmatrix}$`);

        return { invCount, isEven, cycleStr, invP, steps };
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PermutationSolver;
}
