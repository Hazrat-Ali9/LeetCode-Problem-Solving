/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = nums => {
  const map = new Map([[0, -1]]);

  let result = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 1 ? 1 : -1;

    if (map.has(sum)) {
      result = Math.max(result, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return result;
};

export { findMaxLength };
