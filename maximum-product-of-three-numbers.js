/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = nums => {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const a = nums[0] * nums[1] * nums[n - 1];
  const b = nums[n - 1] * nums[n - 2] * nums[n - 3];

  return Math.max(a, b);
};


