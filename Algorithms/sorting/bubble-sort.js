/*
//bubble sort algorithm
a[] = 8 5 2 5 18 4 
n= 6

algo - this algorithm constantly compares and swaps two adjustent elements

run1 - start swapping two adjacent elements 
8 5 2 5 18 4  ->  {5} {8} 2 5 18 4 - swap of [0] - [1] 
5 8 2 5 18 4  ->   5 {2} {8} 5 18 4
5 2 8 5 18 4  ->   5 2 {5} {8} 18 4 - and so on till end  
run 2 - the second run will again start from [0] poistion 

run 3...run n 


As this has two loops for n size array -> time complexity is O(n^2);

*/


function bubbleSort(arr){
  let n = arr.length;
  
  for(let i=0; i < n; i++){
    
    //here condition n-i-1 because in first iteration the max element is already 
    //moved to last place, so in next iteration no need to check last positions
    //which already sorted.  
    for(let j=0; j< n-i-1; j++ ){
      
      if(arr[j] > arr[j+1]){
        //exchange position now 
        let temp = arr[j+1]; //starting postion in each iteration 
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const arr = [8,2,4,6,0,3,1,9,23,10,45];

bubbleSort(arr);

console.log(arr);

