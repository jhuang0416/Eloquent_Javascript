/*
 Date: 12/23/2014
 Program: Chess Board 2
 Author: Jenny Huang

 Modify the Chess Board program.  Define a variable size = 8 and change the program so that it works for any size,
 outputting a grid of given width and height.

 */

var result = " ";
var size = 10;

for(var L_counter = 1; L_counter <= size; L_counter++)
{
    for(var C_counter = 1; C_counter <= size; C_counter++)
    {
        if((L_counter + C_counter) % 2 == 0)
        {
            result = result + " ";
        }
        else
        {
            result = result + "#";
        }
    }

    console.log(result);
    result = " ";  //resetting the result.

}
