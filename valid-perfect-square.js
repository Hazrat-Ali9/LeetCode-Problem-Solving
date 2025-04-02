/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = num => {
  let lo = 0;
  let hi = num;

  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;

    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return false;
};


