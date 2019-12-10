function MinHeap(compare){
  
  this.data = [];
  this.compare = compare;

  Object.defineProperty(this, "length", {
    
    get(){
      return this.data.length; 
    }
  })
}

MinHeap.prototype.push = function(val){
  
  this.data.push(val);
  let index = this.data.length-1;
  let parent = Math.floor((index-1)/2)
 
  function swap(parent, current){
    
    [this.data[parent], this.data[current]] = [ this.data[current], this.data[parent]]
  }
  while(index != 0 && this.compare(this.data[parent],this.data[index])){
    swap.bind(this)(parent,index);
    index = parent;
    parent = Math.floor((index-1)/2)
  }
  
}


MinHeap.prototype.pop = function(){

  if(this.data.length ===0){
    return null;
  }
  if(this.data.length===1){
    return this.data.pop();
  }

  const popedData = this.data[0];
  this.data[0] =  this.data.pop(); //last data moved to first;
  const swap = function(from, to){
      [this.data[from], this.data[to]] = [this.data[to], this.data[from]]
  }
  const heapify = function(index){
      let left = 2 * index + 1; 
      let right = 2 * index + 2;
      let smallest = index; 

      if(left < this.data.length && this.compare(this.data[index], this.data[left])){
        smallest = left; 
      }
      if(right < this.data.length && this.compare(this.data[smallest], this.data[right])){
        smallest = right;
      }

      if(smallest != index){

        swap.bind(this)(smallest, index)
        heapify.bind(this)(smallest);
      }

  }
  heapify.bind(this)(0)
  return popedData;
}  




const words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]

var topKFrequent = function(words, k) {
 const freqMap = {};

// generating frq map
words.forEach((x)=>{
 
 if((x in freqMap)){
   
   freqMap[x] = freqMap[x] + 1;
 } else {
   freqMap[x] = 1;
 }
 
})

const minHeap= new MinHeap((a, b)=>{
  
  if(a[0] === b[0]){
    return a[1] < b[1]
  } else {
    return a[0] > b[0]
  }
});


Object.keys(freqMap).forEach((word) =>{
  
  const frq = freqMap[word];
  minHeap.push([frq, word]);
  
  if(minHeap.length>k){
    minHeap.pop();
  }
  
})
//console.log(minHeap.data);
const result =[];
while(minHeap.length>0){
  result.unshift(minHeap.pop()[1])
}
return result;
  
};


console.log(topKFrequent(words),4)

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"],2))




