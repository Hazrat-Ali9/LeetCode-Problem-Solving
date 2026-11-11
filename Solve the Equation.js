var solveEquation = function(equation) {
    const [left, right] = equation.split('=');

    function evaluate(expression) {
        let x = 0;
        let num = 0;

        expression = '+' + expression;

        const tokens = expression.match(/[+-][^+-]+/g);

        for (const token of tokens) {
            const sign = token[0] === '+' ? 1 : -1;
            const value = token.slice(1);

            if (value.includes('x')) {
                const coefficient = value === 'x'
                    ? 1
                    : Number(value.slice(0, -1));

                x += sign * coefficient;
            } else {
                num += sign * Number(value);
            }
        }

        return [x, num];
    }

    const [leftX, leftNum] = evaluate(left);
    const [rightX, rightNum] = evaluate(right);

    const coefficient = leftX - rightX;
    const constant = rightNum - leftNum;

    if (coefficient === 0) {
        return constant === 0
            ? "Infinite solutions"
            : "No solution";
    }

    return `x=${constant / coefficient}`;
};
