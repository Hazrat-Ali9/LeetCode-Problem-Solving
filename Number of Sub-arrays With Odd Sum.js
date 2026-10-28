var numOfSubarrays = function(arr) {
    const MOD = 1000000007;

    let odd = 0;
    let even = 1;
    let prefixSum = 0;
    let count = 0;

    for (const num of arr) {
        prefixSum += num;

        if (prefixSum % 2 !== 0) {
            count = (count + even) % MOD;
            odd++;
        } else {
            count = (count + odd) % MOD;
            even++;
        }
    }

    return count;
};
