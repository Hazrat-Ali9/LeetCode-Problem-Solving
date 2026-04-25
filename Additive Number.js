var isAdditiveNumber = function(num) {
    let n = num.length;

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        for (let j = 1; Math.max(i, j) <= n - i - j; j++) {

            let a = num.substring(0, i);
            let b = num.substring(i, i + j);


            if ((a.length > 1 && a[0] === '0') || (b.length > 1 && b[0] === '0')) {
                continue;
            }

            if (isValid(a, b, i + j)) return true;
        }
    }

    return false;

    function isValid(a, b, start) {
        while (start < n) {
            let sum = addStrings(a, b);
            if (!num.startsWith(sum, start)) return false;

            start += sum.length;
            a = b;
            b = sum;
        }
        return true;
    }

    function addStrings(x, y) {
        let res = '';
        let i = x.length - 1, j = y.length - 1, carry = 0;

        while (i >= 0 || j >= 0 || carry) {
            let sum = carry;
            if (i >= 0) sum += x[i--] - '0';
            if (j >= 0) sum += y[j--] - '0';

            res = (sum % 10) + res;
            carry = Math.floor(sum / 10);
        }

        return res;
    }
};
