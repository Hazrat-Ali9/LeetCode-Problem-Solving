/**
 *
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  const n = s.length;

  const dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
  }

  let result = '';
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1]);

      if (dp[i][j] && j - i + 1 > result.length) {
        result = s.substring(i, j + 1);
      }
    }
  }

  return result;
};

