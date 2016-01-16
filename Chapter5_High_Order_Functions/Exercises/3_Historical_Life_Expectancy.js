/*

 Program: Historical life expectancy
 Date: 07/17/2015
 Author: Jenny Huang


When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the
data came out. Let’s take a closer look at that phenomenon.

Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a
century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

 function average(array) {
 function plus(a, b) { return a + b; }
 return array.reduce(plus) / array.length;
 }

 // Your code here.

 // → 16: 43.5
 //   17: 51.2
 //   18: 52.8
 //   19: 54.8
 //   20: 84.7
 //   21: 94

 Hint:
 The essence of this example lies in grouping the elements of a collection by some aspect of theirs—splitting the
 array of ancestors into smaller arrays with the ancestors for each century.

 During the grouping process, keep an object that associates century names (numbers) with arrays of either person
 objects or ages. Since we do not know in advance what categories we will find, we’ll have to create them on the fly.
 For each person, after computing their century, we test whether that century was already known. If not, add an array
 for it. Then add the person (or age) to the array for the proper century.

 Finally, a for/in loop can be used to print the average ages for the individual centuries.

 */

var ANCESTRY_FILE = "[\n  " + [
        '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
        '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
        '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
        '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
        '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
        '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
        '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
        '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
        '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
        '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
        '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
        '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
        '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
        '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
        '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
        '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
        '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
        '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
        '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
        '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
        '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
        '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
        '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
        '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
        '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
        '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
        '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
        '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
        '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
        '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
        '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
        '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
        '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
        '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
        '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
        '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
    ].join(",\n  ") + "\n]";
//Converts the content of ANCESTRY_FILE file(JSON Format) as a string
var ancestry = JSON.parse(ANCESTRY_FILE);
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
//Map all the centuries within the ancestry file
var centuries = ancestry.map(function(person){
    return Math.ceil(person.died/100);
});
//Function to compute a person's age within the ancestry file
function age(person) {
    var ages = []; //An array to store ages in the same century within the ancestry file
    //Search through the ancestry file and find the ages that corresponds to the century
    for (var i = 0; i < ancestry.length; i++) {
        //All matching results will be added to the "ages" array
        if(person == Math.ceil(ancestry[i].died/100)) {
            ages.push(ancestry[i].died-ancestry[i].born);
        }
    }
    return ages;
}
//Function to create the object with century and average of ages
function HistoricalLifeExpectancy(centuryMap){
    var centurySet = {}; //An object to store century and average of ages
    for(var j = 0; j < centuryMap.length; j++) {
        var Current_Century = centuryMap[j]; //Store value of the current century
        //Perform testing whether Current century is in the century set.  If current century is not in century set,
        //store it in century set.  Then compute the average of all ages in the current century.
        if(!(Current_Century in centurySet)) {
            centurySet[Current_Century] = Math.round(average(age(Current_Century))*10)/10;
        }
    }
    return centurySet;
}
//Store the function in a variable
var result = HistoricalLifeExpectancy(centuries);
//print out all corresponding century and average of ages.
for (var obj in result){
    console.log(obj + ": " + result[obj]);
}
/*
 For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an
 array and a function that computes the group for an element in the array and returns an object that maps group names
 to arrays of group members.
 */
function groupby(array,funct){
    var group = {};
    for (var k = 0; k < array.length; k++) {
        var cent = array[k];
        if(!(cent in group)){
            group[cent] = Math.round(average(funct(cent))*10/10);
        }
    }
    return group;
}