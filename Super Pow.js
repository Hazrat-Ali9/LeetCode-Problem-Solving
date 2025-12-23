var superPow = function(a, b) {
    const MOD = 1337;

    function modPow(x, n) {
        let res = 1;
        x %= MOD;
        while (n > 0) {
            if (n & 1) res = (res * x) % MOD;
            x = (x * x) % MOD;
            n >>= 1;
        }
        return res;
    }

    let result = 1;
    for (let digit of b) {
        result = modPow(result, 10);
        result = (result * modPow(a, digit)) % MOD;
    }
    return result;
};

