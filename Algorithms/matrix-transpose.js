/*
Transpose n * m matrix 

orignal matrix 
1 2 3 4 5
6 7 8 9 0

transposed matrix =>

1 6
2 7
3 8
4 9
5 0

O(m*n);
*/

function transposeMatrix(arr){
    let rows = arr.length;
    let cols = arr[0].length
    let transposed = [];
    for(let col =0; col < cols; col++){
      let inner = [];
      for(let row=0; row < rows; row++){
        inner.push(arr[row][col]);
      }
      
      transposed.push(inner);
    }
    return transposed;;
} 

const arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(transposeMatrix(arr));
