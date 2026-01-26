var checkStraightLine = function(coordinates) {
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    
    const dx = x1 - x0;
    const dy = y1 - y0;
    
    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        
        if ((y - y0) * dx !== (x - x0) * dy) {
            return false;
        }
    }
    
    return true;
};
