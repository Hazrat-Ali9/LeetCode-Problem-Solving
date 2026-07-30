/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;

    let sum = 0;

    if (
        root.left &&
        !root.left.left &&
        !root.left.right
    ) {
        sum += root.left.val;
    }
    sum += sumOfLeftLeaves(root.left);
    sum += sumOfLeftLeaves(root.right);

    return sum;
};
