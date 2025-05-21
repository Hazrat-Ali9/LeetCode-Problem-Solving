/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const convertBST = root => {
  let last = 0;

  const helper = root => {
    if (!root) {
      return null;
    }

    helper(root.right);

    root.val += last;
    last = root.val;

    helper(root.left);

    return root;
  };

  return helper(root);
};


