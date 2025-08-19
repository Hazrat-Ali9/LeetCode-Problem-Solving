/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const lower = searchLowerBound(nums, target);
  const upper = searchUpperBound(nums, target);

  if (lower === -1) {
    return [-1, -1];
  }

  return [lower, upper];
};

const searchLowerBound = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] < target) {
      lo = mid + 1;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid;
      } else {
        hi = mid - 1;
      }
    }
  }

  return -1;
};

const searchUpperBound = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] < target) {
      lo = mid + 1;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] > target) {
        return mid;
      } else {
        lo = mid + 1;
      }
    }
  }

  return -1;
};
