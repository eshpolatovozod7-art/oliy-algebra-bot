/**
 * Ko'phadlar (Polynomials) kalkulyatori va algoritmlari (Step-by-Step).
 * Gorner sxemasi, qoldiqli bo'lish, EKUB (Yevklid algoritmi).
 */

class Polynomial {
    // coeffs: [a_n, a_{n-1}, ..., a_1, a_0] (yuqori darajadan pastga)
    constructor(coeffs = []) {
        this.coeffs = coeffs.map(c => Fraction.parse(c));
        this.trim();
    }

    trim() {
        // Boshidagi 0 koeffitsientlarni olib tashlash
        while (this.coeffs.length > 1 && this.coeffs[0].isZero()) {
            this.coeffs.shift();
        }
        if (this.coeffs.length === 0) {
            this.coeffs = [Fraction.zero()];
        }
    }

    get degree() {
        if (this.coeffs.length === 1 && this.coeffs[0].isZero()) return -Infinity;
        return this.coeffs.length - 1;
    }

    static parse(str) {
        str = str.replace(/\s+/g, '').replace(/-/g, '+-');
        if (!str) return new Polynomial([0]);

        const terms = str.split('+').filter(t => t.length > 0);
        const map = new Map(); // power -> Fraction

        for (const term of terms) {
            let power = 0;
            let coefStr = '';

            if (term.includes('x^')) {
                const parts = term.split('x^');
                coefStr = parts[0];
                power = parseInt(parts[1], 10);
            } else if (term.includes('x')) {
                const parts = term.split('x');
                coefStr = parts[0];
                power = 1;
            } else {
                coefStr = term;
                power = 0;
            }

            if (coefStr === '' || coefStr === '+') coefStr = '1';
            if (coefStr === '-') coefStr = '-1';

            const c = Fraction.parse(coefStr);
            const prev = map.get(power) || Fraction.zero();
            map.set(power, prev.add(c));
        }

        const maxDeg = Math.max(0, ...Array.from(map.keys()));
        const coeffs = [];
        for (let d = maxDeg; d >= 0; d--) {
            coeffs.push(map.get(d) || Fraction.zero());
        }

        return new Polynomial(coeffs);
    }

    toString() {
        if (this.coeffs.length === 1 && this.coeffs[0].isZero()) return "0";

        const parts = [];
        const n = this.coeffs.length - 1;

        for (let i = 0; i <= n; i++) {
            const c = this.coeffs[i];
            if (c.isZero()) continue;

            const deg = n - i;
            let cStr = c.toString();
            let isNeg = c.isNegative();

            if (isNeg) {
                cStr = c.abs().toString();
            }

            let term = "";
            if (deg === 0) {
                term = cStr;
            } else if (deg === 1) {
                term = (cStr === "1") ? "x" : `${cStr}x`;
            } else {
                term = (cStr === "1") ? `x^${deg}` : `${cStr}x^${deg}`;
            }

            if (parts.length === 0) {
                parts.push(isNeg ? `-${term}` : term);
            } else {
                parts.push(isNeg ? `- ${term}` : `+ ${term}`);
            }
        }

        return parts.length > 0 ? parts.join(' ') : "0";
    }

    // Gorner sxemasi: P(x) ni (x - c) ga bo'lish
    static horner(poly, cVal) {
        const c = Fraction.parse(cVal);
        const steps = [];
        steps.push(`<b>Gorner sxemasi:</b> $P(x)$ ko'phadni $(x - (${c.toString()}))$ ga bo'lish:`);
        steps.push(`$P(x) = ${poly.toString()}$, $\\quad c = ${c.toString()}$`);

        const a = poly.coeffs;
        const n = a.length;
        const b = [a[0]]; // b_{n-1} = a_n

        // Gorner jadvali
        let tableHtml = '<div class="horner-table-wrap"><table class="horner-table">';
        // 1-qator: a_i
        tableHtml += `<tr><th></th>${a.map((coef, i) => `<th>a_{${n-1-i}} = ${coef.toString()}</th>`).join('')}</tr>`;
        
        // 2-qator: c va hisoblangan b_i
        let row2 = `<tr><th>c = ${c.toString()}</th>`;
        row2 += `<td><b>${b[0].toString()}</b></td>`;

        for (let i = 1; i < n; i++) {
            const prod = c.mul(b[i - 1]);
            const nextB = a[i].add(prod);
            b.push(nextB);
            row2 += `<td>${a[i].toString()} + (${c.toString()} · ${b[i-1].toString()}) = <b>${nextB.toString()}</b></td>`;
            steps.push(`$b_{${n-1-i}} = a_{${n-1-i}} + c \\cdot b_{${n-i}} = ${a[i].toString()} + (${c.toString()})(${b[i-1].toString()}) = <b>${nextB.toString()}</b>$`);
        }
        row2 += '</tr>';
        tableHtml += row2 + '</table></div>';
        steps.push(tableHtml);

        const quotientCoeffs = b.slice(0, b.length - 1);
        const remainder = b[b.length - 1];
        const Q = new Polynomial(quotientCoeffs);

        steps.push(`<b>Bo'linma:</b> $Q(x) = <b>${Q.toString()}</b>$`);
        steps.push(`<b>Qoldiq:</b> $R = P(${c.toString()}) = <b>${remainder.toString()}</b>$`);

        return { quotient: Q, remainder, steps };
    }

    // Ko'phadlarni burchakli (qoldiqli) bo'lish: P(x) / Q(x)
    static divide(P, Q) {
        if (Q.degree === -Infinity || (Q.coeffs.length === 1 && Q.coeffs[0].isZero())) {
            throw new Error("Nol ko'phadga bo'lish mumkin emas!");
        }

        const steps = [];
        steps.push(`<b>Ko'phadlarni qoldiqli bo'lish:</b> $\\frac{P(x)}{Q(x)}$`);
        steps.push(`$P(x) = ${P.toString()}$`);
        steps.push(`$Q(x) = ${Q.toString()}$`);

        if (P.degree < Q.degree) {
            steps.push(`$P(x)$ ning darajasi $Q(x)$ nikidan kichik bo'lgani sababli: Bo'linma = 0, Qoldiq = $P(x)$`);
            return { quotient: new Polynomial([0]), remainder: P, steps };
        }

        let rem = new Polynomial(P.coeffs);
        const quotCoeffs = [];

        while (rem.degree >= Q.degree && rem.degree >= 0) {
            const degDiff = rem.degree - Q.degree;
            const factor = rem.coeffs[0].div(Q.coeffs[0]);

            // factor * x^degDiff
            const stepPolyCoeffs = new Array(degDiff + 1).fill(Fraction.zero());
            stepPolyCoeffs[0] = factor;
            const stepPoly = new Polynomial(stepPolyCoeffs);

            quotCoeffs.push({ deg: degDiff, coef: factor });

            // rem = rem - stepPoly * Q
            const subCoeffs = new Array(rem.coeffs.length).fill(Fraction.zero());
            for (let i = 0; i < Q.coeffs.length; i++) {
                subCoeffs[i] = factor.mul(Q.coeffs[i]);
            }

            const nextRemCoeffs = [];
            for (let i = 0; i < rem.coeffs.length; i++) {
                nextRemCoeffs.push(rem.coeffs[i].sub(subCoeffs[i] || Fraction.zero()));
            }

            steps.push(`Qadam: $\\frac{${rem.coeffs[0].toString()}x^{${rem.degree}}}{${Q.coeffs[0].toString()}x^{${Q.degree}}} = ${factor.toString()}x^{${degDiff}}$`);
            rem = new Polynomial(nextRemCoeffs);
            steps.push(`Yangi qoldiq: $R(x) = ${rem.toString()}$`);
        }

        // Bo'linmani tiklash
        const maxQuotDeg = Math.max(0, ...quotCoeffs.map(q => q.deg));
        const finalQuot = new Array(maxQuotDeg + 1).fill(Fraction.zero());
        for (const q of quotCoeffs) {
            finalQuot[maxQuotDeg - q.deg] = q.coef;
        }

        const quotient = new Polynomial(finalQuot);
        steps.push(`<b>Natija:</b>`);
        steps.push(`Bo'linma: $M(x) = <b>${quotient.toString()}</b>$`);
        steps.push(`Qoldiq: $R(x) = <b>${rem.toString()}</b>$`);
        steps.push(`$P(x) = (${Q.toString()}) \\cdot (${quotient.toString()}) + (${rem.toString()})$`);

        return { quotient, remainder: rem, steps };
    }

    // Yevklid algoritmi (EKUB)
    static gcd(P, Q) {
        const steps = [];
        steps.push(`<b>Ko'phadlarning EKUBini (Yevklid algoritmi) topish:</b>`);
        let a = new Polynomial(P.coeffs);
        let b = new Polynomial(Q.coeffs);

        steps.push(`$P(x) = ${a.toString()}$`);
        steps.push(`$Q(x) = ${b.toString()}$`);

        let stepNum = 1;
        while (b.degree >= 0) {
            steps.push(`<b>${stepNum}-qadam:</b>`);
            const divRes = Polynomial.divide(a, b);
            steps.push(...divRes.steps);
            a = b;
            b = divRes.remainder;
            stepNum++;
        }

        // Bosh koeffitsientini 1 ga keltirish (normallashtirish)
        const lead = a.coeffs[0];
        const normCoeffs = a.coeffs.map(c => c.div(lead));
        const resGcd = new Polynomial(normCoeffs);

        steps.push(`<b>EKUB(P, Q) = ${resGcd.toString()}</b>`);
        return { result: resGcd, steps };
    }

    // Ratsional ildizlarni nomzodlar orqali topish (Bezu va Gorner)
    static findRationalRoots(poly) {
        const steps = [];
        steps.push(`<b>Ko'phadning barcha ratsional ildizlarini topish:</b>`);
        steps.push(`$P(x) = ${poly.toString()}$`);

        // Koeffitsientlar butun ekanligini ta'minlash
        const deg = poly.degree;
        if (deg <= 0) {
            steps.push(`O'zgarmas son uchun ildiz mavjud emas.`);
            return { result: [], steps };
        }

        const an = poly.coeffs[0];
        const a0 = poly.coeffs[deg];

        if (a0.isZero()) {
            steps.push(`Ozod had $a_0 = 0$ bo'lgani uchun $x = 0$ ildiz hisoblanadi.`);
        }

        steps.push(`Bosh koeffitsient: $a_n = ${an.toString()}$, ozod had: $a_0 = ${a0.toString()}$`);
        steps.push(`Ratsional ildizlar haqidagi teoremaga ko'ra, har qanday $\\frac{p}{q}$ qisqarmas kasr ildiz uchun:`);
        steps.push(`• $p$ soni $a_0$ ning bo'luvchisi bo'lishi shart`);
        steps.push(`• $q$ soni $a_n$ ning bo'luvchisi bo'lishi shart`);

        const pNum = Math.abs(Number(a0.num));
        const qNum = Math.abs(Number(an.num));

        const getDivisors = (val) => {
            if (val === 0) return [1];
            const divs = [];
            for (let i = 1; i <= val; i++) {
                if (val % i === 0) divs.push(i);
            }
            return divs;
        };

        const pDivs = getDivisors(pNum);
        const qDivs = getDivisors(qNum);

        const candidates = new Set();
        pDivs.forEach(p => {
            qDivs.forEach(q => {
                const frac1 = `${p}/${q}`;
                const frac2 = `-${p}/${q}`;
                candidates.add(new Fraction(BigInt(p), BigInt(q)).toString());
                candidates.add(new Fraction(-BigInt(p), BigInt(q)).toString());
            });
        });

        const candList = Array.from(candidates);
        steps.push(`Nomzodlar to'plami: $\\{${candList.join(', ')}\\}$`);

        const foundRoots = [];
        candList.forEach(cand => {
            const cFrac = Fraction.fromString(cand);
            const hornerRes = Polynomial.horner(poly, cFrac);
            if (hornerRes.remainder.isZero()) {
                foundRoots.push(cand);
                steps.push(`✅ $c = ${cand}$ tekshirildi: $P(${cand}) = 0$ bo'ldi. <b>${cand} - ILDIZ!</b>`);
            }
        });

        if (foundRoots.length === 0) {
            steps.push(`Berilgan ko'phadning ratsional ildizlari mavjud emas.`);
        } else {
            steps.push(`<b>Topilgan barcha ratsional ildizlar:</b> $\\{${foundRoots.join(', ')}\\}$`);
        }

        return { result: foundRoots, steps };
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Polynomial;
}
