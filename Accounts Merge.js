/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const n = accounts.length;

    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array(n).fill(0);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(a, b) {
        let rootA = find(a);
        let rootB = find(b);

        if (rootA === rootB) return;

        if (rank[rootA] < rank[rootB]) {
            [rootA, rootB] = [rootB, rootA];
        }

        parent[rootB] = rootA;

        if (rank[rootA] === rank[rootB]) {
            rank[rootA]++;
        }
    }

    const emailToAccount = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            const email = accounts[i][j];

            if (emailToAccount.has(email)) {
                union(i, emailToAccount.get(email));
            } else {
                emailToAccount.set(email, i);
            }
        }
    }

    const groups = new Map();

    for (let i = 0; i < n; i++) {
        const root = find(i);

        if (!groups.has(root)) {
            groups.set(root, new Set());
        }

        for (let j = 1; j < accounts[i].length; j++) {
            groups.get(root).add(accounts[i][j]);
        }
    }

    const result = [];

    for (const [root, emailSet] of groups) {
        const emails = Array.from(emailSet).sort();

        result.push([
            accounts[root][0],
            ...emails
        ]);
    }

    return result;
};
