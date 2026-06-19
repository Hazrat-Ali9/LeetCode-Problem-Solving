/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const total = nums.reduce((a, b) => a + b, 0);

    if (total % k !== 0) return false;

    const target = total / k;

    nums.sort((a, b) => b - a);

    if (nums[0] > target) return false;

    const used = new Array(nums.length).fill(false);

    function backtrack(start, currSum, groupsLeft) {
        if (groupsLeft === 1) return true;

        if (currSum === target) {
            return backtrack(0, 0, groupsLeft - 1);
        }

        for (let i = start; i < nums.length; i++) {
            if (used[i]) continue;
            if (currSum + nums[i] > target) continue;

            used[i] = true;

            if (backtrack(i + 1, currSum + nums[i], groupsLeft)) {
                return true;
            }

            used[i] = false;


            if (currSum === 0) return false;
            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
        }

        return false;
    }

    return backtrack(0, 0, k);
};

