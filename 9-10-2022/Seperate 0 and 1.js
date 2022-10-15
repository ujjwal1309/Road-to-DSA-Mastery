let arr=[1,1,0,0,0,1,1,0,0,1,0,0,0];
let n=arr.length;

let i=0,j=n-1;
while(i<j)
{
    while(arr[i]==0 && i<j)
    {
        i++;
    }

    while(arr[j]==1 && i<j)
    {
        j--;
    }

    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

console.log(arr);