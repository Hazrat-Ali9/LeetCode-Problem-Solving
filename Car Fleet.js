var carFleet = function(target, position, speed) {
    const cars = [];

    for (let i = 0; i < position.length; i++) {
        const time = (target - position[i]) / speed[i];
        cars.push([position[i], time]);
    }


    cars.sort((a, b) => b[0] - a[0]);

    let fleets = 0;
    let maxTime = 0;

    for (const [pos, time] of cars) {
        if (time > maxTime) {
         
            fleets++;
            maxTime = time;
        }
    }

    return fleets;
};
