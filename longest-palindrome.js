/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = s => {
  const set = new Set();
  let count = 0; 

  for (let c of s) {
    if (set.has(c)) {
      set.delete(c);
      count++; 
    } else {
      set.add(c);
    }
  }

  return set.size > 0 ? 2 * count + 1 : 2 * count;
};


