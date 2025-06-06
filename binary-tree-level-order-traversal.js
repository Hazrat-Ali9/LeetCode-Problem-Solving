/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root, null];
  let level = [];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    } else {
      result.push(level);

      if (queue.length > 0) {
        level = [];
        queue.push(null);
      }
    }
  }

  return result;
};


