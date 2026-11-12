/**
 * Aniq kasrlar arifmetikasi (Exact Fraction Arithmetic)
 * Barcha hisob-kitoblar yaxlitlashlarsiz BigInt yordamida aniq bajariladi.
 */
class Fraction {
    constructor(num, den = 1n) {
        let n = BigInt(num);
        let d = BigInt(den);

        if (d === 0n) {
            throw new Error("Nolga bo'lish mumkin emas!");
        }

        if (d < 0n) {
            n = -n;
            d = -d;
        }

        const g = Fraction.gcd(n < 0n ? -n : n, d);
        this.num = n / g;
        this.den = d / g;
    }

    static gcd(a, b) {
        while (b !== 0n) {
            const t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    static zero() {
        return new Fraction(0n, 1n);
    }

    static one() {
        return new Fraction(1n, 1n);
    }

    static parse(val) {
        if (val instanceof Fraction) return val;
        if (typeof val === 'bigint' || typeof val === 'number') {
            if (Number.isInteger(Number(val))) {
                return new Fraction(BigInt(val), 1n);
            }
            // Float number handling
            const s = val.toString();
            return Fraction.fromString(s);
        }
        if (typeof val === 'string') {
            return Fraction.fromString(val);
        }
        return Fraction.zero();
    }

    static fromString(str) {
        str = str.trim().replace(/\s+/g, '');
        if (!str || str === '' || str === '0') return Fraction.zero();

        // Kasr ko'rinishida: a/b
        if (str.includes('/')) {
            const parts = str.split('/');
            if (parts.length === 2 && parts[0] && parts[1]) {
                const n = BigInt(parts[0]);
                const d = BigInt(parts[1]);
                return new Fraction(n, d);
            }
        }

        // O'nli kasr: 1.25 -> 125/100
        if (str.includes('.')) {
            const [intPart, decPart] = str.split('.');
            const sign = intPart.startsWith('-') ? -1n : 1n;
            const absInt = intPart.replace('-', '');
            const decimals = decPart.length;
            const den = 10n ** BigInt(decimals);
            const num = (BigInt(absInt || '0') * den + BigInt(decPart)) * sign;
            return new Fraction(num, den);
        }

        // Oddiy butun son
        return new Fraction(BigInt(str), 1n);
    }

    add(other) {
        const o = Fraction.parse(other);
        return new Fraction(
            this.num * o.den + o.num * this.den,
            this.den * o.den
        );
    }

    sub(other) {
        const o = Fraction.parse(other);
        return new Fraction(
            this.num * o.den - o.num * this.den,
            this.den * o.den
        );
    }

    mul(other) {
        const o = Fraction.parse(other);
        return new Fraction(
            this.num * o.num,
            this.den * o.den
        );
    }

    div(other) {
        const o = Fraction.parse(other);
        if (o.isZero()) {
            throw new Error("Nolga bo'lish mumkin emas!");
        }
        return new Fraction(
            this.num * o.den,
            this.den * o.num
        );
    }

    neg() {
        return new Fraction(-this.num, this.den);
    }

    abs() {
        return new Fraction(this.num < 0n ? -this.num : this.num, this.den);
    }

    inv() {
        if (this.num === 0n) {
            throw new Error("Nolning teskarisi mavjud emas!");
        }
        return new Fraction(this.den, this.num);
    }

    isZero() {
        return this.num === 0n;
    }

    isOne() {
        return this.num === 1n && this.den === 1n;
    }

    isNegative() {
        return this.num < 0n;
    }

    equals(other) {
        const o = Fraction.parse(other);
        return this.num === o.num && this.den === o.den;
    }

    toNumber() {
        return Number(this.num) / Number(this.den);
    }

    toString() {
        if (this.den === 1n) {
            return this.num.toString();
        }
        return `${this.num}/${this.den}`;
    }

    toTeX() {
        if (this.den === 1n) {
            return this.num.toString();
        }
        if (this.num < 0n) {
            return `-\\frac{${-this.num}}{${this.den}}`;
        }
        return `\\frac{${this.num}}{${this.den}}`;
    }

    toHTML() {
        if (this.den === 1n) {
            return `${this.num}`;
        }
        const sign = this.num < 0n ? "-" : "";
        const absNum = this.num < 0n ? -this.num : this.num;
        return `${sign}<span class="frac"><sup>${absNum}</sup>&frasl;<sub>${this.den}</sub></span>`;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Fraction;
}
