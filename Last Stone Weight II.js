var lastStoneWeightII = function(stones) {
    const total = stones.reduce((sum, stone) => sum + stone, 0);
    const target = Math.floor(total / 2);

    const dp = new Array(target + 1).fill(0);

    for (const stone of stones) {
        for (let j = target; j >= stone; j--) {
            dp[j] = Math.max(
                dp[j],
                dp[j - stone] + stone
            );
        }
    }

    return total - 2 * dp[target];
};
