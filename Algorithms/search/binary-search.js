/**
 * TIME COMPLEXITY IS - O(log(n))
 * 
 * @param {*} arr 
 * @param {*} key 
 */

function binarySearch(arr,key){
  
  let low =0; 
  let high= arr.length-1;
  
  function search(arr, low, high, key){
    
    if(low <= high) {
      
      let mid = Math.floor(low + (high-low)/2);
      if(arr[mid]===key) return mid;
      
      if(arr[mid] < key)
        return search(arr, mid+1, high, key);
      else 
        return search(arr, low, mid-1, key);
    }
    return -1;
  }
  return search(arr, low, high, key);
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let key = 3;

console.log(binarySearch(arr,key));