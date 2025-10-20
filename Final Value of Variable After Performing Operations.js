
function finalValueAfterOperations(operations) {
    let X = 0; 

    for (let op of operations) {
        if (op.includes("++")) {
            X += 1; 
        } else {
            X -= 1; 
        }
    }

    return X;
}


console.log(finalValueAfterOperations(["--X", "X++", "X++"])); 


console.log(finalValueAfterOperations(["++X", "++X", "X++"])); 


console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"])); 
