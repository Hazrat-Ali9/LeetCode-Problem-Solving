var generateMatrix = function(n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));

    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    let num = 1;

    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) {
            matrix[top][j] = num++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                matrix[bottom][j] = num++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }

    return matrix;
};
