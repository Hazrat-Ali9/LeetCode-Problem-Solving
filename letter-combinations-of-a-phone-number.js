const keyboard = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  if (!digits) {
    return [];
  }

  const results = [];
  backtracking(digits, 0, '', results);
  return results;
};

const backtracking = (digits, start, solution, results) => {
  if (start === digits.length) {
    return results.push(solution);
  }

  const index = parseInt(digits[start]);
  const keys = keyboard[index];

  for (let i = 0; i < keys.length; i++) {
    backtracking(digits, start + 1, solution + keys[i], results);
  }
};


