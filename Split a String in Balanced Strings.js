/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balance = 0;
    let count = 0;

    for (const ch of s) {
        if (ch === 'L') {
            balance++;
        } else {
            balance--;
        }

        if (balance === 0) {
            count++;
        }
    }

    return count;
};
