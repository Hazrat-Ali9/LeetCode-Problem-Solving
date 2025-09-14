/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = s => {
  const extendPalindrome = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  };

  if (!s || s.length === 0) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    
    extendPalindrome(s, i, i); 
    extendPalindrome(s, i, i + 1); 
  }

  return count;
};
