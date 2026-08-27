/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    const dist = Array(n + 1).fill(Infinity);
    dist[k] = 0;

    const heap = [];

    function push(item) {
        heap.push(item);

        let i = heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (heap[parent][0] <= heap[i][0]) break;

            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    }

    function pop() {
        const top = heap[0];
        const last = heap.pop();

        if (heap.length > 0) {
            heap[0] = last;

            let i = 0;

            while (true) {
                let smallest = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;

                if (
                    left < heap.length &&
                    heap[left][0] < heap[smallest][0]
                ) {
                    smallest = left;
                }

                if (
                    right < heap.length &&
                    heap[right][0] < heap[smallest][0]
                ) {
                    smallest = right;
                }

                if (smallest === i) break;

                [heap[i], heap[smallest]] =
                    [heap[smallest], heap[i]];

                i = smallest;
            }
        }

        return top;
    }

    push([0, k]);

    while (heap.length > 0) {
        const [currentDist, node] = pop();

        if (currentDist > dist[node]) continue;

        for (const [next, weight] of graph[node]) {
            const newDist = currentDist + weight;

            if (newDist < dist[next]) {
                dist[next] = newDist;
                push([newDist, next]);
            }
        }
    }

    let answer = 0;

    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) {
            return -1;
        }

        answer = Math.max(answer, dist[i]);
    }

    return answer;
};
