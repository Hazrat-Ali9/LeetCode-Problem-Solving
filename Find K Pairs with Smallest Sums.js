var kSmallestPairs = function(nums1, nums2, k) {
    if (nums1.length === 0 || nums2.length === 0 || k === 0) {
        return [];
    }

    const heap = [];
    
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        heap.push([nums1[i] + nums2[0], i, 0]);
    }

    const swap = (a, b) => {
        [heap[a], heap[b]] = [heap[b], heap[a]];
    };

    const heapifyUp = (index) => {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (heap[parent][0] <= heap[index][0]) break;
            swap(parent, index);
            index = parent;
        }
    };

    const heapifyDown = (index) => {
        let size = heap.length;
        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < size && heap[left][0] < heap[smallest][0]) {
                smallest = left;
            }
            if (right < size && heap[right][0] < heap[smallest][0]) {
                smallest = right;
            }
            if (smallest === index) break;
            swap(index, smallest);
            index = smallest;
        }
    };

    for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
        heapifyDown(i);
    }

    const result = [];

    while (k > 0 && heap.length > 0) {
        let [sum, i, j] = heap[0];
        result.push([nums1[i], nums2[j]]);

        heap[0] = heap[heap.length - 1];
        heap.pop();
        heapifyDown(0);

        if (j + 1 < nums2.length) {
            heap.push([nums1[i] + nums2[j + 1], i, j + 1]);
            heapifyUp(heap.length - 1);
        }

        k--;
    }

    return result;
};
