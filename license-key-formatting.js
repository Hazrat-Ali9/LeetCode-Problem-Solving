/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting = (s, k) => {
  let key = '';

  for (let c of reverse(s)) {
    if (c !== '-') {
      if (key.length % (k + 1) === k) {
        key += '-';
      }
      key += c.toUpperCase();
    }
  }

  return reverse(key);
};

const reverse = str => [...str].reverse().join('');


