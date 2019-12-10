/*Given ‘N’ ropes with different lengths, 
we need to connect these ropes into one big rope with minimum cost. 
The cost of connecting two ropes is equal to the sum of their lengths.
Input: [1, 3, 11, 5]
Output: 33
Explanation: First connect 1+3(=4), then 4+5(=9), and then 9+11(=20). So the total cost 
is 33 (4+9+20)
*/

const Heap = require("collections/heap")
const minmum_cost_connect_ropes = function(ropes){
    //adding all the ropes in min heap so that min size tope is at top of minHeap 
    const minHeap = new Heap(ropes, null, ((a,b)=> b-a));
    let result = 0;
    console.log("MonHeap: ", minHeap);
    while(minHeap.length>1){
        
        const temp = minHeap.pop() + minHeap.pop();
        result += temp;
        minHeap.push(temp); 
    } 
    return result;
}

console.log(`Minimum cost to connect to roples: ${minmum_cost_connect_ropes([1, 3, 11, 5])}`)