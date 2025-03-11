
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = (nums, k) => {
  
  const map = {};
  for (let num of nums) {
    map[num] = ~~map[num] + 1;
  }

   let count = 0;
  for (let key in map) {
    if (k === 0 && map[key] > 1) {
      count++;
    } else if (k > 0 && parseInt(key) + k in map) {
      count++;
    }
  }

  return count;
};


