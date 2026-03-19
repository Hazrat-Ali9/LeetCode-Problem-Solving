var findTargetSumWays = function(nums, target) {
    let memo = new Map();

    function dfs(i, sum) {
        let key = i + "," + sum;
        if (memo.has(key)) return memo.get(key);

        if (i === nums.length) {
            return sum === target ? 1 : 0;
        }

        let add = dfs(i + 1, sum + nums[i]);
        let subtract = dfs(i + 1, sum - nums[i]);

        memo.set(key, add + subtract);
        return memo.get(key);
    }

    return dfs(0, 0);
};
