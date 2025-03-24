/**
 * @param {string[]} board
 * @return {boolean}
 */
const validTicTacToe = board => {
  let xCount = 0;
  let oCount = 0;

  for (let row of board) {
    for (let c of row) {
      if (c === 'X') xCount++;
      if (c === 'O') oCount++;
    }
  }

  if (oCount !== xCount && oCount !== xCount - 1) return false;
  if (win(board, 'X') && oCount !== xCount - 1) return false;
  if (win(board, 'O') && oCount !== xCount) return false;

  return true;
};

const win = (B, P) => {
  // B: board, P: player
  for (let i = 0; i < 3; i++) {
    if (P === B[0][i] && P === B[1][i] && P === B[2][i]) return true;
    if (P === B[i][0] && P === B[i][1] && P === B[i][2]) return true;
  }
  if (P === B[0][0] && P === B[1][1] && P === B[2][2]) return true;
  if (P === B[0][2] && P === B[1][1] && P === B[2][0]) return true;
  return false;
};


