/**
 * Alien language char sorting in their alphabetical order
 * @param {*} words 
 */

const find_order = function(words){
  
    //inDegree and graph init
    
    const inDegree = {};
    const graph = {};
    
    words.forEach((word)=>{
      
      [...word].forEach((char) =>{
        
        inDegree[char] = 0; //creating property for char with value =0;
        graph[char] = []; //empty adjecencyList
        
      })
    })
    
    
    //graph and inDegree finding 
    
    for(let i=0; i< words.length-1; i++){
      
      const word1 = words[i], 
            word2 = words[i+1];
      
      for(let j=0; j < Math.min(word1.length, word2.length); j++){
        
        const parent = word1[j], child = word2[j];
        if(parent !== child){
          
          graph[parent].push(child);
          inDegree[child] +=1;
          break; //based on first non matching char it is able to find out which char is bigger in alian language
          //so break when non-matching char found 
        }
        
      }
    }
    
    const sources = []; 
    const chars = Object.keys(inDegree);
    
    chars.forEach((char) =>{
      
      if(inDegree[char]===0){
        sources.push(char);
      }
    })
    
    
    const sortedOrder = [];
    
    while(sources.length>0){
      
      const vertex = sources.shift();
      sortedOrder.push(vertex);
      
      graph[vertex].forEach((child) =>{
        
        inDegree[child] -=1;
        if(inDegree[child]===0){
          
          sources.push(child)
        }
        
      })
      
    }
    
    
    if(sortedOrder.length ===chars.length){
      console.log(sortedOrder.join(''))
    }
  }
  
  console.log("Sorted order in dictionary")
  console.log(find_order(["cab", "aaa", "aab"]))
  console.log("Sorted order in dictionary")
  console.log(find_order(["ywx", "xww", "xz", "zyy", "zwz"]))
  
  