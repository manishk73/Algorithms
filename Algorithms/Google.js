/*Find first local max
Write a function that takes a list of positive integers 
and returns the first local maximum found or null if nothing is found. 
A local maximum is when a number is greater than both of its neighbors in the following example the first local max is 4. 

e.g. [1,2,3,4,3,5,6,7,8,9] would return 4

Code

function findLocalMax(arr){
if(arr.length <=0) {
	return null;
}
for(let i=1; i< arr.length-1; i++){

	if(arr[i] > arr[i-1] && arr[i] >a[i+1] ){
		return arr[i];
	}	
}
return null;	

}
*/

/*
Checkboxes - CheckAll

Assume that you have a table with a list of many items where each row has a checkbox. You also have a checkbox above the table labeled as "Check All". 

We want the following behavior: 
- All checkboxes must be checked if "Check All" is checked. 
- All checkboxes must be unchecked if "Check All" is unchecked. 
- If I manually check each checkbox from the table, 1 by 1, when all checboxes are checked, "Check all" must be automatically checked too. 
- If every checkbox is checked (including "Check All"), If I uncheck any checkbox from the table, "Check All" must be unchecked. 

Given this html: 

``` html
<table id=”chkTable”>
  <tr><td><input type="checkbox" id="check_all"> Check All</td></tr>
  <tr><td><input type="checkbox" class="check"> item</td></tr>
  <tr><td><input type="checkbox" class="check"> item</td></tr>
  <tr><td><input type="checkbox" class="check"> item</td></tr>
  <tr><td><input type="checkbox" class="check"> item</td></tr>
  <tr><td><input type="checkbox" class="check"> item</td></tr>
  <tr><td><input type="checkbox" class="check"> item</td></tr>
</table>
```

Please implement the checkbox behavior explained for those checkboxes.

Code

let checkAllEle = document.getElementById(“check_all”);

checkAllEle.addEventListener(“click”, (e)=>{
	
	let checkBoxes  = document.getElementsByClass(“check”);
	for(let el in checkBoxes){
		if(el.checked)
			el.addAttribute(“checked”,true);
		 else 
			el.removeAttribute(“checked”);

}

})

document.getElementById(“chkTable”).addEventListener(“click”,(e)=>{

if(e.target.id	!== “check_all”){
	
let checkedCount = document.querySelectorAll(“input [class=check]”).checked;
let totalCount = document.getElementsByClassName(“check”);

if(checkedCount.length===totalCount.length){
document.getElementById(“check_all”).addAttribute(“checked”,true);
} {
document.getElementById(“check_all”).removeAttribute(“checked”)
}
}
)
*/