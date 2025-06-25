/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = num => {
  
  return num > 0 && (num & (num - 1)) === 0 && (num & 0x55555555) !== 0;
};


