/**
 * O(n)
 */
const bills = [10,10];
var lemonadeChange = function(bills) {
    
    let tens=0, fives=0; 
  
    for(let i=0; i< bills.length; i++){
      
      if(bills[i]===5){
        
        fives+=1;
        
      } else if(bills[i]===10){
        
        if(fives <=0){
          return false;
        }
        fives-=1;
        tens+=1;
      } else if(bills[i]===20){
        
        if(tens <=0){
          
          if(fives < 3){
            return false; 
          }
          five -=3;
        } else {
          
          if(fives<=0){
            return false
          }
          
          tens-=1; 
          fives-=1
        }
      }
    }
  return true;
};

console.log(lemonadeChange(bills))