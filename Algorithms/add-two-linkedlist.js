/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let carry=0;
    let currNode1 = l1; let currNode2 = l2;
    let l3 = null; let preNode=null; let node=null;
    while(currNode1 || currNode2){
        let x = currNode1? currNode1.val : 0 ;
        let y = currNode2? currNode2.val : 0 ;
        let sum = carry + x + y;  
        carry = Math.floor(sum/10);
        node = new ListNode(sum%10);
        if(!l3){
          l3 = node;
        } else {
          preNode.next = node;  
        }
        preNode = node;
        currNode1 = currNode1.next;
        currNode2 = currNode2.next;
    }
    if(carry){
        preNode.next = new ListNode(carry);
    }
    return l3;
};