/*

Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

Input: [1, 3, 5, 12, 11, 12, 11], K = 2
Output: [12, 11]
Explanation: Both '11' and '12' apeared twice.

Input: [5, 12, 11, 3, 11], K = 2
Output: [11, 5] or [11, 12] or [11, 3]
Explanation: Only '11' appeared twice, all other numbers appeared once.

*/

const Heap = require("collections/heap"); 
const find_k_frequent_numbers = function(nums, k) {
    
    //creating frquency map
    const frqMap = {};
    nums.forEach(num => {
        
        if(!frqMap[num]){
            frqMap[num] =1
        } else{
            frqMap[num]++
        }
    }); 

    //min heap creation on frequency, where less frequency elements will be at top of heap  
    const minHeap = new Heap([],null, ((a,b)=> b[0]-a[0])) 

    Object.keys(frqMap).forEach(num =>{
        minHeap.push([frqMap[num], num]) //storing array with frequency and number 
        if(minHeap.length > k){
            minHeap.pop();
        }
    })
    topNumbers = [];
    while(minHeap.length>0){
        const heapEle = minHeap.pop();
        topNumbers.push(heapEle[1]);
    } 

    return topNumbers;
};
  
  
  console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`)
  console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`)