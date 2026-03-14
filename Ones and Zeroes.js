var findMaxForm = function(strs, m, n) {
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let s of strs) {
        let zeros = 0, ones = 0;

        for (let ch of s) {
            if (ch === '0') zeros++;
            else ones++;
        }

        for (let i = m; i >= zeros; i--) {
            for (let j = n; j >= ones; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
            }
        }
    }

    return dp[m][n];
};
