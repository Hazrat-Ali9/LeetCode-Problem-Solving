var canTransform = function(start, result) {
    if (start.length !== result.length) return false;

    let i = 0;
    let j = 0;
    const n = start.length;

    while (i < n && j < n) {
        while (i < n && start[i] === 'X') i++;
        while (j < n && result[j] === 'X') j++;

        if (i === n || j === n) {
            return i === n && j === n;
        }

        if (start[i] !== result[j]) return false;

        if (start[i] === 'L' && i < j) return false;

        if (start[i] === 'R' && i > j) return false;

        i++;
        j++;
    }

    while (i < n && start[i] === 'X') i++;
    while (j < n && result[j] === 'X') j++;

    return i === n && j === n;
};
