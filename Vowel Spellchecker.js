var spellchecker = function(wordlist, queries) {
    const exact = new Set(wordlist);
    const caseInsensitive = new Map();
    const vowelInsensitive = new Map();

    for (const word of wordlist) {
        const lower = word.toLowerCase();
        const devoweled = lower.replace(/[aeiou]/g, '#');

        if (!caseInsensitive.has(lower)) {
            caseInsensitive.set(lower, word);
        }

        if (!vowelInsensitive.has(devoweled)) {
            vowelInsensitive.set(devoweled, word);
        }
    }

    const result = [];

    for (const query of queries) {
        const lower = query.toLowerCase();
        const devoweled = lower.replace(/[aeiou]/g, '#');

        if (exact.has(query)) {
            result.push(query);
        } else if (caseInsensitive.has(lower)) {
            result.push(caseInsensitive.get(lower));
        } else if (vowelInsensitive.has(devoweled)) {
            result.push(vowelInsensitive.get(devoweled));
        } else {
            result.push("");
        }
    }

    return result;
};
