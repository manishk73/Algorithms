/*
You are given an array of positive and/or negative integers and a value K . 
The task is to find count of all sub-arrays whose sum is divisible by K?
*/
/*
We define a k-subsequence of an array as follows 
1. it is a subsequence of consecutive elements in the array 
2. the sum of the subsequence's elements s, is evenly devisible by k(i.e. s % k == 0)Given an integer and input array, find out the number of k-subsequences. 
Example: k=3 and array be [1 2 3 4 1] 
Output: 4 ({1 2},{1,2,3},{2,3,4},{3})
*/

/***********(())********************/
//SLIDING WINDOW SOLUTION 
//O(n);

let kSubsequence = function(arr,k){
  
  let final = []; 
  let start = 0; 
  let begin = 0;
  let sub = [];
  let sum = 0; 
  while(start<arr.length){
    
    sub.push(arr[start]);
    sum += arr[start];
    if(sum%k===0){
      
      final.push(sub.slice());
    }
    start++;
    if(start===arr.length){
      begin++;
      start = begin;
      sub = [];
      sum =0;
    }
  }
  return final; 
}

/*********************************/
var kSubsequence = function(array, k){
    let start = 0; 
    let final = [];
    for(var i = 0; i < array.length; i++){
        let seq = []; 
        let sum = 0;
        start = i;
        while(start < array.length){
            sum += array[start];
            seq.push(array[start]);
            if(sum % k === 0){
               final.push(seq.slice()); //if you dont do slice then same array reference will be updated in next sequence
            }
            start++;
        }
    }
  return final;
}

console.log(kSubsequence([1,2,3,4,1], 4));
console.log(kSubsequence([1,2,3,4,1], 3));