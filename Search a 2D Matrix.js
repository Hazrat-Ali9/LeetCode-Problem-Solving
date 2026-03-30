var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let row = Math.floor(mid / n);
        let col = mid % n;

        let value = matrix[row][col];

        if (value === target) {
            return true;
        } else if (value < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};
