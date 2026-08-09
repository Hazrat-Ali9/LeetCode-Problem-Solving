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
var findTilt = function(root) {
    let totalTilt = 0;

    function dfs(node) {
        if (!node) return 0;

        const leftSum = dfs(node.left);
        const rightSum = dfs(node.right);

        totalTilt += Math.abs(leftSum - rightSum);

        return node.val + leftSum + rightSum;
    }

    dfs(root);

    return totalTilt;
};

