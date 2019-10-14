let profits = [1, 6, 10, 16];
let weights = [1, 2, 3, 5];

let solveKnapsack = function(profits, weights, capacity){
  
  // if capacity=0 or profits/weights length=0 or profilts.len != weight.len then max profit 0
  let n = profits.length;
  if(capacity <=0 || n ===0 || weights.length !==n) return 0;
  
  let dp = new Array(n).fill(0).map(()=> new Array(capacity+1).fill(0));
  
  //when capacity=0, profit will be zero
  
  for(let index=0; index < n ; index++){
    dp[index][0] = 0;    
  }
  
  
  //when we have only one weight which is less than capacity then we will take it 
  for(let c=0; c <= capacity; c++){
    
    if(weights[0] <= c) dp[0][c]= profits[0];
  }
  
  //solve for all other sub-arrays 
  
  for(let i=1 ; i < n; i++) {
    
    for(let c=1; c <= capacity; c++ ){
      
      let profit1=0, profit2=0;
      
      //include item if it is not more than capacity 
      if(weights[i] <= c) profit1 = profits[i] + dp[i-1][c-weights[i]];
      
       profit2 = dp[i-1][c];
      
      dp[i][c] = Math.max(profit1,profit2);
    }
    
  }
  
  //selected weights 
  let selectedWeight="";
  let tatalProfit = dp[weights.length-1][capacity];
  let remainingCapacity = capacity;
  
  for(let i= weights.length-1; i >0; i--){
    
    if(tatalProfit !== dp[i-1][remainingCapacity]){
      
      selectedWeight = `${weights[i]} ${selectedWeight}`;
      tatalProfit = tatalProfit - profits[i];
      remainingCapacity = remainingCapacity - weights[i];
    }
  }
  
  if(tatalProfit !==0) selectedWeight = `${weights[0]} ${selectedWeight}`;
  
  console.log(` Selected Weights: ${selectedWeight}`);
  
  return dp[n-1][capacity];
}

let maxProfit =  solveKnapsack(profits, weights, 7);
console.log(maxProfit);

