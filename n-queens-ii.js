/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = n => {
  const isValid = (row, columns) => {
    for (let i = 0; i < row; i++) {
      if (columns[i] === columns[row]) {
        return false; 
      }

      if (row - i === Math.abs(columns[row] - columns[i])) {
        return false; 
      }
    }

    return true;
  };

  const backtracking = (n, row, columns) => {
    if (row === n) {
      count++;
      return;
    }

    for (let j = 0; j < n; j++) {
      columns[row] = j;

      if (isValid(row, columns)) {
        backtracking(n, row + 1, columns);
      }
    }
  };

  let count = 0;
  backtracking(n, 0, []);
  return count;
};
