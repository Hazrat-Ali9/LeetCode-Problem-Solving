/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = n => {
  return n < 5 ? 0 : Math.floor(n / 5) + trailingZeroes(n / 5);
};

export { trailingZeroes };
