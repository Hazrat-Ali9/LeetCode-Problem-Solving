var isHappy = function(n) {
    const seen = new Set();

    while (n !== 1) {
        if (seen.has(n)) {
            return false; 
        }
        seen.add(n);
        n = getSumOfSquares(n);
    }

    return true;
};

function getSumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

