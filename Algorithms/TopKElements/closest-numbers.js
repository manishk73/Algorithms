/*
Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ 
closest numbers to ‘X’ in the array. Return the numbers in the sorted order.

Input: [5, 6, 7, 8, 9], K = 3, X = 7
Output: [6, 7, 8]

Input: [2, 4, 5, 6, 9], K = 3, X = 6
Output: [4, 5, 6]

Input: [2, 4, 5, 6, 9], K = 3, X = 10
Output: [5, 6, 9]

Time Complexity - O(logN + KlogK)
*/

const Heap = require("collections/heap");
const find_closest_elements = function(arr, K, X) {
    let closestIndex = get_closest_index(arr, X);
    //consider k elements left and right right of index as we need to find k closest 
    let low = closestIndex - K, high = closestIndex + K;
    low = Math.max(low, 0) // 0 cab be low index in arr;
    high = Math.min(high, arr.length-1) // max index can be high index of array 

    const minHeap =new Heap([],null, ((a, b) => b[0]-a[0]))

    for(let i=low; i <= high; i++){
        const dist = Math.abs(arr[i]-X);    
        minHeap.push([dist, arr[i]]);
    }

    const result = [];
    
    for(let i =0; i < K; i++){

        result.push(minHeap.pop()[1]);
    }

    //console.log(index);
    return result.sort((a, b) => a-b);
};

function get_closest_index(arr, x){

    let low =0, high = arr.length-1;
    while(low <= high){
        let mid = Math.floor(low + (high-low)/2);
        if(arr[mid]===x){
            return mid;
        } 
        //item is right side 
        if(arr[mid] < x){
            low = mid + 1; 
        } else {
            high = mid - 1;
        }
    }
    
    return (low === arr.length)? low-1: low;
}
  
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 1)}`)