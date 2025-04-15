/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = (A, B) => {
  const lenA = A.length;
  const lenB = B.length;

  for (let i = 0; i < lenA; i++) {
    let j = 0;

    while (j < lenB && B[j] === A[(i + j) % lenA]) {
      j++;
    }

    if (j === lenB) {
      return Math.ceil((i + j) / lenA);
    }
  }

  return -1;
};

export { repeatedStringMatch };
