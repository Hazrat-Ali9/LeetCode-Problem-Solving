var copyRandomList = function(head) {
    if (!head) return null;

    const map = new Map();

    let current = head;

    while (current) {
        map.set(current, new Node(current.val));
        current = current.next;
    }

    current = head;

    while (current) {
        const copy = map.get(current);

        copy.next = current.next
            ? map.get(current.next)
            : null;

        copy.random = current.random
            ? map.get(current.random)
            : null;

        current = current.next;
    }

    return map.get(head);
};
