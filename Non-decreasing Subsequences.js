var findSubsequences = function(nums) {

    let result = [];

    function backtrack(start, path) {

        if (path.length >= 2) {
            result.push([...path]);
        }

        let used = new Set();

        for (let i = start; i < nums.length; i++) {

            if (used.has(nums[i])) {
                continue;
            }

            if (
                path.length === 0 ||
                nums[i] >= path[path.length - 1]
            ) {

                used.add(nums[i]);

                path.push(nums[i]);

                backtrack(i + 1, path);

                path.pop();
            }
        }
    }

    backtrack(0, []);

    return result;
};
