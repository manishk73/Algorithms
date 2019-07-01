/*

Removing targetted key from unsorted array 


solution - two pointers, 

ptr_non_key - pointer to avoid key 
i - to traverse  
*/

const arr = [3, 2, 3, 6, 3, 10, 9, 3];
const key=3;


let removeProvidedKey = function(arr, key){
  
  let ptr_non_key = 0 ;
  
  for(let i=0; i < arr.length; i++){
    
    if(arr[i] !== key){
      
      arr[ptr_non_key] = arr[i];
      ptr_non_key++;
      
    }
    
  }
  
  //this will reduce length
  arr.length = ptr_non_key;
  return arr;
}


console.log(removeProvidedKey(arr,key));