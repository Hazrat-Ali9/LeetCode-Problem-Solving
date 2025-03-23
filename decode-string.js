/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
  const helper = () => {
    let count = 0;
    let word = '';

    for (++index; index < s.length; index++) {
      let ch = s[index];

      if (ch === '[') {
        word += helper().repeat(count);
        count = 0;
      } else if (ch === ']') {
        break;
      } else if (ch >= '0' && ch <= '9') {
        count = count * 10 + (ch - '0');
      } else {
        word += ch;
      }
    }

    return word;
  };

  let index = -1;
  return helper();
};
