
/**
 * @param {number} k
 * @return {number[]}
 */
const getRow = k => {
  // Initialize
  const arr = Array(k + 1).fill(0);
  arr[0] = 1;

  for (let i = 1; i <= k; i++) {
    for (let j = i; j > 0; j--) {
      arr[j] = arr[j] + arr[j - 1];
    }
  }

  return arr;
};

export { getRow };
