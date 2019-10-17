/*This is aync task, randomly deciding success and failures*/
function task(cb){
  
  setTimeout(()=>{
    
    let random = Math.floor(Math.random()*10);
    console.log(random);
    if(random > 5){
      let data = {success: true};
      cb(null, data);
    } else {
      cb("some error");
    }
    
  },0);
}



/*executor function executes aync task in sequence and if task failed will stop executing*/
function executor(tasks){
  
  if(tasks.length ==0){
    console.log("empty task list, can't run executor");
    return;
  }
  let task = tasks.shift();
  let callback = function(err, data){
      if(err!==null){
        console.log("some error, stopping now", err);
        return; 
      }
      console.log("successful task", data);
      if(tasks.length>0){
         task = tasks.shift();
         task(callback);
      }
  };
  
  task(callback);
}

let tasks = [task, task, task, task];

executor(tasks);