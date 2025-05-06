/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
  let reach = 0;

  for (let i = 0; i < nums.length && i <= reach; i++) {
    if (i + nums[i] > reach) {
      reach = i + nums[i];
    }
  }

  return reach >= nums.length - 1;
};


