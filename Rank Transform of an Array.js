var arrayRankTransform = function(arr) {
    const sorted = [...arr].sort((a, b) => a - b);

    const rank = new Map();
    let currentRank = 1;

    for (const num of sorted) {
        if (!rank.has(num)) {
            rank.set(num, currentRank);
            currentRank++;
        }
    }

    return arr.map(num => rank.get(num));
};
