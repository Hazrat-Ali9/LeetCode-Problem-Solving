/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let maxLocal = 0;
  let max = 0;

  for (let num of nums) {
    max = Math.max(max, (maxLocal = num === 0 ? 0 : maxLocal + 1));
  }

  return max;
};


