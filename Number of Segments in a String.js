/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.trim();

    if (s === "") return 0;

    return s.split(/\s+/).length;
};
