
class Graph{
  
  constructor(){
    this.adjList = new Map();
  }
  
  addEdge(node1, node2){
    
    if(!this.adjList.get(node1)){
      this.adjList.set(node1,[]);
    }
    
    if(!this.adjList.get(node2)){
      this.adjList.set(node2,[]);
    }
    this.adjList.get(node1).push(node2);
    this.adjList.get(node2).push(node1);
  }
  
  print(){
    
    for(let [key,value] of this.adjList){
      
      console.log(`${key} => ${value}`);
    }
  }
  
}


let graph = new Graph();

graph.addEdge(0,1);
graph.addEdge(0,4);
graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(1,4);
graph.addEdge(2,3);
graph.addEdge(3,4);
graph.print();

/*=======================*/
function Graph(){
  
  this.__adjList = new Map();
  
}

Graph.prototype.addNode = function(node){
 
  if(!this.__adjList.get(node)); 
    this.__adjList.set(node,[]);
}

//undirected graph edges 
Graph.prototype.addEdge = function(node1, node2){
 
   if(!this.__adjList.get(node1)){
     this.__adjList.set(node1,[]);
   } 
   this.__adjList.get(node1).push(node2);
  
   if(!this.__adjList.get(node2)){
     this.__adjList.set(node2,[]);
   } 
   this.__adjList.get(node2).push(node1);
}

Graph.prototype.print = function(){
  
  for(let [key, value] of this.__adjList){
    
    console.log(`${key} =>${value.join(' ')}`);
  }
}  
let test = new Graph();

let vertices = [1,2,3,4,5,6,7];
for(let i=0; i < vertices.length; i++){
  test.addNode(vertices[i]);  
}

test.addEdge(1,2);
test.addEdge(1,4);
test.addEdge(2,5);
test.addEdge(3,7);
test.addEdge(4,5);
test.addEdge(6,7);
test.addEdge(5,7);

test.print();



/*========================*/