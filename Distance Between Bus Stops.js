var distanceBetweenBusStops = function(distance, start, destination) {
   
    if (start > destination) {
        [start, destination] = [destination, start];
    }

    let totalDistance = 0;
    let clockwiseDistance = 0;

    for (let i = 0; i < distance.length; i++) {
        totalDistance += distance[i];

        if (i >= start && i < destination) {
            clockwiseDistance += distance[i];
        }
    }

    let counterClockwiseDistance = totalDistance - clockwiseDistance;

    return Math.min(clockwiseDistance, counterClockwiseDistance);
};
