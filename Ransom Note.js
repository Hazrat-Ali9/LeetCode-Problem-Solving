var canConstruct = function(ransomNote, magazine) {
    let count = new Array(26).fill(0);

    for (let ch of magazine) {
        count[ch.charCodeAt(0) - 97]++;
    }

    for (let ch of ransomNote) {
        let idx = ch.charCodeAt(0) - 97;

        if (count[idx] === 0) return false;

        count[idx]--;
    }

    return true;
};
