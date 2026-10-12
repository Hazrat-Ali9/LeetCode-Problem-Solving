var distanceK = function(root, target, k) {
    const parent = new Map();

    function dfs(node, par) {
        if (!node) return;

        parent.set(node, par);
        dfs(node.left, node);
        dfs(node.right, node);
    }

    dfs(root, null);

    const queue = [[target, 0]];
    const visited = new Set([target]);
    const result = [];

    let front = 0;

    while (front < queue.length) {
        const [node, distance] = queue[front++];

        if (distance === k) {
            result.push(node.val);
            continue;
        }

        const neighbors = [
            node.left,
            node.right,
            parent.get(node)
        ];

        for (const next of neighbors) {
            if (next && !visited.has(next)) {
                visited.add(next);
                queue.push([next, distance + 1]);
            }
        }
    }

    return result;
};
