/*
DFS - Backtracking 

O(N) - cause we will traverse each node in tree
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
binaryTreeRoot.left.left = new TreeNode(4);
binaryTreeRoot.right.left = new TreeNode(10);
binaryTreeRoot.right.right = new TreeNode(5);

class BinaryTree{
  
  findAllPath(root, sum){
    
    let paths = []; let currentPath =[];
    function findPaths(root, sum, paths, currentPath){
      
      if(!root){
        return;
      }
    
      currentPath.push(root.value);
      
      //if it is leaf node and node value is matching with reminder in sum
      if(root.value === sum && !root.left && !root.right){
        paths.push(currentPath.slice());
      } else {
        findPaths(root.left, sum-root.value, paths, currentPath); 
        findPaths(root.right, sum-root.value, paths, currentPath);
      }
      currentPath.pop(); //does backtracking 
    }
    findPaths(root, sum, paths, currentPath);
    return paths;
  }
  
}

let binaryTree = new BinaryTree();
console.log(binaryTree.findAllPath(binaryTreeRoot,23));

//console.log(binaryTree.findAllPath(binaryTreeRoot,16));
