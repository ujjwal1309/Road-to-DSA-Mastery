let arr=[-2, 0, 8, 4];

let smallest=Infinity,largest=-Infinity;

for(let i=0; i<arr.length; i++)
{
    if(arr[i]<smallest){
        smallest=arr[i];
    }

    if(arr[i]>largest)
    {
        largest=arr[i];
    }
}

console.log(smallest,largest);