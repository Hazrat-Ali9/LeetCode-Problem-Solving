var largestNumber = function(nums) {
    nums = nums.map(String);

    nums.sort((a, b) => {
        if (a + b > b + a) return -1;
        if (a + b < b + a) return 1;
        return 0;
    });

    if (nums[0] === "0") return "0";

    return nums.join('');
};
