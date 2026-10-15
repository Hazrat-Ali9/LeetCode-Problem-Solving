var kConcatenationMaxSum = function(arr, k) {
    const MOD = 1000000007;

    let total = 0;
    let maxEnding = 0;
    let maxSum = 0;

    for (const num of arr) {
        total += num;
        maxEnding = Math.max(0, maxEnding + num);
        maxSum = Math.max(maxSum, maxEnding);
    }

    if (k === 1) {
        return maxSum % MOD;
    }

    let prefixSum = 0;
    let maxPrefix = 0;

    for (const num of arr) {
        prefixSum += num;
        maxPrefix = Math.max(maxPrefix, prefixSum);
    }

    let suffixSum = 0;
    let maxSuffix = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        suffixSum += arr[i];
        maxSuffix = Math.max(maxSuffix, suffixSum);
    }

    let answer = maxPrefix + maxSuffix;

    if (total > 0) {
        answer += (k - 2) * total;
    }

    answer = Math.max(answer, maxSum);

    return answer % MOD;
};
