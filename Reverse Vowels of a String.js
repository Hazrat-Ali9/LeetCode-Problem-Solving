var reverseVowels = function(s) {
    const chars = s.split('');
    const vowels = "aeiouAEIOU";

    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        while (left < right && !vowels.includes(chars[left])) {
            left++;
        }

        while (left < right && !vowels.includes(chars[right])) {
            right--;
        }
        [chars[left], chars[right]] = [chars[right], chars[left]];

        left++;
        right--;
    }

    return chars.join('');
};
