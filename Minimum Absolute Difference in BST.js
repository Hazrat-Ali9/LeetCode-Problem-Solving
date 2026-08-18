/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let prev = null;
    let minDiff = Infinity;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev);
        }

        prev = node.val;
        inorder(node.right);
    }

    inorder(root);

    return minDiff;
};
