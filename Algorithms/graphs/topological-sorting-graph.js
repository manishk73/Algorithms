/*Gokking method*/

class Graph{
  
  constructor(){
    
    this.adjList = new Map();
   
  }
  sort(vertices, edges){
     
    let inDegrees = new Map();
    
    
    for(let i=0; i < vertices; i++){
      inDegrees.set(i,0);
      this.adjList.set(i,[]); 
    }
    
    for(let i=0; i < edges.length; i++){
      
      let [parent,child] = edges[i];
      //console.log(parent, child);
      this.adjList.get(parent).push(child);
      inDegrees.set(child,inDegrees.get(child)+1); 
    }
    //console.log(inDegrees);
    let sources = [];
    
    for(let [key,value] of inDegrees){
      
      if(value===0){
        sources.push(key);
      }
    }
    
    let sorted = [];
    while(sources.length >0){
      
      let vertex = sources.shift();
      sorted.push(vertex);
      let children = this.adjList.get(vertex);
      for(let i=0; i< children.length; i++){
        
          inDegrees.set(children[i],inDegrees.get(children[i])-1);
          if(inDegrees.get(children[i])===0){
            sources.push(children[i]);
          }
      }
      
    }
    //means it has cyclic loop
    if(sorted.length !==vertices) return [];
    
    return sorted;
  }
}


let graph = new Graph();
let vertices = 4;
let edges = [[3, 2], [3, 0 ],[ 2, 0] ,[2, 1 ]];
let sorted = graph.sort(4,edges);
console.log(sorted);

vertices = 7;
edges = [[6, 4 ], [ 6, 2 ],[ 5, 3] ,[5, 4],[3, 0],[3, 1],[3, 2 ],[4, 1]];
sorted = graph.sort(vertices,edges);
console.log(sorted);
