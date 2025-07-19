/**
 * Non-Recursion
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  const dummy = new ListNode(0);
  let p = dummy;

  let node = head;
  while (node) {
    if (node.val !== val) {
      p.next = node;
      p = p.next;
    }
    node = node.next;
  }

  p.next = null;

  return dummy.next;
};


