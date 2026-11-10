var wordSubsets = function(words1, words2) {
    const maxFreq = new Array(26).fill(0);

    for (const word of words2) {
        const freq = new Array(26).fill(0);

        for (const ch of word) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        for (let i = 0; i < 26; i++) {
            maxFreq[i] = Math.max(maxFreq[i], freq[i]);
        }
    }

    const result = [];
    for (const word of words1) {
        const freq = new Array(26).fill(0);

        for (const ch of word) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        let isUniversal = true;

        for (let i = 0; i < 26; i++) {
            if (freq[i] < maxFreq[i]) {
                isUniversal = false;
                break;
            }
        }

        if (isUniversal) {
            result.push(word);
        }
    }

    return result;
};
