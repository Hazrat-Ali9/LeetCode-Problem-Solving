/**
 *
 * @param {string} s
 * @return {string}
 */
const frequencySort = s => {
  
  const map = {};
  for (let c of s) {
    map[c] = ~~map[c] + 1;
  }
// Sort 
  
  const bucket = Array(s.length + 1).fill('');
  Object.keys(map).forEach(c => {
    const count = map[c];
    bucket[count] += c.repeat(count);
  });

  
  let result = '';
  for (let i = bucket.length - 1; i > 0; i--) {
    result += bucket[i];
  }
  return result;
};


