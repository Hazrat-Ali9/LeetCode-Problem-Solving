var numRabbits = function(answers) {
    const freq = {};
    let total = 0;

    for (const ans of answers) {
        freq[ans] = (freq[ans] || 0) + 1;
    }

    for (const ans in freq) {
        const count = freq[ans];
        const groupSize = Number(ans) + 1;
        const groups = Math.ceil(count / groupSize);

        total += groups * groupSize;
    }

    return total;
};
