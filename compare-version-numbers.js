/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = (version1, version2) => {
  const levels1 = version1.split('.');
  const levels2 = version2.split('.');

  const length = Math.max(levels1.length, levels2.length);

  for (let i = 0; i < length; i++) {
    const v1 = i < levels1.length ? parseInt(levels1[i]) : 0;
    const v2 = i < levels2.length ? parseInt(levels2[i]) : 0;

    if (v1 > v2) return 1;
    if (v2 > v1) return -1;
  }

  return 0;
};

export { compareVersion };
