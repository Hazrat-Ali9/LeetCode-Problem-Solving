/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    function dfs(node, current) {
        if (!node) return 0;

        current = current * 2 + node.val;

        if (!node.left && !node.right) {
            return current;
        }

        return dfs(node.left, current) + dfs(node.right, current);
    }

    return dfs(root, 0);
};
