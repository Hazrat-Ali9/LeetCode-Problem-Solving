var exclusiveTime = function(n, logs) {
    let result = new Array(n).fill(0);
    let stack = [];
    let prevTime = 0;

    for (let log of logs) {
        let [id, type, time] = log.split(":");
        id = Number(id);
        time = Number(time);

        if (type === "start") {
   
            if (stack.length > 0) {
                result[stack[stack.length - 1]] += time - prevTime;
            }
            stack.push(id);
            prevTime = time;
        } else {

            result[stack.pop()] += time - prevTime + 1;
            prevTime = time + 1;
        }
    }

    return result;
};
