/*

 Date: 03/01/2015
 Author: Jenny Huang

 The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

                                            console.log(sum(range(1, 10)));

 (1) Write a range function that takes two arguments, start and end, and returns an array containing all the numbers
 from start up to (and including) end.

 (2) Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous
 program and see whether it does indeed return 55.

 (3) As a bonus assignment, modify your range function to take an optional third argument that indicates the “step”
 value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding
 to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with
 negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

 console.log(sum(range(1, 10)));
 // → 55
 console.log(range(5, 2, -1));
 // → [5, 4, 3, 2]

 */

function range(start, end) {

    var ListOfNo = [];

    for(var i = start; i <= end; i++) {
        ListOfNo.push(i);
    }
    return ListOfNo;
}


function sum(ListOfNo) {

    var sum = 0;

    for (var i = 0; i < ListOfNo.length; i++) {

        sum = sum + ListOfNo[i];
    }

    return sum;
}


function Modified_range(start, end, step) {

    var ListOfNo = [];

    if ((start > end) && (step == undefined))
        step = -1;
    if (step == undefined)
        step = 1;


    if(step > 0)
    {
        for (var i = start; i <= end; i += step) {

        ListOfNo.push(i);

    }}
    else
    {
        for (var j = start; j >= end; j += step) {

        ListOfNo.push(j);

    }}

    return ListOfNo;
}

console.log(sum(range(1, 10)));
// → 55
console.log(Modified_range(5, 2, -1));
// → [ 5, 4, 3, 2]
console.log(Modified_range(5, 2));
// → [ 5, 4, 3, 2]
