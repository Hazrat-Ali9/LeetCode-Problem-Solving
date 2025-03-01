
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = nums => {
  const n = nums.length;

  
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      
      for (let j = n - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
         
          swap(nums, i, j);
          reverse(nums, i + 1, n - 1);
          return;
        }
      }
    }
  }

  nums.reverse();
};

const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

const reverse = (nums, start, end) => {
  while (start < end) {
    swap(nums, start++, end--);
  }
};
