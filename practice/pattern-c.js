;let n=5
for(let  i=0; i<n; i++)
{
    let pattern="";
    for(let j=0; j<n; j++)
    {
        if(i==0 || i==n-1)
        {
            pattern+="*"+" ";
        }
        else if(j==0 || j==n-1)
        {
            pattern+="*"+" ";
        }
        else
        {
            pattern+="  ";
        }
    }
    console.log(pattern)
}
