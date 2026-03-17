var myAtoi = function(s) {
    let i = 0;
    let n = s.length;
    
    while (i < n && s[i] === ' ') i++;

    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        if (s[i] === '-') sign = -1;
        i++;
    }

    let num = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';

        if (num > Math.floor(INT_MAX / 10) || 
           (num === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        num = num * 10 + digit;
        i++;
    }

    return num * sign;
};
