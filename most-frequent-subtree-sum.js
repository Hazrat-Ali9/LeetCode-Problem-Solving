/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findFrequentTreeSum = root => {
  if (!root) {
    return [];
  }

  const mapSum = {};
  const mapCount = {};
  let max = 0;

  const helper = node => {
    if (!node) {
      return 0;
    }

    const left = helper(node.left);
    const right = helper(node.right);
    const sum = left + node.val + right;
    const count = ~~mapSum[sum] + 1;

    
    max = Math.max(max, count);

 
    mapSum[sum] = count;

    
    if (!mapCount[count]) {
      mapCount[count] = new Set();
    }
    mapCount[count].add(sum);

    return sum;
  };

  helper(root);

  
  return [...mapCount[max]];
};


