/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const m = board.length;
  const n = board[0].length;
  const di = [-1, 1, 0, 0];
  const dj = [0, 0, -1, 1];

  const backtracking = (row, col, index) => {
    if (index === word.length) {
      return true;
    }

    if (row < 0 || col < 0 || row >= m || col >= n) {
      return false;
    }

    if (board[row][col] !== word[index]) {
      return false;
    }

    const c = board[row][col];

    board[row][col] = '';

    for (let k = 0; k < 4; k++) {
      if (backtracking(row + di[k], col + dj[k], index + 1)) {
        return true;
      }
    }

    board[row][col] = c;

    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtracking(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};
