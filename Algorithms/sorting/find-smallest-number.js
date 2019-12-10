/**
 * Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.
 * Find Kth smallest number 
 * Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4], K=5
 * Output: 4
 * Explanation: The 5th smallest number among all the arrays is 4, this can be verified from the merged 
 * list of all the arrays: [1, 2, 3, 3, 4, 6, 6, 7, 8]
 */

const Heap = require("collections/heap"); 
function find_kth_smallest_number(lists, k){

    const minHeap = new Heap([], null, (a, b) =>  b[0] - a[0])
    lists.forEach(list =>{
        const el = [list[0], list, 0];
        minHeap.push(el)
    })

    let number =0, counter=0; 
    const sorted =[]
    while(minHeap.length >0){
        counter+=1;
        const minNode = minHeap.pop();
        const [value, list, index] = minNode;
        number = value;
        if(counter === k){
            break;
        }
        sorted.push(value);
        if(index+1 < list.length){
            const el = [list[index+1], list, index+1];
            minHeap.push(el);
        }
    }
    console.log(sorted);
    return number;
}

console.log(`Kth smallest number is: ${find_kth_smallest_number([
    [2, 6, 8],
    [3, 6, 7],
    [1, 3, 4],
  ], 5)}`);



function find_median_number(lists, k){

    const minHeap = new Heap([], null, (a, b) =>  b[0] - a[0])
    lists.forEach(list =>{
        const el = [list[0], list, 0];
        minHeap.push(el)
    })


    let number =0, counter=0; 
    const sorted =[]
    while(minHeap.length >0){
        counter+=1;
        const minNode = minHeap.pop();
        const [value, list, index] = minNode;
        sorted.push(value);
        if(index+1 < list.length){
            const el = [list[index+1], list, index+1];
            minHeap.push(el);
        }
    }
    //even
    let median =0;
    let n = Math.floor(sorted.length/2) 
    if(sorted.length%2===0){
        median = (sorted[n-1] + sorted[n])/2.0
    } else{
        median = sorted[n]
    }
    console.log(sorted);
    return median;
}

console.log(`Median number is: ${find_median_number([
    [2, 6, 8],
    [3, 6, 7],
    [1, 3, 4, 9],
  ], 5)}`);