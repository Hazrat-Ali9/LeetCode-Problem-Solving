

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const map1 = {};
  const map2 = {};

  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    const b = t[i];

    if ((map1[a] && map1[a] !== b) || (map2[b] && map2[b] !== a)) {
      return false;
    }

    map1[a] = b;
    map2[b] = a;
  }

  return true;
};


