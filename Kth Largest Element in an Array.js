var findKthLargest = function(nums, k) {
    let target = nums.length - k;

    function quickSelect(left, right) {
        let pivot = nums[right];
        let p = left;

        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                [nums[i], nums[p]] = [nums[p], nums[i]];
                p++;
            }
        }

        [nums[p], nums[right]] = [nums[right], nums[p]];

        if (p === target) return nums[p];
        else if (p < target) return quickSelect(p + 1, right);
        else return quickSelect(left, p - 1);
    }

    return quickSelect(0, nums.length - 1);
};
