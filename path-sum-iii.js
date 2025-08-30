/**
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = (root, sum) => {
  const helper = (root, current, sum, prefixSum) => {
    if (!root) {
      return 0;
    }

    current += root.val;

    var count = ~~prefixSum[current - sum];

    prefixSum[current] = ~~prefixSum[current] + 1;
    count += helper(root.left, current, sum, prefixSum) + helper(root.right, current, sum, prefixSum);
    prefixSum[current]--;

    return count;
  };

  return helper(root, 0, sum, { 0: 1 });
};


