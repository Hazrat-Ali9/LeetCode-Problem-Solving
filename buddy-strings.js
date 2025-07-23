/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const buddyStrings = (A, B) => {
  if (!A || !B || A.length !== B.length) {
    return false;
  }

  if (A === B) {
    const count = {};

    for (let c of A) {
      count[c] = ~~count[c] + 1;
    }

    for (let c in count) {
      if (count[c] > 1) {
        return true;
      }
    }

    return false;
  }

  let first = -1;
  let second = -1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      if (first === -1) {
        first = i;
      } else if (second === -1) {
        second = i;
      } else {
        return false;
      }
    }
  }

  return second !== -1 && A[first] === B[second] && A[second] === B[first];
};
