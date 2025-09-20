/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  const arr = s.split('');

  for (let i = 0; i < arr.length; i += 2 * k) {
    
    reverse(arr, i, Math.min(i + k - 1, arr.length - 1));
  }

  return arr.join('');
};

const reverse = (arr, i, j) => {
  while (i < j) [arr[i++], arr[j--]] = [arr[j], arr[i]];
};

