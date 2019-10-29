/*Write a function that determines whether a string has balanced pairs of (), [], and {}. Balanced pairs are matching pairs such that for each left-hand character there is a corresponding right-hand character, and only balanced pairs between them.

Balanced: "(a{b[c]d}e)" "(a)(b)[c]" "[()()]{}" "" 

Not balanced: "(a{b)c}" "((a)" ")[b]"

Used HackerRank

//scalyr
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING str as parameter.
 */

function isBalanced(str) {

    let opening = ['{', '(', '['];
    let closing = ['}', ')', ']'];
    let map = new Map();
    map.set("{", "}");
    map.set("(", ")");
    map.set("[", "]");
    map.set("}", "{");
    map.set(")", "(");
    map.set("]", "[");
    let stack = []; 
    
    for(let i=0; i < str.length; i++){
        
        let char = str[i];
        
        if(opening.indexOf(char)!==-1){
            stack.push(char);
        } else if(closing.indexOf(char) !==-1){
        
            let prevBracket = stack.pop();
            if (prevBracket !== map.get(char)){
                return false; 
            } 
        }
        
    }
    return stack.length===0 ? true: false ;
}

//  ((   (())

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const str = readLine();

    const result = isBalanced(str);

    ws.write((result ? 1 : 0) + '\n');

    ws.end();
}

//(a{b[c]d}e)


//[()()]{}


let str = "(a{b[c]d}e)";

function isBalancedString(str){
  
  let opening = ["{", "(", "["];
  let closing = ["}", ")", "]"];
  let map = new Map([["}","{"],[")","("],["]","["]]);
  let stack = [];
  for(let i=0; i< str.length; i++){
    
    let char = str[i];
    let isOpening = opening.indexOf(char)===-1? false: true;
    let isClosing = closing.indexOf(char)===-1? false: true;
    if(isOpening){
      stack.push(char);
    } else if(isClosing){
      if(stack.pop() !== map.get(char)){
        return false; 
      }
    }
    
  }
  
 return stack.length ===0 ? true: false;
}

str ="";
console.log(isBalancedString(str));


