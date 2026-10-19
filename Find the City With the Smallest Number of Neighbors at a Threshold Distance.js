var findTheCity = function(n, edges, distanceThreshold) {
    const INF = Infinity;

    const dist = Array.from(
        { length: n },
        () => Array(n).fill(INF)
    );

    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    for (const [u, v, weight] of edges) {
        dist[u][v] = weight;
        dist[v][u] = weight;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    let answer = -1;
    let minCount = INF;

    for (let i = 0; i < n; i++) {
        let count = 0;

        for (let j = 0; j < n; j++) {
            if (i !== j && dist[i][j] <= distanceThreshold) {
                count++;
            }
        }

        if (count <= minCount) {
            minCount = count;
            answer = i;
        }
    }

    return answer;
};
