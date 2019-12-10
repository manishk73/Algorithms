/*
INSERTION SORT 


INPUT [6 9 8 10 30 3 2]
[6 9 8 10 30 3 2] - 9 compared with previous element 6. 9 > 6 so position is not changed 

Steps



1. start sorting from element a[i=1]
2. compare element a[i-1] till a[0] 


*/

//iterative way O(n*2)
let sortingByInsertionSort = function(arr){
  
  for(let i=1; i< arr.length; i++){
      let ele = arr[i];
      let j = i-1;
      
      while(j>=0 && arr[j]>ele){
        
          arr[j+1] =arr[j];
          j--;
      }
      arr[j+1] = ele;
  }
  return arr; 
};

const arr = [6, 9, 8, 10, 30, 3, 2];
sortingByInsertionSort(arr);
console.log(arr);



//Recursive way - O(n*2)

let insertionSortRecurrsive = function(arr,n){
    
    if(n<=1) return;
    insertionSortRecurrsive(arr,n-1);
    
    let last = arr[n-1];
    let j = n-2;
    //console.log(last);
    while(j>=0 && arr[j] > last){
        
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = last;
};

const arr = [8,49,3,1,0,3,44,11,10,3,4,5];
insertionSortRecurrsive(arr,arr.length);

console.log(arr);
