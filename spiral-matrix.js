/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
  const result = [];

  if (!matrix || matrix.length == 0 || matrix[0].length == 0) {
    return result;
  }

  let m = matrix.length;
  let n = matrix[0].length;
  const layers = Math.ceil(Math.min(m, n) / 2);

  for (let k = 0; k < layers; k++, m -= 2, n -= 2) {
    if (m <= 0 || n <= 0) {
      break;
    }

    if (m === 1) {
    
      for (let j = 0; j < n; j++) {
        result.push(matrix[k][k + j]);
      }
    } else if (n === 1) {
     
      for (let i = 0; i < m; i++) {
        result.push(matrix[k + i][k]);
      }
    } else {
    
      for (let j = 0; j < n - 1; j++) {
        result.push(matrix[k][k + j]);
      }
  
      for (let i = 0; i < m - 1; i++) {
        result.push(matrix[k + i][k + n - 1]);
      }
 
      for (let j = n - 1; j > 0; j--) {
        result.push(matrix[k + m - 1][k + j]);
      }
    
      for (let i = m - 1; i > 0; i--) {
        result.push(matrix[k + i][k]);
      }
    }
  }

  return result;
};