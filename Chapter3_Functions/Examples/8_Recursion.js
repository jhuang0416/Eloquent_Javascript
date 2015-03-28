/*
It is perfectly okay for a function to call itself, as long as it takes care not to overflow the stack.  A function
that calls itself is called recursive.
 */

function power(base, exponent)
{
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

console.log(power(2,3));
// → 8

/*
The function listed above calls itself multiple times with different arguments to achieve the repeated multiplication.

But this implementation has one important problems: in typical JavaScript implementations, it's about 10 times slower
than the looping version.  Running through a simple is a lot cheaper than calling a function multiple times.

The following example create a puzzle, where it start from the number 1 and repeated either adding 5 or multiplying by
3, an infinite amount of new numbers can be produced.
 */

function findSolution(target) {
    function find(start, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") ||
                    find(start * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

/*
Note that this program doesn't necessarily find the shortest sequence of operations.  It is satisfied when it finds any
sequence at all.

The inner function "find" does the actual recursing.  It takes two arguments-the current number and a string that
records how we reached this number-and returns either a string that shows how to get to the target or null.
 */

