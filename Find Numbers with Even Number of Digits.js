/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;

    for (let num of nums) {
        const digits = Math.abs(num).toString().length;
        if (digits % 2 === 0) count++;
    }

    return count;
};
