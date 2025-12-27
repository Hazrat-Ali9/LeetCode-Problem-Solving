
var selfDividingNumbers = function(left, right) {
    let result = [];

    for (let num = left; num <= right; num++) {
        let temp = num;
        let isValid = true;

        while (temp > 0) {
            let digit = temp % 10;

            if (digit === 0 || num % digit !== 0) {
                isValid = false;
                break;
            }

            temp = Math.floor(temp / 10);
        }

        if (isValid) {
            result.push(num);
        }
    }

    return result;
};

