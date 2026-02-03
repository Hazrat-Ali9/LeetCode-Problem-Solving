var sortArrayByParityII = function(nums) {
    let evenIdx = 0;
    let oddIdx = 1;
    let n = nums.length;

    while (evenIdx < n && oddIdx < n) {
        if (nums[evenIdx] % 2 === 0) {
            evenIdx += 2;
        } else if (nums[oddIdx] % 2 === 1) {
            oddIdx += 2;
        } else {

            [nums[evenIdx], nums[oddIdx]] = [nums[oddIdx], nums[evenIdx]];
            evenIdx += 2;
            oddIdx += 2;
        }
    }

    return nums;
};

