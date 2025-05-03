/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (!head) {
    return null;
  }

  const count = getLength(head);
  k %= count;

  if (k === 0) {
    return head;
  }

  let slow = head;
  let fast = head;

  while (k-- > 0) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = head;
  head = slow.next;
  slow.next = null;

  return head;
};

const getLength = head => {
  let count = 0;

  while (head) {
    head = head.next;
    count++;
  }

  return count;
};

export { rotateRight };
