var maxSumDivThree = function(nums) {
    let dp = [0, -Infinity, -Infinity];

    for (const num of nums) {
        const prev = [...dp];

        for (let r = 0; r < 3; r++) {
            if (prev[r] !== -Infinity) {
                const sum = prev[r] + num;
                const remainder = sum % 3;

                dp[remainder] = Math.max(dp[remainder], sum);
            }
        }
    }

    return dp[0];
};
