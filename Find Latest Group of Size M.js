var findLatestStep = function(arr, m) {
    const n = arr.length;

    if (m === n) return n;

    const length = new Array(n + 2).fill(0);
    let count = 0;
    let answer = -1;

    for (let step = 0; step < n; step++) {
        const pos = arr[step];

        const left = length[pos - 1];
        const right = length[pos + 1];

        if (left === m) count--;
        if (right === m) count--;

        const newLength = left + right + 1;

        length[pos - left] = newLength;
        length[pos + right] = newLength;
        length[pos] = newLength;

        if (newLength === m) count++;

        if (count > 0) {
            answer = step + 1;
        }
    }

    return answer;
};
