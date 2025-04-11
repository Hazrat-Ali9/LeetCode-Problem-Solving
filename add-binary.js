/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
const addBinary = (s1, s2) => {
  let i = s1.length - 1;
  let j = s2.length - 1;
  let c = 0;
  let s = '';

  while (i >= 0 || j >= 0 || c > 0) {
    const a = i < 0 ? 0 : s1[i--] - '0';
    const b = j < 0 ? 0 : s2[j--] - '0';

    s = (a ^ b ^ c) + s;
    c = (a + b + c) >> 1;
  }

  return s;
};


