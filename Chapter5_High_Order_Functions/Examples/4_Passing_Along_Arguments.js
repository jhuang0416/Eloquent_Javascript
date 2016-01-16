/*
The noisy function from "High-Order functions" section has a serious deficit pertaining to the amount of parameters
entered.
 */

function noisy(f) {
    return function(arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
    };
}

/*
If f takes more than one parameter, it gets only the first one.  In order to deal with the deficit, javascript has a
"apply" method.  You can pass it an array of arguments and it will call the function with those arguments.
 */

function transparentWrapping(f) {
    return function() {
        return f.apply(null, arguments);
    };
}

/*
"null" serves a purpose of stimulating a method call.
 */

