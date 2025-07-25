/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = tokens => {
  const operands = new Set(['+', '-', '*', '/']);
  const stack = [];

  for (let s of tokens) {
    if (operands.has(s)) {
      const n2 = parseInt(stack.pop());
      const n1 = parseInt(stack.pop());
      stack.push(evaluate(n1, n2, s));
    } else {
      stack.push(s);
    }
  }

  return parseInt(stack.pop());
};

const evaluate = (n1, n2, operand) => {
  if (operand === '+') return n1 + n2;
  if (operand === '-') return n1 - n2;
  if (operand === '*') return n1 * n2;
  if (operand === '/') return n1 / n2;
};


