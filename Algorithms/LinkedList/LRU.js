
/*

Least Recently Used Cache implementation 

*/

/**
 * @param {number} capacity
 */

class Node{
  
  constructor(key, value){
    
    this.key = key;
    this.value = value; 
    this.prev = null;
    this.next = null; 
  }
}
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head; 
    this.size = 0;
    this.moveNodeToHead = function(node){
      
      this.removeNode(node);
      this.addNode(node);
     
    }
    this.addNode = function(node){
      
      //inserting node after head 
      node.prev = this.head; 
      node.next = this.head.next; 
      
      this.head.next.prev = node; 
      this.head.next = node;
      
    }
    this.removeNode = function(node){

      let prevNode = node.prev; 
      let nextNode = node.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;   

    }
    this.popFromTail = function(){
      
     let popNode = this.tail.prev; 
     this.removeNode(popNode);
     return popNode;
   }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
    let node = this.cache.get(key);
    if(!node) return -1;
    this.moveNodeToHead(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
     let node = this.cache.get(key);
     //adding new node in cache if not found  
     if(!node){
       
       node = new Node(key, value);
       this.cache.set(key, node);
       this.addNode(node);
       this.size++;
       //remove least used node 
       if(this.size> this.capacity){
         
         let node = this.popFromTail();
         this.size--;
         this.cache.delete(node.key);
       }
       
     } else {
       //updating existing node  
       node.value = value;
       this.moveNodeToHead(node);
     }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


let cache = new LRUCache(10);