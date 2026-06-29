/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
};
