/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = n => {
  let title = '';

  while (n > 0) {
    n--;
    title = String.fromCharCode(65 + (n % 26)) + title;
    n = Math.floor(n / 26);
  }

  return title;
};


