var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);

    let n = nums.length;
    let product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    let product2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(product1, product2);
};

