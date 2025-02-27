/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = nums => search(nums, 0, nums.length - 1);

const search = (nums, lo, hi) => {
  if (lo > hi) {
    return -1;
  }

  const mid = lo + Math.floor((hi - lo) / 2);

  if ((mid == 0 || nums[mid - 1] < nums[mid]) && (mid == nums.length - 1 || nums[mid] > nums[mid + 1])) {
    return mid;
  }

  if (nums[mid] < nums[mid + 1]) {
    return search(nums, mid + 1, hi);
  }
  return search(nums, lo, mid - 1);
};


