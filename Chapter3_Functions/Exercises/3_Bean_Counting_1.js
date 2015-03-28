/*

Date: 01/29/2015
 Program: Bean Counting_1
 Author: Jenny Huang

 You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its
 length "s".length.  The returned value will be a string containing only one character (for example, "b").  The first
 character has a position zero, which causes the last one to be found at position string.length - 1.  In other words, a
 two-character string has length 2, and its characters have positions 0 and 1.

 Write a function countBs that takes a string as its only argument and returns a number that indicates how many upper
 "B" characters are in the string.

 Result:

 console.log(countBs("BBC"));
 // → 2

 */

function countBs(Input)
{
    var BCounter = 0;
    for (var i = 0; i < Input.length;i++)
    {
        if (Input[i] == "B")
            BCounter = BCounter + 1;
    }
    return BCounter;
}
console.log(countBs("BBC"));

