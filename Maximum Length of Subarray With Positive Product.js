var getMaxLen = function(nums) {
    let positive = 0;
    let negative = 0;
    let maxLength = 0;

    for (const num of nums) {
        if (num === 0) {
            positive = 0;
            negative = 0;
        } else if (num > 0) {
            positive++;
            if (negative > 0) {
                negative++;
            }
        } else {
            const temp = positive;

            positive = negative > 0 ? negative + 1 : 0;
            negative = temp + 1;
        }

        maxLength = Math.max(maxLength, positive);
    }

    return maxLength;
};
