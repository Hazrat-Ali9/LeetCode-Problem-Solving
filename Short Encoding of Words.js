
var minimumLengthEncoding = function(words) {
    let set = new Set(words);

    for (let word of words) {
        for (let i = 1; i < word.length; i++) {
            set.delete(word.slice(i));
        }
    }

    let result = 0;

    for (let word of set) {
        result += word.length + 1;
    }

    return result;
};

