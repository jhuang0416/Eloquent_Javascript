/*
Date: 12/23/2014
Program: FizzBuzz2
Author: Jenny Huang

Modify your FizzBuzz Program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.
 */

for(var Number = 1; Number <= 100; Number++)
{
    if((Number % 3 == 0) && (Number % 5 == 0))
    {
        console.log('FizzBuzz');
    }
    else if(Number % 3 == 0)
    {
        console.log('Fizz');
    }
    else if(Number % 5 == 0)
    {
        console.log('Buzz');
    }
    else
    {
        console.log(Number);
    }
}