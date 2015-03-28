/*
Function variables usually acts as names for a specific piece of the program.  Such a variable is defined once and
never changed.

A function value can do all things that other values can do-you can use it in arbitrary expressions, not just call it.
It is possible to store a function value in a new place, pass it as an argument to a function, and so on and can be
assigned a new value.
 */

var launchMissiles = function(value)
{
    missileSystem.launch("now");
};
if (safemode)
    launchMissiles = function(value)
    {
        /* do nothing */
    };
