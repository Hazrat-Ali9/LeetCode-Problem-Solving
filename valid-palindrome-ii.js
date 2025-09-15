/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = s => {
  let i = -1;
  let j = s.length;

  while (++i < --j) {
    if (s[i] !== s[j]) {
      return isPalindromic(s, i, j + 1) || isPalindromic(s, i - 1, j);
    }
  }

  return true;
};

const isPalindromic = (s, i, j) => {
  while (++i < --j) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};
