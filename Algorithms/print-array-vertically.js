

let input = [
  [1],
  [2,5,7,8,9],
  [3],
  [4,6,8,10]];
/*
output = [1,2,3,4,5,6,7,8,9,10]
//salesforce
*/
let getArray = function(input){
  
  let output = [];
  for(let i=0; i< input.length; i++){
	
    for(let j=0; j < input.length; j++){
    
      if(typeof input[j] !== "undefined" && typeof input[j][i] !== "undefined")
        output.push(input[j][i]) ;   
    }
  }
  
 
  return output;
}

console.log(getArray(input));
