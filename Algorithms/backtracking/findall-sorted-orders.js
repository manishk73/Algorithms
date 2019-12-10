/**
 * O(V! * N)
 * V-tasks 
 * N- Number of prerequisits 
 * 
 * @param {*} tasks 
 * @param {*} prerequisites 
 */

const findAllOrders = function(tasks, prerequisites){
  
    const inDegree = Array(tasks).fill(0);
    const graph = Array(tasks).fill(0).map(x => []);
    
    //creating graph and finding inDegree (number of parents for child)
    prerequisites.forEach(prereqisite => {
      
      const parent = prereqisite[0],
            child = prereqisite[1];
      
      inDegree[child] +=1;
      graph[parent].push(child)
    })
    
    const sources = [];
    
    for(let index=0; index <inDegree.length; index++){
      
      //finding source vertices 
      if(inDegree[index] ===0){
        sources.push(index);
      }
    }
    
    
    const listSortedOrders=[], sortedOrders=[];
    print_all_topological_orders(graph, inDegree, sources, sortedOrders,listSortedOrders)
    
    return listSortedOrders;
  } 
  
  function print_all_topological_orders(graph, inDegree, sources, sortedOrders,listSortedOrders){
     
      
      
      if(sources.length>0){
        
        for(let i=0; i< sources.length; i++){
          
          const vertex = sources[i];
          sortedOrders.push(vertex);
          const nextCallSource = sources.slice(0); //making copy of source
          const removeIndex = nextCallSource.indexOf(vertex);
          nextCallSource.splice(removeIndex,1); //remove current vertex 
          
          graph[vertex].forEach(child =>{
            
            inDegree[child] -=1;
            
            if(inDegree[child]===0){
              nextCallSource.push(child)
            }
            
          })
          print_all_topological_orders(graph, inDegree, nextCallSource, sortedOrders,listSortedOrders)
          
          //add backtracking 
          const removeIndexLastProcessedVertex = sortedOrders.indexOf(vertex)
          sortedOrders.splice(removeIndexLastProcessedVertex,1);
          for(let i=0; i< graph[vertex].length; i++){
            //increase degree of child 
            const child = graph[vertex][i];
            inDegree[child] +=1;
          }
          
        }
        
      }
    
      if(sortedOrders.length===inDegree.length){
        //storing sorted order in list 
        listSortedOrders.push(sortedOrders.slice(0))
        console.log(sortedOrders);
        
      }
    
    }
  tasks = 4, prerequisites =[[3, 2], [3, 0], [2, 0], [2, 1]]
  const output = findAllOrders(tasks,prerequisites);
  
  