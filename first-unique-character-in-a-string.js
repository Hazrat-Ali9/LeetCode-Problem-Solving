
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  const map = {};


  for (let c of s) {
    map[c] = ~~map[c] + 1;
  }


  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};


