
var countTrapezoids = function(points) {
    const MOD = 1_000_000_007;
    const map = new Map();

    
    for (let [x, y] of points) {
        map.set(y, (map.get(y) || 0) + 1);
    }

    let pairs = [];

    for (let count of map.values()) {
        if (count >= 2) {
            let p = (BigInt(count) * BigInt(count - 1)) / 2n;
            pairs.push(p);
        }
    }

    if (pairs.length < 2) return 0;

    
    let sum = 0n, sumSq = 0n;

    for (let p of pairs) {
        sum += p;
        sumSq += p * p;
    }

   
    let result = (sum * sum - sumSq) / 2n;

    return Number(result % BigInt(MOD));
};
