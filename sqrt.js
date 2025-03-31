/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
  if (x === 0) {
    return 0;
  }

  let lo = 1;
  let hi = x;

  while (true) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (mid > x / mid) {
      hi = mid - 1;
    } else {
      if (mid + 1 > x / (mid + 1)) {
        return mid;
      }

      lo = mid + 1;
    }
  }
};


