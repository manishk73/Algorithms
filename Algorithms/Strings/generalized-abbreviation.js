var generalizedAbbrivation = function(word){
  
    let abbList = []; 
    //let abbBuilder = [];
  
    function createAbbrivations(abbList, abbBuilder, word, idx, charCount){
      
      let len = abbBuilder.length;
      if(idx === word.length){
        
        if(charCount!=0) {
           abbBuilder.push(charCount);
        }
        abbList.push(abbBuilder.join(''));
      } else {
        
        createAbbrivations(abbList, abbBuilder, word, idx+1, charCount+1);
        if(charCount!=0) abbBuilder.push(charCount);
        abbBuilder.push(word[idx]);
        createAbbrivations(abbList, abbBuilder, word, idx+1, 0);
      }
      
      abbBuilder.length = len;
    }
    
    createAbbrivations(abbList,[],word, 0, 0);
    return abbList;
}

const word = "word";

console.log(generalizedAbbrivation(word));
