var minTimeToVisitAllPoints = function(points) {
    let totalTime = 0;

    for (let i = 1; i < points.length; i++) {
        let x1 = points[i - 1][0];
        let y1 = points[i - 1][1];
        let x2 = points[i][0];
        let y2 = points[i][1];

        let dx = Math.abs(x2 - x1);
        let dy = Math.abs(y2 - y1);

        totalTime += Math.max(dx, dy);
    }

    return totalTime;
};
