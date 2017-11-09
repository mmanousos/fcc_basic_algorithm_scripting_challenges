function titleCase(str) {
    var low = str.toLowerCase();  // lowercase everything
    var ary = low.split(" "); // split string into array
    var count = ary.length; // count items in array
    var i = 0; 
    var word = ary[i]; 
    while (count > 0) { // while loop based on # of items in array
        var char = ary[i].charAt(0); // access first letter of word in array 
        var up = char.toUpperCase(); // capitalize fist letter
        var word = ary[i]; // get entire word
        var capWord = word.replace(char, up); // replace letter 
        ary.splice(i,1,capWord); // add capitalized word back into array        
        count--; // decrease # of items in array
        i++ // increase array index #
    }  var capitalize = ary.join(" "); // join array back to string 
        return capitalize; // return title case string 
}

titleCase("I'm a little tea pot");



/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".



