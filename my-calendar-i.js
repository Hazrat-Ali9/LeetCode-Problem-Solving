class MyCalendar {
  constructor() {
    this.intervals = [];
  }

  /**
   * @param {number} start
   * @param {number} end
   * @return {boolean}
   */
  book(start, end) {
    let lo = 0;
    let hi = this.intervals.length - 1;

    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      const interval = this.intervals[mid];

      if (end <= interval[0]) {
        hi = mid - 1;
      } else if (start >= interval[1]) {
        lo = mid + 1;
      } else {
        return false;
      }
    }

    this.intervals.splice(lo, 0, [start, end]);

    return true;
  }
}


