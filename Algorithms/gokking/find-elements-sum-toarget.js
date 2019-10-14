/*

O(N)

Using 2 pointers - 

This is sorted array so - one pointer starts at start and other pointer starts at end. 

//checking of this condition
a[start] + a[end] = target  

*/

const input = [2, 5, 9, 11];
const target = 11;

let findTargetElements = function(input, target){
  
  let start =0; 
  let end= input.length-1;
  
  while(start < end ){
    
    if(target - input[start] === input[end]) {
      
      return [start, end];
    }
    
    //sum is greater than target  
    if(target- input[start] < input[end]) {
      
      end--;
    } else {
      
      start++;
    }
    
  }
  
  return [-1,-1];
  
}

console.log(findTargetElements(input,target));