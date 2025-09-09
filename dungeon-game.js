/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = dungeon => {
  const m = dungeon.length;
  const n = dungeon[0].length;

  const dp = Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n);
  }

  dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);

  for (let j = n - 2; j >= 0; j--) {
    dp[m - 1][j] = Math.max(1, dp[m - 1][j + 1] - dungeon[m - 1][j]);
  }

  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - dungeon[i][n - 1]);
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = Math.max(1, Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]);
    }
  }

  return dp[0][0];
};



