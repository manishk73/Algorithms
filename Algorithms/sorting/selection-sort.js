/*
a[] = 45 23 40 67 87 90 
n= 6

This algorythm maintains 2 arrays internally in the array we are sorting 
one is sorted array and other is unsorted array

Step1. - search min value element from 0 to n
Setp2. - move min value element to 0 position.
Setp3. - follow step 1 from index 1 to n and then step2
Do this until array is sorted 

Time Complexity O(n ^ 2)
Best alogrithm in sorting - HeapSort 
*/


function selectionSort(arr){
  let n = arr.length;
  
  for(let i=0; i < n-1; i++){
    
    let min_index = i; //assuming min_index is start position 
    //do 0 to n-1 index comparision
    for(let j=i; j< n; j++ ){
      
      if(arr[j] < arr[min_index]){
        min_index = j;
      }
    }
    
    //exchange position now 
    let temp = arr[i]; //starting postion in each iteration 
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }
}

const arr = [45, 23, 40, 67, 87, 90 ];

selectionSort(arr);