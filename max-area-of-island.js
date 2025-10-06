/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = grid => {
  const m = grid.length;
  const n = grid[0].length;

  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(grid, i, j);
        max = Math.max(max, area);
      }
    }
  }

  return max;
};

const dfs = (grid, i, j) => {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  grid[i][j] = 0; 

  let count = 1;

  
  for (let k = 0; k < 4; k++) {
    const x = i + dx[k];
    const y = j + dy[k];

    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0) {
      continue;
    }

    count += dfs(grid, x, y);
  }

  return count;
};


