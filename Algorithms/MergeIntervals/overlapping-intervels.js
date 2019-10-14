/*O(N)*/
class Interval{
  
  constructor(interval){
    
    this.start = interval[0];
    this.end = interval[1]; 
  }
}

function overlappingIntervals(interval1, interval2){
  
  const overlapped = [];
  let i=0, j=0;
  
  while(i < interval1.length && j < interval2.length){
    
    let a_overlaps_b = interval1[i].start >= interval2[j].start && interval1[i].start <= interval2[j].end;
    let b_overlaps_a = interval2[j].start >= interval1[i].start && interval2[j].start <= interval1[i].end;
    console.log(a_overlaps_b, b_overlaps_a, i, j );
    if(a_overlaps_b || b_overlaps_a){
       
      overlapped.push([Math.max(interval1[i].start, interval2[j].start), Math.min(interval1[i].end, interval2[j].end)]);
    }
    
    if(interval1[i].end < interval2[j].end){
      i++;
    } else {
      j++;
    }
  }
  return overlapped;
}

const arr1 = [[1, 3], [5, 6], [7, 9]];
const arr2 = [[2, 3], [5, 7]];

let getInterval = function(arr){
  let interval = [];
  for(let i=0; i < arr.length; i++){
    
    interval.push(new Interval(arr[i]))
  }
  return interval;
} 

const interval1 = getInterval(arr1);
const interval2 = getInterval(arr2);

const overlapped = overlappingIntervals(interval1,interval2);

console.log(overlapped);