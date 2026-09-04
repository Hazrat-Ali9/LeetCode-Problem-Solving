var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const state = new Array(n).fill(0);
    const result = [];

    function dfs(node) {
        if (state[node] === 1) {
            return false;
        }

        if (state[node] === 2) {
            return true;
        }

        state[node] = 1;

        for (const next of graph[node]) {
            if (!dfs(next)) {
                return false;
            }
        }

        state[node] = 2;
        return true;
    }

    for (let i = 0; i < n; i++) {
        if (dfs(i)) {
            result.push(i);
        }
    }

    return result;
};
