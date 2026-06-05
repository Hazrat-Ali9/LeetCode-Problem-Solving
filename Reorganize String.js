var reorganizeString = function(s) {
    const freq = new Map();

    for (const ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    const maxFreq = Math.max(...freq.values());
    if (maxFreq > Math.ceil(s.length / 2)) {
        return "";
    }

    const heap = [];

    for (const [ch, count] of freq) {
        heap.push([count, ch]);
    }

    const heapifyUp = (i) => {
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (heap[p][0] >= heap[i][0]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };

    const heapifyDown = (i) => {
        const n = heap.length;

        while (true) {
            let largest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < n && heap[left][0] > heap[largest][0]) {
                largest = left;
            }

            if (right < n && heap[right][0] > heap[largest][0]) {
                largest = right;
            }

            if (largest === i) break;

            [heap[i], heap[largest]] = [heap[largest], heap[i]];
            i = largest;
        }
    };

    const push = (item) => {
        heap.push(item);
        heapifyUp(heap.length - 1);
    };

    const pop = () => {
        if (heap.length === 1) return heap.pop();

        const top = heap[0];
        heap[0] = heap.pop();
        heapifyDown(0);

        return top;
    };

    let result = "";

    while (heap.length > 1) {
        let [cnt1, ch1] = pop();
        let [cnt2, ch2] = pop();

        result += ch1;
        result += ch2;

        if (--cnt1 > 0) push([cnt1, ch1]);
        if (--cnt2 > 0) push([cnt2, ch2]);
    }

    if (heap.length) {
        result += pop()[1];
    }

    return result;
};
