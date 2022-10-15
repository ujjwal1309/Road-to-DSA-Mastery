let str="aetu";
let max=0;
for(let i=0; i<str.length; i++)
{
    let substring="";
    for(let j=i; j<str.length; j++)
    {
        substring+=str[j];
        if(checkConsonant(substring) && max<substring.length)
        {
            max=substring.length;
        }

    }
}
console.log(max);

function checkConsonant(str)
{
    for(let i=0; i<str.length; i++)
    {
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u")
        {
            return false;
        }
    }
    return true;
}