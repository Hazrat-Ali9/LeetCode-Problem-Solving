var longestStrChain = function(words) {

    words.sort((a, b) => a.length - b.length);

    const dp = new Map();
    let answer = 1;

    for (const word of words) {
        let longest = 1;

      
        for (let i = 0; i < word.length; i++) {
            const predecessor =
                word.slice(0, i) + word.slice(i + 1);

     
            if (dp.has(predecessor)) {
                longest = Math.max(
                    longest,
                    dp.get(predecessor) + 1
                );
            }
        }

        dp.set(word, longest);
        answer = Math.max(answer, longest);
    }

    return answer;
};
