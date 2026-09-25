var wordPattern = function(pattern, s) {
    const words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const ch = pattern[i];
        const word = words[i];

        if (charToWord.has(ch) && charToWord.get(ch) !== word) {
            return false;
        }
        if (wordToChar.has(word) && wordToChar.get(word) !== ch) {
            return false;
        }

        charToWord.set(ch, word);
        wordToChar.set(word, ch);
    }

    return true;
};
