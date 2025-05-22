/**
 * @param {TreeNode} root
 * @return {number}
 */
const findBottomLeftValue = root => {
  const queue = [root];

  while (queue.length) {
    root = queue.shift();

    if (root.right != null) {
      queue.push(root.right);
    }

    if (root.left != null) {
      queue.push(root.left);
    }
  }

  return root.val;
};


