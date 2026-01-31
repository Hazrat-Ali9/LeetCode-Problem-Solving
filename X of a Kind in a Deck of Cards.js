var hasGroupsSizeX = function(deck) {
    const freq = {};

    for (let card of deck) {
        freq[card] = (freq[card] || 0) + 1;
    }

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    let groupSize = 0;

    for (let count of Object.values(freq)) {
        groupSize = gcd(groupSize, count);
        if (groupSize === 1) return false;
    }

    return groupSize > 1;
};

