/**
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.min = null;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this.stack.length === 0) {
      this.stack.push(x);
      this.min = x;
      return;
    }

    if (x < this.min) {
      this.stack.push(2 * x - this.min);
      this.min = x;
    } else {
      this.stack.push(x);
    }
  }

  /**
   * @return {number}
   */
  pop() {
    const x = this.stack.pop();

    if (x < this.min) {
      const result = this.min;
      this.min = 2 * this.min - x;
      return result;
    }

    if (this.stack.length === 0) {
      this.min = null;
    }

    return x;
  }

  /**
   * @return {number}
   */
  top() {
    const x = this.stack[this.stack.length - 1];

    if (x < this.min) {
      return this.min;
    }

    return x;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
}