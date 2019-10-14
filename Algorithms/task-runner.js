/*
TaskA
TaskC
TaskB

It should execute in order of A,B,C
*/

class TaskRunner {
  
  constructor(){
    this.queue = [];
    this.executedOrder=0;
  }
  
  run(task){
    
    if(task.order=== (this.executedOrder+1)){
      //if the task in order then execute immediately
      task.executeTask.call(null,task.name);
      this.executedOrder++;
      
      while(this.queue.length>0){
        
        let nextTask = this.queue[0];
        if(nextTask.order === (this.executedOrder+1)){
          task.executeTask.call(null,nextTask.name);
          this.executedOrder++;
          this.deleteExecutedTask(); //improvement here to delete all executed tasks once
        } else {
          break;
        }
        
      }
    } else {
      this.addTask(task);
    }
  }


  deleteExecutedTask(){
    
      if(this.queue.length>0){
        for(let i=0; i < this.queue.length;i++){
          this.queue[i] = this.queue[i+1];  
        }
        this.queue.length = this.queue.length-1;
        
      }
      
    
  }


  addTask(task){
    
     let i = this.queue.length-1;
     while(i>=0 && this.queue[i].order >task.order){
       //need to add element so increasing size of array dynamically 
       this.queue[i+1] = this.queue[i]; 
       i--;
     }
     this.queue[i+1] = task;
   }    
}


//arr = [7,5,9,3,2,1]

let objTaskRunner = new TaskRunner();

let taskfunction = function(taskname){
  console.log(`running task ${taskname}`);
}


let task2 = {
  
  executeTask: taskfunction,
  name: "task2",
  order: 2
};

objTaskRunner.run(task2);

let task1 = {
  
  executeTask: taskfunction,
  name: "task1",
  order:1
};
objTaskRunner.run(task1);


let task4 = {
  
  executeTask: taskfunction,
  name: "task4",
  order:4
};
objTaskRunner.run(task4);



let task5 = {
  
  executeTask: taskfunction,
  name: "task5",
  order:5
};
objTaskRunner.run(task5);



let task3 = {
  
  executeTask: taskfunction,
  name: "task3",
  order:3
};
objTaskRunner.run(task3);



let task7 = {
  
  executeTask: taskfunction,
  name: "task7",
  order:7
};
objTaskRunner.run(task7);

