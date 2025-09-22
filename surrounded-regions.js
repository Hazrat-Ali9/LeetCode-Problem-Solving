const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

/**
 * @param {character[][]} board
 * @return {void} 
 */
const solve = board => {
  if (!board || board.length === 0 || board[0].length === 0) return;

  const n = board.length;
  const m = board[0].length;


  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((i === 0 || i === n - 1 || j === 0 || j === m - 1) && board[i][j] === 'O') {
        bfs(board, n, m, i, j);
      }
    }
  }

 
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }


  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === '1') {
        board[i][j] = 'O';
      }
    }
  }
};

const bfs = (board, n, m, i, j) => {
  const queue = [];
  queue.push([i, j]);

  board[i][j] = '1';

  while (queue.length > 0) {
    const pos = queue.shift();

    for (let k = 0; k < 4; k++) {
      i = pos[0] + dx[k];
      j = pos[1] + dy[k];

      if (i >= 0 && i < n && j >= 0 && j < m && board[i][j] === 'O') {
        board[i][j] = '1';
        queue.push([i, j]);
      }
    }
  }
};
