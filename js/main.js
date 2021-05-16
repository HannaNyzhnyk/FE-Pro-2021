//  Lesson 3

function getArrSum(numbers){
    var sum=0;
    for(var i of numbers){
        sum += i;
    }
    return sum;
}

function getWordsLength(text) {
    var count=0;
    var words = text.split(" ");
    count = words.length;
    return count;
}

function getReversedStr(str) {
    var splitStr = str.split(""); 
    var reverseLetter = splitStr.reverse();
    var joinLetter = reverseLetter.join("");
    return joinLetter; 
}

function getLettersCount(str, letter) {
    return str.split(currentLetter).length - 1;
}
function findCharStr(str) {
    var maxRepeatLetter = 0;
    var repeatedLetter = 0;
    for (let i = 0; i < str.length; i++) { 
        let currentLetter = str[i];
        let timesRepeated = getLettersCount(str, currentLetter); 
        if (timesRepeated > maxRepeatLetter) { 
            maxRepeatLetter = timesRepeated;
            repeatedLetter = currentLetter;
        }
    }
    return repeatedLetter;
}
console.log(findCharStr("Hello world"));


function findCharStr(str) {
  
}
console.log(findCharStr("Hello world"));