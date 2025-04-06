/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = matrix => {
  if (!matrix || matrix.length === 0) {
    return 0;
  }

  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0);
  }

  let max = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  
  return max * max;
};


