// job A
// job B
// job C 

// run A  -->  run A
// run C  -->  queue C 
// run B  -->  run B C


let JobScheduler = function(){
    let JobOrder =["A","B","C","D","E"];
    let joblist = [];
    
    /*this.schedule = function(job){
        joblist[joblist.length] = {
            job:job.fun,
            order:job.order
        };
        jobsorting();
    }*/
    function jobsorting(){
        
    }
    function run(scheduleJob){
        
        
        joblist[joblist.length] = {
            job:scheduleJob.job,
            name:scheduleJob.name
        };
        jobsorting();
        
        scheduledJob = joblist[i];
        
        if(job.name == scheduledJob.name){
            scheduledJob.job();
        } else {
            
        }
    }
}

let jobScheduer = new JobScheduler();

let jobA = {
    job: function(){},
    name:"A"
}
let jobB = {
    job: function(){},
    name:"B"
}
let jobC = {
    job: function(){},
    name:"C"
}
let jobD = {
    job: function(){},
    name:"D"
}
jobScheduer.run(jobC);
// Queue C
jobScheduer.run(jobA);
// run A 
jobScheduer.run(jobB);
jobScheduer.run(jobD);
jobScheduer.run(jobE);

