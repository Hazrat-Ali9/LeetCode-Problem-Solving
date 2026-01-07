var calPoints = function(ops) {
    const record = [];

    for (let op of ops) {
        if (op === "+") {
            const last = record[record.length - 1];
            const secondLast = record[record.length - 2];
            record.push(last + secondLast);
        } 
        else if (op === "D") {
            record.push(record[record.length - 1] * 2);
        } 
        else if (op === "C") {
            record.pop();
        } 
        else {
            record.push(parseInt(op));
        }
    }
 
    let sum = 0;
    for (let score of record) {
        sum += score;
    }

    return sum;
};

