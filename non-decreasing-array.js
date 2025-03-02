/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = nums => {
  let p = null;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (p !== null) {
        return false;
      }
      p = i;
    }
  }

  // array is sorted already
  if (p === null) {
    return true;
  }

  // only the first and last pair need to be fixed
  if (p === 0 || p === nums.length - 2) {
    return true;
  }

  // considering A[p-1], A[p], A[p+1], A[p+2]
  // e.g. 2, 4, 3, 5
  if (nums[p - 1] <= nums[p + 1]) {
    return true;
  }

  // e.g 5, 5, 4, 6
  if (nums[p] <= nums[p + 2]) {
    return true;
  }

  return false;
};

export { checkPossibility };
