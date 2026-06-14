/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let cost = new Array(n).fill(Infinity);
    cost[src] = 0;

    for (let i = 0; i <= k; i++) {
        let temp = [...cost];

        for (const [u, v, price] of flights) {
            if (cost[u] !== Infinity) {
                temp[v] = Math.min(temp[v], cost[u] + price);
            }
        }

        cost = temp;
    }

    return cost[dst] === Infinity ? -1 : cost[dst];
};
