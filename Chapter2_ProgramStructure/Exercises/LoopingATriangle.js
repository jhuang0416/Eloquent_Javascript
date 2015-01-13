/*
Date: 12/23/2014
Program: Looping A Triangle
Author: Jenny Huang

Write a loop that makes seven calls to console.log to output the following triangle:

Result:

#
##
###
####
#####
######
#######

 */


var result = "";

for(var counter = 1; counter <= 7; counter ++)
{
    result = result + "#";
    console.log(result);
}
