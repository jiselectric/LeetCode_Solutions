
var addTwoNumbers = function(l1, l2) {
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }
  let l = new ListNode(l1.val + l2.val);
  l.next = addTwoNumbers(l1.next, l2.next);
  if (l.val > 9) {
    l.val -= 10;
    l.next = addTwoNumbers(l.next, new ListNode(1));
  }
  return l;
};
