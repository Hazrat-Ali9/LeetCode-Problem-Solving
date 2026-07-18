/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let total = 0;

    let curMax = 0;
    let maxSum = -Infinity;

    let curMin = 0;
    let minSum = Infinity;

    for (const num of nums) {
        curMax = Math.max(num, curMax + num);
        maxSum = Math.max(maxSum, curMax);

        curMin = Math.min(num, curMin + num);
        minSum = Math.min(minSum, curMin);

        total += num;
    }

    if (maxSum < 0) return maxSum;

    return Math.max(maxSum, total - minSum);
};
