/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = (n, edges) => {
  if (n === 1) {
    return [0];
  }

 
  const adjList = buildGraph(n, edges);

 
  const leaves = [];

  for (let i = 0; i < n; i++) {
    if (adjList.get(i).size === 1) {
      leaves.push(i);
    }
  }

  while (n > 2) {
    const size = leaves.length;

    n -= size;

    for (let i = 0; i < size; i++) {
      const u = leaves.shift();

      adjList.get(u).forEach(v => {
        adjList.get(v).delete(u);

        if (adjList.get(v).size === 1) {
          leaves.push(v);
        }
      });
    }
  }

  return leaves;
};

const buildGraph = (n, edges) => {
  const adjList = new Map();

  for (let i = 0; i < n; i++) {
    adjList.set(i, new Set());
  }

  edges.forEach(edge => {
    const u = edge[0];
    const v = edge[1];

    adjList.get(u).add(v);
    adjList.get(v).add(u);
  });

  return adjList;
};


