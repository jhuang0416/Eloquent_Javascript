/*

 Date: 01/29/2015
 Program: Minimum
 Author: Jenny Huang

 Write a function min that takes two arguments and returns their minimum.

 Results:

 console.log(min(0, 10));
 // → 0
 console.log(min(0, -10));
 // → -10

 */

function Min(a,b)
{
   if (a < b)
     return a;
   else
     return b;
}
console.log(Min(0, 10));
console.log(Min(0, -10));
