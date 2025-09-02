/**
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  if (p === '') {
    return s === '';
  }

  if (s === '') {
    return p === '*'.repeat(p.length);
  }

  if (p[0] === '*') {
    return isMatch(s, p.substring(1)) || isMatch(s.substring(1), p);
  } else {
    return (s[0] === p[0] || p[0] === '?') && isMatch(s.substring(1), p.substring(1));
  }
};

