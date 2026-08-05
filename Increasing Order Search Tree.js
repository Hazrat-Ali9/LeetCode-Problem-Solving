/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const dummy = new TreeNode(0);
    let current = dummy;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        node.left = null;
        current.right = node;
        current = node;

        inorder(node.right);
    }

    inorder(root);

    return dummy.right;
};
