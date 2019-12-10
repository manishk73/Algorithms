/**
 * @param {number[][]} points
 * @return {number}
 */

let points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4],[2,2],[2,2]];
//let points = [[0,0],[1,1],[1,-1]];
var maxPoints = function(points) {
    
    let max =0;
    
    for(let i=0; i < points.length; i++){
        
        max = Math.max(max, getMaxPointsOnLine(i,points));
    }
    return max;
};

function getMaxPointsOnLine(i, points){
    
    let slopes = new Map(); let count =1; let hzLine =1; 
    let duplicates = 0;
    for(let j=i+1; j< points.length ; j++){
        
        let linePoint = addLine(i, j, points, slopes, count, hzLine, duplicates);
        count = linePoint.count;
        duplicates = linePoint.duplicates;
    }
    
    return count + duplicates;
}


function addLine(i, j, points, slopes, count, hzLine, duplicates){
    
    let [x1,y1] = points[i];
    let [x2,y2] = points[j];
    
    if(x1===x2 && y1===y2){
        duplicates++;
    }else if(y1===y2){
        hzLine++;
        count =Math.max(count,hzLine);
     
    } else {
        let slope = ((x1-x2)/(y1-y2));
        let pointCount = slopes.get(slope) ? slopes.get(slope) : 1;
        slopes.set(slope,pointCount+1);
        count = Math.max(count, slopes.get(slope)) ;
    }
   return {count, duplicates}
}

console.log(maxPoints(points));
