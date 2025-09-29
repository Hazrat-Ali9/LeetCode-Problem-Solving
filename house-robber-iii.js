/**
 * Step I - Recursion
 *
 * @param {TreeNode} root
 * @return {number}
 */
const robR = root => {
  if (!root) {
    return 0;
  }

  let val = 0;

  if (root.left) {
    val += robR(root.left.left) + robR(root.left.right);
  }

  if (root.right) {
    val += robR(root.right.left) + robR(root.right.right);
  }

  return Math.max(val + root.val, robR(root.left) + robR(root.right));
};

const rob = root => {
  const res = robSub(root);
  return Math.max(res[0], res[1]);
};

const robSub = root => {
  if (root == null) {
    return [0, 0];
  }

  const left = robSub(root.left);
  const right = robSub(root.right);
  const res = [0, 0];

  res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  res[1] = root.val + left[0] + right[0];

  return res;
};
