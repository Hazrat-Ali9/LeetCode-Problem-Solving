var simplifyPath = function(path) {
    let stack = [];
    let parts = path.split('/');

    for (let part of parts) {
        if (part === '' || part === '.') {
            continue;
        } 
        else if (part === '..') {
            if (stack.length > 0) stack.pop();
        } 
        else {
            stack.push(part);
        }
    }

    return '/' + stack.join('/');
};
