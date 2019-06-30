/*

DEF 

O(N) - N => number of nodes tree


Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

*/

class TreeNode {
  
  constructor(value){
    
    this.value = value;
    this.left = null; 
    this.right = null;
  }
}


let binaryTreeRoot = new TreeNode(12);
binaryTreeRoot.left = new TreeNode(7);
binaryTreeRoot.right = new TreeNode(1);
binaryTreeRoot.left.left = new TreeNode(9);
binaryTreeRoot.right.left = new TreeNode(10);
binaryTreeRoot.right.right = new TreeNode(5);

class BinaryTree{
  
  hasPath(root, sum){
    
    if(!root){
      return false;
    }
    
    //if it is leaf node and node value is matching with reminder in sum
    if(root.value === sum && !root.left && !root.right){
      
      return true;
    }
    
    return this.hasPath(root.left, sum-root.value) || this.hasPath(root.right, sum-root.value);
  }
  
}

let binaryTree = new BinaryTree();
console.log(binaryTree.hasPath(binaryTreeRoot,23));

console.log(binaryTree.hasPath(binaryTreeRoot,16));
