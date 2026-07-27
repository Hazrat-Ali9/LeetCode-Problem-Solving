/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let best = values[0];
    let ans = -Infinity;

    for (let j = 1; j < values.length; j++) {
        ans = Math.max(ans, best + values[j] - j);
        best = Math.max(best, values[j] + j);
    }

    return ans;
};
