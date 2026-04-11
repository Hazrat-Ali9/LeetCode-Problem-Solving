var countBattleships = function(board) {
    let m = board.length;
    let n = board[0].length;
    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'X') {
      
                if ((i === 0 || board[i - 1][j] !== 'X') &&
                    (j === 0 || board[i][j - 1] !== 'X')) {
                    count++;
                }
            }
        }
    }

    return count;
};
