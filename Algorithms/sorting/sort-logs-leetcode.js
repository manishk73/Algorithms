const logs = ["dig1 8 1 5 1",
              "let1 art can",
              "dig2 3 6",
              "let2 own kit dig",
              "let3 art zero"];
/*Output: ["let1 art can",
"let3 art zero",
"let2 own kit dig",
"dig1 8 1 5 1",
  "dig2 3 6"]*/
function sortLogs(logs){
  const sortOnStrings = (split1, split2) =>{
    let i=1;
    while(true){
      
      if(typeof split1[i] === "undefined") break;
      if(typeof split2[i] === "undefined") break;
      
      if(split1[i] < split2[i]) return -1;
      if(split1[i] > split2[i]) return 1;
      i++;      
    }
    if(split1[0] < split2[0]) 
      return -1
    else if(split1[0] > split2[0]) 
      return 1;
    else 
      return 0;
  };
  const isDigit = function(val){
    
   return Number.isInteger(parseInt(val));
    
  } 
  const sorted = logs.sort((a,b) => {
    
      const split1 = a.split(" ");
      const split2 = b.split(" ");
      const isDigit1 = isDigit(split1[1]); 
      const isDigit2 = isDigit(split2[1]); 
      if(!isDigit1 && !isDigit2) {
        
          return sortOnStrings(split1, split2);
      }
      console.log( "isDigit1:" + isDigit1 + " isDigit2:" + isDigit2);
      if(isDigit1 && !isDigit2){
         return 1;
      } else if(!isDigit1 && isDigit2) {
        return -1;
      } else 
        return 0;
  });
  
  console.log(sorted);
}



const Input=["6p tzwmh ige mc", 
"ns 566543603829", 
"ubd cujg j d yf", 
"ha6 1 938 376 5", 
"3yx 97 666 56 5", 
"d 84 34353 2249", 
"0 tllgmf qp znc", 
"s 1088746413789", 
"ys0 splqqxoflgx", 
"uhb rfrwt qzx r", "u lrvmdt ykmox", 
"ah4 4209164350", "rap 7729 8 125", 
"4 nivgc qo z i", "apx 814023338 8"]

/*
Fails for following input 
Input=["6p tzwmh ige mc", 
"ns 566543603829", 
"ubd cujg j d yf", 
"ha6 1 938 376 5", 
"3yx 97 666 56 5", 
"d 84 34353 2249", 
"0 tllgmf qp znc", 
"s 1088746413789", 
"ys0 splqqxoflgx", 
"uhb rfrwt qzx r", "u lrvmdt ykmox", 
"ah4 4209164350", "rap 7729 8 125", 
"4 nivgc qo z i", "apx 814023338 8"]

Output=["ubd cujg j d yf",
"u lrvmdt ykmox",
"4 nivgc qo z i",
"uhb rfrwt qzx r",
"ys0 splqqxoflgx",
"0 tllgmf qp znc",
"6p tzwmh ige mc",
"ns 566543603829",
"ha6 1 938 376 5",
"3yx 97 666 56 5",
"d 84 34353 2249",
"s 1088746413789",
"ah4 4209164350","rap 7729 8 125",
"apx 814023338 8"]
*/
sortLogs(Input)
