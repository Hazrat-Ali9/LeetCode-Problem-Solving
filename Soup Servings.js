/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {

    if (n > 4800) return 1.0;

    n = Math.ceil(n / 25);

    const memo = new Map();

    function dp(a, b) {
        const key = `${a},${b}`;
        if (memo.has(key)) return memo.get(key);

        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1.0;
        if (b <= 0) return 0.0;

        const res =
            0.25 * (
                dp(a - 4, b) +
                dp(a - 3, b - 1) +
                dp(a - 2, b - 2) +
                dp(a - 1, b - 3)
            );

        memo.set(key, res);
        return res;
    }

    return dp(n, n);
};
