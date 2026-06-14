/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const MOD = 1000000007;

    let dp = Array.from({ length: m }, () => Array(n).fill(0));
    dp[startRow][startColumn] = 1;

    let result = 0;

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    for (let move = 1; move <= maxMove; move++) {
        let next = Array.from({ length: m }, () => Array(n).fill(0));

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (dp[r][c] === 0) continue;

                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (nr < 0 || nr >= m || nc < 0 || nc >= n) {
                        result = (result + dp[r][c]) % MOD;
                    } else {
                        next[nr][nc] = (next[nr][nc] + dp[r][c]) % MOD;
                    }
                }
            }
        }

        dp = next;
    }

    return result;
};
