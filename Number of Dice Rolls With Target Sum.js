var numRollsToTarget = function(n, k, target) {
    const MOD = 1000000007;

    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        const next = new Array(target + 1).fill(0);

        for (let sum = 1; sum <= target; sum++) {
            for (let face = 1; face <= k && face <= sum; face++) {
                next[sum] = (next[sum] + dp[sum - face]) % MOD;
            }
        }

        dp = next;
    }

    return dp[target];
};
