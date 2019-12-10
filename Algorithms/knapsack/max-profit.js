
const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
const capacity = 7; 

function calculateMaxProfit(profits, weights, capacity){
  
  let dp = new Array(profits.length).fill(0).map(x=> new Array(capacity+1).fill(0));
  var knapsackRecursive = function(dp, profits, weights, capacity, index){
    
    if(index >= weights.length){
      return 0; 
    }
    
    if(dp[index][capacity] !=0) {
      
      return dp[index][capacity];
    }
    
    let profit1 = 0; 
    
    if(weights[index] <= capacity){
      
      profit1 = profits[index] + knapsackRecursive(dp, profits, weights, capacity-weights[index] , index+1);
    }
    
    let profit2 = knapsackRecursive(dp, profits, weights, capacity , index+1);
    
    dp[index][capacity] = Math.max(profit1, profit2);
    return dp[index][capacity];
  }

  return knapsackRecursive(dp, profits, weights, capacity,0);
}

console.log(calculateMaxProfit(profits,weights,capacity));
