/**
 * Recursive Solution
 *
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = s => {
  const canRepeat = (s, rest) => {
    if (s.length > rest.length) {
      return false;
    }
    for (let i = 0; i < rest.length; i += s.length) {
      if (rest.substr(i, s.length) !== s) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (canRepeat(s.substr(0, i + 1), s.substr(i + 1))) {
      return true;
    }
  }

  return false;
};
