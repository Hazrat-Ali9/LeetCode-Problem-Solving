var longestPalindromeSubseq = function(s) {

    let n = s.length;

    let dp = Array.from({ length: n }, () =>
        Array(n).fill(0)
    );

    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    for (let len = 2; len <= n; len++) {

        for (let i = 0; i <= n - len; i++) {

            let j = i + len - 1;

            if (s[i] === s[j]) {

                if (len === 2) {
                    dp[i][j] = 2;
                } else {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                }

            } else {

                dp[i][j] = Math.max(
                    dp[i + 1][j],
                    dp[i][j - 1]
                );
            }
        }
    }

    return dp[0][n - 1];
};
