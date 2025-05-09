/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = num => {
  for (let p of [2, 3, 5]) {
    while (num && num % p == 0) num /= p;
  }
  return num === 1;
};


