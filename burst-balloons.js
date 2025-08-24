/**
 * @param {number[]} nums
 * @return {number}
 */
const maxCoins = nums => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  const n = nums.length;
  
  const dp = Array(n + 2)
    .fill()
    .map(() => Array(n + 2).fill(0));
  
  nums = [1, ...nums, 1];

  for (let len = 1; len <= n; len++) {
    for (let start = 1; start + len - 1 <= n; start++) {
      const end = start + len - 1;
      for (let i = start; i <= end; i++) {
        const val = dp[start][i - 1] + nums[i] * nums[start - 1] * nums[end + 1] + dp[i + 1][end];
        dp[start][end] = Math.max(val, dp[start][end]);
      }
    }
  }

  return dp[1][n];
};

