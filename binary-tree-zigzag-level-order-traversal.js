/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = root => {
  if (!root) return [];

  const result = [];
  let level = [];
  let stack1 = [root];
  let stack2 = [];
  let flag = true;

  while (stack1.length > 0) {
    const node = stack1.pop();
    const { left, right } = node;

    level.push(node.val);

    if (flag) {
      if (left) stack2.push(left);
      if (right) stack2.push(right);
    } else {
      if (right) stack2.push(right);
      if (left) stack2.push(left);
    }

    if (stack1.length === 0) {
      result.push(level);
      flag = !flag;
      stack1 = stack2;
      stack2 = [];
      level = [];
    }
  }

  return result;
};


