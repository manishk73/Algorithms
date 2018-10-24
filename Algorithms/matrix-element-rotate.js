/*
https://www.geeksforgeeks.org/rotate-matrix-elements/
*/
function PrintArray(arr) {
  const row = arr.length;
  const col = arr[0].length;
  let rowString = ""; 
  for(let i=0;i < row; i++){
    rowString = "";
    for(let j=0; j < col; j++){
      rowString = rowString.concat(arr[i][j]);
      rowString = rowString.concat(" ");
    }
    console.log(rowString);
  }
}  


//const arr= [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
const arr= [[1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20],
            [21,22,23,24,25]
           ];
//rotate elements in array clockwise 
PrintArray(arr);
function rotateElementsClockWise(arr){
  let rows = arr.length;
  let cols = arr[0].length;
  let prev, curr;
  let row=0; let col =0; 
  
  while(row < rows && col < cols){
   
   prev = arr[row+1][col];
    
   //top row 
   for(let i=col ; i < cols; i++){
     curr = arr[row][i];
     arr[row][i] = prev;
     prev= curr;
     
   }
   //console.log(str, prev); 
   row++;  
  
   //right  
   for(let i = row; i< rows; i++){
     curr = arr[i][cols-1];
     arr[i][cols-1] = prev;
     prev= curr;
   }   
   cols--; 

   //bottom
   for(let i= cols-1 ; i >= col; i --){
     curr = arr[rows-1][i];
     arr[rows-1][i] = prev;
     prev= curr;
   }    
   rows--;
  
   //left
   for(let i=rows-1; i>= row; i--){

     curr = arr[i][col];
     arr[i][col] = prev;
     prev= curr;
   } 
   col++; 
    
  }
}

rotateElementsClockWise(arr);
console.log("\n");
PrintArray(arr);