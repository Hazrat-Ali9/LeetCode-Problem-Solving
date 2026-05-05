var longestSubstring = function(s, k) {

    function solve(start, end) {
        if (end - start < k) return 0;

        let freq = new Array(26).fill(0);
        for (let i = start; i < end; i++) {
            freq[s.charCodeAt(i) - 97]++;
        }

        for (let i = start; i < end; i++) {
            if (freq[s.charCodeAt(i) - 97] < k) {
                let left = solve(start, i);
                let right = solve(i + 1, end);
                return Math.max(left, right);
            }
        }

        return end - start;
    }

    return solve(0, s.length);
};
