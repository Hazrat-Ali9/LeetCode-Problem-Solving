const inorderTraversal = root => {
  const result = [];
  const stack = [];
  let current = root;

  while (stack.length || current) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
  }

  return result;
};


