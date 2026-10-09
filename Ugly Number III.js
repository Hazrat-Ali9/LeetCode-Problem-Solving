var nthUglyNumber = function(n, a, b, c) {
    const gcd = (x, y) => {
        while (y !== 0) {
            [x, y] = [y, x % y];
        }
        return x;
    };

    const lcm = (x, y) => (x / gcd(x, y)) * y;

    const ab = lcm(a, b);
    const ac = lcm(a, c);
    const bc = lcm(b, c);
    const abc = lcm(ab, c);

    const count = (x) => {
        return Math.floor(x / a)
             + Math.floor(x / b)
             + Math.floor(x / c)
             - Math.floor(x / ab)
             - Math.floor(x / ac)
             - Math.floor(x / bc)
             + Math.floor(x / abc);
    };

    let left = 1;
    let right = 2 * Math.min(a, b, c) * n;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (count(mid) >= n) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
