/*
This chapter taught you how to write your own functions.  The "function" keyword, when used as an expression, can
create a function value.  When used as a statement, it can be used to declare a variable and give it a function as its
value.
 */

//Create a function value f
var f = function(a)
{
    console.log(a + 2);
};

//Declare g to be a function

function g(a,b)
{
    return a * b * 3.5;
}