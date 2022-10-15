let str="thisracecarisgood";
let max=0;
let ans;
for(let i=0; i<str.length; i++)
{
    let substring="";
    for(let j=i; j<str.length; j++)
    {
        substring+=str[j];
        if(checkPalindrome(substring) && max<substring.length)
        {
            max=substring.length;
            ans=substring;
        }
    }
}
console.log(ans);

function checkPalindrome(str)
{
    let reverse="";
    for(let i=str.length-1; i>=0; i--)
    {
        reverse+=str[i];
    }
    if(reverse==str)
    {
        return true;
    }

    return false;
}