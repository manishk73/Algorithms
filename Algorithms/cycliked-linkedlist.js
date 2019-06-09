class Node {
  
  constructor(value){
    this.value =value;
    this.next = null;
  }
}

function LinkedList(){
  
  this.addNode = function(value){
    
    return new Node(value);
    
  }
  this.isCyclic = function(head){
    
    let slow = head;
    let fast = head;
    
    //console.log(fast);
    while(slow !== null && fast !==null){
      
     
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
          return true;
        }
    }
    
    return false;
    
  }
} 


let linkedList = new LinkedList();
let head = linkedList.addNode(1); 
head.next = linkedList.addNode(2);
head.next.next = linkedList.addNode(3);
head.next.next.next = linkedList.addNode(4);
head.next.next.next.next = linkedList.addNode(5);
head.next.next.next.next.next = linkedList.addNode(6);


console.log(linkedList.isCyclic(head));

head.next.next.next.next.next.next =head;
console.log(linkedList.isCyclic(head));

