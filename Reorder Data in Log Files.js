var reorderLogFiles = function(logs) {
    const letterLogs = [];
    const digitLogs = [];

    for (let log of logs) {
        const firstSpace = log.indexOf(' ');
        const content = log.slice(firstSpace + 1);

        if (content[0] >= '0' && content[0] <= '9') {
            digitLogs.push(log);
        } else {
            letterLogs.push(log);
        }
    }

    letterLogs.sort((a, b) => {
        const indexA = a.indexOf(' ');
        const indexB = b.indexOf(' ');

        const contentA = a.slice(indexA + 1);
        const contentB = b.slice(indexB + 1);

        if (contentA === contentB) {
            return a.slice(0, indexA).localeCompare(
                b.slice(0, indexB)
            );
        }

        return contentA.localeCompare(contentB);
    });

    return [...letterLogs, ...digitLogs];
};

