/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 */

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    function dfs(node) {
        if (!node) return null;

        node.left = dfs(node.left);

        node.right = dfs(node.right);

        if (!node.left && !node.right && node.val === target) {
            return null;
        }

        return node;
    }

    return dfs(root);
};
