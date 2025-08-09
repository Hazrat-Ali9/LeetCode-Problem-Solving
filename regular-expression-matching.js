/**
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  if (p.length === 0) {
    return s.length === 0;
  }

  const isFirstMatch = s.length > 0 && (s[0] === p[0] || p[0] === '.');

  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || (isFirstMatch && isMatch(s.substring(1), p));
  } else {
    return isFirstMatch && isMatch(s.substring(1), p.substring(1));
  }
};

