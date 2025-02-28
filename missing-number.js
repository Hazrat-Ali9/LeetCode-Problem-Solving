
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
  let res = nums.length;

  for (i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i]; // a ^ b ^ b = a
  }

  return res;
};

export { missingNumber };
