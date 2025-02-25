/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = nums => {
  const result = [];
  const pairs = nums.map((num, index) => [num, index]).sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result[pairs[i][1]] = 'Gold Medal';
    } else if (i === 1) {
      result[pairs[i][1]] = 'Silver Medal';
    } else if (i === 2) {
      result[pairs[i][1]] = 'Bronze Medal';
    } else {
      result[pairs[i][1]] = i + 1 + '';
    }
  }

  return result;
};


