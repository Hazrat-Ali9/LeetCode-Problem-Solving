/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, m, n, i, j);
        count++;
      }
    }
  }

  return count;
};

const dfs = (grid, m, n, i, j) => {
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
    return;
  }

  grid[i][j] = '0';

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  for (let k = 0; k < 4; k++) {
    dfs(grid, m, n, i + dx[k], j + dy[k]);
  }
};


