

/*
Design a class to efficiently find the Kth largest element in a stream of numbers.

The class should have the following two things:

The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
The class should expose a function add(int num) which will store the given number and return the Kth largest number.


Input: [3, 1, 5, 12, 2, 11], K = 4
1. Calling add(6) should return '5'.
2. Calling add(13) should return '6'.
2. Calling add(4) should still return '6'.

Time Complexity - Add function - O(logK)
*/

const Heap = require("collections/heap");
class KthLargestNumberInStream {
    constructor(nums, k) {
      //this.nums = nums; 
      this.k = k;
      this.minHeap = new Heap([],null, ((a,b)=> b-a))
      nums.forEach(num => {
          this.add(num)
      });
    }
  
    add(num) {
        this.minHeap.push(num);
      if(this.minHeap.length > this.k){
          this.minHeap.pop();
      }
      return this.minHeap.peek();
    }
/*
    getLargestNum(){

      const minHeap = new Heap([], null, ((a, b) => b-a));       

      for(let i=0; i < this.k; i++){
          minHeap.push(this.nums[i]);  
      }

      for(let i= this.k; i < this.nums.length; i++){

        if(this.nums[i] > minHeap.peek()){
            minHeap.pop();
            minHeap.push(this.nums[i]);
        }
      }
      return minHeap.peek();
    }*/
};
  
  
kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 8, 9, 2, 11], 4);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`)
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`)
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`)