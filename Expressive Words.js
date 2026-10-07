var expressiveWords = function(s, words) {
    function isStretchy(word) {
        let i = 0;
        let j = 0;

        while (i < s.length && j < word.length) {
            if (s[i] !== word[j]) return false;

            let startS = i;
            let startW = j;
            while (i < s.length && s[i] === s[startS]) {
                i++;
            }
            while (j < word.length && word[j] === word[startW]) {
                j++;
            }

            const countS = i - startS;
            const countW = j - startW;

            if (countW > countS) return false;

            if (countS !== countW && countS < 3) {
                return false;
            }
        }

        return i === s.length && j === word.length;
    }

    let answer = 0;

    for (const word of words) {
        if (isStretchy(word)) {
            answer++;
        }
    }

    return answer;
};
