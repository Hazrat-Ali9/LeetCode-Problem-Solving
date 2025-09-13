

/**
 * @param {string} input
 * @return {number}
 */
const lengthLongestPath = input => {
  
  const map = new Map();
  map.set(0, 0);

  let result = 0;

  for (let s of input.split('\n')) {
    const level = s.lastIndexOf('\t') + 1; 
    const length = s.substring(level).length;

    if (s.includes('.')) {
      result = Math.max(result, map.get(level) + length);
    } else {
      map.set(level + 1, map.get(level) + length + 1);
    }
  }

  return result;
};

export { lengthLongestPath };
