var nthSuperUglyNumber = function(n, primes) {
    const k = primes.length;
    const dp = new Array(n).fill(0);
    dp[0] = 1;

    const pointers = new Array(k).fill(0);

    const values = primes.slice();

    for (let i = 1; i < n; i++) {

        let next = Math.min(...values);
        dp[i] = next;

        for (let j = 0; j < k; j++) {
            if (values[j] === next) {
                pointers[j]++;
                values[j] = dp[pointers[j]] * primes[j];
            }
        }
    }

    return dp[n - 1];
};
