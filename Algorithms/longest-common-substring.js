/*
THIS is google interview question 
*/

function longestSubstr(s1,s2,startIdx1=0,startIdx2=0){
  let results =[];
  for(let i=startIdx1; i<s1.length; i++){
    const result = [];
    const char = s1[i];
    let index = s2.indexOf(char,startIdx2)
    console.log("finding",char);
    if(index!==-1){
      result.push(char);
      result.push(...longestSubstr(s1,s2,i+1, index+1));
    }
    console.log(result);
    results.push(result);
   
  }
  const final = getLongest(results);
  return final.join('');
}

function getLongest(results){
  
  let longest =[];
  for(let i =0; i < results.length; i++){
    if(longest.length < results[i].length){
      longest = results[i];
    }
  }
  return longest;
}

let s1 = "ABAZDC";
let s2 = "BACBAD";


//s1 = "AGGTAB";
//s2 = "GXTXAYB";
//s1="ab";
//s2="aaaa";
console.log(longestSubstr(s1,s2));

//ABAD - result 



