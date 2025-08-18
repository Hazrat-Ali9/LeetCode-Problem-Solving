class MyCalendarThree {
  constructor() {
    this.timeline = {};
  }

  /**
   * @param {number} start
   * @param {number} end
   * @return {number}
   */
  book(start, end) {
    
    this.timeline[start] = ~~this.timeline[start] + 1;
    
    this.timeline[end] = ~~this.timeline[end] - 1;

    let ongoing = 0;
    let k = 0;

    
    for (let v of Object.values(this.timeline)) {
      k = Math.max(k, (ongoing += v));
    }

    return k;
  }
}
