/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let count = 0;

  for (let i = 0; i < flowerbed.length && count < n; i++) {
    if (flowerbed[i] === 0) {

      const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
      const prev = i === 0 ? 0 : flowerbed[i - 1];

      if (next === 0 && prev === 0) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }

  return count === n;
};

// export { canPlaceFlowers };
