/**
 * @param {string[]} words
 * @return {number}
 */
const maxProduct = words => {
  const n = words.length;
  const values = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let ch of words[i]) {
      values[i] |= 1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0));
    }
  }

  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((values[i] & values[j]) === 0 && words[i].length * words[j].length > max) {
        max = words[i].length * words[j].length;
      }
    }
  }

  return max;
};

