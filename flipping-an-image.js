/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = A => {
  for (let row of A) {
    for (let i = 0; i * 2 < row.length; i++) {
      if (row[i] === row[row.length - i - 1]) {
        row[i] = row[row.length - i - 1] ^= 1;
      }
    }
  }
  return A;
};


