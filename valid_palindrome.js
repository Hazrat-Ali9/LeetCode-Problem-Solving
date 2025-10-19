function isPalindrome(s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("race a car")); 
console.log(isPalindrome(" ")); 

