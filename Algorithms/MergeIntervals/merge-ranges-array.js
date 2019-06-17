/* 
Write a function by given input, merge them if there is overlapping. Return a new result array
  Input: [(1,6), (5,8), (10, 12), (10,13)],
  Output: [(1,8), (10,13)]
*/

const input = [[1,6], [5,8], [10, 12], [10,13]];


const mergeRange = function(input){
    const output = [];
    let i=0;
    //let nextIndex=0;
    while(i < input.length)  {
        let current = input[i];
        let start = current[0];
        let end = current[1];
         
        for(let j=i+1; j < input.length; j++){
          
            let next = input[j]; 
            let nextStart =  next[0];
            let nextEnd =  next[1];
          
            if(end >= nextStart){
               //nextIndex = j+1;
               end = nextEnd; 
               i = j;
            }
        }
        
        output.push([start,end]);
        /*if(i < nextIndex){
            i = nextIndex;
        } else 
        {
            i++;    
        }*/
        i++;
    }  
      
   
  return output.length>0? output: input;
}

console.log(mergeRange(input));