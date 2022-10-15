let arr=[1,1,1,2,2,3,4,4,4]

let j=0,i=0

while(i<arr.length)
{
    if(arr[i]!=arr[i+1])
    {
        arr[j]=arr[i];
        j++;
    }
    i++
}

arr[j]=arr[arr.length-1]

for(let i=0; i<j; i++)
{
    console.log(arr[i])
}