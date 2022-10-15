let str="abcdef"
let count=0;
for(let i=0; i<str.length; i++)
{
    let sub_string="";
    for(let j=i; j<str.length; j++)
    {
        sub_string+=str[j];
        if(checkPrime(sub_string.length))
        {
            count++;
        }
    }
}
console.log(count);
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