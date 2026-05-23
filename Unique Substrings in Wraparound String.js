var findSubstringInWraproundString = function(s) {

    let dp = Array(26).fill(0);

    let currentLen = 0;

    for (let i = 0; i < s.length; i++) {

        if (
            i > 0 &&
            (
                s.charCodeAt(i) - s.charCodeAt(i - 1) === 1 ||
                (s[i - 1] === 'z' && s[i] === 'a')
            )
        ) {
            currentLen++;
        } else {
            currentLen = 1;
        }

        let index = s.charCodeAt(i) - 97;

        dp[index] = Math.max(dp[index], currentLen);
    }

    return dp.reduce((sum, val) => sum + val, 0);
};
