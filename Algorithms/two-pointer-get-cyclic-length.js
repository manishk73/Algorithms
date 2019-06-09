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
  
  this.getCycleLength = function(head){
    
    let slow = head;
    let fast = head; 
    
    function getCycleLength(slow){
    
      let counter=0;
      let current = slow;
      do{
        current = current.next;
        counter++;
      }while(current !== slow) 
      return counter;  
    }
    
    while(slow !== null && fast !==null){
      
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast){
        return getCycleLength(slow);
      }
    }
    return 0;
  }
  
  
  
  this.getStartNodeOfCycle= function(head){
    
    let lengthOfCycle = this.getCycleLength(head);
    let pointer1 = head;
    let pointer2 = head;
    
    while(lengthOfCycle>0){
      
      pointer2 = pointer2.next;
      lengthOfCycle--;
      
    }
    
    while(pointer1 !== pointer2 ){
      
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
      if(pointer1 ===pointer2){
        
        return pointer1;
      }
    }
    
    return null;
    
  }
} 


let linkedList = new LinkedList();
let head = linkedList.addNode(1); 
head.next = linkedList.addNode(2);
head.next.next = linkedList.addNode(3);
head.next.next.next = linkedList.addNode(4);
head.next.next.next.next = linkedList.addNode(5);
head.next.next.next.next.next = linkedList.addNode(6);


//console.log(linkedList.isCyclic(head));

head.next.next.next.next.next.next =head.next.next;
console.log(linkedList.isCyclic(head));
console.log(linkedList.getCycleLength (head));

//Big O(N)  
console.log(linkedList.getStartNodeOfCycle (head)); 