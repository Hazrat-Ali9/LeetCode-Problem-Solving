/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = nums => {
  const helper = (i, j) => {
    if (i > j) {
      return null;
    }

    if (i === j) {
      return new TreeNode(nums[i]);
    }

    const k = nums.indexOf(Math.max(...nums.slice(i, j + 1)));
    const root = new TreeNode(nums[k]);

    root.left = helper(i, k - 1);
    root.right = helper(k + 1, j);

    return root;
  };

  return helper(0, nums.length - 1);
};

export default constructMaximumBinaryTree;
