/**
 * @param {number[]} A
 * @return {number}
 */
const longestMountain = A => {
  let ans = 0;

  for (let i = 0, j = 0, p = -1; j < A.length; j++) {
    if ((j === 0 || A[j] > A[j - 1]) && (j === A.length - 1 || A[j] > A[j + 1])) {
      
      p = j;
    }

    if ((j === 0 || A[j] <= A[j - 1]) && (j === A.length - 1 || A[j] <= A[j + 1])) {
      
      if (p > 0) {
        
        ans = Math.max(ans, j - i + 1);
      }

      i = j;
     
      p = -1;
    }
  }

  return ans;
};
