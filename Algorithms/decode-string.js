/**Compexity : Medium 
 * 
 * Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/

const s = "100[leetcode]"
var decodeString = function(s) {
  
  let num=0; 
  const numStack = [], strStack= [];
  let currStr ="";
  
  for(let i=0; i< s.length; i++){
    
    const char = s[i];
    
    if(isDigit(char)){
      
      num = num * 10 + Number(char);
     
    } else if(char === "["){
      console.log("num", num)
      numStack.push(num);
      strStack.push(currStr);
      num=0;
      currStr ="";
      
    } else if(char ==="]"){
     
       const times = numStack.pop()
       console.log("time",times);
       currStr = currStr.repeat(times); 
       currStr = strStack.pop() + currStr ;
      
    }else{
      
      currStr = currStr.concat(char);
    }
  }
  return currStr;
};

function isDigit(c){
  if(Number(c)>=0){
    return true  
  }
  return false;
}

console.log(decodeString(s));
