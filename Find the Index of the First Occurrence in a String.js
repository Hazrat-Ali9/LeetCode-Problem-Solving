function strStr(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    if (m === 0) return 0;

    for (let i = 0; i <= n - m; i++) {
        let found = true;

        for (let j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }

        if (found) return i;
    }

    return -1;
}

