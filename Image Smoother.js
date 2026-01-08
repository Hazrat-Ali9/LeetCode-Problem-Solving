var imageSmoother = function(img) {
    const m = img.length;
    const n = img[0].length;
    
 
    const result = Array.from({ length: m }, () => Array(n).fill(0));
    
  
    const directions = [-1, 0, 1];
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0;
            let count = 0;
            
       
            for (let dx of directions) {
                for (let dy of directions) {
                    const x = i + dx;
                    const y = j + dy;
                    
                    if (x >= 0 && x < m && y >= 0 && y < n) {
                        sum += img[x][y];
                        count++;
                    }
                }
            }
            
            result[i][j] = Math.floor(sum / count);
        }
    }
    
    return result;
};
