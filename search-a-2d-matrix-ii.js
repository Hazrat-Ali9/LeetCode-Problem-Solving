/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (!matrix || matrix.length === 0) {
    return false;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  let i = 0;
  let j = n - 1;

  while (i < m && j >= 0) {
    if (target === matrix[i][j]) {
      return true;
    } else if (target < matrix[i][j]) {
      j--;
    } else {
      i++;
    }
  }

  return false;
};