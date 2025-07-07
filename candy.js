/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = ratings => {
  if (!ratings || ratings.length === 0) return 0;

  const n = ratings.length;

  
  const arr = Array(n).fill(0);
  arr[0] = 1;

  
  for (let i = 1; i < n; i++) {
    arr[i] = ratings[i] > ratings[i - 1] ? arr[i - 1] + 1 : 1;
  }

  
  let sum = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      arr[i] = Math.max(arr[i], arr[i + 1] + 1);
    }

    sum += arr[i];
  }

  return sum;
};


