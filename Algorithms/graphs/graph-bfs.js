function Graph(vertextCount){
  
  this.vertext = vertextCount;
  this.adjList = new Map();
  
}

Graph.prototype.addNode = function(node){
  
  if(!this.adjList.get(node))
    this.adjList.set(node,[]);
}

Graph.prototype.addEdge = function(node1,node2){
  
    this.adjList.get(node1).push(node2);
    this.adjList.get(node2).push(node1);
}

Graph.prototype.print = function(){
  
   let str = ""; 
   for(let [key, value] of this.adjList ) {
     
     str = str + `${key} => ${value} ,`;
   }
   console.log(str);
}

//Time complexity O(V+E) // V- vertices, E- edges or O(|V|)
Graph.prototype.bfs = function(source){
  
  //if node's does not start with 0 then better to use map to store visited status 
  let visited = new Map();
  let queue = [];
  
  //push source node from where starting BFS 
  queue.push(source);
  
  //Mark starting node as  
  visited.set(source,true);
  
  let str = "";
  while(queue.length>0){
    
    source = queue.shift();
    str =  str + " " + source; 
    
    let edges = this.adjList.get(source); 
    
    for(let i=0; i < edges.length; i++){
      
      let isVisited = visited.get(edges[i]);  
      if(isVisited!==true){
        
         visited.set(edges[i],true);
         queue.push(edges[i]);
      }
    }
    
  }
  console.log(str);
}

Graph.prototype.dfs = function(){
  
  
}

let myGraph = new Graph(4);
for(let i=0; i < 4; i++)
  myGraph.addNode(i);

myGraph.addEdge(0,1);
myGraph.addEdge(0,2);
myGraph.addEdge(1,2);
myGraph.addEdge(2,3);
myGraph.addEdge(3,3);
myGraph.print();
myGraph.bfs(2);