/*

Given two binary trees and imagine that when you put one of them to cover the other, 
some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that 
if two nodes overlap, then sum node values up as the new value of the merged node. 
Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
   
*/

function TreeNode(value){
  this.value = value;  
  this.left = null;
  this.right = null;
}

var mergeTrees = function(t1, t2,root=true) {
    if(!t1 && !t2 && root) {
        return new TreeNode(null);
    }
    if(!t1 && !t2) {
        return null;
    }
    if(!t1 || !t2 ){
        return t1 || t2;
    }
   
    let root = new TreeNode(t1.val + t2.val);
    
    root.left = mergeTrees(t1.left, t2.left, false);
    root.right = mergeTrees(t1.right, t2.right, false);
    return root;
};


//Another solution O(n+m);

class TreeNode {
  
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
  
}

class Tree {
  
  mergeTree(t1,t2){
    
    if(!t1 && !t2) {
      return null;
    }
    
    if(!t1 || !t2){
      return t1 || t2 ;
    }
    
    let node = new TreeNode(t1.key + t2.key);
    node.left = this.mergeTree(t1.left, t2.left);
    node.right = this.mergeTree(t1.right, t2.right);
    return node;
  }
}

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(3);
tree1.left.left = new TreeNode(5);
tree1.right = new TreeNode(2);


let tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.left.right = new TreeNode(4);
tree2.right = new TreeNode(3);
tree2.right.right = new TreeNode(7);

let mergedTree = new Tree()
   .mergeTree(tree1, tree2);
console.log(mergedTree);