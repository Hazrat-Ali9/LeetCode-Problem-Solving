/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  let major = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      count++;
      major = nums[i];
    } else if (major === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return major;
};
