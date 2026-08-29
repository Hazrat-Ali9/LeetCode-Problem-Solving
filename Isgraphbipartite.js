/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    const color = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {

        if (color[i] !== 0) continue;

        const queue = [i];
        color[i] = 1;

        let front = 0;

        while (front < queue.length) {
            const node = queue[front++];

            for (const neighbor of graph[node]) {
            
                if (color[neighbor] === 0) {
                    color[neighbor] = -color[node];
                    queue.push(neighbor);
                }
                else if (color[neighbor] === color[node]) {
                    return false;
                }
            }
        }
    }

    return true;
};
