/*

692. Top K Frequent Words
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.

*/

const Heap = require("collections/heap");
const topKFrequent = function(words, k) {
    
    const minHeap = new Heap([],null, (a, b)=>{
        //when frq is equal 
       /* if(a[0]===b[0]){
            return a[1] < b[1] 
        } else {
            return a[0] < b[0]
        }*/
        b[0]-a[0]
    });

    const frqMap = {};
    words.forEach((word) =>{
        if( word in frqMap){
            frqMap[word] = frqMap[word] +1; 
        }else {
            frqMap[word] = 1; 
        }
    })

    Object.keys(frqMap).forEach((key)=>{
        const frq = frqMap[key];
        minHeap.push([frq, key]);
        if(minHeap.length>k){
            minHeap.pop();
        }
    })

    const result = [];
    while(minHeap.length>0){
        const [frq, word] = minHeap.pop();
        result.unshift(word);    
    }
    console.log(result);
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"],2))