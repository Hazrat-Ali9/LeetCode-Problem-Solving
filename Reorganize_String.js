var reorganizeString = function(s) {
    let freq = new Map();

    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let arr = [...freq.entries()];
    arr.sort((a, b) => b[1] - a[1]);

    if (arr[0][1] > Math.ceil(s.length / 2)) {
        return "";
    }

    let result = new Array(s.length);
    let index = 0;

    for (let [ch, count] of arr) {
        for (let i = 0; i < count; i++) {
            if (index >= s.length) {
                index = 1;
            }

            result[index] = ch;
            index += 2;
        }
    }

    return result.join("");
};
