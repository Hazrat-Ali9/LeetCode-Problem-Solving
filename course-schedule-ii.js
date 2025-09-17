/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  const adjList = [];

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  prerequisites.forEach(p => {
    const u = p[0];
    const v = p[1];
    adjList[u].push(v);
  });

  const visited = [];
  const stack = [];
  const result = [];

  const hasCycle = u => {
    
    if (visited[u]) {
      return false;
    }

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

    stack[u] = false;

    
    result.push(u);

    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) {
      return [];
    }
  }

  return result;
};
