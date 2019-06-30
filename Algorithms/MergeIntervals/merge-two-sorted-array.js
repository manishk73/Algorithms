
//O(log(min(x,y)))

function findMedianSortedArrays(arr1,arr2){
  
  if(arr1.length > arr2.length){
    
    return findMedianSortedArrays(arr2,arr1);
  }
  
  let x = arr1.length;
  let y = arr2.length;
  let low =0; 
  let high = x; 
  
  while(low <=high){
    
    let partitionX = Math.floor((low+high)/2);
    let partitionY = Math.floor((x+y+1)/2 - partitionX);
    
    let maxLeftX = partitionX ===0? -Infinity : arr1[partitionX-1];
    let minRightX = partitionX ===x? Infinity : arr1[partitionX];
    
    let maxLeftY = partitionY ===0? -Infinity : arr2[partitionY-1];
    let minRightY = partitionY ===y? Infinity : arr2[partitionY];
    
    if(maxLeftX <= minRightY && maxLeftY <= minRightX){
      
      //when even elements
      if((x+y)% 2 ===0) {
        
         let sum = Math.max(maxLeftX,maxLeftY) + Math.min(minRightX, minRightY);
         return sum/2; //average  
        
      }
      //when odd
      
      return Math.max(maxLeftX,maxLeftY);
      
    }
    else if( maxLeftX > minRightY) {
      
      high = partitionX - 1; 
    } else {
      
      low = partitionX + 1; 
    }
    
  } 
  
}

let nums1 = [1, 3, 5, 7];
let nums2 = [2,9]

console.log(findMedianSortedArrays(nums1,nums2));