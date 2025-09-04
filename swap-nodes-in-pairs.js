/**
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = head => {
  
  if (!head || !head.next) {
    return head;
  }

  let prev = head;
  let curr = head.next;
  let next;

  head = curr;

  while (true) {
    next = curr.next;
    curr.next = prev;

    if (next == null || next.next == null) {
      prev.next = next;
      break;
    }

    prev.next = next.next;
    curr = next.next;
    prev = next;
  }

  return head;
};
