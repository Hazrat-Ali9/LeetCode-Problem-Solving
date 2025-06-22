/**
 *
 * @param {number[]} nums
 * @return {number}
 */
const totalHammingDistance = nums => {
  let total = 0;
  const n = nums.length;

  for (let j = 0; j < 32; j++) {
    let bitCount = 0;

    for (let i = 0; i < n; i++) {
      bitCount += (nums[i] >>> j) & 1;
    }

    total += bitCount * (n - bitCount);
  }

  return total;
};

