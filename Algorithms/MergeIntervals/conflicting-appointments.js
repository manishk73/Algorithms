/*
Find conflicting appointments

a
start---------end
  b
  start-----------end

b.start < a.end means overlapping and conflicting  
*/
const appointments = [[4,5], [2,3], [3,6], [5,7], [7,8]];

let findOverlappingAppointments = function(arr){
  
  //const overlapped = [];
  //sorting on end time 
  appointments.sort((a,b) => a[1] > b[1]);
  for(let i=1; i < arr.length; i++){
    
      if(arr[i][0] < arr[i-1][1]){
        //overlapped.push(arr[i-1],arr[i]);
        console.log("Conflicts ", arr[i-1],arr[i]);
      }
  }
  //return overlapped;
}


const overlapped = findOverlappingAppointments(appointments);
//console.log(overlapped);