/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = (arr, k, x) => {
  const p = findClosestElement(arr, x);

  let i = p - 1; 
  let j = p;

  while (k-- > 0) {
    if (i < 0 || (j < arr.length && Math.abs(arr[j] - x) < Math.abs(arr[i] - x))) {
      
      j++;
    } else {
      i--;
    }
  }

  return arr.slice(i + 1, j);
};

const findClosestElement = (arr, x) => {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] === x) {
      return mid;
    }

    if (arr[mid] > x) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};
