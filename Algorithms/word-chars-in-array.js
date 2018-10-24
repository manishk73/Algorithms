/*
Verify if a word chars has present in array. 
do not use already used char in array.  
*/
const word = "dissagree";
const arr = ["d","a", "i","s","g","e","e","r"];

let findWord = function (word, arr){
  if(!word || word.length===0){
    return false;
  } 
  let usedIndexs = [];
  for(let i=0; i < word.length; i++){
    
    let chr = word.charAt(i);
    let charPosition = arr.indexOf(chr);
    
    //if char does not exist at all in arr then retrun false
    if(charPosition === -1){
      return false;
    }
    
    //checking if char is alrady used to form a word 
    while(true){
      
      if( charPosition === -1){
          return false;
      }
      
      if(usedIndexs.indexOf(charPosition) === -1) {
      
        usedIndexs.push(charPosition); 
        break;
      
      } else if(usedIndexs.indexOf(charPosition) !== -1) {
        
        charPosition = arr.indexOf(chr,charPosition+1);
      }
    }
    
  }
  return true;
}

const another = "mylifeisweired";
const anotherArr= "mylifeisweired".split("");
console.log(findWord(another,anotherArr));