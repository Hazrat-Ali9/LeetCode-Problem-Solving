/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let max = nums[0];
  let local = nums[0];

  for (let i = 1; i < nums.length; i++) {
    local = Math.max(local + nums[i], nums[i]);
    max = Math.max(local, max);
  }

  return max;
};


