var largest1BorderedSquare = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const right = Array.from(
        { length: m },
        () => new Array(n).fill(0)
    );

    const down = Array.from(
        { length: m },
        () => new Array(n).fill(0)
    );

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (grid[i][j] === 1) {
                right[i][j] = 1 + (j + 1 < n ? right[i][j + 1] : 0);
                down[i][j] = 1 + (i + 1 < m ? down[i + 1][j] : 0);
            }
        }
    }

    let maxSide = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const maxSize = Math.min(right[i][j], down[i][j]);

            for (let size = maxSize; size > maxSide; size--) {
                const bottom = i + size - 1;
                const rightCol = j + size - 1;

                if (
                    down[i][rightCol] >= size &&
                    right[bottom][j] >= size
                ) {
                    maxSide = size;
                    break;
                }
            }
        }
    }

    return maxSide * maxSide;
};
