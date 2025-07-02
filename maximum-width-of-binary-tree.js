/**
 * @param {TreeNode} root
 * @return {number}
 */
const widthOfBinaryTree = root => {
  if (!root) {
    return 0;
  }

  const q1 = [root];
  const q2 = [0];
  let max = 1;

  while (q1.length > 0) {
    const size = q1.length;
    let left = 0;
    let right = 0;

    for (let i = 0; i < size; i++) {
      const node = q1.shift();
      const index = q2.shift();

      if (i === 0) {
        left = index;
      }

      if (i === size - 1) {
        right = index;
      }

      if (node.left) {
        q1.push(node.left);
        q2.push(index * 2);
      }

      if (node.right) {
        q1.push(node.right);
        q2.push(index * 2 + 1);
      }
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};


