/**
 * @param {number[][]} points
 * @return {number}
 */
const numberOfBoomerangs = points => {
  let total = 0;
  let map = {};

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue;
      }

      const d = calcDistance(points[i], points[j]);
      map[d] = ~~map[d] + 1;
    }

    Object.values(map).forEach(val => {
      total += val * (val - 1);  // permutations P(n, 2) = n * (n - 1)
    });

    map = {};
  }

  return total;
};

const calcDistance = ([x1, y1], [x2, y2]) => (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);


