/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = root => {
  const helper = (node, path) => {
    if (!node) {
      return;
    }

    path.push(node.val);

    if (!node.left && !node.right) {
      result.push(path.join('->'));
    } else {
      helper(node.left, path);
      helper(node.right, path);
    }

    path.pop();
  };

  const result = [];
  helper(root, []);
  return result;
};


