var canMeasureWater = function(x, y, target) {

    if (target > x + y) {
        return false;
    }

    if (target === 0) {
        return true;
    }

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    return target % gcd(x, y) === 0;
};
