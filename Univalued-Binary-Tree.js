/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isUnivalTree = root => {
  if (!root) {
    return true;
  }

  if (root.left && root.left.val !== root.val) {
    return false;
  }

  if (root.right && root.right.val !== root.val) {
    return false;
  }

  return isUnivalTree(root.left) && isUnivalTree(root.right);
};

export default isUnivalTree;
