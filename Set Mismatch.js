var findErrorNums = function(nums) {
    const n = nums.length;
    const count = new Array(n + 1).fill(0);

    for (let num of nums) {
        count[num]++;
    }

    let duplicate = -1;
    let missing = -1;

    for (let i = 1; i <= n; i++) {
        if (count[i] === 2) duplicate = i;
        if (count[i] === 0) missing = i;
    }

    return [duplicate, missing];
};

