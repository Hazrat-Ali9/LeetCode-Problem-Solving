

/**
 * Format the range
 *
 * @param {number} num1
 * @param {number} num2
 */
const getRange = (num1, num2) => (num1 === num2 ? `${num1}` : `${num1}->${num2}`);

/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = nums => {
  const n = nums.length;
  const result = [];

  for (let i = 0, j = 1; j <= n; j++) {
    if (j === n || nums[j] - nums[j - 1] > 1) {
      // found a range
      result.push(getRange(nums[i], nums[j - 1]));
      i = j;
    }
  }

  return result;
};

