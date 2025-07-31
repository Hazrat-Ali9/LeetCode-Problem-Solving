/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  const set = new Set();
  let max = 0;

  for (let i = 0, j = 0; j < s.length; j++) {
    
    while (set.has(s[j])) {
      set.delete(s[i]);
      i++;
    }

   
    set.add(s[j]);
    max = Math.max(max, set.size);
  }

  return max;
};




