var minimumOperations = function(nums) {
    let operations = 0;

    for (let x of nums) {
        if (x % 3 !== 0) operations += 1;
    }

    return operations;
};

