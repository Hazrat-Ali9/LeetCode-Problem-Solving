/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = root => {
  const helper = root => {
    if (!root) {
      return 0;
    }

    const left = helper(root.left);
    const right = helper(root.right);

    max = Math.max(max, 1 + left + right);

    return 1 + Math.max(left, right);
  };

  let max = 0;
  helper(root);
  return max;
};


