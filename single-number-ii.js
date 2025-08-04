/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  let ones = 0,
    twos = 0,
    threes = 0;

  for (let i = 0; i < nums.length; i++) {
   
    twos |= ones & nums[i];

    ones ^= nums[i];
    threes = ones & twos;
    ones &= ~threes;
    twos &= ~threes;
  }

  return ones;
};