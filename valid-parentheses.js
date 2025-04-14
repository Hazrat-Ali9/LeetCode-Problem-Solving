/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(')');
    } else if (s[i] === '[') {
      stack.push(']');
    } else if (s[i] === '{') {
      stack.push('}');
    } else if (stack.length === 0 || stack.pop() !== s[i]) {
      return false;
    }
  }

  return stack.length === 0;
};


