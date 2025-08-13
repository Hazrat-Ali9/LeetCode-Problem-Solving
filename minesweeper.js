/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
const updateBoard = (board, click) => {
  const [x, y] = click;

  if (board[x][y] === 'M') {
    
    board[x][y] = 'X';
  } else {
    bfs(board, click);
  }

  return board;
};

const bfs = (board, click) => {
  const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
  const m = board.length;
  const n = board[0].length;
  const queue = [click];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    
    let minesCount = 0;
    for (let [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;

      if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] === 'M') {
        minesCount++;
      }
    }

    if (minesCount > 0) {
      
      board[x][y] = '' + minesCount;
    } else {
      
      board[x][y] = 'B';

      for (let [dx, dy] of dirs) {
        const i = x + dx;
        const j = y + dy;

        if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] === 'E') {
          queue.push([i, j]);
          board[i][j] = 'B';
        }
      }
    }
  }
};
