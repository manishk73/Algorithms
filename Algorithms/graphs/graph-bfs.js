
class Graph {
  
  constructor(no_vertext, isDirected=false){
    this.vertext = no_vertext;
    this.adjList = new Map();
    this.isDirected = isDirected;
    for(let i=0; i < this.vertext; i++){
      this.adjList.set(i,[]);
    }
    this.dfsForVertext = this.dfsForVertext.bind(this);
  }
  addEdge(src, dest){
    
     if(this.adjList.has(src)){
      
      
      if(this.adjList.get(src).indexOf(dest)===-1){
        this.adjList.get(src).push(dest); 
      } 
       
      if(!this.isDirected){
        if(this.adjList.get(src).indexOf(src)===-1){
          this.adjList.get(dest).push(src);
        }
        
      }
      
     }
    
  }
  printGraph(){

    for(let [vertext, list] of this.adjList){
      
      console.log("Adjecency list of vertext =",vertext);
      console.log("head =>");
      for(let a of list){
        console.log(" -> ",a);
      }
      
    }
  }
  
  bfs(vertext){
    
    if(!this.adjList.has(vertext)){
      console.log("vertext not found");
      return;
    }
    
    let queue = [];
    let visited = new Map(); 
    //pushing source vertext in queue and mark visited in BFS 
    visited.set(vertext,true);
    queue.push(vertext);
    let bfsVertices = ""; 
    while(queue.length >0){
      
      //getting vertext to be traversed from the queue 
      let curVertext = queue.shift();
      
      bfsVertices = bfsVertices + " " + curVertext;
      let adjecentVetices = this.adjList.get(curVertext);
      
      for(let adjVer of adjecentVetices){
        
         //check if it is already visted, if its in visited map then already visited  
         if(!visited.has(adjVer)){
           visited.set(adjVer,true);
           queue.push(adjVer);
         }
      }
    }
    console.log("BFS Traversal =>", bfsVertices);
  }
  
  //when vertext is provided , this method will not traverse disconnected nodes
  dfsForVertext(vertext){
    
    let visited = new Map();
    let dfsTraversalNodes = "";
    let dfsTraversal = (v,visited) => {
      
      visited.set(v, true);
      dfsTraversalNodes = dfsTraversalNodes + " " + v;
      
      let adjNodeList = this.adjList.get(v);
      
      for(let node of adjNodeList){
        
        //if not visited 
        if(!visited.has(node)){
          
          dfsTraversal(node,visited);
        }
        
      }
      
    }
    
    dfsTraversal(vertext, visited);
    console.log("DFS Traversal => ", dfsTraversalNodes);
  }
  
  dfsWithoutVertext(){
    
    let visited = new Map();
    let dfsTraversalNodes = "";
    let dfsTraversal = (v,visited) => {
      
      visited.set(v, true);
      dfsTraversalNodes = dfsTraversalNodes + " " + v;
      
      let adjNodeList = this.adjList.get(v);
      
      for(let node of adjNodeList){
        
        //if not visited 
        if(!visited.has(node)){
          
          dfsTraversal(node,visited);
        }
        
      }
      
    }
    
    for(let [vertext] of this.adjList){
      
      if(!visited.has(vertext))
        dfsTraversal(vertext,visited);
    }
    console.log("Another DFS =>", dfsTraversalNodes)
  }
}

let graph = new Graph(4,true);
/*graph.addEdge(0,1);
graph.addEdge(0,4);
graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(1,4);
graph.addEdge(2,3);
graph.addEdge(3,4);
graph.printGraph();
*/
graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,2);
graph.addEdge(2,0);
graph.addEdge(2,3);
graph.addEdge(3,3);
graph.printGraph();
graph.bfs(2);

graph.dfsForVertext(2);

graph.dfsWithoutVertext();


/*******************************/
/* This is OLD style ************/
/*******************************/
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