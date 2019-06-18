function InsertInterval(arr,newInterval){
  
  let merged = [];
  let index =0;
  
  //sets in which has a.end < newInterval.start , can directly added to merged array 
  //as it can't be merged 
  
  while(index < arr.length){
    let elementSet = arr[index];
    if(elementSet[1] < newInterval[0]){
      merged.push(elementSet);
      index++;
    } else {
      break;
    }
  }
  
  let start = newInterval[0]; let end = newInterval[1] ;
  //start interval should be less than the new merged interval then its overlapping 
  while(index < arr.length && arr[index][0] <= newInterval[1]){
    let elementSet = arr[index];
    start = Math.min(start, elementSet[0]); //get min of start state
    end = Math.max(end, elementSet[1]); //get max of end state
    index++;
  }
  
  merged.push([start, end]);
  
  while(index < arr.length){
    let elementSet = arr[index];
    merged.push(elementSet);
    index++;
  }
  
  return merged;
}

//already sorted 
let intervals=[[1,3], [5,7], [8,12]];
let newInterval=[4,6];

console.log(InsertInterval(intervals,newInterval));

intervals = [[1,3], [5,7], [8,12]];
newInterval=[4,10];
console.log(InsertInterval(intervals,newInterval));