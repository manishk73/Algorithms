class Node {
  
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  function CircularLinkedList(){
    
    this.addNode = (value, head_ref) => {
      
      let node = new Node(value); 
      node.next = head_ref;
      let temp = head_ref;
      if(head_ref !==null){
        
        while(!Object.is(temp.next,head_ref)){
          
          temp = temp.next;
        }
        temp.next = node;
      } else {
        
        node.next = node; 
      }
      head_ref = node;
      return head_ref; 
    }
    
    this.printCircularLinkedList = function(head_ref){
      
      if(head_ref===null) return;
      let temp = head_ref;
      
      do{
        
        console.log(temp.value);
        temp = temp.next; 
        
      } while(!Object.is(temp,head_ref))
    }
  }
  
  let head = null;
  let cll = new CircularLinkedList();
  head = cll.addNode(10,head);
  head = cll.addNode(11,head);
  head = cll.addNode(12,head);
  head = cll.addNode(13,head);
  head = cll.addNode(14,head);
    
  cll.printCircularLinkedList(head);
  
  