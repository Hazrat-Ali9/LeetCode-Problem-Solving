/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    const points = [p1, p2, p3, p4];

    const distSq = (a, b) => {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        return dx * dx + dy * dy;
    };

    const dists = [];

    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            dists.push(distSq(points[i], points[j]));
        }
    }

    dists.sort((a, b) => a - b);

    return (
        dists[0] > 0 &&                   
        dists[0] === dists[1] &&
        dists[1] === dists[2] &&
        dists[2] === dists[3] &&        
        dists[4] === dists[5] &&          
        dists[4] === 2 * dists[0]          
    );
};
