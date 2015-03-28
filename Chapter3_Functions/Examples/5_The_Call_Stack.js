/*
This is a simple program that makes a few function calls.  A run through this program goes roughly like this: the call
to greet causes control to jump to the start of that function (line 2).  It calls console.log (a built-in browser
function), which takes control, does its job, and then returns control to line 2.  Then it reaches the end of the greet
function, so it returns to the place that called it, line 4.  The line after that calls console.log again.

Because a function has to jump back to the place of the call when it returns, the computer must remember the context
from which the function was called.  In one case, console.log has to jump back to the greet function.  In the other
case, it jumps back to the end of the program.

The place where the computer stores this context is the call stack.  Every time a function is called, the current
context is put on top of this "stack".  When the function is returns, it removes the top context from the stack and
uses it to continue execution.
 */

function greet(who){
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

/*
Storing this stack requires spaces in the computer's memory.  When the stack grows too big, the computer will fail with
a message like "out of stack space" or "too much recursion".

The following code is an example that illustrates this by asking the computer a really hard question, which causes an
infinite back-and-forth between functions.
 */

function chicken()
{
    return egg();
}
function egg()
{
    return chicken();
}
console.log(chicken() + " came first.");






