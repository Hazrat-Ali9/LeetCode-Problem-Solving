/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
    const m = grid.length;
    const n = grid[0].length;
    const originalColor = grid[row][col];

    const visited = Array.from(
        { length: m },
        () => Array(n).fill(false)
    );

    const border = [];

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    function dfs(r, c) {
        visited[r][c] = true;

        let isBorder = false;

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr < 0 || nr >= m || nc < 0 || nc >= n) {
                isBorder = true;
                continue;
            }

            if (grid[nr][nc] !== originalColor) {
                isBorder = true;
                continue;
            }

            if (!visited[nr][nc]) {
                dfs(nr, nc);
            }
        }

        if (isBorder) {
            border.push([r, c]);
        }
    }

    dfs(row, col);

    for (const [r, c] of border) {
        grid[r][c] = color;
    }

    return grid;
};
