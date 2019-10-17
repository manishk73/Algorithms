
function Node(key){
  this.key = key;
  this.left = null;
  this.right;
}

function BinarySearchTree(){
  
  this.root = null;
  
  this.addNode = function(value){
    
    if(!this.root) {
      this.root = new Node(value);
      return this; 
    }
    
    function addTreeNode(root, value){
      
      if(!root){
        return new Node(value);
      }
      
      if(root.key > value){
        
        root.left = addTreeNode(root.left, value);
      } else {
        
        root.right = addTreeNode(root.right, value);
      }
      return root;
    }
    
    addTreeNode(this.root, value);
    return this;
  }
  
  this.findNode= function(key){
    
    function getNode(root, key){
      
      if(!root || root.key === key){
        
        return root;
      }
      
      if(root.key > key){
        
        return getNode(root.left, key);
      } else {
        
        return getNode(root.right, key);
      }
      
    }
    
    return getNode(this.root, key);
  }
  
  this.delete = function(key){
    
    function getMinNode(root){
      
      if(!root.left){
          return root;
      }
      
      return getMinNode(root.left);
      
    }
    function deleteNode(root, key){
      
      if(!root){
        return null;
      }
      
     
      if(root.key > key){
         //if node to be deleted is on left side 
        root.left = deleteNode(root.left, key);
      } else if (root.key < key) {
         //if node to be deleted is on right side 
        root.right = deleteNode(root.right, key);
      } else {
        
          //if node to be deleted is leaf node with no childs 
          if(!root.left && !root.right){
            root = null;
          } else if (!root.left){ // if node has right child node 
            root = root.right;
          } else if(!root.right){
             root = root.left;
          } else {
            //get node with min value from right tree when deleting node has 2 childs
            let minNode = getMinNode(root.right);
            root.key = minNode.key;
            root.right = deleteNode(root.right,minNode.key);
          }
      }
      return root;
      
    }
    
    return deleteNode(this.root,key);
  }
}


let binaryTree = new BinarySearchTree();
binaryTree.addNode(12).addNode(15).addNode(10).addNode(25).addNode(30).addNode(44).addNode(7);

console.log(binaryTree.root);
let test = binaryTree.findNode(7);

binaryTree.delete(25);
console.log(binaryTree.root);