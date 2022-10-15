let arr=[1,2,10];
let count=0;
for(let i=0; i<arr.length; i++)
{
    let subarr=new Array(arr.length);
    for(let j=i; j<arr.length; j++)
    {
        subarr[j]=arr[j];
        if(check10(subarr))
        {
            count++;
        }
    }
}
console.log(count);
function check10(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==10)
        {
            return true;

        }
    }
    return false;
}