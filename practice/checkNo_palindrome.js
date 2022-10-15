let num=1231;
let ans=0;
for(let i=num; i>0; i=Math.floor(i/10))
{
    let rem=i%10;
    ans=ans*10+rem;
}
console.log(ans);