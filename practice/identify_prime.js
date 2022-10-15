let num=12;
//check if it is a prime or not
function checkPrime(N)
{
    if(N<=1)
    {
        return false;
    }
    for(let i=2; i<=N**0.5; i++)
    {
        if(N%i==0)
        {
            return false;
        }
    }

    return true;
}
if(checkPrime(num))
{
    console.log("yes");
}
else
{
    console.log("no");
}