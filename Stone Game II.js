
var stoneGameII = function(piles) {
    const n = piles.length;

    const suffix = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + piles[i];
    }

    const memo = new Map();

    function dfs(i, M) {
        if (i >= n) return 0;

        const key = `${i},${M}`;

        if (memo.has(key)) {
            return memo.get(key);
        }

        if (i + 2 * M >= n) {
            return suffix[i];
        }

        let best = 0;

        for (let X = 1; X <= 2 * M; X++) {
            const nextM = Math.max(M, X);

            const current = suffix[i] - dfs(i + X, nextM);

            best = Math.max(best, current);
        }

        memo.set(key, best);
        return best;
    }

    return dfs(0, 1);
};