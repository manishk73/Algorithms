/**
 * 821. Shortest Distance to a Character
 * 
 * 
 * Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.
 * 
 * O(N)
 * 
 * Input: S = "loveleetcode", C = 'e'
 * Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 */

//const str = "loveleetcode", c ='e'; 
const str = "abaa", c ="b"; 
//Expected [1,0,1,2]

var shortestToChar = function(str, c){
  
    const len = str.length;
    const result = Array(len);
    
    let prev = Math.floor(Number.MIN_SAFE_INTEGER/2);
    for(let i=0; i < len ; i++){
      
      if(str[i]===c) {
        prev = i; 
      } 
      result[i] = i - prev; 
    }
    
    //console.log(result);
    
    prev = Math.floor(Number.MAX_SAFE_INTEGER/2);
    
    for(let i=len-1; i>=0; i--){
      
      if(str[i]===c) {
        prev = i; 
      } 
      result[i] = Math.min(result[i],prev-i) ; 
    }
    
    //console.log(result);
      return result;
  }
  
  
  shortestToChar(str, c);
  
