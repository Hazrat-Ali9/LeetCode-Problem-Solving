/**
 * @param {number} N
 * @return {number}
 */
const rotatedDigits = N => {
  
  let ans = 0;

  for (let n = 1; n <= N; ++n) {
    if (isGood(n, false)) ans++;
  }

  return ans;
};


const isGood = (n, flag) => {
  if (n == 0) return flag;

  const d = n % 10;

  if (d == 3 || d == 4 || d == 7) {
    return false;
  }

  if (d == 0 || d == 1 || d == 8) {
    return isGood(Math.floor(n / 10), flag);
  }

  return isGood(Math.floor(n / 10), true);
};

