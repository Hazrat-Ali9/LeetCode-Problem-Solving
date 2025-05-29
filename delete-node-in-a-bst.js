
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = (root, key) => {
  if (!root) {
    return null;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      root.val = getMin(root.right);
      root.right = deleteNode(root.right, root.val);
    }
  }

  return root;
};

const getMin = root => {
  while (root.left) {
    root = root.left;
  }
  return root.val;
};


