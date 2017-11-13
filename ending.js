function confirmEnding(str, target) {
    var targetDigits = target.length; // gets length of target
        console.log("target phrase is " + targetDigits + " characters long.")
    var letterDigit = 1;    
    var targetLetter = target.charAt(targetDigits-letterDigit); // gets final letter of target
        console.log('current letter of "target" is ' + targetLetter);
    var strDigits = str.length; // gets length of string
    var strLetter = str.charAt(strDigits-letterDigit); // gets final letter of str 
        console.log('current letter of "str" is ' + strLetter);
    if (targetLetter !== strLetter) { // check if last letters match
        return false; // if no, return false
        } else if (targetDigits > 1 ) {    // if yes AND the target is longer than 1 character long, run loop to check additional letters. 
            while (targetDigits > 1) { // while the digits in the target > 1
                letterDigit++; // get the next last character in the phrase & string 
                targetDigits--; // reduce number of digits in target to have an end point for the loop
                }
            } else { // otherwise return true
                return true;
            }
}

confirmEnding("Open sesame", "same");


// check length of target
// get that many digits at end of str
// check last letter of target against last letter at end of str
    // if not the same, return false
    // if match, cycle to next letters
// when at end of length of target, return true



/* Check if a string (first argument, str) ends with the given target string (second argument, target). 

 This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */

// confirmEnding("Bastian", "n") should return true.
// confirmEnding("Connor", "n") should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if // both are frozen", "specification") should return false.
// confirmEnding("He has to give me a new name", "name") should return true.
// confirmEnding("Open sesame", "same") should return true.
// confirmEnding("Open sesame", "pen") should return false.
// confirmEnding("If you want to save our world, you must hurry. We dont know how much  longer we can withstand the nothing", "mountain") should return false.
// Do not use the built-in method .endsWith() to solve the challenge.