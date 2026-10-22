var longestZigZag = function(root) {
    let maxLength = 0;

    function dfs(node, left, right) {
        if (!node) return;

        maxLength = Math.max(maxLength, left, right);

        dfs(node.left, right + 1, 0);

        dfs(node.right, 0, left + 1);
    }

    dfs(root, 0, 0);

    return maxLength;
};
