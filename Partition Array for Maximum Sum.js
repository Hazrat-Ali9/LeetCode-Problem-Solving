var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        let maxVal = 0;

        for (let len = 1; len <= k && i - len >= 0; len++) {
            maxVal = Math.max(maxVal, arr[i - len]);

            dp[i] = Math.max(
                dp[i],
                dp[i - len] + maxVal * len
            );
        }
    }

    return dp[n];
};

