let arr=[1,2,3,5,7,12];
//output-45;
let sum=0;
for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        if(checkPrime(j-i))
        {
            sum+=Math.abs(arr[i]-arr[j])
        }

    }
}

console.log(sum);

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