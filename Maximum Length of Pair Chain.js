var findLongestChain = function(pairs) {

    pairs.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let currentEnd = -Infinity;

    for (let [left, right] of pairs) {
        if (left > currentEnd) {
            count++;
            currentEnd = right;
        }
    }

    return count;
};
