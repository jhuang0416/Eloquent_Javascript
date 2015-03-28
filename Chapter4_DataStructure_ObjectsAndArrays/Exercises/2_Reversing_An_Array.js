/*

 Date: 03/26/2015
 Author: Jenny Huang

 Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this
 exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as
 argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace,
 does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither
 may use the standard reverse method.

 console.log(reverseArray(["A", "B", "C"]));
 // → ["C", "B", "A"];

 var arrayValue = [1, 2, 3, 4, 5];
 reverseArrayInPlace(arrayValue);
 console.log(arrayValue);
 // → [5, 4, 3, 2, 1]

 */

function reverseArray(input_array)
{
    var NewArray = [];

    for (i = input_array.length - 1; i >= 0; i--)
    {
        NewArray.push(input_array[i]);
    }
    return NewArray;
}
console.log(reverseArray(["A", "B", "C"]));



function reverseArrayInPlace(arrayValue)
{
    var temp_variable;
    var half = Math.floor(((arrayValue.length)/2));

    for(var i = 0; i < half; i++)
    {
        temp_variable = arrayValue[i];
        arrayValue[i] = arrayValue[arrayValue.length - 1 - i];
        arrayValue[arrayValue.length - 1 - i] = temp_variable;
    }
    return arrayValue;
}
var arrayValue = [1 , 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


