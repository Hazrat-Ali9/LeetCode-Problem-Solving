var topKFrequent = function(words, k) {

    let freq = new Map();

    // Count frequency
    for (let word of words) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }

    let arr = Array.from(freq.keys());

    arr.sort((a, b) => {

        let freqDiff = freq.get(b) - freq.get(a);

        if (freqDiff !== 0) {
            return freqDiff;
        }

        return a.localeCompare(b);
    });

    return arr.slice(0, k);
};
