/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = root => {
  return helper(root, 0);
};

const helper = (node, sum) => {
  if (!node) {
    return 0;
  }

  const { left, right } = node;

  sum = 10 * sum + node.val;

  if (!left && !right) {
    return sum;
  }

  return helper(left, sum) + helper(right, sum);
};


