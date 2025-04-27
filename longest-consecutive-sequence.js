/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = nums => {
  let max = 0;

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    let count = 1;

    // look left
    let num = nums[i];
    while (set.has(--num)) {
      count++;
      set.delete(num);
    }

    // look right
    num = nums[i];
    while (set.has(++num)) {
      count++;
      set.delete(num);
    }

    max = Math.max(max, count);
  }

  return max;
};
