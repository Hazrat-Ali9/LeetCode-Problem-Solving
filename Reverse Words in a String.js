var reverseWords = function(s) {
    return s
        .trim()              
        .split(/\s+/)      
        .reverse()           
        .join(' ');         
};
