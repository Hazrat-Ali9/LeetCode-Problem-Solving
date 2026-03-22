var NumMatrix = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    // create prefix sum matrix (extra row & col)
    this.prefix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            this.prefix[i][j] =
                matrix[i - 1][j - 1] +
                this.prefix[i - 1][j] +
                this.prefix[i][j - 1] -
                this.prefix[i - 1][j - 1];
        }
    }
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return (
        this.prefix[row2 + 1][col2 + 1]
        - this.prefix[row1][col2 + 1]
        - this.prefix[row2 + 1][col1]
        + this.prefix[row1][col1]
    );
};
