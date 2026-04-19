var combinationSum3 = function(k, n) {
    let result = [];

    function backtrack(start, path, remaining) {
        if (path.length === k && remaining === 0) {
            result.push([...path]);
            return;
        }

        if (path.length > k || remaining < 0) return;

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(i + 1, path, remaining - i);
            path.pop(); 
        }
    }

    backtrack(1, [], n);
    return result;
};
