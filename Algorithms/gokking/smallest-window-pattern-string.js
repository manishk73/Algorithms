let smallestSubstringWindow = function(str, pattern){
  
  let permitutionMap = new Map();
  
  for(let char of pattern){
    
    if(permitutionMap.has(char)){
      permitutionMap.set(char,permitutionMap.get(char)+1);
    } else {
      permitutionMap.set(char,1);
    }
  } 
  
  
  let winStart =0; let matchedCount =0;
  let minLength = str.length + 1; //adding 1 cause pattern len can be equal to str length
  let substrStart=0;
  
  for(let winEnd=0; winEnd < str.length; winEnd++ ){
    
    let startChar = str[winEnd];
    
    if(permitutionMap.has(startChar)){
      permitutionMap.set(startChar,permitutionMap.get(startChar)-1);  
      if(permitutionMap.get(startChar)>=0){
        matchedCount+=1; 
      }
    }
    
    while(matchedCount===pattern.length){
      
      if(minLength > winEnd-winStart+1){
        
        minLength =  winEnd-winStart+1;
        substrStart= winStart;
        
      }
      
      let delChar = str[winStart];
      winStart+=1;
      
      if(permitutionMap.has(delChar)){
       
        if(permitutionMap.get(delChar)===0){
            matchedCount-=1;
        }
        permitutionMap.set(delChar,permitutionMap.get(delChar)+1);
      }  
     
    }
    
  }
  
  if(minLength > str.length) return "";
  console.log(minLength)
  return str.substr(substrStart,minLength); 
}

let string="abdabca";  let pattern="abc";

console.log(smallestSubstringWindow(string,pattern));
