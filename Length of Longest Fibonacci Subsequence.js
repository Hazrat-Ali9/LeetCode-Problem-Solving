/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const n = arr.length;
    const index = new Map();

    for (let i = 0; i < n; i++) {
        index.set(arr[i], i);
    }

    const dp = Array.from({ length: n }, () => Array(n).fill(2));
    let ans = 0;

    for (let j = 0; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            const prev = arr[k] - arr[j];

            if (prev < arr[j] && index.has(prev)) {
                const i = index.get(prev);
                dp[j][k] = dp[i][j] + 1;
                ans = Math.max(ans, dp[j][k]);
            }
        }
    }

    return ans >= 3 ? ans : 0;
};
