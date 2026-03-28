var calcEquation = function(equations, values, queries) {
    let graph = {};

    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        let val = values[i];

        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];

        graph[a].push([b, val]);
        graph[b].push([a, 1 / val]);
    }

    function dfs(src, dest, visited) {
        if (!(src in graph)) return -1.0;
        if (src === dest) return 1.0;

        visited.add(src);

        for (let [next, weight] of graph[src]) {
            if (!visited.has(next)) {
                let res = dfs(next, dest, visited);
                if (res !== -1.0) {
                    return res * weight;
                }
            }
        }

        return -1.0;
    }

    let result = [];

    for (let [src, dest] of queries) {
        let visited = new Set();
        result.push(dfs(src, dest, visited));
    }

    return result;
};
