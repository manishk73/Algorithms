import { deepEqual } from "assert";

/*
LeetCode
543. Diameter of Binary Tree

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

*/

/*
Logic - Basically we need to find max height in left tree and max height in right tree  

This can be solved using DFS 

The diameter of a tree (sometimes called the width) is the number of nodes on the longest path between two end nodes. The diagram below shows two trees each with diameter nine, the leaves that form the ends of a longest path are shaded (note that there is more than one path in each tree of length nine, but no path longer than nine nodes).

*/

function Node(val){
    this.val = val;
    this.left=null, this.right=null;
}

const root = new Node(1)
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);

var diameterOfBinaryTree = function(root) {
        
    let sum = 1; 
    
    function dfs(root){

        if(!root) return 0;
        const L = dfs(root.left); 
        const R = dfs(root.right); 
        sum = Math.max(sum, L+R+1);
        return Math.max(L,R) +1;
    }
    dfs(root);
    console.log(sum-1);
    return sum-1;
};

diameterOfBinaryTree(root);