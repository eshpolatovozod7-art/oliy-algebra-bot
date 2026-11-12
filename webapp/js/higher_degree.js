/**
 * 15-Mavzu: 3- va 4-darajali tenglamalar (Higher Degree Equations)
 * 3-darajali tenglama: Kardano formulasi
 * 4-darajali tenglama: Ferrari usuli
 */

class HigherDegreeSolver {
    static cbrtReal(x) {
        if (x < 0) return -Math.cbrt(-x);
        return Math.cbrt(x);
    }

    // Kvadrat tenglama: Ax^2 + Bx + C = 0
    static solveQuadratic(A, B, C) {
        const steps = [];
        steps.push(`Kvadrat tenglama: $(${A})x^2 + (${B})x + (${C}) = 0$`);
        const D = B * B - 4 * A * C;
        steps.push(`Diskriminant: $D = b^2 - 4ac = (${B})^2 - 4(${A})(${C}) = ${D.toFixed(4)}$`);

        const roots = [];
        if (D >= 0) {
            const sq = Math.sqrt(D);
            const x1 = (-B + sq) / (2 * A);
            const x2 = (-B - sq) / (2 * A);
            roots.push(`${x1.toFixed(4)}`, `${x2.toFixed(4)}`);
            steps.push(`$D \\ge 0$: Ikkita haqiqiy ildiz:`);
            steps.push(`$x_1 = ${x1.toFixed(4)}, \\quad x_2 = ${x2.toFixed(4)}$`);
        } else {
            const sq = Math.sqrt(-D);
            const re = (-B / (2 * A)).toFixed(4);
            const im = (sq / (2 * A)).toFixed(4);
            roots.push(`${re} + ${im}i`, `${re} - ${im}i`);
            steps.push(`$D < 0$: Ikkita qo'shma kompleks ildiz:`);
            steps.push(`$x_{1,2} = ${re} \\pm ${im}i$`);
        }
        return { roots, steps };
    }

    // 3-darajali tenglama (Kardano): ax^3 + bx^2 + cx + d = 0
    static solveCubic(a, b, c, d) {
        if (Math.abs(a) < 1e-12) {
            return HigherDegreeSolver.solveQuadratic(b, c, d);
        }

        const steps = [];
        steps.push(`<b>3-darajali tenglamani Kardano formulasi bilan yechish:</b>`);
        steps.push(`$(${a})x^3 + (${b})x^2 + (${c})x + (${d}) = 0$`);

        // 1-qadam: Bosh koeffitsientga bo'lish
        const a2 = b / a;
        const a1 = c / a;
        const a0 = d / a;
        steps.push(`1-qadam: $a = ${a}$ ga bo'lamiz: $x^3 + (${a2.toFixed(4)})x^2 + (${a1.toFixed(4)})x + (${a0.toFixed(4)}) = 0$`);

        // 2-qadam: Chirnxauz almashtirishi: x = y - a2/3
        const shift = a2 / 3.0;
        const p = a1 - (a2 * a2) / 3.0;
        const q = (2.0 * a2 * a2 * a2) / 27.0 - (a2 * a1) / 3.0 + a0;

        steps.push(`2-qadam: $x = y - (${shift.toFixed(4)})$ almashtirishi bilan keltirilgan kubik tenglama hosil qilinadi:`);
        steps.push(`$y^3 + py + q = 0$, bu yerda:`);
        steps.push(`$p = a_1 - \\frac{a_2^2}{3} = <b>${p.toFixed(4)}</b>$`);
        steps.push(`$q = \\frac{2a_2^3}{27} - \\frac{a_1 a_2}{3} + a_0 = <b>${q.toFixed(4)}</b>$`);
        steps.push(`Tenglama: $y^3 + (${p.toFixed(4)})y + (${q.toFixed(4)}) = 0$`);

        // 3-qadam: Kardano diskriminanti: D = (q/2)^2 + (p/3)^3
        const p3 = p / 3.0;
        const q2 = q / 2.0;
        const D = q2 * q2 + p3 * p3 * p3;

        steps.push(`3-qadam: Kardano diskriminanti: $D = \\left(\\frac{q}{2}\\right)^2 + \\left(\\frac{p}{3}\\right)^3 = (${q2.toFixed(4)})^2 + (${p3.toFixed(4)})^3 = <b>${D.toFixed(6)}</b>$`);

        const roots = [];

        if (D > 1e-10) {
            steps.push(`<b>D > 0 holati:</b> 1 ta haqiqiy va 2 ta kompleks qo'shma ildiz mavjud.`);
            const sqrtD = Math.sqrt(D);
            const u = HigherDegreeSolver.cbrtReal(-q2 + sqrtD);
            const v = HigherDegreeSolver.cbrtReal(-q2 - sqrtD);
            steps.push(`$u = \\sqrt[3]{-\\frac{q}{2} + \\sqrt{D}} = ${u.toFixed(4)}$`);
            steps.push(`$v = \\sqrt[3]{-\\frac{q}{2} - \\sqrt{D}} = ${v.toFixed(4)}$`);

            const y1 = u + v;
            const reY = -0.5 * (u + v);
            const imY = (Math.sqrt(3.0) / 2.0) * (u - v);

            const x1 = (y1 - shift).toFixed(4);
            const reX = (reY - shift).toFixed(4);
            const imX = Math.abs(imY).toFixed(4);

            roots.push(x1, `${reX} + ${imX}i`, `${reX} - ${imX}i`);
            steps.push(`$x_1 = y_1 - \\text{shift} = <b>${x1}</b>$`);
            steps.push(`$x_2 = <b>${reX} + ${imX}i</b>$`);
            steps.push(`$x_3 = <b>${reX} - ${imX}i</b>$`);
        } else if (Math.abs(D) <= 1e-10) {
            steps.push(`<b>D = 0 holati:</b> Barcha ildizlar haqiqiy (kamida ikkitasi karrali).`);
            const u = HigherDegreeSolver.cbrtReal(-q2);
            const y1 = 2.0 * u;
            const y2 = -u;

            const x1 = (y1 - shift).toFixed(4);
            const x2 = (y2 - shift).toFixed(4);

            roots.push(x1, x2, x2);
            steps.push(`$x_1 = <b>${x1}</b>$`);
            steps.push(`$x_2 = x_3 = <b>${x2}</b>$`);
        } else {
            // D < 0: Casus Irreducibilis (Trigonometrik shakl)
            steps.push(`<b>D < 0 holati (Casus Irreducibilis):</b> 3 ta turli haqiqiy ildiz mavjud. Trigonometrik usul (Vieta formulasi) qo'llaniladi:`);
            const r = 2.0 * Math.sqrt(-p3);
            let cos3alpha = -q2 / Math.sqrt(-p3 * p3 * p3);
            if (cos3alpha > 1.0) cos3alpha = 1.0;
            if (cos3alpha < -1.0) cos3alpha = -1.0;
            const alpha = Math.acos(cos3alpha) / 3.0;

            const y1 = r * Math.cos(alpha);
            const y2 = r * Math.cos(alpha + (2 * Math.PI / 3));
            const y3 = r * Math.cos(alpha + (4 * Math.PI / 3));

            const x1 = (y1 - shift).toFixed(4);
            const x2 = (y2 - shift).toFixed(4);
            const x3 = (y3 - shift).toFixed(4);

            roots.push(x1, x2, x3);
            steps.push(`$r = 2\\sqrt{-\\frac{p}{3}} = ${r.toFixed(4)}, \\quad \\alpha = ${(alpha * 180 / Math.PI).toFixed(2)}^\\circ$`);
            steps.push(`$x_1 = r\\cos(\\alpha) - \\text{shift} = <b>${x1}</b>$`);
            steps.push(`$x_2 = r\\cos\\left(\\alpha + \\frac{2\\pi}{3}\\right) - \\text{shift} = <b>${x2}</b>$`);
            steps.push(`$x_3 = r\\cos\\left(\\alpha + \\frac{4\\pi}{3}\\right) - \\text{shift} = <b>${x3}</b>$`);
        }

        return { roots, steps };
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = HigherDegreeSolver;
}
