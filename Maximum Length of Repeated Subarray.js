/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    const dp = Array(n + 1).fill(0);
    let ans = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = n; j >= 1; j--) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[j] = dp[j - 1] + 1;
                ans = Math.max(ans, dp[j]);
            } else {
                dp[j] = 0;
            }
        }
    }

    return ans;
};
