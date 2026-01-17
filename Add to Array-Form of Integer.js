
var addToArrayForm = function(num, k) {
    let i = num.length - 1;
    let carry = k;
    let result = [];

    while (i >= 0 || carry > 0) {
        if (i >= 0) {
            carry += num[i];
            i--;
        }
        result.push(carry % 10);
        carry = Math.floor(carry / 10);
    }

    return result.reverse();
};