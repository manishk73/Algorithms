function MinHeap(){
  
  this.data =[];
}

MinHeap.prototype.insert= function(key){
  
  this.data.push(key);
  this.hippify();
}

MinHeap.prototype.parent = function(index){
  return Math.floor((index-1)/2);
}
MinHeap.prototype.hippify= function(){
  
  console.log("hippify");
  
  let length = this.data.length;
  let index = length-1;
 
  while(index !=0 && this.data[this.parent(index)] > this.data[index]){
    
    let parent = this.parent(index);
    let temp = this.data[parent];
    this.data[parent] = this.data[index];
    this.data[index] = temp;
    index=parent;
    
  }
  
}

let minHeap = new MinHeap();

minHeap.insert(4);
minHeap.insert(1);
minHeap.insert(5);``