/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let n = arr.length;

    let left = 0;
    let right = 1;

    while (left < right) {
        let mid = (left + right) / 2;

        let count = 0;
        let bestNum = 0;
        let bestDen = 1;

        let j = 1;

        for (let i = 0; i < n - 1; i++) {
            while (j < n && arr[i] > mid * arr[j]) {
                j++;
            }

            if (j === n) break;

            count += n - j;

      
            if (arr[i] * bestDen > bestNum * arr[j]) {
                bestNum = arr[i];
                bestDen = arr[j];
            }
        }

        if (count === k) {
            return [bestNum, bestDen];
        }

        if (count < k) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return [];
};
