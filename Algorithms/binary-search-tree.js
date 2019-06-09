class Node {
	constructor(key){
		this.key = key;
		this.left = null;
		this.right = null; 
	}
}
let tree = new Node(17);
tree.left = new Node(15);
tree.right = new Node(21);

tree.left.left = new Node(11);
tree.left.right = new Node(16);

tree.right.left = new Node(18);
tree.right.right = new Node(27);

//console.log(tree.key);

function findElement(node,key){

	if(!node || node.key === key){
		return node;
	}
	if(key > node.key){
		return findElement(node.right,key);
	}
	if(key < node.key){
		return findElement(node.left,key);
	}
}

let node = findElement(tree,15);

if(node){
	console.log(node.key);
} else {
	console.log("node not found");
}