/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
  const n = words.length;
  const res = [];

  for (var i = 0; i < n; i = j) {
    
    let len = -1;
    for (var j = i; j < n && len + 1 + words[j].length <= maxWidth; j++) {
      len += 1 + words[j].length;
    }

   
    let spaces = 1; 
    let extra = 0; 

    if (j !== i + 1 && j !== n) {
      spaces = Math.floor((maxWidth - len) / (j - 1 - i)) + 1;
      extra = (maxWidth - len) % (j - 1 - i);
    }

    
    let row = words[i];
    for (let k = i + 1; k < j; k++, extra--) {
      row += ' '.repeat(spaces + (extra > 0 ? 1 : 0)) + words[k];
    }
    row += ' '.repeat(maxWidth - row.length);

   
    res.push(row);
  }

  return res;
};

