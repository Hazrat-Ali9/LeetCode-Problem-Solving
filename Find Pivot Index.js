var pivotIndex = function(nums) {
    let totalSum = nums.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
};
