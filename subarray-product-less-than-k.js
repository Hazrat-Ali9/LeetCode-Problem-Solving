/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
  let count = 0;
  let product = 1;

  for (let i = 0, j = 0; j < nums.length; j++) {
    product *= nums[j];

    while (i <= j && product >= k) {
      product /= nums[i++];
    }

    count += j - i + 1;
  }

  return count;
};


