function rot13(str) { // LBH QVQ VG!
  var decyphered = ""; 
  var i = str.length;
  var j = 0;
  while (i > 0) {
      var k = str[j];
      if ( k !== '[.,\/#!$%\^&\*;:{}=\-_`~()]' ) {
          console.log(k);
          j++; 
          i--;
      } else {
        decyphered = decyphered + k;
        console.log(decyphered);
      }
  }
}


rot13("!SERR PBQR PNZC");


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