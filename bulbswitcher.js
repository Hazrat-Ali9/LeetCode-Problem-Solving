/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function(n, presses) {
    if (presses === 0) return 1;

    if (n === 1) {
        return 2;
    }

    if (n === 2) {
        if (presses === 1) return 3;
        return 4;
    }


    if (presses === 1) return 4;
    if (presses === 2) return 7;
    return 8;
};
