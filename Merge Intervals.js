/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= current[1]) {
            
            current[1] = Math.max(current[1], intervals[i][1]);
        } else {
            result.push(current);
            current = intervals[i];
        }
    }

    result.push(current);

    return result;
};
