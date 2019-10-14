
/*I using programming*/
function findMissingWords(string1, string2){
  
  if(string1.length < string2.length) {
    let temp = string1;
    string1 = string2;
    string2 = temp;
  }
  
  let arr1 = string1.split(" ");
  let arr2 = string2.split(" ");
  let missingWords = [];
  for(let i=0; i< arr1.length; i++){
    
      if(arr2.indexOf(arr1[i]) ===-1){
        missingWords[missingWords.length] = arr1[i];
      }
  }
  return missingWords;
}

let missWords = findMissingWords('I am using hackerrank to improve programming', 'am hackerrank to improve')

console.log(missWords);