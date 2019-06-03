/*
Verify if a word chars has present in array. 
do not use already used char in array.  
*/


/******************************************************/
/*
/* BEST AND EFFICIENT SOLUTION
/******************************************************/
function findWord(search, arr){
  
  function startFinding(search, arr, used,i, inner=0){
    
    if(used.length=== search.length){
      return true;
    }
    
    const char = search[i];
    const index = arr.indexOf(char,inner);
    console.log(char, index, used);
    if(index === -1){
      return false; 
    }
    
    let usedArrIndex = used.indexOf(index);
    if(usedArrIndex===-1){
      used.push(index);
      return startFinding(search,arr,used,i+1,0);
    } else {
      return startFinding(search,arr,used,i,index+1);
    }
  }
  return startFinding(search,arr,[],0);
}

const word = "dissagree";
const arr = ["s","d","a", "i","s","g","e","e", "r", "p"];
console.log(findWord(word,arr));

/*====================================================*/

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

var word2 = "disassemble"
var arr1 = ["d", "n", "i", "k", "t", "t", "a", "q", "w", "o", "b", "x", "x", "m", "z", "q", "i", "j", "k", "n"]
var arr2 = ["d", "n", "e", "k", "t", "s", "a", "w", "o", "s", "b", "x", "m", "z", "l", "e", "i", "k", "b", "s"]

//const another = "mylifeisweired";
//const anotherArr= "mylifeisweired".split("");
//console.log(findWord(another,anotherArr));
console.log(findWord(word,arr));
//console.log(findWord(word2,arr2));

/******************==========================================================================*/
//Another way 


let selectionSort = function(arr){
  
  for(let i=0; i< arr.length; i++){
    let min_index= i;
    for(let j=i+1;j< arr.length; j++){
      
      if(arr[j] < arr[min_index]){
        
        min_index = j;
      }
    }
    
    let temp = arr[min_index]; 
    arr[min_index] = arr[i];
    arr[i] = temp;
  }
  return arr;
}



let findWord = function(word, arr){
  
  let wordArr = word.split('');
  if(wordArr.length > arr.length){
    console.log("length is not equal");
    return false; 
  }
  let sortedWord =  selectionSort(wordArr);
  let sortedArr =  selectionSort(arr);
  
  for(let i=0; i< sortedWord.length; i++){
    
    if(sortedWord[i]!==sortedArr[i]){
      console.log("not equal char");
      return false; 
      break;
    }
  }
  return true;
} 

const word = "dissagree";
const arr = ["s","d","a", "i","s","g","e","e","r"];

console.log(findWord(word,arr));
