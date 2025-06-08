/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = root => {
  
  const handleValue = val => {
    if (val !== currVal) {
      currVal = val;
      currCount = 0;
    }
    currCount++;

    if (currCount > maxCount) {
      
      maxCount = currCount;
      modeCount = 1;
      modes[0] = currVal;
    } else if (currCount === maxCount) {
      
      modes[modeCount] = currVal;
      modeCount++;
    }
  };

  const inorder = node => {
    if (!node) {
      return;
    }

    inorder(node.left);
    handleValue(node.val);
    inorder(node.right);
  };

  let currVal = null;
  let currCount = 0;
  let maxCount = 0;
  let modeCount = 0;

  const modes = [];

  inorder(root);

  return modes.slice(0, modeCount);
};


