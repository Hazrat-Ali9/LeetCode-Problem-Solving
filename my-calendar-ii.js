class MyCalendarTwo {
  constructor() {
    this.calendar = [];
    this.overlaps = [];
  }

  /**
   * @param {number} start
   * @param {number} end
   * @return {boolean}
   */
  book(start, end) {
    for (let interval of this.overlaps) {
      if (interval[0] < end && start < interval[1]) {
        return false;
      }
    }

    for (let interval of this.calendar) {
      if (interval[0] < end && start < interval[1]) {
        this.overlaps.push([Math.max(start, interval[0]), Math.min(end, interval[1])]);
      }
    }

    this.calendar.push([start, end]);

    return true;
  }
}


