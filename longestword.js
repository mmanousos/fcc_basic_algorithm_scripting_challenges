
function findLongestWord(str) {
  var myArray = str.split(" ");
  var arrayLength = myArray.length;
  var firstWord = myArray[0];
  var longest = firstWord;
  var i = 1;
  var nextWord = myArray[i];
  
  // first word = longest
  // check length of first word
  // next word 
  // check length of next word
  // use loop  
  // compare length of first word vs next word 
  // if first word is longer, continue to next word
  // but if next word is longer, set next word as longest
  // if longer, change that word to longest; else move to +1.
  // return length of "longest"    
    
  while (arrayLength > 1) { 
   if (longest.length >= nextWord.length) { //check first word against next word
    i++; //go to the next word in the array
    var newWord = myArray[i]; // create new variable for next word
    nextWord = newWord; // set new variable to previous variable
    arrayLength--; // reduce length of array so loop nears end point
   } else {
    i++; 
    arrayLength--;
    longest = nextWord; // if next word is longer, set it as longest
   } 
  } return longest.length; 
    
}
findLongestWord("May the force be with you");


/* Return the length of the longest word in the provided sentence.
Your response should be a number. */

/* findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19. */
