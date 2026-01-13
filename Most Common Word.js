var mostCommonWord = function (paragraph, banned) {

    const bannedSet = new Set(banned.map(word => word.toLowerCase()));


    const words = paragraph
        .toLowerCase()
        .replace(/[^a-z\s]/g, ' ')
        .split(/\s+/);

    const freq = {};
    let maxCount = 0;
    let answer = "";

    for (const word of words) {
        if (word === "" || bannedSet.has(word)) continue;

        freq[word] = (freq[word] || 0) + 1;

        if (freq[word] > maxCount) {
            maxCount = freq[word];
            answer = word;
        }
    }

    return answer;
};

