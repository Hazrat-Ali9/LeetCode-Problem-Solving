/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root => {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


