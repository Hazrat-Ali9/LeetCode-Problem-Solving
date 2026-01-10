var findLHS = function(nums) {
    const freq = new Map();

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let maxLen = 0;
   
    for (let [num, count] of freq.entries()) {
        if (freq.has(num + 1)) {
            maxLen = Math.max(maxLen, count + freq.get(num + 1));
        }
    }

    return maxLen;
};

