/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */



/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const f = new ListNode(0);
  let p = f;

  let c = 0;

  while (l1 || l2 || c > 0) {
    const a = l1 ? l1.val : 0;
    const b = l2 ? l2.val : 0;
    const s = a + b + c;

    c = parseInt(s / 10, 10);

    p.next = new ListNode(s % 10);
    p = p.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return f.next;
};


