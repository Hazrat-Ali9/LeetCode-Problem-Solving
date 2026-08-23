/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    const n = quiet.length;

    const graph = Array.from({ length: n }, () => []);

    for (const [a, b] of richer) {
        graph[b].push(a);
    }
    const answer = Array(n).fill(-1);

    function dfs(x) {
        if (answer[x] !== -1) {
            return answer[x];
        }

        answer[x] = x;

        for (const richerPerson of graph[x]) {
            const candidate = dfs(richerPerson);

            if (quiet[candidate] < quiet[answer[x]]) {
                answer[x] = candidate;
            }
        }

        return answer[x];
    }

    for (let i = 0; i < n; i++) {
        dfs(i);
    }

    return answer;
};
