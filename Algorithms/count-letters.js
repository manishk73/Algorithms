function countLetters(str, p) {
    var pos = str.indexOf(p);
    if (pos == -1) {
        return 0;
    } else {
        return 1 + countLetters(str.substr(pos + 1), p)
    }
}
console.log(countLetters('To be, or not to be, that is the question.', 'e'));


function countLetters(str,curIndex, p) {
    var pos = str.indexOf(p,curIndex);
    if (pos == -1) {
        return 0;
    } else {
        return 1 + countLetters(str,pos+1,p)
    }
}
console.log(countLetters('To be, or not to be, that is the question.',0,'e'));