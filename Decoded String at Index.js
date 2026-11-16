
var decodeAtIndex = function(s, k) {
    let length = 0;

    for (let ch of s) {
        if (isNaN(ch)) {
            length++;
        } else {
            length *= Number(ch);
        }
    }

    for (let i = s.length - 1; i >= 0; i--) {
        let ch = s[i];

        k %= length;

        if (k === 0 && isNaN(ch)) {
            return ch;
        }

        if (isNaN(ch)) {
            length--;
        } else {
            length = Math.floor(length / Number(ch));
        }
    }

    return "";
};

