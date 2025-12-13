var isValidSudoku = function(board) {
 
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            if (val === '.') continue;

           
            if (rows[i].has(val)) return false;
            rows[i].add(val);

            
            if (cols[j].has(val)) return false;
            cols[j].add(val);

            
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (boxes[boxIndex].has(val)) return false;
            boxes[boxIndex].add(val);
        }
    }

    return true;
};
