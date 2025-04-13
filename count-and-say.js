/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let s = '1';

  while (n > 1) {
    let count = 0;
    let next = '';

    for (let i = 0; i <= s.length; i++) {
      if (i === s.length || (i > 0 && s[i] !== s[i - 1])) {
        next += count + s[i - 1]; // Say
        count = 0;
      }

      count++; // Count
    }

    s = next;
    n--;
  }

  return s;
};

export { countAndSay };
