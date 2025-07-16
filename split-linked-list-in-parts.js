/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
const splitListToParts = (head, k) => {
  
  let len = 0;
  for (let node = head; node; node = node.next) {
    len++;
  }

  
  const n = Math.floor(len / k);
  let r = len % k;

  
  let result = Array(k).fill(null);
  let prev = null;
  let curr = head;

  
  for (let i = 0; curr && i < k; i++, r--) {
    result[i] = curr;

    
    for (let j = 0; j < n + (r > 0 ? 1 : 0); j++) {
      prev = curr;
      curr = curr.next;
    }

    
    prev.next = null;
  }

  return result;
};


