/*
https://www.interviewbit.com/tutorial/merge-sort-algorithm/
Watch video here 
*/
let arr = [4,3,2,1,5,9,7,8];

function sort(arr){
  
  let left =0;
  let right = arr.length-1;
  
  function merge(arr, left,mid,right){
    
    //console.log(arr, left, mid, right);
    
    let i=left; let j=mid+1; let k=0;
    let temp = [];
    
    while(i <= mid && j <= right){
      
      if(arr[i] < arr[j]){
        
        temp[k] = arr[i];
        k++; i++;
      } else {
        
        temp[k] = arr[j];
        k++; j++;
        
      }
      
    }
    
    while(i<=mid){
      
      temp[k] = arr[i];
      k++;i++;
    }
    
    while(j<= right){
      
      temp[k] = arr[j];
      k++;j++;
    }
    
    for(let i= left; i <= right; i++){
      
      arr[i] = temp[i-left];
    }
   
  }
  function mergeSort(arr, left, right){
  
    if(left < right){
      
      let mid = Math.floor(left + (right-left)/2); 
      mergeSort(arr, left, mid);
      mergeSort(arr, mid+1, right);
      merge(arr, left,mid,right);
    }
    
  }

  mergeSort(arr,left,right);
}

sort(arr);
console.log(arr)
