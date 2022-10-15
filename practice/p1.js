let arr=[1,3,5,7,9], arr2=[2,4,6,8,10]
let n=5,m=5;

let arr3=new Array(n+m);
let i=0,j=0,k=0;
while(i<n && j<m)
{
    if(arr[i]<arr2[j])
    {
        arr3[k]=arr[i];
        i++;
        k++;
    }
    else{
        arr3[k]=arr2[j];
        j++;
        k++;
    }
}
if(i<n)
{
    for(let x=i; x<n; x++)
    {
        arr3[k]=arr[x];
        k++;
    }
}
else if(j<m)
{
    for(let x=j; j<n; j++)
    {
        arr3[k]==arr2[x];
        k++;
    }
}
console.log(arr3)