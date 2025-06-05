/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function(root, L, R) {
  if (!root) {
    return null;
  }

  const left = trimBST(root.left, L, R);
  const right = trimBST(root.right, L, R);

  if (root.val < L) {
    return right;
  }

  if (root.val > R) {
    return left;
  }

  root.left = left;
  root.right = right;

  return root;
};


