/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {
  if (!head || !head.next) {
    return true;
  }

  let prev = null,
    slow = head,
    fast = head,
    l1 = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  let l2 = fast ? reverse(slow.next) : reverse(slow);


  while (l1 && l2) {
    if (l1.val !== l2.val) {
      return false;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  return true;
};


const reverse = head => {
  let prev = null,
    curr = head,
    next = null;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};