let arr=[1,3,5,7,9];
let arr2=[2,4,6,8,10];
n=arr.length;
let arr3=new Array(n*2);

let i=0,j=0,k=0;

while(i<n && j<n && k<n*2)
{
    if(arr[i]<arr2[j])
    {
        arr3[k]=arr[i];
        i++;
        k++;
    }
    else
    {
        arr3[k]=arr2[j];
        j++;
        k++;
    }
}

if(i<n)
{
    for(let a=i; a<n; a++)
    {
        arr3[a]=arr[a];
        i++;
        k++;
    }
}
else if(j<n)
{
    for(let a=j; a<n; a++)
    {
        arr3[a]=arr2[a];
        i++;
        k++;
    }

}

console.log(arr3)