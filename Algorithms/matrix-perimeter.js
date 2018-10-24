"use strict";
//const matrix = [[1,2,3,4],[10,100,100,11],[6,7,8,9]];
const matrix = [[1,2,3],[10,100,100],[6,7,8]];

//This is bruteforce 
function calculatePermiter(matrix){
  let perimeter =0;
  matrix.forEach((outerElement,outerIndex, outerArray) => {
         outerElement.forEach((innerElement, innerIndex) => {
         if(outerIndex===0 || (outerIndex === outerArray.length-1)){
             perimeter = perimeter + innerElement;
          } else if(innerIndex ===0 || (innerIndex === outerElement.length-1)){
             perimeter = perimeter + innerElement;
          }
    });
  });
 return perimeter;
} 
console.log(calculatePermiter(matrix));


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


const permiterArray =[[1,2,3,4,20],[5,6,7,8,20],[9,10,11,12,20],[13,14,15,16,20],[21,22,23,24,25]];
PrintArray(permiterArray);
function calculateMatrixPerimeter(arr){
  let perimeter =0; 
  const rows = arr.length;
  const cols = arr[0].length;
  
  for(let i=0; i< rows; i++){
    //sum of top side & bootom side 
    for(let j=0; j < cols && (i ===0 || i ===rows-1); j++){
       perimeter = perimeter + arr[i] [j];
    }
    //sum of right side and left side, exclusing top left and bottom left and top right and bottom right elements (corners as those //are already considered)
    if(i+1 < rows - 1){
      perimeter = perimeter + arr[i+1][cols-1];
      perimeter = perimeter + arr[i+1][0];
    }
  }
  console.log(perimeter);
  return perimeter
}

calculateMatrixPerimeter(permiterArray);

