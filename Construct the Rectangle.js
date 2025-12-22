var constructRectangle = function(area) {
    let w = Math.floor(Math.sqrt(area));
    
    while (area % w !== 0) {
        w--;
    }
    
    let l = area / w;
    return [l, w];
};

