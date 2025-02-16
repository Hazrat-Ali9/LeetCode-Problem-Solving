/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  const n = height.length;
  let max = 0;

  for (let i = 0, j = n - 1; i < j; ) {
    const area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(max, area);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
};


