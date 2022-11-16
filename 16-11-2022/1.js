/*

     *
    ***
   *****
  *******

*/


for(let i=3,j=1; i>=0 && j<=7; i--,j=j+2)
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

for(let i=1,j=5; i<=3 && j>=0; i++,j=j-2)
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

