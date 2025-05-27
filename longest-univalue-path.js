/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestUnivaluePath = root => {
  const helper = node => {
    if (!node) {
      return 0;
    }

    let left = helper(node.left);
    let right = helper(node.right);

    if (node.left) {
      left += node.left.val === node.val ? 1 : -left;
    }

    if (node.right) {
      right += node.right.val === node.val ? 1 : -right;
    }

    max = Math.max(max, left + right);

    return Math.max(left, right);
  };

  let max = 0;
  helper(root);
  return max;
};


