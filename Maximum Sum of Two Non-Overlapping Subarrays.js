/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    function getMax(L, M) {
        let maxL = prefix[L] - prefix[0];
        let ans = 0;

        for (let i = L + M; i <= n; i++) {
            maxL = Math.max(maxL, prefix[i - M] - prefix[i - M - L]);
            ans = Math.max(ans, maxL + (prefix[i] - prefix[i - M]));
        }

        return ans;
    }

    return Math.max(getMax(firstLen, secondLen), getMax(secondLen, firstLen));
};
