/*
Date: 12/23/2014
Program: FizzBuzz
Author: Jenny Huang

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5(and not 3),
print "Buzz" instead.

 */

for(var Number = 1; Number <= 100; Number++)
{
    if(Number % 3 == 0)
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