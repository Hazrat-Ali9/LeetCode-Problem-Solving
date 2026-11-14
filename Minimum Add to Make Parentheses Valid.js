
var minAddToMakeValid = function(s) {
    let open = 0;
    let moves = 0;

    for (let ch of s) {
        if (ch === '(') {
            open++;
        } else {
            if (open > 0) {
                open--;
            } else {
                moves++;
            }
        }
    }

    return moves + open;
};

