/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
  const window = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (window.length > 0 && window[0] === i - k) {
      window.shift();
    }

    while (window.length > 0 && nums[window[window.length - 1]] < nums[i]) {
      window.pop();
    }

    window.push(i);

    if (i >= k - 1) {
      result.push(nums[window[0]]);
    }
  }

  return result;
};


