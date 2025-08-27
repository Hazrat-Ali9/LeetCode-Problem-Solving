/**
 * @param {string} s
 * @return {boolean}
 *
 */
const isNumber = s => {
  s = s.trim();


  let pointSeen = false;
  let eSeen = false;
  let numberSeen = false;
  let numberAfterE = true;


  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if ('0' <= curr && curr <= '9') {
      numberSeen = true;
      numberAfterE = true;
    } else if (curr === '.') {
      if (eSeen || pointSeen) {
        return false;
      }
      pointSeen = true;
    } else if (curr === 'e') {
      if (eSeen || !numberSeen) {
        return false;
      }
      eSeen = true;
      numberAfterE = false;
    } else if (curr === '-' || curr === '+') {
      if (i > 0 && s[i - 1] !== 'e') {
        return false;
      }
    } else {
      return false;
    }
  }

  return numberSeen && numberAfterE;
};

