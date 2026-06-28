/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {

    const pos = {};

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (!pos[ch]) pos[ch] = [];
        pos[ch].push(i);
    }


    function upperBound(arr, prev) {
        let left = 0;
        let right = arr.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] <= prev) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    let count = 0;

    for (const word of words) {
        let prev = -1;
        let ok = true;

        for (const ch of word) {
            if (!pos[ch]) {
                ok = false;
                break;
            }

            const arr = pos[ch];
            const idx = upperBound(arr, prev);

            if (idx === arr.length) {
                ok = false;
                break;
            }

            prev = arr[idx];
        }

        if (ok) count++;
    }

    return count;
};
