/*

String Anagrams

Given a string and a pattern, find all anagrams of the pattern in the given string.

Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

abc
acb
bac
bca
cab
cba

Example 1:

String="qp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

Example 2:

String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".


*/
let findStringAnagrams = function(str,pattern){
  
  let winStart=0; 
  let perList = new Map();
  let matched=0; let anagrams=[]; 
  
  
  for(let char of pattern){
    
    //console.log(char);
    if(!perList.has(char))
      perList.set(char,1);
    else 
      perList.set(char, perList.get(char)+ 1);
  }
  
  //console.log(perList);
  for(let winEnd=0; winEnd < str.length; winEnd++){
    
    let endChar = str[winEnd];
    
    if(perList.has(endChar)){
      perList.set(endChar, perList.get(endChar)-1);
      if(perList.get(endChar)===0){
         matched++;   
      }
    }
    
    if(matched ===perList.size){
      
      anagrams.push(winStart);
    }
    
    if(winEnd >= pattern.length -1) {
      
      let startChar =  str[winStart];
      winStart++;
      if(perList.has(startChar)){
        
        if(perList.get(startChar)===0){
         matched--;
        } 
        perList.set(startChar, perList.get(startChar)+1);
      }
      
    }
  }
  
  return anagrams;
}

let str = "oidbcaf", pattern="abc"

//str="bcdxabcdy", pattern="bcdyabcdx";

//str="odicf", pattern="dc";

str="ppqp", pattern="pq";

console.log(findStringAnagrams(str, pattern));
