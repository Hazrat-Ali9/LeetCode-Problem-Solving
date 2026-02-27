var topKFrequent = function(nums, k) {
    let freq = new Map();

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let sorted = [...freq.entries()].sort((a, b) => b[1] - a[1]);

    return sorted.slice(0, k).map(entry => entry[0]);
};
