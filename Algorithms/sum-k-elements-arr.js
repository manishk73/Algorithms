function slidingWindow(arr,k){
  
  let max_sum =0 ;
  for(let i=0; i < k; i++){
    max_sum+= arr[i];
  }
  let window_sum = max_sum;
  for(let i=k; i< arr.length;i++){
    
      window_sum += arr[i] - arr[i-k];
      max_sum = Math.max(window_sum,max_sum);
  }
  console.log(max_sum);
}
arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
slidingWindow(arr,4)