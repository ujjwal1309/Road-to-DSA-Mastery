let arr=[1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1];
let max=-Infinity;
for(let i=0; i<arr.length; i++)
{
    let arr2=[];
    for(let j=i; j<arr.length; j++)
    {
        arr2.push(arr[j]);
        // if(check(arr2) && max<arr2.length)
        // {
        //     // max=arr2.length;
        //     console.log(arr2);

        // }

    }
}
console.log(check([1,1,2]));

function check(arr)
{
    let count=0;
    for(let i=0; i<arr.length; i++)
    {
        if((arr[i]==arr[0]) && (arr[i]%2==1));
        {
            count++;
        }
    }
    if(count==arr.length)
    {
        return true;
    }
    return false;
}