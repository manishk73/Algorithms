/*
Given a string, sort it based on the decreasing frequency of its characters.
*/
/*
Input: "Programming"
Output: "rrggmmPiano"
Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.

Input: "abcbab"
Output: "bbbaac"
Explanation: 'b' appeared three times, 'a' appeared twice, and 'c' appeared only once.
*/

const Heap = require("collections/heap");

const sort_character_by_frequency = function(str) {
    //finding frquency of char in str 

    const frqMap = {};
    [...str].forEach(char =>{

        if(!frqMap[char]){
            frqMap[char] = 1;
        } else {
            frqMap[char]++;
        }
    })

    const maxHeap = new Heap([],null, ((a,b) => a[0]-b[0]));

    Object.keys(frqMap).forEach((char) =>{
        maxHeap.push([frqMap[char],char]);
    })

    let sorted =[];

     while(maxHeap.length>0){
        const [freq, char] = maxHeap.pop(); 
        sorted.push((char).repeat(freq));
     }   
    return sorted.join('');
};
  
  
console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("Programming")}`)
console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("abcbab")}`)