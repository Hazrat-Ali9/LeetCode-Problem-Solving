/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = citations => {
  const n = citations.length;
  let lo = 0;
  let hi = n - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (citations[mid] >= n - mid) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return n - lo;
};

