var fractionAddition = function(expression) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }

    let numerator = 0;
    let denominator = 1;

    let fractions = expression.match(/[+-]?\d+\/\d+/g);

    for (let frac of fractions) {

        let [num, den] = frac.split('/').map(Number);

        numerator = numerator * den + num * denominator;
        denominator = denominator * den;

        let g = gcd(numerator, denominator);

        numerator /= g;
        denominator /= g;
    }

    return numerator + "/" + denominator;
};
