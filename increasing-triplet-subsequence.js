/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = nums => {
  let n1 = Infinity;
  let n2 = Infinity;

  for (let num of nums) {
    if (num <= n1) {
      n1 = num;
    } else if (num <= n2) {
      n2 = num;
    } else {
      return true;
    }
  }

  return false;
};

