//let str = "aabbaa"

function isStringPalindrome(str){
  
  if(!str){
    return false;
  }
  let length = str.length;
  if(length <= 1) {
    return true;
  }
  if(str.charAt(0) !== str.charAt(length-1)){
    return false;
  } else {
    return isStringPalindrome(str.substr(1,length-2));
  }
}

console.log(isStringPalindrome());
console.log(isStringPalindrome("aa"));




//solved without modifying str 
let isPalindrome = function(str, idx1, idx2){
  
  if(str.length===0) 
    return true;  
  if(idx1 > idx2 && str[idx1] !== str[idx2]) 
    return false; 
  else if(idx1 > idx2 && str[idx1] === str[idx2]) 
    return true; 
  
  if(idx1 === idx2) 
    return true; 
  
  if(str[idx1] != str[idx2]){
    return false; 
  } else {
    
    return isPalindrome(str, idx1+1, idx2-1);
  }
    
}

let str = "a";
console.log(isPalindrome(str,0,str.length-1))

