
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class Solution {
  /**
   * @param {number[]} w
   */
  constructor(w) {
    for (let i = 1; i < w.length; i++) {
      w[i] += w[i - 1];
    }
    this.wSums = w;
  }

  /**
   * @return {number}
   */
  pickIndex() {
    const n = this.wSums.length;
    const idx = getRandomInt(1, this.wSums[n - 1]);

    let lo = 0;
    let hi = n - 1;

    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);

      if (this.wSums[mid] === idx) {
        return mid;
      } else if (this.wSums[mid] < idx) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    return lo;
  }
}


