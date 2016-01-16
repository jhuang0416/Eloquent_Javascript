/*
Here is an example, where you can have functions that create new functions
 // → true
 */

function greaterThan(n) {
    return function(m) {return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));


/*
Here is another example, where you have functions that change other functions
 // → calling with 0
 // → called with 0 - got false
 */

function noisy(f) {
    return function(arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}
noisy(Boolean)(0);

/*
You can write functions that provide new types of control flow.
 // → 0 is even
 // → 2 is even
 */

function unless(test, then) {
    if (!test) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}

repeat (3, function(n) {
    unless(n % 2, function() {
        console.log(n, "is even");
    });
});