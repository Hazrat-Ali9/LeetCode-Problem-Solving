/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let maxVal = 0;
    let chunks = 0;

    for (let i = 0; i < arr.length; i++) {
        maxVal = Math.max(maxVal, arr[i]);
        if (maxVal === i) {
            chunks++;
        }
    }

    return chunks;
};
