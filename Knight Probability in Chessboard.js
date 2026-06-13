/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const moves = [
        [2, 1], [2, -1],
        [-2, 1], [-2, -1],
        [1, 2], [1, -2],
        [-1, 2], [-1, -2]
    ];

    let dp = Array.from({ length: n }, () => Array(n).fill(0));
    dp[row][column] = 1;

    for (let step = 0; step < k; step++) {
        let next = Array.from({ length: n }, () => Array(n).fill(0));

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (dp[r][c] > 0) {
                    for (const [dr, dc] of moves) {
                        const nr = r + dr;
                        const nc = c + dc;

                        if (
                            nr >= 0 && nr < n &&
                            nc >= 0 && nc < n
                        ) {
                            next[nr][nc] += dp[r][c] / 8;
                        }
                    }
                }
            }
        }

        dp = next;
    }

    let result = 0;

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            result += dp[r][c];
        }
    }

    return result;
};
