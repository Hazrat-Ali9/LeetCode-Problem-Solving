/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
const addOperators = (num, target) => {
  const result = [];
  backtracking(num, target, 0, 0, 0, '', result);
  return result;
};

const backtracking = (num, target, start, total, last, solution, result) => {
  if (start === num.length) {
    if (total === target) {
      result.push(solution);
    }
    return;
  }

  for (let i = start; i < num.length; i++) {
    
    if (i > start && num[start] === '0') {
      break;
    }

    const curr = parseInt(num.substring(start, i + 1));

    if (start === 0) {
     
      backtracking(num, target, i + 1, total + curr, curr, solution + curr, result);
    } else {
      
      backtracking(num, target, i + 1, total + curr, curr, solution + '+' + curr, result);
      backtracking(num, target, i + 1, total - curr, -curr, solution + '-' + curr, result);
      backtracking(num, target, i + 1, total - last + last * curr, last * curr, solution + '*' + curr, result);
    }
  }
};
