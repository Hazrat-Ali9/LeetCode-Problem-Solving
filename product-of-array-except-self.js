/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  const n = nums.length;
  const res = Array(n).fill(0);

  
  res[0] = 1;
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
};

