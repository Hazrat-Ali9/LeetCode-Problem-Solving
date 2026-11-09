var removeComments = function(source) {
    const result = [];
    let inBlock = false;
    let line = "";

    for (const str of source) {
        let i = 0;

        while (i < str.length) {
            if (inBlock) {
                if (str[i] === '*' && str[i + 1] === '/') {
                    inBlock = false;
                    i += 2;
                } else {
                    i++;
                }
            } else {
                if (str[i] === '/' && str[i + 1] === '*') {
                    inBlock = true;
                    i += 2;
                } else if (str[i] === '/' && str[i + 1] === '/') {
                    break;
                } else {
                    line += str[i];
                    i++;
                }
            }
        }

        if (!inBlock && line.length > 0) {
            result.push(line);
            line = "";
        }
    }

    return result;
};
