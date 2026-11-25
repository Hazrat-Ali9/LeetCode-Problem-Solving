var maxRepOpt1 = function(text) {
    let freq = {};


    for (let ch of text) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let n = text.length;
    let result = 0;

    let i = 0;

    while (i < n) {
        let j = i;


        while (j < n && text[j] === text[i]) {
            j++;
        }

        let left = j - i;
        result = Math.max(result, Math.min(left + 1, freq[text[i]]));

        let k = j + 1;

        if (k < n && text[k] === text[i]) {
            while (k < n && text[k] === text[i]) {
                k++;
            }

            let right = k - j - 1;

            result = Math.max(
                result,
                Math.min(left + right + 1, freq[text[i]])
            );
        }

        i = j;
    }

    return result;
};

