/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = n => {
  const ugly = Array(n);
  ugly[0] = 1;

  let index2 = 0,
    index3 = 0,
    index5 = 0;
  let factor2 = 2,
    factor3 = 3,
    factor5 = 5;

  for (let i = 1; i < n; i++) {
    const min = Math.min(Math.min(factor2, factor3), factor5);

    ugly[i] = min;

    if (factor2 === min) factor2 = 2 * ugly[++index2];
    if (factor3 === min) factor3 = 3 * ugly[++index3];
    if (factor5 === min) factor5 = 5 * ugly[++index5];
  }

  return ugly[n - 1];
};


