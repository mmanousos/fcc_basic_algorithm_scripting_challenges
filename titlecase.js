function titleCase(str) {
    var low = str.toLowerCase();  // lowercase everything
    var ary = low.split(" "); // split string into array
    var count = ary.length; // count items in array
    var i = 0; 
    var word = ary[i]; 
    while (count > 0) { // while loop based on # of items in array
        var char = ary[i].charAt(0); // access first letter of word in array 
        var up = char.toUpperCase(); // capitalize fist letter
        ary.splice(i,1,up); // replaces uppercase letter back into array*/ 
        console.log(ary);
        
        count--; // decrease # of items in array
        i++ // increase array index #
        console.log("current word is " + ary[i] );
        
    }  var titleCase = ary.join(" "); // join array back to string 
       console.log(titleCase);
        return titleCase; // return title case string 
}

/* now replaces all words with capitalized letters. 
/* need to figure out how to add the element instead of replacing.
/* try splitting all items into separate arrays?


titleCase("I'm a little tea pot");


/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".



