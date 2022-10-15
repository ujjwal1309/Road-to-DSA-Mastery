// * -> 0
// - -> 1
// / -> 2
let str="*/-*/";
let obj={};
let symbol=["*","-","/"];
for(let i=0; i<str.length; i++)
{
    obj[symbol[i]]=i;
}
let ans="";
for(let i=0; i<str.length; i++)
{
   ans+=obj[str[i]];
}
console.log(ans);