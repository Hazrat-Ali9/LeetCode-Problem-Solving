var sortedSquares = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    
    let left = 0;
    let right = n - 1;
    let index = n - 1;

    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }
        index--;
    }

    return result;
};

