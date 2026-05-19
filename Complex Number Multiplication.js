var complexNumberMultiply = function(num1, num2) {

    function parseComplex(str) {

        let plusIndex = str.indexOf('+');

        let real = parseInt(str.substring(0, plusIndex));

        let imag = parseInt(
            str.substring(plusIndex + 1, str.length - 1)
        );

        return [real, imag];
    }

    let [a, b] = parseComplex(num1);
    let [c, d] = parseComplex(num2);
    let realPart = a * c - b * d;

    let imagPart = a * d + b * c;

    return realPart + "+" + imagPart + "i";
};
