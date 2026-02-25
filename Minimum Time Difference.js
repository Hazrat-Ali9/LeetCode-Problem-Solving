var findMinDifference = function(timePoints) {

    if (timePoints.length > 1440) return 0;

    let minutes = timePoints.map(time => {
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    });

    minutes.sort((a, b) => a - b);

    let minDiff = Infinity;

    for (let i = 1; i < minutes.length; i++) {
        minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
    }

    let circularDiff = 1440 - minutes[minutes.length - 1] + minutes[0];
    minDiff = Math.min(minDiff, circularDiff);

    return minDiff;
};
