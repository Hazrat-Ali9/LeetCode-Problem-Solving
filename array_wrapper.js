class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }
  valueOf() {
    return this.nums.reduce((sum, num) => sum + num, 0);
  }
  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

