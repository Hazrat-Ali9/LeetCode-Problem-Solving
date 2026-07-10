/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    let result = new Set();
    let prev = new Set();

    for (let num of arr) {
        let curr = new Set();
        curr.add(num);

        for (let val of prev) {
            curr.add(val | num);
        }

        for (let val of curr) {
            result.add(val);
        }

        prev = curr;
    }

    return result.size;
};
