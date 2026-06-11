/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    const m = s1.length;
    const n = s2.length;

    const dp = Array.from({ length: m + 1 }, () =>
        Array(n + 1).fill(0)
    );

    for (let i = m - 1; i >= 0; i--) {
        dp[i][n] = dp[i + 1][n] + s1.charCodeAt(i);
    }

    for (let j = n - 1; j >= 0; j--) {
        dp[m][j] = dp[m][j + 1] + s2.charCodeAt(j);
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (s1[i] === s2[j]) {
                dp[i][j] = dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.min(
                    s1.charCodeAt(i) + dp[i + 1][j],
                    s2.charCodeAt(j) + dp[i][j + 1]
                );
            }
        }
    }

    return dp[0][0];
};
