/*

 Date: 01/29/2015
 Program: Recursion
 Author: Jenny Huang

 We've seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check
 whether it's divisible by two.  Here's another way to define whether a positive number is even or odd:

 -Zero is even.

 -One is odd.

 -For any other number N, its evenness is the same as N - 2.

 Write a recursive function isEven corresponding to this description.  The function should accept a number parameter
 and return a Boolean.

 Results:
 console.log(isEven(50));
 // → true
 console.log(isEven(75));
 // → false
 console.log(isEven(-1));
 // → ??

 */

function isEven(N)
{
    if(N == 0)
        return true;  //it's even
    else if (N == 1)
        return false; //it's false
    else
        return isEven(N - 2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));