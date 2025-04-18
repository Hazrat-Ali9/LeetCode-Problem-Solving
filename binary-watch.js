/**
 * @param {number} num
 * @return {string[]}
 */
const readBinaryWatch = num => {
  const result = [];

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (hammingWeight(h * 64 + m) === num) {
        result.push(`${h}:${m < 10 ? '0' + m : m}`);
      }
    }
  }

  return result;
};

const hammingWeight = n => {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & 1) !== 0) count++;
    n >>= 1;
  }
  return count;
};


