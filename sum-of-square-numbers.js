/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = c => {
  if (c < 0) {
    return false;
  }

  let lo = 0;
  let hi = Math.floor(Math.sqrt(c));

  while (lo <= hi) {
    const cur = lo * lo + hi * hi;

    if (cur < c) {
      lo++;
    } else if (cur > c) {
      hi--;
    } else {
      return true;
    }
  }

  return false;
};


