var lcaDeepestLeaves = function(root) {
    function dfs(node) {
        if (node === null) {
            return [0, null];
        }

        const [leftDepth, leftLCA] = dfs(node.left);
        const [rightDepth, rightLCA] = dfs(node.right);

        if (leftDepth === rightDepth) {
            return [leftDepth + 1, node];
        }

        if (leftDepth > rightDepth) {
            return [leftDepth + 1, leftLCA];
        }
        return [rightDepth + 1, rightLCA];
    }

    return dfs(root)[1];
};
