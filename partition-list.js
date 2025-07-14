/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
  const dummy1 = new ListNode(0);
  const dummy2 = new ListNode(0);

  let p1 = dummy1;
  let p2 = dummy2;
  let p = head;

  while (p) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }
    p = p.next;
  }

  if (p2) {
    p2.next = null;
  }

  if (p1) {
    p1.next = dummy2.next;
  }

  return dummy1.next;
};

