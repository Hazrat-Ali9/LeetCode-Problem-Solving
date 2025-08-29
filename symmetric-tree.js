/**
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = root => {
  if (!root) {
    return true;
  }

  const isMirror = (p, q) => {
    if (!p && !q) {
      return true;
    }
    if (!p || !q) {
      return false;
    }
    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
  };

  return isMirror(root.left, root.right);
};


