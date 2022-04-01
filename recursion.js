//This is exercise of what I remember after watching a video on YouTube about what recursion is.
//I have, at this vert moment, zero(0) knowledge about JS. 

function leliukas(n)
{
    if (n ==1 || n == 0)
    return 1;
    else
    return n * leliukas(n-1)
}

console.log(leliukas(4))