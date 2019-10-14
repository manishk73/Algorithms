
/*mergeList merge*/
function MinHeap(){
  
  this.data = [];
}

MinHeap.prototype.parent = function(index){
  
  return Math.floor((index-1)/2);
}
MinHeap.prototype.insert = function(node){
  
  this.data.push(node);
  let index = this.data.length-1;  
  let swap = function(from, to){
    
    let temp = this.data[from];
    this.data[from] = this.data[to];
    this.data[to] = temp;
    
  } 
  while(index!==0 && this.data[this.parent(index)].value > this.data[index].value){
    
    swap.bind(this)(this.parent(index), index);
    index = this.parent(index);
  }
}

MinHeap.prototype.pop = function(){
    
  if(this.data.length <=0) return null;
  
  let minVal = this.data[0]; //pop from min heap should be always top element from minHeap tree i.e. first element from minHeap arr
  //when item is poped from min heap, remove that item from minHeap and rearrange minHeap 
  
  this.remove();
  
  return minVal;
}

MinHeap.prototype.remove = function(){
  
  if(this.data.length <=1) {
    this.data = [];
    return null;
  }
    
  
  //when removing first item just replace first item with last item 
  this.data[0] = this.data.pop(); //removing last item 
  //console.log("heapifying");
  this.heapify(0);
 
}

MinHeap.prototype.heapify = function(index){
  
  //get left index
  let left =  Math.floor(index * 2 + 1);
  let right = Math.floor(index * 2 + 2);
  let smallest = index; 
  if(left < this.data.length && this.data[left].value < this.data[index].value){
    smallest = left;
  }
  if(right < this.data.length && this.data[right].value < this.data[smallest].value){
    smallest = right;
  }
  
  if(smallest !== index){
    console.log("heapifying swap");
    let temp = this.data[smallest];
    this.data[smallest] = this.data[index];
    this.data[index] = temp;
    //swap.bind(this).(smallest, index);
    this.heapify(smallest);
  }
}




class ListNode{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


let list1 = new ListNode(2);
list1.next = new ListNode(6);
list1.next.next = new ListNode(8);

let list2 = new ListNode(3);
list2.next = new ListNode(6);
list2.next.next = new ListNode(7);

let list3 = new ListNode(1);
list3.next = new ListNode(3);
list3.next.next = new ListNode(4);


let mergeList = function(list){
  
  let minHeap = new MinHeap();
  list.forEach((node) => {
    
    minHeap.insert(node); //head nodes added to minHeap 
  })
  console.log(minHeap.data);
  
  let resultHead = null; let resultTail=null;
  while(minHeap.data.length>0){
    counter++;
    let minNode = minHeap.pop();
    //console.log(minNode.value);
    if(!resultHead){
      
      resultHead = minNode;
      resultTail = minNode;
      
    } else {
      
      resultTail.next = minNode;
      resultTail = resultTail.next;
    }
    
    if(minNode.next){
      
      minHeap.insert(minNode.next);
    }
  }
  return resultHead;
}

const mergedList = mergeList([list1,list2,list3]);
console.log(mergedList);
