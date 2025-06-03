/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const subtreeWithAllDeepest = root => {
  return helper(root).node;
};

const helper = root => {
  if (!root) {
    return { node: null, dist: 0 };
  }

  const left = helper(root.left);
  const right = helper(root.right);

  if (left.dist > right.dist) {
    return { node: left.node, dist: left.dist + 1 };
  }

  if (left.dist < right.dist) {
    return { node: right.node, dist: right.dist + 1 };
  }

  return { node: root, dist: left.dist + 1 };
};


