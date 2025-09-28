class RandomizedSet {
  constructor() {
    
    this.nums = [];
   
    this.locs = new Map();
  }

  /**
   * @param {number} val
   * @return {boolean}
   */

  insert(val) {
    if (this.locs.has(val)) {
      return false;
    }

    this.locs.set(val, this.nums.length);
    this.nums.push(val);
    return true;
  }

  /**
   * @param {number} val
   * @return {boolean}
   */

  remove(val) {
    if (!this.locs.has(val)) {
      return false;
    }

    const loc = this.locs.get(val);


    if (loc !== this.nums.length - 1) {
      const lastVal = this.nums[this.nums.length - 1];
      this.nums[loc] = lastVal; 
      this.locs.set(lastVal, loc); 
    }

    this.locs.delete(val);
    this.nums.pop();
    return true;
  }

  /**
   * @return {number}
   */
  getRandom() {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
  }
}