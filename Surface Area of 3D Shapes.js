
var surfaceArea = function(grid) {
    const n = grid.length;
    let area = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const h = grid[i][j];
            if (h === 0) continue;

            area += 6 * h;

            area -= 2 * (h - 1);

            if (i > 0) {
                area -= 2 * Math.min(h, grid[i - 1][j]);
            }

            if (j > 0) {
                area -= 2 * Math.min(h, grid[i][j - 1]);
            }
        }
    }

    return area;
};
