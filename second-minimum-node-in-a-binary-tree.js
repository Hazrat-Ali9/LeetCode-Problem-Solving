/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  if (!root) {
    return -1;
  }

  if (!root.left && !root.right) {
    return -1;
  }

  var left = root.left.val;
  var right = root.right.val;

  if (left === root.val) {
    left = findSecondMinimumValue(root.left);
  }

  if (right === root.val) {
    right = findSecondMinimumValue(root.right);
  }

  if (left !== -1 && right !== -1) {
    return Math.min(left, right);
  }

  if (left !== -1) {
    return left;
  }

  return right;
};


