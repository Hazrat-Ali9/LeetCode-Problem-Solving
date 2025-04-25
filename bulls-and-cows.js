/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = (secret, guess) => {
  let bulls = 0;
  let cows = 0;

  const count = Array(10).fill(0);

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      if (count[secret[i] - '0'] < 0) cows++;
      if (count[guess[i] - '0'] > 0) cows++;

      count[secret[i] - '0']++;
      count[guess[i] - '0']--;
    }
  }

  return `${bulls}A${cows}B`;
};

export { getHint };
