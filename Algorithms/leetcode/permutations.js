/**
 * BFS Approach 
 * Goaking explained 
 * Input: [1,3,5]
Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]
 */

const nums = [1,3,5];

const find_permutations = function(num){
  
  const numLength = num.length;
  const result = [];
  const permutations = [];
  permutations.push([]);
  
  for(let i=0; i< numLength; i++){
    
    const currentNum = num[i];
    
    const n = permutations.length;
    
    for(let p=0; p < n; p++){
      
      const oldPermutation = permutations.shift();
      
      for(let j=0; j < oldPermutation.length+1; j++){
        
        const newPermutation = oldPermutation.slice(0);
        newPermutation.splice(j,0,currentNum);
        
        if(newPermutation.length ===numLength){
          result.push(newPermutation);
        } else{
          permutations.push(newPermutation);
        }
      }
    }
  }
  return result;
}


console.log(find_permutations(nums));