var shiftingLetters = function(s, shifts) {
    let totalShift = 0;
    let result = s.split("");

    for (let i = s.length - 1; i >= 0; i--) {
        totalShift = (totalShift + shifts[i]) % 26;

        let charCode = s.charCodeAt(i) - 97;
        let newChar = (charCode + totalShift) % 26;

        result[i] = String.fromCharCode(newChar + 97);
    }

    return result.join("");
};

