/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
    // Single integer
    if (s[0] !== '[') {
        const ni = new NestedInteger();
        ni.setInteger(Number(s));
        return ni;
    }

    const stack = [];
    let num = "";
    let curr = null;

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch === '[') {
            const ni = new NestedInteger();

            if (stack.length > 0) {
                stack[stack.length - 1].add(ni);
            }

            stack.push(ni);
        } 
        else if (ch === '-' || (ch >= '0' && ch <= '9')) {
            num += ch;
        } 
        else if (ch === ',' || ch === ']') {
            if (num.length > 0) {
                const ni = new NestedInteger();
                ni.setInteger(Number(num));
                stack[stack.length - 1].add(ni);
                num = "";
            }

            if (ch === ']') {
                curr = stack.pop();

                if (stack.length === 0) {
                    return curr;
                }
            }
        }
    }

    return curr;
};
