function confirmEnding(str, target) {
    var i = target.length; // gets length of target
    var j = str.length; // gets length of string
while (i > 0) { // while target has characters to check
    var targetLetter = target.charAt(i - 1); // gets final letter of target
    var strLetter = str.charAt(j - 1); // gets final letter of str 
    if (targetLetter !== strLetter) { // check if last letters match
        return false; // if no, return false
        } else if ( i > 1 ) { // if "target" is more than 1 char long
            i--; // move to next character
            j--; // move to next character
        } else { // otherwise, return true
            return true; 
        }
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