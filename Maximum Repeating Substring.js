var maxRepeating = function(sequence, word) {
    let count = 0;
    let repeated = word;

    while (sequence.includes(repeated)) {
        count++;
        repeated += word;
    }

    return count;
};
