var minDeletionSize = function(strs) {
    let rows = strs.length;
    let cols = strs[0].length;
    let count = 0;

    for (let c = 0; c < cols; c++) {
        for (let r = 1; r < rows; r++) {
            if (strs[r - 1][c] > strs[r][c]) {
                count++;
                break; 
            }
        }
    }

    return count;
};

