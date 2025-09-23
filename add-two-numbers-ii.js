/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  
  const s1 = [];
  const s2 = [];

  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }


  let carry = 0;
  let list = null;
  while (s1.length > 0 || s2.length > 0 || carry > 0) {
    const v1 = s1.length > 0 ? s1.pop() : 0;
    const v2 = s2.length > 0 ? s2.pop() : 0;
    const node = new ListNode((v1 + v2 + carry) % 10);

    carry = Math.floor((v1 + v2 + carry) / 10);

    if (list) {
      node.next = list;
    }
    list = node;
  }

  return list;
};
