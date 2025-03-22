/**
 * @param {number} N
 * @return {number}
 */
const countArrangement = N => {
  const result = [];
  backtracking(N, 0, {}, [], result);
  return result.length;
};

const backtracking = (N, index, used, solution, result) => {
  if (index === N) {
    result.push(solution.slice());
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!used[i] && ((index + 1) % i === 0 || i % (index + 1) === 0)) {
      used[i] = true;
      solution.push(i);
      backtracking(N, index + 1, used, solution, result);
      used[i] = false;
      solution.pop();
    }
  }
};


