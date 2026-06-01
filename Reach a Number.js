
var reachNumber = function(target) {
    target = Math.abs(target);

    let sum = 0;
    let moves = 0;

    while (sum < target || (sum - target) % 2 !== 0) {
        moves++;
        sum += moves;
    }

    return moves;
};