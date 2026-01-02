
var matrixReshape = function(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;

    if (m * n !== r * c) {
        return mat;
    }

    const result = Array.from({ length: r }, () => Array(c));
    let index = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result[Math.floor(index / c)][index % c] = mat[i][j];
            index++;
        }
    }

    return result;
};
