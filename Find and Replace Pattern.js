var findAndReplacePattern = function(words, pattern) {
    function isMatch(word, pattern) {
        const map1 = new Map();
        const map2 = new Map();

        for (let i = 0; i < word.length; i++) {
            const w = word[i];
            const p = pattern[i];

            if (map1.has(p) && map1.get(p) !== w) {
                return false;
            }

            if (map2.has(w) && map2.get(w) !== p) {
                return false;
            }

            map1.set(p, w);
            map2.set(w, p);
        }

        return true;
    }

    return words.filter(word => isMatch(word, pattern));
};
