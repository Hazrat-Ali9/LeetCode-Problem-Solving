
/**
 * @param {number} n
 * @return {number}
 */
const numSquares = n => {
  if (n <= 0) {
    return 0;
  }

  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER;

    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];
};


