var countBinarySubstrings = function(s) {
    let prev = 0;
    let curr = 1;
    let count = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            curr++;
        } else {
            count += Math.min(prev, curr);
            prev = curr;
            curr = 1;
        }
    }

    count += Math.min(prev, curr);

    return count;
};
