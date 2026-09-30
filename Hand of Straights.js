var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    const count = new Map();
    for (const card of hand) {
        count.set(card, (count.get(card) || 0) + 1);
    }

    const sorted = [...count.keys()].sort((a, b) => a - b);

    for (const start of sorted) {
        const freq = count.get(start) || 0;

        if (freq === 0) continue;

        for (let i = 0; i < groupSize; i++) {
            const card = start + i;
            const current = count.get(card) || 0;

            if (current < freq) {
                return false;
            }

            count.set(card, current - freq);
        }
    }

    return true;
};
