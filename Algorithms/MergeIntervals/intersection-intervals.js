function intersectionIntervals(interval1, interval2){
  let i=0; let j =0;
  let intersected = [];
  while( i < interval1.length && j < interval2.length){
    
    //when two intervals are overlapping then only we get intersection 
    // Max(a.start, b.start)
    // Min(a.end, b.end)
    // Mapping or overlapping can occur when 
    // a.start <= b.start && b.start <= a.end
    // a.start >= b.start && a.start <= b.end 
    
    let a =  interval1[i];
    let b =  interval2[j]; 
    if((a[0] <= b[0] && b[0] <= a[1]) || (a[0]>= b[0] && a[0] <= b[1])){
      let start = Math.max(a[0],b[0]);
      let end = Math.min(a[1],b[1]);
      intersected.push([start,end]);
    }
    
    if(a[1] < b[1]){
        i++;
    } else {
        j++;
    }
  }
  
  return intersected;
}

let interval1 = [[1, 3], [5, 7], [9, 12]];
let interval2=[[5, 10]];

console.log(intersectionIntervals(interval1,interval2));


interval1 = [[1, 3], [5, 6], [7, 9]];
interval2 = [[2, 3], [5, 7]];

console.log(intersectionIntervals(interval1,interval2));