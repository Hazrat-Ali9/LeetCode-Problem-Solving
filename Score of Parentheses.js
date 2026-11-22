var scoreOfParentheses = function(s) {
    let stack = [0];

    for (let ch of s) {
        if (ch === '(') {
            stack.push(0);
        } else {
            let value = stack.pop();

            let score = value === 0 ? 1 : 2 * value;

            stack[stack.length - 1] += score;
        }
    }

    return stack[0];
};

