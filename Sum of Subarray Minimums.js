/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const MOD = 1000000007n;
    const n = arr.length;

    const left = new Array(n);
    const right = new Array(n);

    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
        stack.push(i);
    }

    stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
        stack.push(i);
    }

    let ans = 0n;

    for (let i = 0; i < n; i++) {
        ans = (ans + BigInt(arr[i]) * BigInt(left[i]) * BigInt(right[i])) % MOD;
    }

    return Number(ans);
};
