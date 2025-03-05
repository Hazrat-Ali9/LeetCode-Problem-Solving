/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = citations => {
  citations.sort((a, b) => a - b);

  const n = citations.length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    max = Math.max(max, Math.min(citations[i], n - i));
  }

  return max;
};


