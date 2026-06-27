/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const bankSet = new Set(bank);

    if (!bankSet.has(endGene)) return -1;

    const chars = ['A', 'C', 'G', 'T'];
    const queue = [[startGene, 0]];
    const visited = new Set([startGene]);

    while (queue.length) {
        const [gene, steps] = queue.shift();

        if (gene === endGene) return steps;

        const arr = gene.split("");

        for (let i = 0; i < 8; i++) {
            const original = arr[i];

            for (const ch of chars) {
                if (ch === original) continue;

                arr[i] = ch;
                const nextGene = arr.join("");

                if (bankSet.has(nextGene) && !visited.has(nextGene)) {
                    visited.add(nextGene);
                    queue.push([nextGene, steps + 1]);
                }
            }

            arr[i] = original;
        }
    }

    return -1;
};
