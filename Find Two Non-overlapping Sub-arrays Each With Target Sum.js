var minSumOfLengths = function(arr, target) {
    const n = arr.length;
    const best = new Array(n).fill(Infinity);

    const map = new Map();
    map.set(0, -1);

    let prefix = 0;
    let minLen = Infinity;
    let ans = Infinity;

    for (let i = 0; i < n; i++) {
        prefix += arr[i];

        if (map.has(prefix - target)) {
            const start = map.get(prefix - target);
            const len = i - start;

            if (start >= 0 && best[start] !== Infinity) {
                ans = Math.min(ans, len + best[start]);
            }

            minLen = Math.min(minLen, len);
        }

        best[i] = minLen;
        map.set(prefix, i);
    }

    return ans === Infinity ? -1 : ans;
};
