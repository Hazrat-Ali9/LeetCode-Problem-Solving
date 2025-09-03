/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
const fractionToDecimal = (numerator, denominator) => {

  if (denominator === 0) {
    return 'NaN';
  }

  if (numerator === 0) {
    return '0';
  }

  const result = [];

  if ((numerator < 0) ^ (denominator < 0)) {
    result.push('-');
  }

  const n = Math.abs(numerator);
  const d = Math.abs(denominator);

  result.push(Math.floor(n / d));

  if (n % d == 0) {
    return result.join('');
  }

  result.push('.');

  const map = new Map();

 
  for (let r = n % d; r > 0; r %= d) {
    
 
    if (map.has(r)) {
      result.splice(map.get(r), 0, '(');
      result.push(')');
      break;
    }

   
    map.set(r, result.length);

    r *= 10;
    
    result.push(Math.floor(r / d));
  }

  return result.join('');
};

const result = fractionToDecimal(1, 333);
console.log(result);

