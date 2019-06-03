/*

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    //This logic fails in some condition like when string is aaabaaaa
    if(!s || s.length < 2){
        return s;
    }
    let length = s.length;
    let stringArr = s.split("");
    let left = 0;
    let right =0;
    let isPalindrome = [];
    let another = [];
    another.length = length;
    another.fill(false);
    for(let i=0; i< length; i++){
        isPalindrome.push(another.slice());    
    }
    
    //console.log(isPalindrome);
    //isPalindrome[0][0] = true;
    for(let j=1; j<length; j++){
        for(let i=0; i<j; i++){
            let isInnerPalindrome = (isPalindrome[i+1][j-1] ) || (j-i <= 2); 
            if(stringArr[i]===stringArr[j] && isInnerPalindrome){
                isPalindrome[i][j] = true;
                if(j-i > right-left){
                    right=j;
                    left=i;
                }
            }
        }
    }
    
    return s.substring(left,right+1); 
};
