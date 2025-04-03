/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  // Construct a graph with adjacency list
  const adjList = [];

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  prerequisites.forEach(([u, v]) => adjList[u].push(v));

  const visited = [];
  const stack = [];

  const hasCycle = u => {
    visited[u] = true;
    stack[u] = true;

    for (let i = 0; i < adjList[u].length; i++) {
      const v = adjList[u][i];

      if (stack[v]) {
        return true;
      }

      if (!visited[v] && hasCycle(v)) {
        return true;
      }
    }

    // Backtracking
    stack[u] = false;

    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) {
      return false;
    }
  }

  return true;
};


