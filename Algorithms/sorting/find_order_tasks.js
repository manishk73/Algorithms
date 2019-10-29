/**
Topological Sorting - Big O (V+E)
**/

function find_order(tasks, prerequisites){
  
    const sortedOrder = []; 
    const inDegree = Array(tasks).fill(0);
    const graph = Array(tasks).fill(0).map(() => []);
    
    prerequisites.forEach((pre) => {
        let source = pre[0], child = pre[1]; 
        graph[source].push(child);
        inDegree[child]++;
    })
    
    const sources = []; //queue
    
    for(let i=0; i < inDegree.length; i++ ){
      
      if(inDegree[i]===0){
        sources.push(i);
      }
    }
    
    while(sources.length > 0){
      
      let vertext = sources.shift();
      sortedOrder.push(vertext);
      graph[vertext].forEach((child) =>{
        
        inDegree[child] -=1;
        if(inDegree[child] ===0){
          sources.push(child);
        }
      })
      
    }
    if(sortedOrder.length !== tasks){
      return [];    
    }                         
    return sortedOrder;                         
  }
  
  const tasks = 6, prerequisites = [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]];
  
  console.log(find_order(tasks, prerequisites));
  
  