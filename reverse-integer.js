/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);

  let res = 0;

  while (x !== 0) {
    res = res * 10 + (x % 10);
    x = parseInt(x / 10);

    if (res > MAX || res < MIN) {
      return 0;
    }
  }

  return res;
};


