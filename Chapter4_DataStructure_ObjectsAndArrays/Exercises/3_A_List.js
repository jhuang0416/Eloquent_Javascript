/*

 Date: 03/26/2015
 Author: Jenny Huang

 Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is
 the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a
 reference to the second, the second to the third, and so on.

 var list = {
 value: 1,
 rest: {
 value: 2,
 rest: {
 value: 3,
 rest: null
 }
 }
 };

 Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument,
 and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which
 takes an element and a list and creates a new list that adds the element to the front of the input list, and nth,
 which takes a list and a number and returns the element at the given position in the list, or undefined when there is
 no such element.

 If you haven’t already, also write a recursive version of nth.

 console.log(arrayToList([10, 20]));
 // → {value: 10, rest: {value: 20, rest: null}}
 console.log(listToArray(arrayToList([10, 20, 30])));
 // → [10, 20, 30]
 console.log(prepend(10, prepend(20, null)));
 // → {value: 10, rest: {value: 20, rest: null}}
 console.log(nth(arrayToList([10, 20, 30]), 1));
 // → 20

 */

function arrayToList(array)
{
  var list = {value: array[array.length - 1], rest: null};

  for(var i = array.length - 2; i >= 0; i--)
  {
    list = {value: array[i], rest: list};
  }
 return list;
}
console.log(arrayToList([10, 20]));



function listToArray(list)
{
 var array = [];

 for (var node = list; node; node = node.rest)
 {
  array.push(node.value);
 }
 return array;
}
console.log(listToArray(arrayToList([10, 20, 30])));



function prepend(element, rest_value)
{
 var list = {value: element, rest: rest_value};

 return list;
}
console.log(prepend(10, prepend(20, null)));



function nth(list, position) {

 var index = 0;

 for (var node = list; node; node = node.rest) {
  if(index == position)
  return node.value;
  index++;
 }
}
console.log(nth(arrayToList([10, 20, 30]), 1));
