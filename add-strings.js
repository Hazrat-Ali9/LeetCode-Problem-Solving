/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  const result = [];

  let carry = 0;

  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const x = i >= 0 ? num1[i] - '0' : 0;
    const y = j >= 0 ? num2[j] - '0' : 0;

    result.unshift((x + y + carry) % 10);
    carry = Math.floor((x + y + carry) / 10);
  }

  return result.join('');
};
