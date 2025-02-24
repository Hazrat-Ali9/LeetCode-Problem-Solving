
/**
 * @param {number} num
 * @return {number}
 */
const maximumSwap = num => {
  const digits = num.toString().split('');

  
  const buckets = Array(10).fill(-1);
  for (let i = 0; i < digits.length; i++) {
    buckets[digits[i] - '0'] = i;
  }

  for (let i = 0; i < digits.length; i++) {
    for (let k = 9; k > digits[i] - '0'; k--) {
      if (buckets[k] > i) {
        [digits[i], digits[buckets[k]]] = [digits[buckets[k]], digits[i]];
        return parseInt(digits.join(''));
      }
    }
  }

  return num;
};


