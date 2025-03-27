/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = triangle => {
  const m = triangle.length;
  const dp = Array(m).fill(0);

  for (let i = 0; i < m; i++) {
    dp[i] = triangle[m - 1][i];
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }

  return dp[0];
};


