var minScoreTriangulation = function(values) {
    const n = values.length;

    const dp = Array.from(
        { length: n },
        () => new Array(n).fill(0)
    );

    for (let length = 3; length <= n; length++) {
        for (let i = 0; i + length - 1 < n; i++) {
            const j = i + length - 1;

            dp[i][j] = Infinity;

            for (let k = i + 1; k < j; k++) {
                const score =
                    dp[i][k] +
                    dp[k][j] +
                    values[i] * values[k] * values[j];

                dp[i][j] = Math.min(dp[i][j], score);
            }
        }
    }

    return dp[0][n - 1];
};
