function rot13(str) { // LBH QVQ VG!
  var decyphered = "";  // create empty string
  var i = str.length; // get length of original string
  var j = 0; // start value for checking string
  while (i > 0) { // loop while string has values remaining
      var k = str.charCodeAt(j); // get the character code for the elements of the string
      if (k >= 65) { // if the character code is within the range of capitalized letters
          var m = k - 13; // subtract 13
          if (m < 65) { // if that puts it below the range of capialized letters
              var n = k + 13; // add 13 to the character code 
              var o = String.fromCharCode(n); // convert the new code to a letter
              decyphered = decyphered + o; // add the letter to the string
          } else { // otherwise
              var p = String.fromCharCode(m); // convert the -13 code to a letter
              decyphered = decyphered + p; // add the letter to the string
          }
          j++; // move to next value in string
          i--; // reduce the length of the string
      } else { // if the character is not in the range of capitalized letters
        var l = String.fromCharCode(k); // convert back to its original character
        decyphered = decyphered + l; // add the character to the string
          j++; // move to next value in string
          i--; // reduce the length of the string
    } 
  } return decyphered;
}


rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); 


/* -- PSEUDOCODE -- */

// Get length of string.
// loop while string has remaining characters
// Get each character in string
    // check that it's a letter (using regex?)
        // if letter, get its character code
        // subtract 13 from character code
            // -13 = less than 65 instead +13
            // use that value
        // convert character code to string 
        // push string to new string?
    // if not letter (is space or punctuation), push to new string
// return string



/* -- ASSIGNMENT -- */

/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()

rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
*/