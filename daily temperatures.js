Object.defineProperty(Array.prototype, 'last', {
  get: function() {
    return this[this.length - 1];
  },
});

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = temperatures => {
  const n = temperatures.length;
  const result = Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack.last]) {
      const j = stack.pop();
      result[j] = i - j;
    }
    stack.push(i);
  }

  return result;
};
