/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0) return 0;

    let total = 0;

    for (let i = 0; i < timeSeries.length - 1; i++) {
        
        let diff = timeSeries[i + 1] - timeSeries[i];
        total += Math.min(diff, duration);
    }

    total += duration;

    return total;
};

