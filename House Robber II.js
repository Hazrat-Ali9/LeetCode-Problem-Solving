var rob = function(nums) {
    const n = nums.length;

    if (n === 1) return nums[0];

    function robLinear(arr) {
        let prev1 = 0;
        let prev2 = 0;

        for (let money of arr) {
            let temp = Math.max(prev1, prev2 + money);
            prev2 = prev1;
            prev1 = temp;
        }

        return prev1;
    }

    return Math.max(
        robLinear(nums.slice(0, n - 1)),
        robLinear(nums.slice(1))
    );
};
