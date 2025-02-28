/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = board => {
  const m = board.length;
  const n = board[0].length;

  const di = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dj = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let live = 0;

      for (let k = 0; k < 8; k++) {
        const ii = i + di[k];
        const jj = j + dj[k];

        if (ii < 0 || ii >= m || jj < 0 || jj >= n) {
          continue;
        }

        if (board[ii][jj] === 1 || board[ii][jj] === 2) {
          live++;
        }
      }

      if (board[i][j] === 1 && (live < 2 || live > 3)) {
        board[i][j] = 2;
      } else if (board[i][j] === 0 && live === 3) {
        board[i][j] = 3;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] %= 2;
    }
  }
};
