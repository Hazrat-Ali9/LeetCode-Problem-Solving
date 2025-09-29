/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = nums => {
  const result = [];
  let root = null;

  
  for (let i = nums.length - 1; i >= 0; i--) {
    root = insert(root, nums[i], result, i, 0);
  }

  return result;
};

/**
 *
 * @param {number} value 
 */
class TreeNode {
  constructor(value) {
    this.val = value;
    this.count = 0;
    this.right = null;
    this.left = null;
  }
}

/**
 *
 *
 * @param {TreeNode} root 
 * @param {number} val 
 * @param {number[]} countArr 
 * @param {number} index 
 * @param {number} count 
 *
 */
const insert = (root, val, countArr, index, count) => {
  if (!root) {
    root = new TreeNode(val);
    countArr[index] = count;
  } else if (root.val > val) {
    root.count++;
    root.left = insert(root.left, val, countArr, index, count);
  } else {
    root.right = insert(root.right, val, countArr, index, root.count + count + (root.val < val ? 1 : 0));
  }

  return root;
};

