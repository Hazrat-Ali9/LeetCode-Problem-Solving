/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const map = new Map();
    let pairs = 0;

    for (const [a, b] of dominoes) {
   
        const x = Math.min(a, b);
        const y = Math.max(a, b);
        const key = `${x},${y}`;

        const count = map.get(key) || 0;
        pairs += count;
        map.set(key, count + 1);
    }

    return pairs;
};
