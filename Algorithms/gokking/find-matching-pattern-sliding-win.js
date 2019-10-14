/*

Permutation in a String (hard)
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n!n! permutations.

Example 1:

"oidbcaf", Pattern="abc"
Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

*/
let findPermutation = function(str,pattern){
  
  let winStart=0, perList = new Map(), match=0; 
  
  for(let char of pattern){
    
    if(!perList.has(char))
      perList.set(char,1);
    else 
      perList.set(char, perList.get(char) + 1);
  }
  
  for(let winEnd=0; winEnd < str.length; winEnd++){
    
    let endChar = str[winEnd];
    
    if(perList.has(endChar)){
      perList.set(endChar, perList.get(endChar)-1);
      match++;
    }
    
    if(match ===pattern.length){
      
      return true;
    }
    
    if(winEnd >= pattern.length -1) {
      
      let startChar =  str[winStart];
      if(perList.has(startChar)){
        
        perList.set(startChar, perList.get(startChar)+1);
        match--;
      }
      winStart++;
      
    }
  }
  
  return false;
}

let str = "oidbcaf", pattern="abc"

str="bcdxabcdy", pattern="bcdyabcdx";

str="odicf", pattern="dc";

console.log(findPermutation(str, pattern));
