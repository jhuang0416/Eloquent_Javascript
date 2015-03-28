/*
The ability to treat functions as values, combined with the fact that local variables are "re-created" every time a
function is called, brings up an interesting question.  What happens to local variables when the function call that
created them is no longer active?

The following code shows an example of this.  It defines a function, wrapValue that creates a local variable.  It then
returns a function that accesses and returns this local variable.
 */

function wrapValue(n)
{
    var localVariable = n;
    return function() {return localVariable; };
}
var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

/*
This is allowed and works as you'd hope-the variable can still be accessed.  In fact, multiple instances of the
variable can still be alive at the same time, which is another good illustration of the concept that local variables
really are re-created for every call-different calls can't trample on one another's local variables.

This feature-being able to reference a specific instance of local variables in an enclosing function-is called closure.
A function that "closes over" some local variables is called a closure.

With a slight change, we can turn the previous example into a way to create functions that multiply by an arbitrary
amount.
 */

function multiplier(factor)
{
    return function(number)
    {
        return number * factor;
    };
}
var twice = multiplier(2);
console.log(twice(5));
// → 10


