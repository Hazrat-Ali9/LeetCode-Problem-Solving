/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);

    const countBits = (num) => {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    };

    let ans = 0;

    for (let num = left; num <= right; num++) {
        if (primes.has(countBits(num))) {
            ans++;
        }
    }

    return ans;
};
