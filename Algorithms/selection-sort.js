/*
a[] = 45 23 40 67 87 90 
n= 6

algo - compare a[0] element to a[1] element and which ever is small element 
store in min_index varaible in iterative way. 

so first iteration will bring small element at [0] position 
second iteration will bring selecon small number in [1] position

if(a[i]>a[i+1]) 
  min_index = a[i+1];
   

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