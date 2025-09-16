/**
 *
 * @param {number} n
 * @return {number}
 */
const getMoneyAmount = n => {
  const dp = Array(n + 2)
    .fill()
    .map(() => Array(n + 2).fill(0));

  for (let len = 2; len <= n; len++) {
    for (let start = 1; start + len - 1 <= n; start++) {
      const end = start + len - 1;

      dp[start][end] = Number.MAX_SAFE_INTEGER;

      for (let i = start; i <= end; i++) {
        const val = i + Math.max(dp[start][i - 1], dp[i + 1][end]);
        dp[start][end] = Math.min(dp[start][end], val);
      }
    }
  }

  return dp[1][n];
};


