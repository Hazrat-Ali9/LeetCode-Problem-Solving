/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = nums => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let max = 1;
  let current = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 1;
    }
  }

  return max;
};

