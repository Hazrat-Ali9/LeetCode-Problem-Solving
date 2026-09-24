var numTeams = function(rating) {
    const n = rating.length;
    let answer = 0;

    for (let j = 0; j < n; j++) {
        let leftLess = 0;
        let leftGreater = 0;
        let rightLess = 0;
        let rightGreater = 0;

        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) {
                leftLess++;
            } else {
                leftGreater++;
            }
        }

        for (let k = j + 1; k < n; k++) {
            if (rating[k] < rating[j]) {
                rightLess++;
            } else {
                rightGreater++;
            }
        }
        answer += leftLess * rightGreater;
        answer += leftGreater * rightLess;
    }

    return answer;
};
