var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {

    const areaA = (ax2 - ax1) * (ay2 - ay1);
    const areaB = (bx2 - bx1) * (by2 - by1);
    const overlapWidth = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));
    const overlapHeight = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));
    const overlapArea = overlapWidth * overlapHeight;
    

    return areaA + areaB - overlapArea;
};




