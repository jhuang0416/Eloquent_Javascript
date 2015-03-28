/*
 Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the
 character that is to be counted (rather than counting only the uppercase "B" characters).  Rewrite countBs to make use
 of this new function.

 console.log(countChar("kakkerlak", "k"));
 // → 4

 */

function countChar(Input, target)
{
    var CharCounter = 0;
    for (var i = 0; i < Input.length; i++)
    {
        if (Input[i] == target)
            CharCounter = CharCounter + 1;
    }
    return CharCounter;
};
console.log(countChar("kakkerlak", "k"));

function countBs(Input1)
{
    return countChar(Input1, "B");
}
console.log(countBs("BBC"));



