/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
  
  if (getLength(head) < k) {
    return head;
  }
  
  let prev = null;
  let curr = head;
  let count = k;

  while (curr && count-- > 0) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  head.next = reverseKGroup(curr, k);

  return prev;
};

const getLength = head => {
  let count = 0;
  let p = head;

  while (p) {
    p = p.next;
    count++;
  }

  return count;
};


