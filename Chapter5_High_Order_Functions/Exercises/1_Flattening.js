/*

 Program: Flattening
 Date: 07/06/2015
 Author: Jenny Huang

 Use the reduce method in combination with the concat method to “flatten” an array of arrays into a
 single array that has all the elements of the input arrays.

 var arrays = [[1, 2, 3], [4, 5], [6]];
 // Your code here.
 // → [1, 2, 3, 4, 5, 6]

 */

var arrays = [[1,2,3], [4,5], [6]];

//combine multiple arrays and display the result
console.log(arrays.reduce(function(a,b) {
    return a.concat(b);
}));