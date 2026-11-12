/**
 * Kompleks sonlar kalkulyatori va algoritmlari (Step-by-Step).
 * z = a + bi
 */

class ComplexNumber {
    constructor(real = 0, imag = 0) {
        this.re = Fraction.parse(real);
        this.im = Fraction.parse(imag);
    }

    static parse(str) {
        str = str.replace(/\s+/g, '').replace(/j/g, 'i');
        if (!str) return new ComplexNumber(0, 0);

        // Faqat "i" yoki "-i"
        if (str === 'i' || str === '+i') return new ComplexNumber(0, 1);
        if (str === '-i') return new ComplexNumber(0, -1);

        // Agar 'i' qatnashmagan bo'lsa - sof haqiqiy son
        if (!str.includes('i')) {
            return new ComplexNumber(Fraction.parse(str), 0);
        }

        // Agar faqat '...i' bo'lsa - sof mavhum son
        const imagOnlyMatch = str.match(/^([+-]?\d*(?:\.\d+|\/\d+)?|\b)i$/);
        if (imagOnlyMatch) {
            let coef = imagOnlyMatch[1];
            if (coef === '' || coef === '+') coef = '1';
            if (coef === '-') coef = '-1';
            return new ComplexNumber(0, Fraction.parse(coef));
        }

        // a + bi yoki a - bi
        // Oxirgi belgidan oldingi i ni ajratish
        const match = str.match(/^([+-]?\d+(?:\.\d+|\/\d+)?)([+-]\d*(?:\.\d+|\/\d+)?)i$/);
        if (match) {
            const re = Fraction.parse(match[1]);
            let imStr = match[2];
            if (imStr === '+') imStr = '1';
            if (imStr === '-') imStr = '-1';
            const im = Fraction.parse(imStr);
            return new ComplexNumber(re, im);
        }

        // Ehtimoliy boshqa format
        try {
            const parts = str.split(/(?=[+-])/);
            let re = Fraction.zero();
            let im = Fraction.zero();
            for (let p of parts) {
                if (p.includes('i')) {
                    let s = p.replace('i', '');
                    if (s === '' || s === '+') s = '1';
                    if (s === '-') s = '-1';
                    im = im.add(Fraction.parse(s));
                } else {
                    re = re.add(Fraction.parse(p));
                }
            }
            return new ComplexNumber(re, im);
        } catch (e) {
            throw new Error(`Kompleks son noto'g'ri kiritildi: "${str}". Masalan: 2 + 3i yoki -1 - 4i`);
        }
    }

    toString() {
        const reStr = this.re.toString();
        const imStr = this.im.toString();

        if (this.im.isZero()) return reStr;
        if (this.re.isZero()) {
            if (this.im.isOne()) return "i";
            if (this.im.toString() === "-1") return "-i";
            return `${imStr}i`;
        }

        let sign = "+";
        let displayIm = imStr;
        if (this.im.isNegative()) {
            sign = "-";
            displayIm = this.im.abs().toString();
        }

        if (displayIm === "1") displayIm = "";
        return `${reStr} ${sign} ${displayIm}i`;
    }

    // Qo'shish
    static add(z1, z2) {
        const steps = [];
        steps.push(`<b>Kompleks sonlarni qo'shish:</b> $(a_1 + a_2) + (b_1 + b_2)i$`);
        const re = z1.re.add(z2.re);
        const im = z1.im.add(z2.im);
        steps.push(`Re: $(${z1.re}) + (${z2.re}) = <b>${re}</b>$`);
        steps.push(`Im: $(${z1.im}) + (${z2.im}) = <b>${im}</b>$`);
        const res = new ComplexNumber(re, im);
        steps.push(`Natija: $z_1 + z_2 = <b>${res.toString()}</b>$`);
        return { result: res, steps };
    }

    // Ayirish
    static sub(z1, z2) {
        const steps = [];
        steps.push(`<b>Kompleks sonlarni ayirish:</b> $(a_1 - a_2) + (b_1 - b_2)i$`);
        const re = z1.re.sub(z2.re);
        const im = z1.im.sub(z2.im);
        steps.push(`Re: $(${z1.re}) - (${z2.re}) = <b>${re}</b>$`);
        steps.push(`Im: $(${z1.im}) - (${z2.im}) = <b>${im}</b>$`);
        const res = new ComplexNumber(re, im);
        steps.push(`Natija: $z_1 - z_2 = <b>${res.toString()}</b>$`);
        return { result: res, steps };
    }

    // Ko'paytirish
    static mul(z1, z2) {
        const steps = [];
        steps.push(`<b>Kompleks sonlarni ko'paytirish:</b> $(a_1 + b_1 i)(a_2 + b_2 i) = (a_1 a_2 - b_1 b_2) + (a_1 b_2 + a_2 b_1)i$`);
        const p1 = z1.re.mul(z2.re);
        const p2 = z1.im.mul(z2.im);
        const re = p1.sub(p2);

        const p3 = z1.re.mul(z2.im);
        const p4 = z1.im.mul(z2.re);
        const im = p3.add(p4);

        steps.push(`Re: $(${z1.re} \\cdot ${z2.re}) - (${z1.im} \\cdot ${z2.im}) = ${p1} - (${p2}) = <b>${re}</b>$`);
        steps.push(`Im: $(${z1.re} \\cdot ${z2.im}) + (${z1.im} \\cdot ${z2.re}) = ${p3} + (${p4}) = <b>${im}</b>$`);
        const res = new ComplexNumber(re, im);
        steps.push(`Natija: $z_1 \\cdot z_2 = <b>${res.toString()}</b>$`);
        return { result: res, steps };
    }

    // Bo'lish
    static div(z1, z2) {
        const steps = [];
        steps.push(`<b>Kompleks sonlarni bo'lish:</b> Kasrning surat va maxraji maxrajning qo'shmasi $(\\bar{z_2})$ ga ko'paytiriladi:`);
        const denom = z2.re.mul(z2.re).add(z2.im.mul(z2.im));
        if (denom.isZero()) {
            throw new Error("Nolga bo'lish mumkin emas!");
        }

        const conj2 = new ComplexNumber(z2.re, z2.im.neg());
        steps.push(`Maxrajning qo'shmasi: $\\bar{z_2} = ${conj2.toString()}$`);
        steps.push(`Maxraj qiymati: $|z_2|^2 = (${z2.re})^2 + (${z2.im})^2 = <b>${denom}</b>$`);

        const numRe = z1.re.mul(z2.re).add(z1.im.mul(z2.im));
        const numIm = z1.im.mul(z2.re).sub(z1.re.mul(z2.im));
        const re = numRe.div(denom);
        const im = numIm.div(denom);

        steps.push(`Surat: $(${z1.toString()})(${conj2.toString()}) = ${numRe} + (${numIm})i$`);
        const res = new ComplexNumber(re, im);
        steps.push(`Natija: $\\frac{z_1}{z_2} = <b>${res.toString()}</b>$`);
        return { result: res, steps };
    }

    // Trigonometrik shakl, modul va argument
    static analyze(z) {
        const steps = [];
        const a = z.re.toNumber();
        const b = z.im.toNumber();
        const r2 = z.re.mul(z.re).add(z.im.mul(z.im));
        const r = Math.sqrt(a * a + b * b);

        steps.push(`<b>1. Modul ($r$ yoki $|z|$):</b>`);
        steps.push(`$r = \\sqrt{a^2 + b^2} = \\sqrt{(${z.re})^2 + (${z.im})^2} = \\sqrt{${r2}} \\approx <b>${r.toFixed(4)}</b>$`);

        // Argument
        steps.push(`<b>2. Argument ($\\varphi = \\arg(z)$):</b>`);
        let phi = 0;
        let phiDeg = 0;

        if (a === 0 && b === 0) {
            steps.push(`$z = 0$ uchun argument aniqlanmagan.`);
        } else if (a > 0) {
            phi = Math.atan2(b, a);
            steps.push(`$a > 0 \\implies \\varphi = \\text{arctg}\\left(\\frac{b}{a}\\right) = \\text{arctg}\\left(\\frac{${z.im}}{${z.re}}\\right)$`);
        } else if (a < 0 && b >= 0) {
            phi = Math.atan2(b, a);
            steps.push(`$a < 0, b \\ge 0 \\implies \\varphi = \\pi + \\text{arctg}\\left(\\frac{b}{a}\\right)$`);
        } else if (a < 0 && b < 0) {
            phi = Math.atan2(b, a);
            steps.push(`$a < 0, b < 0 \\implies \\varphi = -\\pi + \\text{arctg}\\left(\\frac{b}{a}\\right)$`);
        } else if (a === 0) {
            phi = b > 0 ? Math.PI / 2 : -Math.PI / 2;
            steps.push(`$a = 0 \\implies \\varphi = ${b > 0 ? '\\pi/2' : '-\\pi/2'}$`);
        }

        phiDeg = (phi * 180 / Math.PI);
        steps.push(`$\\varphi = ${phi.toFixed(4)} \\text{ rad} \\approx <b>${phiDeg.toFixed(2)}^\\circ</b>$`);

        // Trigonometrik va ko'rsatkichli shakl
        steps.push(`<b>3. Trigonometrik shakli:</b>`);
        const trigStr = `${r.toFixed(4)} \\cdot (\\cos(${phi.toFixed(4)}) + i\\sin(${phi.toFixed(4)}))`;
        steps.push(`$z = r(\\cos\\varphi + i\\sin\\varphi) = <b>${trigStr}</b>$`);

        steps.push(`<b>4. Ko'rsatkichli shakli:</b>`);
        const expStr = `${r.toFixed(4)} \\cdot e^{i \\cdot (${phi.toFixed(4)})}`;
        steps.push(`$z = r \\cdot e^{i\\varphi} = <b>${expStr}</b>$`);

        return { r, phi, trigStr, expStr, steps };
    }

    // Muavr formulasi: z^n
    static powerMoivre(z, n) {
        const steps = [];
        steps.push(`<b>Muavr formulasi bo'yicha darajaga ko'tarish:</b> $z^n = r^n(\\cos(n\\varphi) + i\\sin(n\\varphi))$`);
        const analysis = ComplexNumber.analyze(z);
        steps.push(...analysis.steps);

        const r = analysis.r;
        const phi = analysis.phi;
        const rn = Math.pow(r, n);
        const nPhi = n * phi;

        const re = rn * Math.cos(nPhi);
        const im = rn * Math.sin(nPhi);

        steps.push(`$r^n = (${r.toFixed(4)})^${n} = ${rn.toFixed(4)}$`);
        steps.push(`$n\\varphi = ${n} \\cdot ${phi.toFixed(4)} = ${nPhi.toFixed(4)}$ rad`);
        steps.push(`$z^${n} = ${rn.toFixed(4)} \\cdot (\\cos(${nPhi.toFixed(4)}) + i\\sin(${nPhi.toFixed(4)}))$`);
        steps.push(`Algebraik ko'rinishi: $z^${n} \\approx <b>${re.toFixed(4)} + (${im.toFixed(4)})i</b>$`);

        return { result: { re, im }, steps };
    }

    // Kompleks sondan n-darajali ildizlar
    static roots(z, n) {
        if (n <= 0) throw new Error("Ildiz darajasi musbat butun son bo'lishi kerak!");
        const steps = [];
        steps.push(`<b>Kompleks sondan $n = ${n}$ darajali barcha ildizlarni topish:</b>`);
        steps.push(`$w_k = \\sqrt[n]{r} \\left(\\cos\\frac{\\varphi + 2\\pi k}{n} + i\\sin\\frac{\\varphi + 2\\pi k}{n}\\right), \\quad k = 0, 1, \\dots, ${n-1}$`);

        const analysis = ComplexNumber.analyze(z);
        const r = analysis.r;
        const phi = analysis.phi;
        const rootR = Math.pow(r, 1 / n);

        steps.push(`$\\sqrt[${n}]{r} = \\sqrt[${n}]{${r.toFixed(4)}} = <b>${rootR.toFixed(4)}</b>$`);

        const rootsList = [];
        for (let k = 0; k < n; k++) {
            const angle = (phi + 2 * Math.PI * k) / n;
            const angleDeg = angle * 180 / Math.PI;
            const re = rootR * Math.cos(angle);
            const im = rootR * Math.sin(angle);
            const wStr = `${re.toFixed(4)} + (${im.toFixed(4)})i`;
            rootsList.push(wStr);
            steps.push(`<b>k = ${k}:</b> $\\theta_${k} = \\frac{${phi.toFixed(4)} + 2\\pi(${k})}{${n}} = ${angle.toFixed(4)} \\text{ rad} (${angleDeg.toFixed(1)}^\\circ)$`);
            steps.push(`$w_{${k}} = ${rootR.toFixed(4)} (\\cos(${angle.toFixed(4)}) + i\\sin(${angle.toFixed(4)})) = <b>${wStr}</b>$`);
        }

        return { result: rootsList, steps };
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComplexNumber;
}
