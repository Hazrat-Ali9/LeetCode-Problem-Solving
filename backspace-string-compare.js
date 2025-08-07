/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
  
  for (let i = S.length - 1, j = T.length - 1, skipS = 0, skipT = 0; i >= 0 || j >= 0; i--, j--) {
    
    while (i >= 0) {
      if (S[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else break;
    }

    while (j >= 0) {
      if (T[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else break;
    }

    if (i >= 0 && j >= 0 && S[i] != T[j]) {
      return false;
    }

    if (i >= 0 !== j >= 0) {
      return false;
    }
  }

  return true;
};


