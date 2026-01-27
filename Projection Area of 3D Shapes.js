var projectionArea = function(grid) {
    let n = grid.length;
    let top = 0;
    let front = 0;
    let side = 0;

    for (let i = 0; i < n; i++) {
        let rowMax = 0;
        let colMax = 0;

        for (let j = 0; j < n; j++) {
  
            if (grid[i][j] > 0) top++;

         
            rowMax = Math.max(rowMax, grid[i][j]);

        
            colMax = Math.max(colMax, grid[j][i]);
        }

        front += rowMax;
        side += colMax;
    }

    return top + front + side;
};

