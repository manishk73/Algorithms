/*
Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these 
items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C’. 
Each item can only be selected once, which means either we put an item in the knapsack or we skip it.
*/
let knapsackRecursive = function(weights, profits, capacity){
  let dp = [];
  let findMaxProfit = function(weights, profits, capacity, index){
    
    if(capacity<=0 || index >= weights.length) return 0;
    
    dp[index] = dp[index] || [];
    if(dp[index][capacity]!== undefined){
      
      return dp[index][capacity];
    }
       
    let profit1 = 0;
    if(weights[index] <= capacity){
      
      profit1 = profits[index] + findMaxProfit(weights, profits, capacity-weights[index], index+1);
    }
    
    let profit2 =  findMaxProfit(weights, profits, capacity, index+1);
    dp[index][capacity] = Math.max(profit1, profit2)
    return dp[index][capacity];
  }
  return findMaxProfit(weights, profits, capacity, 0);
} 

let profits = [1, 6, 10, 16];
let weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${knapsackRecursive(weights,profits ,7)}`);
console.log(`Total knapsack profit: ---> ${knapsackRecursive(weights, profits ,6)}`);

