var findLongestWord = function(s, dictionary) {
    let result = "";

    for (let word of dictionary) {
        if (isSubsequence(word, s)) {
            if (
                word.length > result.length ||
                (word.length === result.length && word < result)
            ) {
                result = word;
            }
        }
    }

    return result;
};

function isSubsequence(word, s) {
    let i = 0, j = 0;

    while (i < word.length && j < s.length) {
        if (word[i] === s[j]) i++;
        j++;
    }

    return i === word.length;
}
