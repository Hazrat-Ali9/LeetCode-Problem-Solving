/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }

    function dfs(node, currentDepth) {
        if (!node) return;

        if (currentDepth === depth - 1) {
            const oldLeft = node.left;
            const oldRight = node.right;

            node.left = new TreeNode(val);
            node.right = new TreeNode(val);

            node.left.left = oldLeft;
            node.right.right = oldRight;

            return;
        }

        dfs(node.left, currentDepth + 1);
        dfs(node.right, currentDepth + 1);
    }

    dfs(root, 1);

    return root;
};
