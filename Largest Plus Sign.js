/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
    const banned = new Set();

    for (const [r, c] of mines) {
        banned.add(`${r},${c}`);
    }

    const dp = Array.from({ length: n }, () => Array(n).fill(n));

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            count = banned.has(`${i},${j}`) ? 0 : count + 1;
            dp[i][j] = Math.min(dp[i][j], count);
        }

        count = 0;
        for (let j = n - 1; j >= 0; j--) {
            count = banned.has(`${i},${j}`) ? 0 : count + 1;
            dp[i][j] = Math.min(dp[i][j], count);
        }
    }

    let ans = 0;

    for (let j = 0; j < n; j++) {
        let count = 0;
        for (let i = 0; i < n; i++) {
            count = banned.has(`${i},${j}`) ? 0 : count + 1;
            dp[i][j] = Math.min(dp[i][j], count);
        }

        count = 0;
        for (let i = n - 1; i >= 0; i--) {
            count = banned.has(`${i},${j}`) ? 0 : count + 1;
            dp[i][j] = Math.min(dp[i][j], count);

            ans = Math.max(ans, dp[i][j]);
        }
    }

    return ans;
};
