/*

     *
    ***
   *****
  *******

*/
let n=100

for(let i=Math.floor(n/2),j=1; i>=0 && j<=n; i--,j=j+2)
{
    let space='',star='';
    for(let k=0; k<i; k++)
    {
        space+=' ';
    }

    for(let k=0; k<j; k++)
    {
        star+='*';
    }

    console.log(space+star)
}

for(let i=1,j=n-2; i<=Math.floor(n/2) && j>=0; i++,j=j-2)
{
    let space='',star='';
    for(let k=0; k<i; k++)
    {
        space+=' ';
    }

    for(let k=0; k<j; k++)
    {
        star+='*';
    }

    console.log(space+star)
}

