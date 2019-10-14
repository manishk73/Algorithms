/*Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.*/

/*O(n * s)*/

/*
1. Input: {1, 2, 3, 7}, S=6
Output: True
The given set has a subset whose sum is '6': {1, 2, 3}

2. Input: {1, 2, 7, 1, 5}, S=10
Output: True
The given set has a subset whose sum is '10': {1, 2, 7}

3. Input: {1, 3, 4, 8}, S=6
Output: False
The given set does not have any subset whose sum is equal to '6'.
*/

let nums = [1, 3, 4, 8]; //ans false 

function isSubsetExist(nums, sum){
  
   if(sum===0 && nums.length===0) return true;
  
   if(sum >0 && nums.length===0) return false;
   
   let dp = [];
   function checkRecursion(dp, nums,sum, currentIndex){
     
     if(sum===0) return true;
     if(currentIndex >= nums.length) return false;
     
     dp[currentIndex] = dp[currentIndex] || [];
     
     if( typeof dp[currentIndex][sum] !== "undefined"){
        return dp[currentIndex][sum];
     } 
     if(nums[currentIndex] <= sum) {
       
       if(checkRecursion(dp, nums, sum - nums[currentIndex], currentIndex+1)){
         dp[currentIndex][sum] = true;
         return true;
       }
     }
     dp[currentIndex][sum] = checkRecursion(dp, nums, sum, currentIndex+1);
     return dp[currentIndex][sum];
     
   } 
   return checkRecursion(dp, nums, sum, 0);   
}
  
console.log(isSubsetExist(nums, 6));

