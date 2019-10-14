/*
Coding:
—> Ask Clarifying questions.  Make sure you understand the question being asked before starting to solve.
—> Think out loud whether you are stuck on the problem or cranking out code.  The thought process is just as, if not more, important than solving correctly.  We are also big on teamwork and collaboration so finding people that can communicate their thoughts is important.
—> Don’t forget test cases, edge cases, etc…
Technology:
We do not ask any “brain teasers” or trick questions.  From a general technology standpoint we will focus on technologies we feel you know well and ask you about them, but it is still a good idea to brush up on some of the general front end technologies we are using.
—> Javascript
—> React
—> Redux
—> HTML
—> CSS
—> GraphQL

*/

/**
 * Binary Search Tree
 * ------------------
 * A binary search tree (BST), also known as an ordered binary tree,
 * is a node-based data structure in which each node has no more than
 * two child nodes. Each child must either be a leaf node or the root
 * of another binary search tree.
 */
// your implementation starts here ... ----------------------------- //
 let Node = function(key){
     this.key = key;
     this.left = null;
     this.right = null;
 }
 
 let BinarySearchTree = function(){
     
     this.root = null;
     this.insert = (key) => {
         
         function addNode(node,key){
             if(!node){
                 return new Node(key);
             }
             if(key > node.key){
                 node.right = addNode(node.right, key);
             } else if (key < node.key){
                 node.left  = addNode(node.left, key);
             }
             return node;
         }
         this.root = addNode(this.root,key);
         //console.log(this.root);
         return this;
     }
     /**
      * Inorder - LEFT ROOT RIGHT 
      * Preorder - ROOT LEFT RIGHT
      * Postorder - LEFT RIGHT ROOT 
      * Breadfirst BFS - Level Order 
      */
     this.inorder = () =>{
        
        let arr = []; 
        function printNodes(node){
            
            if(!node){
                return; 
            }
            printNodes(node.left);
            arr.push(node.key);
            //console.log(`${node.key} `);
            printNodes(node.right);
        } 
        printNodes(this.root);
        return arr.join(" ");
     }
 }
 
 
 
 
 
 
// ... your implementation ends here ------------------------------- //
/**
 * Question 1
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Implementation: Implement a binary search tree structure with an
 * initial method called "insert" to add data to it.
 */
var bst = new BinarySearchTree()
  .insert(15)
  .insert(25)
  .insert(10)
  .insert(7)
  .insert(22)
  .insert(17)
  .insert(13)
  .insert(5)
  .insert(9)
  .insert(27);
/**
 * By now, the tree data should look like this:
 *
 *          15
 *         /  \
 *        10   25
 *       / \   / \
 *      7  13 22  27
 *     / \    /
 *    5   9  17
 */
 console.log( JSON.stringify(bst, null, 4) );



/**
 * Question 2
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * In-Order: Create a new method called "inorder" so we can log the data as
 * we traverse the tree IN-ORDER.
 */
console.log(bst.inorder()); // 5 7 9 10 13 15 17 22 25 27
 
 
 

 