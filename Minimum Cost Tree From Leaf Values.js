var mctFromLeafValues = function(arr) {
    const stack = [Infinity];
    let answer = 0;

    for (const num of arr) {
        while (stack[stack.length - 1] <= num) {
            const mid = stack.pop();

            const left = stack[stack.length - 1];
            const right = num;

            answer += mid * Math.min(left, right);
        }

        stack.push(num);
    }

    while (stack.length > 2) {
        const mid = stack.pop();
        answer += mid * stack[stack.length - 1];
    }

    return answer;
};
