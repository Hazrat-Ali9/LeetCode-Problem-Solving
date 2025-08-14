/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  let sum = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (i >= k - 1) {
      max = Math.max(max, sum / k);
      sum -= nums[i - k + 1];
    }
  }

  return max;
};
