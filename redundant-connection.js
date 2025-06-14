/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = edges => {
  const nums = Array(2000).fill(-1);

  const find = i => {
    if (nums[i] === -1) {
      return i;
    }
    return find(nums[i]);
  };

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];

    // Find
    const x = find(edge[0]);
    const y = find(edge[1]);

    if (x === y) {
      return edge;
    }

    // Union
    nums[x] = y;
  }

  return [];
};


