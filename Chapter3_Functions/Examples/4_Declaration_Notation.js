/*
There is a slightly shorter way to say "var square = function...".  The function key can also be used at the start
of a statement, as in the following example:
 */

function square(x)
{
    return x * x;
}

/* The code listed below works, even though the function is defined below the code that uses it.  This is because
function declarations are not part of the regular top-to-bottom flow of control.  They are conceptually moved to the
top of their scope and can be used by all code in that scope.
 */

console.log("The future says:", future());

function future()
{
    return "We STILL have no flying cars.";
}

/*
What happens when you put such a function definition inside a conditional (if) block or a loop?  Well, you should not
do it?  If you want your programs to behave consistently, only use this form of function-defining statements in the
outermost block of a function or program.
 */

function example()
{
    function a() {} //Okay

    if(something)
    {
        function b() {} //Danger!
    }
}
