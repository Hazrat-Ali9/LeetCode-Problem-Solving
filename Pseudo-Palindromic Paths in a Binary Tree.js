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
var pseudoPalindromicPaths = function(root) {
    function dfs(node, mask) {
        if (!node) return 0;
        mask ^= (1 << node.val);
        if (!node.left && !node.right) {
            if ((mask & (mask - 1)) === 0) {
                return 1;
            }

            return 0;
        }

        return dfs(node.left, mask) + dfs(node.right, mask);
    }

    return dfs(root, 0);
};
