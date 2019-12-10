/*
Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ 
closest numbers to ‘X’ in the array. Return the numbers in the sorted order.

Input: [5, 6, 7, 8, 9], K = 3, X = 7
Output: [6, 7, 8]

Input: [2, 4, 5, 6, 9], K = 3, X = 6
Output: [4, 5, 6]

Input: [2, 4, 5, 6, 9], K = 3, X = 10
Output: [5, 6, 9]

Time Complexity - O(K+logN)
*/

/**
 Alternate Solution using Two Pointers
After finding the number closest to ‘X’ through Binary Search, we can use the Two Pointers approach to find the ‘K’ closest numbers. Let’s say the closest number is ‘Y’. We can have a left pointer to move back from ‘Y’ and a right pointer to move forward from ‘Y’. At any stage, whichever number pointed out by the left or the right pointer gives the smaller difference from ‘X’ will be added to our result list.

To keep the resultant list sorted we can use a Queue. So whenever we take the number pointed out by the left pointer, we will append it at the beginning of the list and whenever we take the number pointed out by the right pointer we will append it at the end of the list.
 */

 /*** THIS SOLUTION WITHOUT UISNG HEAP GIVES BETTER PERFORMACE*/
/* THIS IS 2 POINTER SOLUTION */

const find_closest_elements = function(arr, K, X) {
    
    const closeIndex = get_closest_index(arr, X);
    let left = closeIndex, right = closeIndex + 1; 
    
    const result = [];
    const n = arr.length;

    //Traversing on both side of close index to find cloasest numbers 
    for(let i = 0; i < K; i++){
        if( left>=0 && right < n){
            const leftDiff = Math.abs(arr[left]-X);
            const rightDiff = Math.abs(arr[right]-X); 
            if(leftDiff <= rightDiff){
                result.unshift(arr[left]); //inserting in queue from front 
                left--;
            } else {
                result.push(arr[right]); //adding in quque 
                right++;
            }

        } else if(left >=0){
            result.unshift(arr[left])
            left--;    
        } else if( right < n){
            result.push(arr[right]); //adding in quque 
            right++;
        }
    }
    return result;
};

//This is binary search 
function get_closest_index(arr, X){

    let low = 0, high = arr.length-1;
    while(low <= high){
        const mid = Math.floor(low + (high-low)/2)
        if(arr[mid]===X) return mid;
        if(arr[mid] < X){
            low = mid + 1; 
        } else {
            high = mid -1; 
        }
    }

    if(low === arr.length){
        low = low-1 // arr.length-1
    }
    return low; 
}
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`)