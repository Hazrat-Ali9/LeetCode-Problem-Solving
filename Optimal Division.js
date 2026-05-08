var optimalDivision = function(nums) {

    if (nums.length === 1) {
        return nums[0].toString();
    }

    if (nums.length === 2) {
        return nums[0] + "/" + nums[1];
    }

    let result = nums[0] + "/(";

    for (let i = 1; i < nums.length; i++) {
        result += nums[i];

        if (i !== nums.length - 1) {
            result += "/";
        }
    }

    result += ")";

    return result;
};
