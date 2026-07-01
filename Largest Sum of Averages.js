/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
    const n = nums.length;

    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    let dp = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        dp[i] = (prefix[n] - prefix[i]) / (n - i);
    }

    for (let p = 2; p <= k; p++) {
        const next = [...dp];

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j <= n; j++) {
                const avg = (prefix[j] - prefix[i]) / (j - i);
                next[i] = Math.max(next[i], avg + dp[j]);
            }
        }

        dp = next;
    }

    return dp[0];
};
