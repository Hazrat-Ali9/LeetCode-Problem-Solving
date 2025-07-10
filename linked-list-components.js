/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
const numComponents = (head, G) => {
  const set = new Set(G);

  let count = 0;
  let node = head;

  while (node) {
    if (set.has(node.val)) {
      count++;

      while (node && set.has(node.val)) {
        node = node.next;
      }
    } else {
      node = node.next;
    }
  }

  return count;
};


