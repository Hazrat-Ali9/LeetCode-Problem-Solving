var maxCount = function(m, n, ops) {
  if (ops.length === 0) return m * n; 

  let minA = m;
  let minB = n;

  for (let [a, b] of ops) {
    minA = Math.min(minA, a);
    minB = Math.min(minB, b);
  }

  return minA * minB;
};

console.log(maxCount(3, 3, [[2, 2], [3, 3]])); 

console.log(maxCount(3, 3, [
  [2, 2],[3, 3],[3, 3],[3, 3],[2, 2],
  [3, 3],[3, 3],[3, 3],[2, 2],[3, 3],[3, 3],[3, 3]
])); 

console.log(maxCount(3, 3, [])); 

