var maxAncestorDiff = function(root) {
    let ans = 0;

    function dfs(node, minVal, maxVal) {
        if (!node) return;

        ans = Math.max(
            ans,
            Math.abs(node.val - minVal),
            Math.abs(node.val - maxVal)
        );

        minVal = Math.min(minVal, node.val);
        maxVal = Math.max(maxVal, node.val);

        dfs(node.left, minVal, maxVal);
        dfs(node.right, minVal, maxVal);
    }

    dfs(root, root.val, root.val);

    return ans;
};
