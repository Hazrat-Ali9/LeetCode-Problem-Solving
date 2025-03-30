/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n === 0) {
    return 1;
  }

  const temp = myPow(x, parseInt(n / 2));

  if (n % 2 === 0) {
    return temp * temp;
  }

  if (n > 0) {
    return x * temp * temp;
  }

  return (temp * temp) / x;
};


