
function getPhoneKeysMap(){
  let map = new Map();
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");  
  return map;
}

let letterCombinations = function(num){

  let map = getPhoneKeysMap();
  let combinations = []
  
  function getCombinations(combination, digits){
    
    if(digits.length===0){
      combinations.push(combination);
      return; 
    }
    
    let digit = digits.substring(0,1);
    let letters = map.get(digit);
    for(let i=0; i < letters.length; i++){
      
      let char = letters[i];
      //combination = combination + char;
      getCombinations(combination + char, digits.substr(1));
    }
  }
  getCombinations("",num.toString());
  console.log(combinations);
}

letterCombinations(235);