/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const n = matrix.length;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let best = matrix[i - 1][j];

            if (j > 0) {
                best = Math.min(best, matrix[i - 1][j - 1]);
            }

            if (j < n - 1) {
                best = Math.min(best, matrix[i - 1][j + 1]);
            }

            matrix[i][j] += best;
        }
    }

    return Math.min(...matrix[n - 1]);
};
