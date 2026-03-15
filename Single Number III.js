var singleNumber = function(nums) {
    let xor = 0;

    for (let num of nums) {
        xor ^= num;
    }

    let diff = xor & -xor;

    let a = 0, b = 0;

    for (let num of nums) {
        if ((num & diff) === 0) {
            a ^= num;
        } else {
            b ^= num;
        }
    }

    return [a, b];
};
