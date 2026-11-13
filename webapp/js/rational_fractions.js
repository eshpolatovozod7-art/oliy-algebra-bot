/**
 * 14-Mavzu: To'g'ri ratsional kasrlarni sodda kasrlarga yoyish
 * P(x) / [(x - a)^k * (x^2 + px + q)^m]
 */

class RationalFractionSolver {
    static decomposeSimple(pCoeffs, aVal, bVal) {
        // P(x) / ((x - a)(x - b))
        const a = Fraction.parse(aVal);
        const b = Fraction.parse(bVal);
        const steps = [];

        steps.push(`<b>Ratsional kasrni sodda kasrlarga yoyish:</b>`);
        steps.push(`$\\frac{P(x)}{(x - (${a.toString()}))(x - (${b.toString()}))} = \\frac{A}{x - (${a.toString()})} + \\frac{B}{x - (${b.toString()})}$`);

        if (a.equals(b)) {
            // Karrali ildiz: (x - a)^2
            // P(x) = A(x - a) + B
            const P = new Polynomial(pCoeffs);
            const h = Polynomial.horner(P, a);
            const B = h.remainder;
            const A = h.quotient.coeffs[h.quotient.coeffs.length - 1] || Fraction.zero();

            steps.push(`Karrali ildiz bo'lgani uchun: $\\frac{A}{x - (${a})} + \\frac{B}{(x - (${a}))^2}$`);
            steps.push(`Gorner sxemasi orqali: $B = P(${a}) = <b>${B.toString()}</b>$, $\\quad A = <b>${A.toString()}</b>$`);
            steps.push(`Natija: $\\frac{${A.toString()}}{x - (${a})} + \\frac{${B.toString()}}{(x - (${a}))^2}$`);
            return { result: { A, B }, steps };
        }

        // Turli ildizlar: A = P(a) / (a - b),  B = P(b) / (b - a)
        const P = new Polynomial(pCoeffs);
        const Pa = Polynomial.horner(P, a).remainder;
        const Pb = Polynomial.horner(P, b).remainder;

        const A = Pa.div(a.sub(b));
        const B = Pb.div(b.sub(a));

        steps.push(`Noma'lum koeffitsientlar usuli (yoki qoplash usuli):`);
        steps.push(`$A = \\frac{P(${a})}{${a} - (${b})} = \\frac{${Pa.toString()}}{${a.sub(b).toString()}} = <b>${A.toString()}</b>$`);
        steps.push(`$B = \\frac{P(${b})}{${b} - (${a})} = \\frac{${Pb.toString()}}{${b.sub(a).toString()}} = <b>${B.toString()}</b>$`);

        steps.push(`<b>Yakuniy yoyilma:</b> $\\frac{${A.toString()}}{x - (${a.toString()})} + \\frac{${B.toString()}}{x - (${b.toString()})}$`);

        return { result: { A, B }, steps };
    }

    static decomposeThreeLinear(pCoeffs, aVal, bVal, cVal) {
        // P(x) / ((x - a)(x - b)(x - c))
        const a = Fraction.parse(aVal);
        const b = Fraction.parse(bVal);
        const c = Fraction.parse(cVal);
        const steps = [];

        steps.push(`<b>Ratsional kasrni 3 ta chiziqli ko'paytuvchili maxraj bo'yicha yoyish:</b>`);
        steps.push(`$\\frac{P(x)}{(x - (${a}))(x - (${b}))(x - (${c}))} = \\frac{A}{x - (${a})} + \\frac{B}{x - (${b})} + \\frac{C}{x - (${c})}$`);

        const P = new Polynomial(pCoeffs);
        const Pa = Polynomial.horner(P, a).remainder;
        const Pb = Polynomial.horner(P, b).remainder;
        const Pc = Polynomial.horner(P, c).remainder;

        // A = P(a) / ((a - b)(a - c))
        const A = Pa.div(a.sub(b).mul(a.sub(c)));
        // B = P(b) / ((b - a)(b - c))
        const B = Pb.div(b.sub(a).mul(b.sub(c)));
        // C = P(c) / ((c - a)(c - b))
        const C = Pc.div(c.sub(a).mul(c.sub(b)));

        steps.push(`Qoplash usuli orqali:`);
        steps.push(`$A = \\frac{P(${a})}{(${a} - (${b}))(${a} - (${c}))} = <b>${A.toString()}</b>$`);
        steps.push(`$B = \\frac{P(${b})}{(${b} - (${a}))(${b} - (${c}))} = <b>${B.toString()}</b>$`);
        steps.push(`$C = \\frac{P(${c})}{(${c} - (${a}))(${c} - (${b}))} = <b>${C.toString()}</b>$`);

        steps.push(`<b>Yakuniy sodda kasrlar yig'indisi:</b>`);
        steps.push(`$\\frac{${A.toString()}}{x - (${a})} + \\frac{${B.toString()}}{x - (${b})} + \\frac{${C.toString()}}{x - (${c})}$`);

        return { result: { A, B, C }, steps };
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RationalFractionSolver;
}
