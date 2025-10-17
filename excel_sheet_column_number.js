/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let value = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1; 
        result = result * 26 + value;
    }
    return result;
};

console.log(titleToNumber("A"));   
console.log(titleToNumber("AB"));  
console.log(titleToNumber("ZY"));  

