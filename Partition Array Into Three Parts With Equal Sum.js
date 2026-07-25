/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const total = arr.reduce((sum, num) => sum + num, 0);

    if (total % 3 !== 0) return false;

    const target = total / 3;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === target) {
            count++;
            sum = 0;
            if (count === 2 && i < arr.length - 1) {
                return true;
            }
        }
    }

    return false;
};
