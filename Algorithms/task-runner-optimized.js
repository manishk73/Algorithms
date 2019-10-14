// Your code here

const TaskRunner = function(max){
  
  const tasks = [];
  let started = false;
  let runningTasks = 0;
  let executing =false;
  this.push = (task)=>{
    tasks[tasks.length] = task;
    if(!executing) execute()
  }
  function reportBack(){
    for(let i=0; i < tasks.length-1; i++){
      tasks[i] = tasks[i+1];
    }
    runningTasks--;
    if(tasks.length>0){
      tasks.length = tasks.length-1;
      execute();
    }
  }
  
  function execute(){
    executing=true;
    for(let i = runningTasks; i< max && i< tasks.length; i++){
      tasks[i](reportBack);
      runningTasks++;
    }
    executing=false;
  }
}


// Testing code
const runner = new TaskRunner(3);
/*
const task1 = cb => {
    // do something
    // call cb when done
    cb();
};
*/
runner.push((cb) => setTimeout(() => {
  console.log('End Task 0');
  cb();
}, 8000));
runner.push((cb) => setTimeout(() => {
  console.log('End Task 1');
  cb();
}, 2000));
runner.push((cb) => setTimeout(() => {
  console.log('End Task 2');
  cb();
}, 1000));
runner.push((cb) => setTimeout(() => {
  console.log('End Task 3');
  cb();
}, 3500));
runner.push((cb) => setTimeout(() => {
  console.log('End Task 4');
  cb();
}, 1500));
runner.push((cb) => setTimeout(() => {
  console.log('End Task 5');
  cb();
}, 1000));

/**
 * Should output
 * End Task 2
 * End Task 1
 * End Task 4
 * End Task 5
 * End Task 3
 */
