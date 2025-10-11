/**
 * @param {number[]} nums
 * @return {void}
 */
const wiggleSort = nums => {
  const n = nums.length;
  const sorted = nums.slice().sort((a, b) => a - b);

  for (let i = 0, j = n - 1, k = Math.floor((n - 1) / 2); i < n; i++) {
    nums[i] = i & 1 ? sorted[j--] : sorted[k--];
  }
};