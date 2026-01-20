var isAlienSorted = function(words, order) {

    const rank = {};
    for (let i = 0; i < order.length; i++) {
        rank[order[i]] = i;
    }

    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];
        const len = Math.min(w1.length, w2.length);
        let isDifferent = false;

        for (let j = 0; j < len; j++) {
            if (w1[j] !== w2[j]) {
                if (rank[w1[j]] > rank[w2[j]]) {
                    return false;
                }
                isDifferent = true;
                break;
            }
        }

        if (!isDifferent && w1.length > w2.length) {
            return false;
        }
    }

    return true;
};

