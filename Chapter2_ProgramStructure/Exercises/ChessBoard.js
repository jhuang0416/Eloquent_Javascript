/*
Date: 12/23/2014
Program: Chess Board
Author: Jenny Huang

Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or "#" character.  The characters should form a chess board.

Passing this string to console.log should show something like this:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

 */

var result = " ";
for(var L_counter = 1; L_counter <= 8; L_counter++)
{
    for(var C_counter = 1; C_counter <= 8; C_counter++)
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