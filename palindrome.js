function palindrome(str) {
 var lower = str.toLowerCase();
 var noSpace = lower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]|\s/g, '');
 console.log(noSpace); //checks that spaces & special characters have been removed
 
 var strLength = noSpace.length;
 var halfStrLength = strLength/2; 
 console.log("half string length = " + halfStrLength); // checks that strLength has been counted and divided by 2
    
    var i = 0;    
    var j = (noSpace.length)
   
    
 while (halfStrLength > 0)   {
    var firstChar = noSpace.charAt(i);
    var lastChar = noSpace.charAt(j - 1);  
    if (firstChar !== lastChar) {	
	   return false;  
    } else if (firstChar === lastChar) {
        console.log(firstChar + " matches " + lastChar);
        halfStrLength--; 
        console.log("half string length equals " + halfStrLength);
        if (j >= 1) {
          i++; // function to step to +1 digit in string
          j--;  // function to step to -1 digit in string
          } 
        }
    } console.log(str + " (minus spaces and special characters) is a palindrome!");
      return true;
  }


palindrome("2_A3*3#A2");