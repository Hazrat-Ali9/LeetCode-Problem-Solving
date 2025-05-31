/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = (s, t) => {
  const stack = [s];

  while (stack.length) {
    const node = stack.pop();

    if (node.val === t.val && isSameTree(node, t)) {
      return true;
    }

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return false;
};

const isSameTree = (s, t) => {
  if (!s && !t) {
    return true;
  }

  if (!s || !t || s.val !== t.val) {
    return false;
  }

  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
};


