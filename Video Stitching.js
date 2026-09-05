var videoStitching = function(clips, time) {
    clips.sort((a, b) => a[0] - b[0]);

    let count = 0;
    let currentEnd = 0;
    let farthest = 0;
    let i = 0;

    while (currentEnd < time) {
        while (i < clips.length && clips[i][0] <= currentEnd) {
            farthest = Math.max(farthest, clips[i][1]);
            i++;
        }

        if (farthest === currentEnd) {
            return -1;
        }

        currentEnd = farthest;
        count++;
    }

    return count;
};
