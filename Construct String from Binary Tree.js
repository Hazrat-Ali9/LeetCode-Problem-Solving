/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 */

/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function(root) {
    if (!root) return "";

    function dfs(node) {
        if (!node) return "";

        let result = String(node.val);

        if (node.left) {
            result += "(" + dfs(node.left) + ")";
        } 
        else if (node.right) {
            result += "()";
        }
        if (node.right) {
            result += "(" + dfs(node.right) + ")";
        }

        return result;
    }

    return dfs(root);
};
