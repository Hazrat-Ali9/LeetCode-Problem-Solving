/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantDirectedConnection = edges => {
 
  let canA = [-1, -1];
  let canB = [-1, -1];
  let parent = Array(2001).fill(0);

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    const u = edge[0];
    const v = edge[1];

    if (parent[v] === 0) {
      parent[v] = u;
    } else {
      
      canB = [u, v];
      canA = [parent[v], v];
      edges[i][1] = 0; 
    }
  }

  
  parent = Array(2001).fill(-1);

  const find = i => {
    if (parent[i] === -1) {
      return i;
    }
    return find(parent[i]);
  };

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];

    if (edge[1] === 0) {
      continue; 
    }


    const x = find(edge[0]);
    const y = find(edge[1]);

 
    if (x === y) {
    
      if (canA[0] === -1) {
        return edge;
      }
      return canA;
    }

    
    parent[x] = y;
  }

 
  return canB;
};
