function method(n) 
{
  if (n < 2) return false;
  
  for (var i = 2; i < n; i++) {
    if (n%i == 0) {
      return false;
    }
  }

  return true;
}

// n: if the number has as divider b/n 2 and n-1, then false; true otherwise
// Complexity? Big-O?
//   Time complexity? O(n)

console.log('2 '+method(2));
console.log('3 '+method(3));
console.log('4 '+method(4));
console.log('5 '+method(5));
console.log('6 '+method(6));