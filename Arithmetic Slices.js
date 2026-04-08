var numberOfArithmeticSlices = function(nums) {
    if (nums.length < 3) return 0;

    let total = 0;
    let curr = 0;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            curr += 1;
            total += curr;
        } else {
            curr = 0;
        }
    }

    return total;
};
