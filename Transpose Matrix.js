var transpose = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    const result = Array.from({ length: cols }, () => Array(rows));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    
    return result;
};
