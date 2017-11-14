function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var i = arr.length;
    var position = 0;
    while (i > 0) {
        var chunk = arr.slice(position, size);
        newArr.push(chunk);
        i = i-size;
        position = position+size;
        size = size+size;
    }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/* -- PSEUDOCODE -- */

// create new array
// check length of original array
// loop while remaining el in array
    // slice el out of original array (based on "size") into separate array
    // reduce length of array by "size"
    // push separate array into new array
// return new array


/* -- ASSIGNEMENT -- */ 

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].