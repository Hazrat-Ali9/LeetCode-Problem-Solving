/**
 * @constructor
 * @param {TreeNode} root 
 */
class BSTIterator {
  constructor(root) {
    this.stack = [];
    this.curr = root;
  }

  /**
   * @this BSTIterator
   * @returns {boolean} 
   */
  hasNext() {
    return this.curr || this.stack.length > 0;
  }

  /**
   * @this BSTIterator
   * @returns {number} 
   */
  next() {
    while (this.curr) {
      this.stack.push(this.curr);
      this.curr = this.curr.left;
    }

    var node = this.stack.pop();
    this.curr = node.right;
    return node.val;
  }
}
