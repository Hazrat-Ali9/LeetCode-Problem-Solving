/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 *
 * Time complexity: max(O(nlogn), O(mlogn)) - m is the length of houses, n is the length of heaters.
 */
const findRadius = (houses, heaters) => {
  heaters.sort((a, b) => a - b);

  let result = -Infinity;

  for (let house of houses) {
    let index = searchInsert(heaters, house);

    const dist1 = index > 0 ? house - heaters[index - 1] : Infinity;
    const dist2 = index < heaters.length ? heaters[index] - house : Infinity;

    result = Math.max(result, Math.min(dist1, dist2));
  }

  return result;
};

const searchInsert = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};
