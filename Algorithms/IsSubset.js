
/*
Find if arr2 is subset of arr1
NOTE : Both arrays should be sorted 
*/
function isSubset(arr1,arr2){
  
  //sort(arr1);
  //sort(arr2);
  
  let i=0;
  let j=0;
  
  if(arr1.length < arr2.length ) return false; 
  
  while(i < arr1.length && j < arr2.length ) {
    
    if(arr1[i] < arr2[j]){
      i++;
    } else if (arr1[i] === arr2[j]){
      i++;j++;
    } else if(arr1[i]> arr2[j]){
      return false;
    }
  }
  
  if(j===arr2.length){
    return true;
  } else {
    return false; 
  }
}  


const arr1 = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [5,6,11];

console.log(isSubset(arr1,arr2));