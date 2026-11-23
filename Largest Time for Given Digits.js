var largestTimeFromDigits = function(arr) {
    let maxTime = -1;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                for (let l = 0; l < 4; l++) {

                    if (i === j || i === k || i === l ||
                        j === k || j === l || k === l) {
                        continue;
                    }

                    let hour = arr[i] * 10 + arr[j];
                    let minute = arr[k] * 10 + arr[l];

                    if (hour < 24 && minute < 60) {
                        maxTime = Math.max(
                            maxTime,
                            hour * 60 + minute
                        );
                    }
                }
            }
        }
    }

    if (maxTime === -1) {
        return "";
    }

    let hour = Math.floor(maxTime / 60);
    let minute = maxTime % 60;

    return (
        String(hour).padStart(2, "0") +
        ":" +
        String(minute).padStart(2, "0")
    );
};

