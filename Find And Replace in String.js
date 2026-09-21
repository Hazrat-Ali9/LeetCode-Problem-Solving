var findReplaceString = function(s, indices, sources, targets) {
    const replacements = new Map();

    for (let i = 0; i < indices.length; i++) {
        const index = indices[i];
        const source = sources[i];

        if (s.startsWith(source, index)) {
            replacements.set(index, [source, targets[i]]);
        }
    }

    let result = "";
    let i = 0;

    while (i < s.length) {
        if (replacements.has(i)) {
            const [source, target] = replacements.get(i);

            result += target;
            i += source.length;
        } else {
            result += s[i];
            i++;
        }
    }

    return result;
};
