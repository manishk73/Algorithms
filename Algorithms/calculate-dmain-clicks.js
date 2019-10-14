/*

user0 = ["/start.html", "/pink.php", "/register.asp", "/orange.html", "/red.html"]
user1 = ["/start.html", "/green.html", "/blue.html", "/pink.php", "/register.asp", "/orange.html"]
user2 = ["/red.html", "/green.html", "/blue.html", "/pink.php", "/register.asp"]
user3 = ["/blue.html", "/logout.php"]

Sample output:

findContiguousHistory(user0, user1)
   /pink.php
   /register.asp
   /orange.html

findContiguousHistory(user1, user2)
   /green.html
   /blue.html
   /pink.php
   /register.asp

findContiguousHistory(user0, user3)
   (empty)

findContiguousHistory(user2, user3)
   /blue.html

findContiguousHistory(user3, user3)
   /blue.html
   /logout.php

*/



var user0 = [ "/start.html", "/pink.php", "/register.asp", "/orange.html", "/red.html" ];
var user1 = [ "/start.html", "/green.html", "/blue.html", "/pink.php", "/register.asp", "/orange.html" ];
var user2 = [ "/red.html", "/green.html", "/blue.html", "/pink.php", "/register.asp" ];
var user3 = [ "/blue.html", "/logout.php" ];



let counts = [ "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "2,en.wikipedia.org",
    "1,es.wikipedia.org",
    "1,mobile.sports" ];

/*google.com - 900
com - 900


("google.com",900)*/

const calculateClicksByDomain = function(counts){
  
  let map = new Map();
  for(let i=0; i< counts.length; i++){
    
      let data = counts[i].split(",");
      addCount(data[0],data[1],map);
      
  }  
  
  console.log(map);
}  

const addCount = function(count, dataStr,map){
  
     let domain = dataStr.split("."); 
     let domainStr = "";  
     for(let i = domain.length-1; i>=0 ; i-- ){
       domainStr =  domainStr===""? domain[i] : domain[i] + "."+ domainStr ;
       let total = getDomainTotal(map, domainStr);
       total = total + Number(count);
       map.set(domainStr,total);
     }  
  
} 

const getDomainTotal = function(map,domainStr){
  
    if(map.has(domainStr)){
      let val = map.get(domainStr);
      map.delete(domainStr);
      return val; 
    } else {
      return 0;
    }
} 

calculateClicksByDomain(counts);