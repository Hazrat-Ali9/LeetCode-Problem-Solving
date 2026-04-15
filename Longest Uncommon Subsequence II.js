var findLUSlength = function(strs) {

    strs.sort((a, b) => b.length - a.length);

    for (let i = 0; i < strs.length; i++) {
        let isUncommon = true;

        for (let j = 0; j < strs.length; j++) {
            if (i === j) continue;

            if (isSubsequence(strs[i], strs[j])) {
                isUncommon = false;
                break;
            }
        }

        if (isUncommon) {
            return strs[i].length;
        }
    }

    return -1;
};


function isSubsequence(a, b) {
    let i = 0, j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] === b[j]) i++;
        j++;
    }

    return i === a.length;
}
