var uniqueOccurrences = function(arr) {
    let freq = new Map();

    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let seen = new Set();

    for (let count of freq.values()) {
        if (seen.has(count)) {
            return false; 
        }
        seen.add(count);
    }

    return true;
};
