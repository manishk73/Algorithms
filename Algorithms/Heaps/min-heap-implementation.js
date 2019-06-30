function MinHeap(){
  
  this.data = [];
  
}

MinHeap.prototype.parent = function(i){
  return Math.floor((i-1)/2);
} 

//left node position in minHeap array for given index
MinHeap.prototype.left = function(i){
  return Math.floor((i*2) + 1);
} 

//right node position in minHeap array for given index
MinHeap.prototype.right = function(i){
  return Math.floor((i*2) + 2);
}

//right node position in minHeap array for given index
MinHeap.prototype.getMin = function(){
  return this.data.length>0 ? this.data[0] : null;
}


MinHeap.prototype.insert = function(value){
  this.data.push(value);
  let index = this.data.length-1;
  while(index!=0 && this.data[this.parent(index)] > this.data[index]){
    
    let parentIdx = this.parent(index);
    let temp = this.data[index];
    this.data[index] = this.data[parentIdx];
    this.data[parentIdx] = temp;
    index = this.parent(index);
  }
} 

//this will min value from start of the heap  
MinHeap.prototype.remove = function(){
  
  
  //when only one item in heap then remove that item from heap 
  if(this.data.length <= 1) {
    this.data = [];
    return; 
  }
  
  //when there are more than one item in heap
  //1. first item in heap must be replaced with last item in heap 
  //2. then arrange all items in heap by checking next minimum, in this function heapify does this job 
  
  this.data[0] = this.data.pop(); // from end of array, add it to start position
  //now rearrange min heap
  this.heapify(0);
  
  
}


/*

O(log(n))

*/
MinHeap.prototype.heapify = function(index){
  
    
    let leftIdx = Math.floor(index*2+1);
    let rightIdx = Math.floor(index*2+2);
    let smallest = index;
  
    if(leftIdx < this.data.length && this.data[leftIdx] < this.data[index]){
      smallest = leftIdx;
    }
    
    if(rightIdx < this.data.length && this.data[rightIdx] < this.data[smallest]){
      smallest = rightIdx;
    }
    console.log(index,smallest)
    if(index !== smallest){
      
      let temp = this.data[index];
      this.data[index] = this.data[smallest]; 
      this.data[smallest] = temp;
      this.heapify(smallest);  
    }
  
} 


let minHeap = new MinHeap();
minHeap.insert(9);
minHeap.insert(2);
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(7);
minHeap.insert(1);

minHeap.remove();

