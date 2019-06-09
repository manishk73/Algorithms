/*
Implement (some of) the JavaScript Promise/A+ API. The Promise object is used for asynchronous computations.

A Promise represents a value which may be available now, or in the future, or never.

Syntax

```
new Promise(function(resolve, reject) { ... } );
```

Credit Karma
*/

let CKPromise = function(func){
  
  let resolvedCallback = null; 
  let errorCallback = null; 
  this.then = function(func){
    resolvedCallback = func;
    return this;
  }  
  
  this.catch = function(func){
    errorCallback =func;
  }
  function resolved(resolvedParam){
    
    if(resolvedCallback) {
      resolvedCallback(resolvedParam);
    }
    
  }
  function reject(rejectParam){
    
    if(errorCallback){
      errorCallback(rejectParam);
    }
    
  }
  func(resolved,reject);
}

new CKPromise(function(resolved, reject) {

  setTimeout(function() {
    if (Math.random() >= 0.5) {
      reject(new Error('Promise Rejected'))
    } else {
      resolved('Hello World')
    }
  }, 100)

}).then(function(data) {
  console.log("data:",data)
}).catch(function(err) {
  console.log("err:",err)
})