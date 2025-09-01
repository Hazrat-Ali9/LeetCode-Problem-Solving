/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map.has(num) && i - map.get(num) <= k) {
      return true;
    }

    map.set(num, i);
  }

  return false;
};
