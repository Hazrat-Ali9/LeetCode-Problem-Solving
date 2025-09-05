/**
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = S => {
  const result = [];

  let i = 0;
  let j = 0;

  while (j < S.length) {
    while (j < S.length && S[i] === S[j]) {
      j++;
    }

    const len = j - i;

    if (len >= 3) {
      result.push([i, j - 1]);
    }

    i = j;
  }

  return result;
};
