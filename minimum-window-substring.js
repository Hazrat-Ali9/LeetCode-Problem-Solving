/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  
  const map = {};
  for (let c of t) {
    map[c] = ~~map[c] + 1;
  }

  let start = 0;
  let size = Infinity;
  let counter = t.length;

 
  for (let i = 0, j = 0; j < s.length; j++) {
   
    if (map[s[j]]-- > 0) {
      counter--; 
    }

   
    while (counter === 0) {
      if (j - i + 1 < size) {
        size = j - i + 1;
        start = i;
      }

      if (map[s[i++]]++ === 0) {
        counter++; 
      }
    }
  }

  return size === Infinity ? '' : s.substr(start, size);
};


