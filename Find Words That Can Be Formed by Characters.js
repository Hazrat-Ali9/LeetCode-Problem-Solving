var countCharacters = function(words, chars) {
    const charCount = new Array(26).fill(0);

    for (const ch of chars) {
        charCount[ch.charCodeAt(0) - 97]++;
    }

    let answer = 0;

    for (const word of words) {
        const wordCount = new Array(26).fill(0);
        let possible = true;

        for (const ch of word) {
            const index = ch.charCodeAt(0) - 97;
            wordCount[index]++;

            if (wordCount[index] > charCount[index]) {
                possible = false;
                break;
            }
        }

        if (possible) {
            answer += word.length;
        }
    }

    return answer;
};
