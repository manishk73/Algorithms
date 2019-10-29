/*Welcome to Facebook!

Given a matrix, like this

[[0, 0, 1, 1, 1],

 [0, 1, 1, 1, 1],

 [0, 0, 1, 1, 1],

 [0, 0, 0, 0, 0],

 [0, 0, 0, 1, 1]]

1. Each cell is either 1 or 0
2. In each row, from left to right, when you first see a number 1 in cell, then the rest cells in this row will all be 1
3. Assume the matrix is square

Question: Find the leftmost column that has number 1

In this example, answer will be 2, because there is a number 1 at Matrix[1, 1]

*/ 
/** 
 * O(n^2)
*/

let findLeftmostColumn = function(input){
  
  let min_index = Number.MAX_VALUE;
  
  for(let i=0; i < input.length; i++){
    let returned = getMinColumn(input[i]);
    console.log(min_index + ":" + returned);
    min_index = Math.min(min_index,returned);
  }  
  
  return min_index;
}  


function getMinColumn(columnArr){
 let index =  Number.MAX_VALUE;
 for(let i=0; i < columnArr.length; i++){
   
  if(columnArr[i]===1){
    index = i+1;
    break;
  } 
 }
  return index;
  
}
  

const input = [[0, 0, 1, 1, 1],

 [0, 1, 1, 1, 1],

 [0, 0, 1, 1, 1],

 [0, 0, 0, 0, 0],

 [0, 0, 0, 1, 1]];

console.log(findLeftmostColumn(input));
  

/*************************** 
 * O(n)
 * 
*/

const input = [[0, 0, 0, 1, 1],

 [0, 0, 1, 1, 1],

 [0, 0, 1, 1, 1],

 [0, 0, 0, 0, 0],

 [0, 1, 1, 1, 1]];


function getLeftMostColumn(input){
  
  let row = 0,col = 0, minCol = Number.MAX_VALUE;
  
  while(row < input.length && col < input[0].length){
    
   if(input[row][col] ===0){
     if(col === input[0].length-1) {
       row++; col=0;
     } else {
        col++;
     }  
    
   } else if(input[row][col] ===1){
     minCol = Math.min(minCol, col+1);
     col=0;
     row++;
   }
  }
  console.log(minCol);
}

getLeftMostColumn(input);
