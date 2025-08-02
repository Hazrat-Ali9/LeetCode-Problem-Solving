/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
  
  if (!words || words.length === 0) return [];

  const m = words.length,
    n = words[0].length,
    len = m * n,
    result = [];

  
  const map = {};
  for (word of words) map[word] = ~~map[word] + 1;

  
  for (let i = 0; i < s.length - len + 1; i++) {
 
    const temp = Object.assign({}, map);

    for (let j = i; j < i + len; j += n) {
      const str = s.substr(j, n);
      
      if (!(str in temp)) break;
      
      if (--temp[str] === 0) delete temp[str];
    }

   
    if (Object.keys(temp).length === 0) result.push(i);
  }

  return result;
};


