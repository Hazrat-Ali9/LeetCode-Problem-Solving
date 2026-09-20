var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);

    for (const ch of s1) {
        need[ch.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s2.length; i++) {
        window[s2.charCodeAt(i) - 97]++;

        if (i >= s1.length) {
            window[s2.charCodeAt(i - s1.length) - 97]--;
        }

        let match = true;

        for (let j = 0; j < 26; j++) {
            if (need[j] !== window[j]) {
                match = false;
                break;
            }
        }

        if (match) return true;
    }

    return false;
};
