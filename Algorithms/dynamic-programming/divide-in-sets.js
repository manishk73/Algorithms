/*Given a set of positive numbers, find if we can partition it into two subsets such that the 
sum of elements in both subsets is equal.*/

/*O(2 ^n)*/

let nums = [1, 1, 3, 4, 7];

function can_partition(nums){
  
  let total =0;
  for(i=0; i< nums.length; i++){
    total+=nums[i];
  }
  
  //odd sum numbers can not be partitioned in 2 sets 
  if(total%2 !==0) return false; 
  return checkPartitionRecursive(nums, total/2, 0);
}

function checkPartitionRecursive(nums, sum, currentIndex){
  
    if(sum===0) return true;

    if(currentIndex >= nums.length || nums.length===0) return false;
  
    //include number in sets when num is less or equal to sum
  
    if(nums[currentIndex] <= sum){
      
      if(checkPartitionRecursive(nums, sum-nums[currentIndex], currentIndex+1)) return true;
    }
  
    return checkPartitionRecursive(nums, sum, currentIndex+1);
}

console.log(can_partition(nums));


/**
 * Top-Down Approach: Use memoization to optimize solution.
 * Above solution optimized using memoization as below   
 ** */


function can_partition(nums){
  
    let total =0;
    for(i=0; i< nums.length; i++){
      total+=nums[i];
    }
    
    //odd sum numbers can not be partitioned in 2 sets 
    if(total%2 !==0) return false; 
    let dp = [];
    return checkPartitionRecursive(dp, nums, total/2, 0);
  }
  
  function checkPartitionRecursive(dp,nums, sum, currentIndex){
    
      if(sum===0) return true;
  
      if(currentIndex >= nums.length || nums.length===0) return false;
    
      dp[currentIndex] = dp[currentIndex] || [];
      if(typeof dp[currentIndex][sum] !== "undefined") dp[currentIndex][sum] ;

      //include number in sets when num is less or equal to sum
    
      if(nums[currentIndex] <= sum){
        
        if(checkPartitionRecursive(nums, sum-nums[currentIndex], currentIndex+1)) {
          dp[currentIndex][sum] = true;
          return true;
        }
      }
      dp[currentIndex][sum] =checkPartitionRecursive(nums, sum, currentIndex+1); 
      return dp[currentIndex][sum];
  }
  
  console.log(can_partition(nums));