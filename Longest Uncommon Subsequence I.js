/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if (a === b) return -1;
    return Math.max(a.length, b.length);
};
