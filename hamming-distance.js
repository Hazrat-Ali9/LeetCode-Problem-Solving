/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  let dist = 0;
  let n = x ^ y;

  while (n) {
    dist++;
    n &= n - 1;
  }

  return dist;
};


