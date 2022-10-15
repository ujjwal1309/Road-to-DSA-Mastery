let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
let r=4, c=4;
let k=10;
let rk,ck;
for(let i=0; i<r; i++)
{
    for(let j=0; j<c;  j++)
    {
        if(arr[i][j]==k)
        {
            rk=i;
            ck=j;
        }
    }
}
let d1="",d2="";

for(let i=0; i<r; i++)
{
    for(let j=0; j<c; j++)
    {
        if(i-j==rk-ck)
        {
            d1+=arr[i][j]+" ";
        }
        if(i+j==rk+ck)
        {
            d2+=arr[i][j]+" ";
        }
    }
}
console.log(d1+"\n"+d2)