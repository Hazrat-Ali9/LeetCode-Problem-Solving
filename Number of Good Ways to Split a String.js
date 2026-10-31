var numSplits = function(s) {
    const n = s.length;

    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);

    let set = new Set();

    for (let i = 0; i < n; i++) {
        set.add(s[i]);
        left[i] = set.size;
    }

    set.clear();

    for (let i = n - 1; i >= 0; i--) {
        set.add(s[i]);
        right[i] = set.size;
    }

    let count = 0;

    for (let i = 0; i < n - 1; i++) {
        if (left[i] === right[i + 1]) {
            count++;
        }
    }

    return count;
};
