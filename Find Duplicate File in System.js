/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const map = new Map();

    for (const path of paths) {
        const parts = path.split(" ");
        const dir = parts[0];

        for (let i = 1; i < parts.length; i++) {
            const file = parts[i];
            const left = file.indexOf("(");
            const right = file.indexOf(")");

            const fileName = file.substring(0, left);
            const content = file.substring(left + 1, right);
            const fullPath = dir + "/" + fileName;

            if (!map.has(content)) {
                map.set(content, []);
            }
            map.get(content).push(fullPath);
        }
    }

    const result = [];

    for (const files of map.values()) {
        if (files.length > 1) {
            result.push(files);
        }
    }

    return result;
};
