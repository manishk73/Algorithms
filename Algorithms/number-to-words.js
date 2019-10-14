/*
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
*/

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
     if(num ===0) return "Zero";
     let billion = Math.floor(num / Math.pow(10,9));
      let million = Math.floor((num - billion * Math.pow(10,9))/Math.pow(10,6));
      let thousand = Math.floor((num - billion * Math.pow(10,9) - million * Math.pow(10,6))/Math.pow(10,3));
      let rest = Math.floor((num - billion * Math.pow(10,9) - million * Math.pow(10,6)) - thousand * Math.pow(10,3));
      let res = "";
      if(billion !==0) {
         res = three(billion) + " Billion ";
      }

      if(million !==0) {
         res += three(million) + " Million ";
      }

      if(thousand !==0) {
         res += three(thousand) + " Thousand ";
      }

      if(rest !==0) {

         res += three(rest);
      }
      return res;
};

function one(num){
  
  let arr = [[1, "One"],[2,"Two"], [3, "Three"], [4, "Four"], [5, "Five"], [6, "Six"], [7, "Seven"], [8, "Eight"], [9, "Nine"]];
  let mapOnes = new Map(arr);
  if(mapOnes.has(num)) 
    return mapOnes.get(num);
  else 
    return "";
}
//console.log(one(4)); 

function tens(num){
  
  let arr = [[1, "Ten"],[2,"Twenty"], [3, "Thirty"], [4, "Forty"], [5, "Fifty"], [6, "Sixty"], [7, "Seventy"], [8, "Eighty"], [9, "Ninety"]];
  let tensMap = new Map(arr);
  if(tensMap.has(num)) 
    return tensMap.get(num);
  else 
    return "";
}

//console.log(tens(1));

function lessThen20(num){
  
   let arr = [[10, "Ten"],[11, "Eleven"],[12,"Twelve"], [13, "Thirteen"], [14, "Fourteen"], [15, "Fifteen"], [16, "Sixteen"], [17, "Seventeen"], [18, "Eighteen"], [19, "Nineteen"]];
   let map = new Map(arr);
   if(map.has(num)) 
      return map.get(num);
   else 
      return "";
}

function two(num){
  
  if(num===0) return "";
  if(num < 10) 
    return one(num);
  else if( num < 20){
    return lessThen20(num);
  } else {
    
    let tenner = Math.floor(num / 10);
    let rest = num - tenner * 10;
    if(rest !==0)
      return tens(tenner) + " " + one(rest);
    else 
      return tens(tenner);
  }
}


function three(num){
  
  let hundred = Math.floor(num/100);
  let rest = num - hundred * 100; 
  
  if(hundred !==0 && rest !==0){
     
    return one(hundred) + " Hundred " + two(rest);
    
  } else if(hundred !==0 && rest ===0){
    
    return one(hundred) + " Hundred ";
  } else if(hundred ===0 && rest !==0){
    
    return two(rest);
  }  
  
}