/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = n => {
  const isPrime = Array(n).fill(true);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++;

      for (let j = 2; i * j < n; j++) {
        isPrime[i * j] = false;
      }
    }
  }

  return count;
};

export { countPrimes };
