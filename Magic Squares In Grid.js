/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    if (m < 3 || n < 3) return 0;

    function isMagic(r, c) {
        const seen = new Array(10).fill(false);

        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                const val = grid[i][j];
                if (val < 1 || val > 9 || seen[val]) return false;
                seen[val] = true;
            }
        }

        const sum = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];

        for (let i = 0; i < 3; i++) {
            if (
                grid[r + i][c] +
                    grid[r + i][c + 1] +
                    grid[r + i][c + 2] !==
                sum
            ) {
                return false;
            }
        }

        for (let j = 0; j < 3; j++) {
            if (
                grid[r][c + j] +
                    grid[r + 1][c + j] +
                    grid[r + 2][c + j] !==
                sum
            ) {
                return false;
            }
        }

        if (
            grid[r][c] +
                grid[r + 1][c + 1] +
                grid[r + 2][c + 2] !==
            sum
        ) {
            return false;
        }

        if (
            grid[r][c + 2] +
                grid[r + 1][c + 1] +
                grid[r + 2][c] !==
            sum
        ) {
            return false;
        }

        return true;
    }

    let ans = 0;

    for (let i = 0; i <= m - 3; i++) {
        for (let j = 0; j <= n - 3; j++) {
            if (isMagic(i, j)) ans++;
        }
    }

    return ans;
};
