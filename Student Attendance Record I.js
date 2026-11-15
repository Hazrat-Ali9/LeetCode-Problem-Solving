var checkRecord = function(s) {
    let absent = 0;
    let late = 0;

    for (let ch of s) {
        if (ch === 'A') {
            absent++;
        }

        if (ch === 'L') {
            late++;
        } else {
            late = 0;
        }

        if (absent >= 2 || late >= 3) {
            return false;
        }
    }

    return true;
};
