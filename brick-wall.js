/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = wall => {
  const map = {};
  let count = 0;

  for (let i = 0; i < wall.length; i++) {
    for (let j = 0, sum = 0; j < wall[i].length - 1; j++) {
      sum += wall[i][j];
      map[sum] = ~~map[sum] + 1;
      count = Math.max(count, map[sum]);
    }
  }

  return wall.length - count;
};

export { leastBricks };
