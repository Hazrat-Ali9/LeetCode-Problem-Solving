/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
  const dummy = new ListNode(0);

  let p = dummy;
  let count = 0;
  let slow = head;
  let fast = head;

  while (fast) {
    while (fast && fast.val === slow.val) {
      fast = fast.next;
      count++;
    }

    if (count === 1) {
      p.next = slow;
      p = p.next;
    }

    slow = fast;
    count = 0;
  }

  if (p) {
    p.next = null;
  }

  return dummy.next;
};
