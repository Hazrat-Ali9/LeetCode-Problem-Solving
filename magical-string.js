/**
 * @param {number} n
 * @return {number}
 */
const magicalString = n => {
  let s = '122';
  let i = 2;

  while (s.length < n) {
    const nextChar = `${parseInt(s.slice(-1)) ^ 3}`;
    const count = s[i++] - '0';
    s += nextChar.repeat(count);
  }

  return countOnes(s, n);
};

const countOnes = (s, n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += s[i] === '1' ? 1 : 0;
  }
  return count;
};


