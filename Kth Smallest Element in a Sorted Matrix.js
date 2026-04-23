var kthSmallest = function(matrix, k) {
    let n = matrix.length;

    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];

    function countLessEqual(target) {
        let count = 0;
        let row = n - 1;
        let col = 0;

        while (row >= 0 && col < n) {
            if (matrix[row][col] <= target) {
                count += row + 1;
                col++;
            } else {
                row--;
            }
        }

        return count;
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (countLessEqual(mid) < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};
