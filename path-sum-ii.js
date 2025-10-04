/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = (root, sum) => {
  return helper(root, sum, [], []);
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @param {number[]} solution 
 * @param {number[]} result 
 */
const helper = (root, sum, solution, result) => {
  if (!root) {
    
    return result;
  }

  solution.push(root.val); 

  if (!root.left && !root.right && root.val === sum) {
    result.push(solution.slice()); 
  }

  helper(root.left, sum - root.val, solution, result); 
  helper(root.right, sum - root.val, solution, result); 

  solution.pop(); 

  return result;
};
