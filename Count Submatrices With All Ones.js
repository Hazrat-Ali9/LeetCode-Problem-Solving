var numSubmat = function(mat) {
    const m = mat.length;
    const n = mat[0].length;

    const heights = new Array(n).fill(0);
    let answer = 0;

    for (let i = 0; i < m; i++) {

        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }

        const stack = [];
        const dp = new Array(n).fill(0);

        for (let j = 0; j < n; j++) {
            while (
                stack.length > 0 &&
                heights[stack[stack.length - 1]] >= heights[j]
            ) {
                stack.pop();
            }

            if (stack.length === 0) {
                dp[j] = heights[j] * (j + 1);
            } else {
                const prev = stack[stack.length - 1];
                dp[j] = dp[prev] + heights[j] * (j - prev);
            }

            stack.push(j);
            answer += dp[j];
        }
    }

    return answer;
};
