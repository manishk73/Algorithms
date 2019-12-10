/**
 * Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.
 * Given lists: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4]
 * Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4]
Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]
O(N LogK)
N- total elements in all the list 
K- number of lists
 */

const Heap = require("collections/heap");
const l1 = [2, 6, 8], l2 = [3, 6, 7], l3 =[1, 3, 4];
function merge_all_lists(lists){
    const merged = [];
    const minHeap = new Heap([], null, ((a,b)=> b[0]-a[0]));
    lists.forEach( list => {
        minHeap.push([list[0], list, 0]);
    }); 

    while(minHeap.length>0){
        console.log(minHeap.length);
        const minElement = minHeap.pop();
        const [value, list, index] = minElement;
        merged.push(value);
        if(index+1 < list.length){
            const nextItem = [list[index+1], list, index+1]
            minHeap.push(nextItem)
        }
        
    }
    return merged;
}

console.log("Merged List", merge_all_lists([l1,l2,l3]))


//==========
//When list is provided as LinkedList 

class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const list1 = new ListNode(2);
list1.next = new ListNode(6);
list1.next.next = new ListNode(8);

const list2 = new ListNode(3);
list2.next = new ListNode(6);
list2.next.next = new ListNode(7);

const list3 = new ListNode(1);
list3.next = new ListNode(3);
list3.next.next = new ListNode(4);

function sort_n_list(lists){

    const minHeap = new Heap([], null, ((a,b) => b.value - a.value)) 

    lists.forEach(node =>{
        minHeap.push(node);
    });

    let head =null, tail = null;
    while(minHeap.length >0){

        const minNode = minHeap.pop();

        if(head ===null){

            head = minNode;
            tail = minNode;
        } else {
            tail.next = minNode;
            tail = tail.next;
        }

        if(minNode.next){
            minHeap.push(minNode.next);
        }
    }
    return head;
} 
console.log(sort_n_list([list1, list2, list3]))