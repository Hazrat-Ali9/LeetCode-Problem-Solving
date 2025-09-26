/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = head => {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return new TreeNode(head.val);
  }

  const node = findMiddle(head);
  const middle = node.next;
  node.next = null;

  const root = new TreeNode(middle.val);

  root.left = sortedListToBST(head);
  root.right = sortedListToBST(middle.next);

  return root;
};

const findMiddle = head => {
  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  return prev;
};
