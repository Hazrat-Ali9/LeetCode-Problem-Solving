/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
    let result = [];

    while (a > 0 || b > 0) {
        const n = result.length;

        if (
            n >= 2 &&
            result[n - 1] === 'a' &&
            result[n - 2] === 'a'
        ) {
            result.push('b');
            b--;
        }
        else if (
            n >= 2 &&
            result[n - 1] === 'b' &&
            result[n - 2] === 'b'
        ) {
            result.push('a');
            a--;
        }

        else if (a >= b) {
            result.push('a');
            a--;
        }
        else {
            result.push('b');
            b--;
        }
    }

    return result.join('');
};
