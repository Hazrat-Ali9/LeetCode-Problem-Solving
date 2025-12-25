var toHex = function(num) {
    if (num === 0) return "0";

    const hexChars = "0123456789abcdef";
    let result = "";

    num = num >>> 0;

    while (num > 0) {
        let digit = num & 15; 
        result = hexChars[digit] + result;
        num = num >>> 4; 
    }

    return result;
};

