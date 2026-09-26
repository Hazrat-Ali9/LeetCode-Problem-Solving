var Solution = function(nums) {
    this.nums = nums;
};

Solution.prototype.pick = function(target) {
    let result = -1;
    let count = 0;

    for (let i = 0; i < this.nums.length; i++) {
        if (this.nums[i] === target) {
            count++;

            if (Math.floor(Math.random() * count) === 0) {
                result = i;
            }
        }
    }

    return result;
};
