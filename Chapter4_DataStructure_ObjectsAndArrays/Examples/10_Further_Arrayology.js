/*
 We saw "push" and "pop", which add and remove elements at the end of an array, earlier in this chapter. The
 corresponding methods for adding and removing things at the start of an array are called "unshift" and "shift".
 */

var todoList = [];

function rememberTo(task) {
    todoList.push(task);
}

function whatIsNext() {
    return todoList.shift();
}

function urgentlyRemeberTo(task) {
    todoList.unshift(task);
}

/*
 The previous program manages lists of tasks. You add tasks to the end of the list by calling rememberTo("eat"),
 and when you’re ready to do something, you call whatIsNext() to get (and remove) the front item from the list. The
 urgentlyRememberTo function also adds a task but adds it to the front instead of the back of the list.

 The "indexOf" method has a sibling called "lastIndexOf", which starts searching for the given element at the end of
 the array instead of the front.
 */

console.log([1, 2, 3, 2, 1].indexOf(2))
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

/*
 Both "indexOf" and "lastIndexOf" take an optional second argument that indicates where to start searching from.

 Another fundamental method is "slice", which takes a start index and an end index and returns an array that has only
 the elements between those indices. The start index is inclusive, the end index exclusive.
 */

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4]. slice(2));
// → [2, 3, 4]

/*
 When the end index is not given, "slice" will take all of the elements after the start index. Strings also have a
 slice method, which has a similar effect.

 The "concat" method can be used to glue arrays together, similar to what the "+" operator does for strings. The
 following example shows both "concat" and "slice" in action. It takes an array and an index, and it returns a new array
 that is a copy of the original array with the element at the given index removed.
 */

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]