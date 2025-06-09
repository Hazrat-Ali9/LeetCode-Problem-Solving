/**
 * @param {string} input
 * @return {number[]}
 */
const diffWaysToCompute = input => {
  const result = [];

  for (let i = 1; i < input.length; i++) {
    const c = input[i];

    if (c === '+' || c === '-' || c === '*') {
      const s1 = input.substring(0, i);
      const s2 = input.substring(i + 1);

      const l1 = diffWaysToCompute(s1);
      const l2 = diffWaysToCompute(s2);

      for (let n1 of l1) {
        for (let n2 of l2) {
          switch (c) {
            case '+':
              result.push(n1 + n2);
              break;
            case '-':
              result.push(n1 - n2);
              break;
            case '*':
              result.push(n1 * n2);
              break;
          }
        }
      }
    }
  }

  if (result.length === 0) {
    result.push(parseInt(input));
  }

  return result;
};


