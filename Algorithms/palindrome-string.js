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
