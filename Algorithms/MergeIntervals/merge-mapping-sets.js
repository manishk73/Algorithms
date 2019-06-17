

let list = [[6,7], [2,4], [5,9]]; 

//[[1,4], [2,5], [7,9]]; 
//console.log(); 


console.log(list);


function mergeIntervals(input){
  
  let merged = []; 
  //making sure start elements sorted 
  input.sort((a,b)=> a[0] > b[0]);

  merged.push(input[0]); let index=0;

  for(let i=1; i< input.length; i++){
     
    let nextSet = input[i];
    let startSet = merged[index];
    
    //b.start <= a.end
    if(nextSet[0] <= startSet[1]) {
      
      let startEl = startSet[0];
      let endEl = Math.max(nextSet[1], startSet[1])
      merged[index] = [startEl,endEl];
     
    } else {
      index++;
      merged.push(nextSet);
    }
  }
  return merged;
} 


console.log(mergeIntervals(list));