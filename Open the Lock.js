var openLock = function(deadends, target) {
    let dead = new Set(deadends);
    let visited = new Set();

    if (dead.has("0000")) return -1;

    let queue = [["0000", 0]]; 
    visited.add("0000");

    while (queue.length > 0) {
        let [curr, steps] = queue.shift();

        if (curr === target) return steps;

        for (let next of getNextStates(curr)) {
            if (!dead.has(next) && !visited.has(next)) {
                visited.add(next);
                queue.push([next, steps + 1]);
            }
        }
    }

    return -1;
};


function getNextStates(s) {
    let res = [];

    for (let i = 0; i < 4; i++) {
        let digit = parseInt(s[i]);


        let up = (digit + 1) % 10;
        let down = (digit + 9) % 10;

        res.push(s.slice(0, i) + up + s.slice(i + 1));
        res.push(s.slice(0, i) + down + s.slice(i + 1));
    }

    return res;
}
