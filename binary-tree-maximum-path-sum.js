/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = root => {
  const helper = root => {
    if (!root) {
      return 0;
    }

    const left = Math.max(helper(root.left), 0);
    const right = Math.max(helper(root.right), 0);

    max = Math.max(max, root.val + left + right);

    return root.val + Math.max(left, right);
  };

  let max = Number.MIN_SAFE_INTEGER;
  helper(root);
  return max;
};

