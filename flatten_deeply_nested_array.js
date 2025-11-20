var flat = function (arr, n) {
    function helper(array, depth) {
        let result = [];

        for (const item of array) {
            if (Array.isArray(item) && depth < n) {
                result.push(...helper(item, depth + 1));
            } else {
                result.push(item);
            }
        }

        return result;
    }

    return helper(arr, 0);
};

