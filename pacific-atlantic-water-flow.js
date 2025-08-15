/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = matrix => {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;

  const pacific = Array(m)
    .fill()
    .map(() => Array(n).fill(false));
  const atlantic = Array(m)
    .fill()
    .map(() => Array(n).fill(false));

  const pacificQueue = [];
  const atlanticQueue = [];

  const res = [];

  
  for (let i = 0; i < m; i++) {
    pacificQueue.push([i, 0]);
    atlanticQueue.push([i, n - 1]);
    pacific[i][0] = true;
    atlantic[i][n - 1] = true;
  }

 
  for (let j = 0; j < n; j++) {
    pacificQueue.push([0, j]);
    atlanticQueue.push([m - 1, j]);
    pacific[0][j] = true;
    atlantic[m - 1][j] = true;
  }

  
  bfs(matrix, pacific, pacificQueue);
  bfs(matrix, atlantic, atlanticQueue);

  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j]);
      }
    }
  }

  return res;
};

const bfs = (matrix, ocean, queue) => {
  const m = matrix.length;
  const n = matrix[0].length;

  while (queue.length > 0) {
    const [i, j] = queue.shift();
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let [dx, dy] of dirs) {
      const x = i + dx;
      const y = j + dy;

      if (x < 0 || x >= m || y < 0 || y >= n) {
        continue; 
      }
      if (ocean[x][y]) {
        continue; 
      }
      if (matrix[x][y] < matrix[i][j]) {
        continue; 
      }

      ocean[x][y] = true;
      queue.push([x, y]);
    }
  }
};

