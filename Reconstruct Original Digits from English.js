var originalDigits = function(s) {
    let count = new Array(26).fill(0);

 
    for (let ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }

    let digits = new Array(10).fill(0);


    digits[0] = count['z'.charCodeAt(0) - 97];
    digits[2] = count['w'.charCodeAt(0) - 97];
    digits[4] = count['u'.charCodeAt(0) - 97];
    digits[6] = count['x'.charCodeAt(0) - 97];
    digits[8] = count['g'.charCodeAt(0) - 97];

    
    digits[3] = count['h'.charCodeAt(0) - 97] - digits[8];
    digits[5] = count['f'.charCodeAt(0) - 97] - digits[4];
    digits[7] = count['s'.charCodeAt(0) - 97] - digits[6];

    digits[1] = count['o'.charCodeAt(0) - 97]
                - digits[0]
                - digits[2]
                - digits[4];

    digits[9] = count['i'.charCodeAt(0) - 97]
                - digits[5]
                - digits[6]
                - digits[8];

   
    let result = "";

    for (let i = 0; i <= 9; i++) {
        result += i.toString().repeat(digits[i]);
    }

    return result;
};
