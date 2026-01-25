
var uniqueMorseRepresentations = function(words) {
    const morse = [
        ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
        "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-",
        "..-","...-",".--","-..-","-.--","--.."
    ];
    
    const set = new Set();
    
    for (let word of words) {
        let transformation = "";
        for (let ch of word) {
            transformation += morse[ch.charCodeAt(0) - 97];
        }
        set.add(transformation);
    }
    
    return set.size;
};