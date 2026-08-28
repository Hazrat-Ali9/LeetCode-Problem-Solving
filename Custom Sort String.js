var customSortString = function(order, s) {

    const freq = new Map();

    for (const ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let result = [];

    for (const ch of order) {
        if (freq.has(ch)) {
            result.push(ch.repeat(freq.get(ch)));
            freq.delete(ch);
        }
    }

    for (const [ch, count] of freq) {
        result.push(ch.repeat(count));
    }

    return result.join('');
};
