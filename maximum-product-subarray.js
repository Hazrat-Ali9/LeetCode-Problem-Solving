/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = nums => {
  let res = nums[0];
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      max = Math.max(nums[i], max * nums[i]);
      min = Math.min(nums[i], min * nums[i]);
    } else {
      const tmp = max;
      max = Math.max(nums[i], min * nums[i]);
      min = Math.min(nums[i], tmp * nums[i]);
    }

    res = Math.max(res, max);
  }

  return res;
};

export { maxProduct };
