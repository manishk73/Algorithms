
/**
 * 
 * We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

 

Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)

dist = sqrt( pow((x2-x1),2) + pow((y2-y1),2))

O(n Log N)
 */
const points = [[3,3],[5,-1],[-2,4]];

let kClosest = function(points, k){
  
   const dist = []; 
    //const map = new Map();
   let getDistance = (point)=>{
     return Math.pow(point[0],2) + Math.pow(point[1],2);
   }
   for(let i=0; i < points.length; i++){
        //const d = Math.sqrt(Math.pow(points[i][0]) + Math.pow(points[i][1]));
        dist.push(getDistance(points[i]));
        //map.set(d,points[i]);
   }
  
   dist.sort((a,b)=> a-b);
   console.log(dist);
   const ans = [];
   const minDist = dist[k-1];
  
   for(let i=0; i < points.length; i++){
     if(getDistance(points[i]) <= minDist){
       ans.push(points[i]);
     }
   } 
   return ans;
}

console.log(kClosest(points,2));